'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => {
    const val = params.get(key);
    if (val) result[key] = val;
  });
  if (document.referrer) result['referrer'] = document.referrer;
  result['page'] = window.location.pathname;
  return result;
}

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [consent, setConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    if (!consent) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale, ...getUtmParams() }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', company: '', email: '', phone: '', message: '' });
        setConsent(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-[#F7F6F3] border border-[#E2DDD6] rounded-lg px-4 py-3 text-[#0A1628] text-sm placeholder-[#0A1628]/35 focus:outline-none focus:border-[#3E72C7] focus:ring-1 focus:ring-[#3E72C7] transition-colors";
  const labelClass = "block text-xs font-medium text-[#0A1628]/60 mb-1";

  return (
    <section className="section bg-white" id="contact">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left info */}
          <div>
            <p className="text-[#3E72C7] text-xs font-semibold uppercase tracking-widest mb-3">
              {locale === 'ru' ? 'Связаться с нами' : 'Contact Us'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0A1628] mb-4">
              {t('title')}
            </h2>
            <p className="text-[#0A1628]/55 text-base leading-relaxed mb-10">
              {t('subtitle')}
            </p>

            <div className="space-y-8">
              {/* Lithuania */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center text-lg flex-shrink-0">🇱🇹</div>
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm mb-1">{locale === 'ru' ? 'Литва — Вильнюс' : 'Lithuania — Vilnius'}</p>
                  <p className="text-[#0A1628]/50 text-sm mb-1">{t('office_lt')}</p>
                  <a href="tel:+37065288897" className="text-[#3E72C7] text-sm font-medium hover:underline">{t('phone_lt')}</a>
              <span className="flex items-center gap-1.5 mt-1"><a href="https://wa.me/37065288897" target="_blank" rel="noopener" title="WhatsApp" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.55 4.1 1.508 5.83L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.388l-.36-.214-3.733.873.936-3.629-.235-.372A9.799 9.799 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/></svg>
            </a><a href="https://t.me/+37065288897" target="_blank" rel="noopener" title="Telegram" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2AABEE] hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
            </a></span>
                </div>
              </div>

              {/* Spain */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center text-lg flex-shrink-0">🇪🇸</div>
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm mb-1">{locale === 'ru' ? 'Испания — Гандия' : 'Spain — Gandia'}</p>
                  <p className="text-[#0A1628]/50 text-sm mb-1">{t('office_es')}</p>
                  <a href="tel:+34641005590" className="text-[#3E72C7] text-sm font-medium hover:underline">{t('phone_es')}</a>
                </div>
              </div>

              {/* Kazakhstan */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center text-lg flex-shrink-0">🇰🇿</div>
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm mb-1">{locale === 'ru' ? 'Казахстан' : 'Kazakhstan'}</p>
                  <p className="text-xs text-[#0A1628]/50 mb-1">{locale === 'ru' ? 'ул. Алимжанова 38, Алматы' : '38 Alimzhanova str, Almaty'}</p>
                  <a href="tel:+37065288897" className="text-[#3E72C7] text-sm font-medium hover:underline">{t('phone_kz')}</a>
              <span className="flex items-center gap-1.5 mt-1"><a href="https://wa.me/37065288897" target="_blank" rel="noopener" title="WhatsApp" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.55 4.1 1.508 5.83L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.388l-.36-.214-3.733.873.936-3.629-.235-.372A9.799 9.799 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/></svg>
            </a><a href="https://t.me/+37065288897" target="_blank" rel="noopener" title="Telegram" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2AABEE] hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
            </a></span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center text-lg flex-shrink-0">✉️</div>
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm mb-1">Email</p>
                  <a href="mailto:dkislenko@terradstr.com" className="text-[#3E72C7] text-sm font-medium hover:underline">dkislenko@terradstr.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F7F6F3] rounded-2xl p-5 md:p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-semibold text-[#0A1628] text-lg mb-2">{t('success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                  <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      {locale === 'ru' ? 'Имя' : 'Name'} <span className="text-[#3E72C7]">*</span>
                    </label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder={t('name')} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      {locale === 'ru' ? 'Компания' : 'Company'}
                    </label>
                    <input id="company" name="company" value={form.company} onChange={handleChange} placeholder={t('company')} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-[#3E72C7]">*</span>
                  </label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder={t('email')} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    {locale === 'ru' ? 'Телефон' : 'Phone'}
                  </label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+7 777 000 0000" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    {locale === 'ru' ? 'Сообщение' : 'Message'}
                  </label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder={t('message')} className={`${inputClass} resize-none`} />
                </div>

                {/* Consent checkbox (GDPR) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    required
                    style={{ marginTop: '2px', accentColor: '#3E72C7', width: '16px', height: '16px', flexShrink: 0, cursor: 'pointer' }}
                  />
                  <label htmlFor="consent" style={{ fontSize: '12px', color: 'rgba(10,22,40,0.55)', lineHeight: '1.5', cursor: 'pointer' }}>
                    {locale === 'ru' ? (
                      <>
                        Нажимая «Отправить», вы соглашаетесь с{' '}
                        <Link href={`/${locale}/privacy`} style={{ color: '#3E72C7', textDecoration: 'underline' }}>
                          политикой обработки персональных данных
                        </Link>
                      </>
                    ) : (
                      <>
                        By clicking Submit, you agree to our{' '}
                        <Link href={`/${locale}/privacy`} style={{ color: '#3E72C7', textDecoration: 'underline' }}>
                          privacy policy
                        </Link>
                      </>
                    )}
                  </label>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">{t('error')}</p>
                )}

                <button type="submit" disabled={status === 'sending' || !consent} className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60">
                  {status === 'sending' ? t('sending') : t('submit')}
                  {status !== 'sending' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
