import { NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxRequests = 5;
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isSpam(text: string): boolean {
  const spamPatterns = [/\bviagra\b/i, /\bcasino\b/i];
  return spamPatterns.some(p => p.test(text));
}

export async function POST(req: Request) {
  try {
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

    const name         = sanitize(body.name, 100);
    const company      = sanitize(body.company, 150);
    const email        = sanitize(body.email, 254);
    const phone        = sanitize(body.phone, 30);
    const message      = sanitize(body.message, 2000);
    const locale       = sanitize(body.locale, 5);
    const utmSource    = sanitize(body.utm_source, 100);
    const utmMedium    = sanitize(body.utm_medium, 100);
    const utmCampaign  = sanitize(body.utm_campaign, 100);
    const referrer     = sanitize(body.referrer, 300);
    const page         = sanitize(body.page, 200);

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Invalid name' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }
    if (!message || message.length < 2) {
      return NextResponse.json({ ok: false, error: 'Message too short' }, { status: 400 });
    }

    if (isSpam(name) || isSpam(message) || isSpam(company)) {
      return NextResponse.json({ ok: true });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(RESEND_API_KEY);

      const esc = (s: string) => s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

      const utmRows = [
        utmSource   ? `<tr><td style="padding:6px 0;color:#999;width:120px;">UTM Source</td><td style="padding:6px 0;">${esc(utmSource)}</td></tr>` : '',
        utmMedium   ? `<tr><td style="padding:6px 0;color:#999;">UTM Medium</td><td style="padding:6px 0;">${esc(utmMedium)}</td></tr>` : '',
        utmCampaign ? `<tr><td style="padding:6px 0;color:#999;">UTM Campaign</td><td style="padding:6px 0;">${esc(utmCampaign)}</td></tr>` : '',
        referrer    ? `<tr><td style="padding:6px 0;color:#999;">Referrer</td><td style="padding:6px 0;">${esc(referrer)}</td></tr>` : '',
        page        ? `<tr><td style="padding:6px 0;color:#999;">Страница</td><td style="padding:6px 0;">${esc(page)}</td></tr>` : '',
      ].join('');

      // 1. Notify Denis
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
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${esc(email)}" style="color: #3E72C7;">${esc(email)}</a></td></tr>
              ${phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Телефон</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${esc(phone)}</td></tr>` : ''}
              <tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Сообщение</td><td style="padding: 10px 0; white-space: pre-wrap;">${esc(message)}</td></tr>
            </table>
            ${utmRows ? `
            <div style="margin-top: 24px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
              <p style="font-size: 11px; color: #999; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Источник</p>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px;">${utmRows}</table>
            </div>` : ''}
            <p style="color: #999; font-size: 12px; margin-top: 24px;">IP: ${esc(ip)} · Язык: ${esc(locale?.toUpperCase())}</p>
          </div>
        `,
      });

      // 2. Auto-reply to client
      const isRu = locale === 'ru';
      await resend.emails.send({
        from: 'Terratech <noreply@terradstr.com>',
        to: [email],
        subject: isRu ? 'Мы получили вашу заявку — Terratech' : 'We received your request — Terratech',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
            <div style="background: #0A1628; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Terratech</h1>
            </div>
            <p style="font-size: 16px; color: #0A1628;">
              ${isRu ? `Здравствуйте, ${esc(name)}!` : `Hello, ${esc(name)}!`}
            </p>
            <p style="color: #444; line-height: 1.6;">
              ${isRu
                ? 'Спасибо за вашу заявку. Мы её получили и ответим в течение <strong>2 часов</strong> в рабочее время (пн–пт, 9:00–18:00 по Алматы).'
                : 'Thank you for your request. We have received it and will get back to you within <strong>2 hours</strong> during business hours (Mon–Fri, 9:00–18:00 Almaty time).'
              }
            </p>
            <p style="color: #444; line-height: 1.6;">
              ${isRu
                ? 'Если вопрос срочный — напишите нам напрямую в WhatsApp или Telegram: <a href="https://wa.me/77775755748" style="color: #3E72C7;">+7 777 575 5748</a>'
                : 'For urgent matters, contact us directly via WhatsApp or Telegram: <a href="https://wa.me/77775755748" style="color: #3E72C7;">+7 777 575 5748</a>'
              }
            </p>
            <p style="color: #999; font-size: 13px; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">
              Terratech · <a href="https://terradstr.com" style="color: #3E72C7;">terradstr.com</a>
            </p>
          </div>
        `,
      });
    } else {
      console.log('Contact form submission:', { name, company, email, phone, message: message.slice(0, 100) });
    }

    // 3. Telegram notification
    const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TG_CHAT  = process.env.TELEGRAM_CHAT_ID;
    if (TG_TOKEN && TG_CHAT) {
      const utmLine = [
        utmSource && `utm_source: ${utmSource}`,
        utmMedium && `utm_medium: ${utmMedium}`,
        utmCampaign && `utm_campaign: ${utmCampaign}`,
        page && `page: ${page}`,
      ].filter(Boolean).join(', ');

      const text = [
        '🔔 Новая заявка с сайта Terratech',
        `Имя: ${name}`,
        company ? `Компания: ${company}` : null,
        `Email: ${email}`,
        phone ? `Тел: ${phone}` : null,
        `Сообщение: ${message.slice(0, 500)}`,
        utmLine ? `\n📊 ${utmLine}` : null,
      ].filter(Boolean).join('\n');

      await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT, text }),
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
