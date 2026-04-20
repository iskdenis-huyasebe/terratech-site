import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, message, locale } = body;

    // If Resend API key is configured, send email
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(RESEND_API_KEY);

      await resend.emails.send({
        from: 'Terratech Website <noreply@terradstr.com>',
        to: ['info@terradstr.com'],
        subject: `Новая заявка с сайта от ${name}${company ? ` (${company})` : ''}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
            <div style="background: #0A1628; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Новая заявка с сайта Terratech</h1>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 120px;">Имя</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${name}</td></tr>
              ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Компания</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${company}</td></tr>` : ''}
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #E8500A;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Телефон</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #E8500A;">${phone}</a></td></tr>` : ''}
              <tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Сообщение</td><td style="padding: 10px 0;">${message || '—'}</td></tr>
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 24px;">Язык формы: ${locale?.toUpperCase()}</p>
          </div>
        `,
      });
    } else {
      // Log to console in dev mode
      console.log('Contact form submission:', { name, company, email, phone, message, locale });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
