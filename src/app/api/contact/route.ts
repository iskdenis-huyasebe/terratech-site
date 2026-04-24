import { NextResponse } from 'next/server';

// Simple in-memory rate limiter (per IP, resets on server restart)
// For production Vercel consider using @vercel/kv or upstash/ratelimit
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour window
  const maxRequests = 5; // max 5 submissions per hour per IP

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

// Sanitize string — strip HTML tags and limit length
function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[<>]/g, '') // strip < > to prevent HTML injection
    .replace(/javascript:/gi, '') // block js: URIs
    .trim()
    .slice(0, maxLength);
}

// Validate email format
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

// Basic spam keyword check
function isSpam(text: string): boolean {
  const spamPatterns = [/\bviagra\b/i, /\bcasino\b/i];
  return spamPatterns.some(p => p.test(text));
}

export async function POST(req: Request) {
  try {
    // Rate limiting by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || req.headers.get('x-real-ip')
      || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    console.log('Contact form body:', JSON.stringify(body));

    // Sanitize all inputs
    const name    = sanitize(body.name, 100);
    const company = sanitize(body.company, 150);
    const email   = sanitize(body.email, 254);
    const phone   = sanitize(body.phone, 30);
    const message = sanitize(body.message, 2000);
    const locale  = sanitize(body.locale, 5);

    // Server-side validation
    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Invalid name' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }
    if (!message || message.length < 5) {
      return NextResponse.json({ ok: false, error: 'Message too short' }, { status: 400 });
    }

    // Basic spam check
    if (isSpam(name) || isSpam(message) || isSpam(company)) {
      // Silently accept but don't send — confuses bots
      return NextResponse.json({ ok: true });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(RESEND_API_KEY);

      // Safe HTML escaping for email template
      const esc = (s: string) => s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

      await resend.emails.send({
        from: 'Terratech <noreply@terradstr.com>',
        to: ['dkislenko@terradstr.com'],
        replyTo: email,
        subject: `Новая заявка с сайта от ${esc(name)}${company ? ` (${esc(company)})` : ''}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
            <div style="background: #0A1628; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Новая заявка с сайта Terratech</h1>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 120px;">Имя</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${esc(name)}</td></tr>
              ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Компания</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${esc(company)}</td></tr>` : ''}
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${esc(email)}" style="color: #E8500A;">${esc(email)}</a></td></tr>
              ${phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Телефон</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${esc(phone)}</td></tr>` : ''}
              <tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Сообщение</td><td style="padding: 10px 0; white-space: pre-wrap;">${esc(message)}</td></tr>
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 24px;">IP: ${esc(ip)} · Язык формы: ${esc(locale?.toUpperCase())}</p>
          </div>
        `,
      });
    } else {
      console.log('Contact form submission:', { name, company, email, phone, message: message.slice(0, 100) });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
