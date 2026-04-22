'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-[#F7F6F3] border border-[#E2DDD6] rounded-lg px-4 py-3 text-[#0A1628] text-sm placeholder-[#0A1628]/35 focus:outline-none focus:border-[#E8500A] focus:ring-1 focus:ring-[#E8500A] transition-colors";

  return (
    <section className="section bg-white" id="contact">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left info */}
          <div>
            <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
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
                  <a href="tel:+37065288897" className="text-[#E8500A] text-sm font-medium hover:underline">{t('phone_lt')}</a>
                </div>
              </div>

              {/* Spain */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center text-lg flex-shrink-0">🇪🇸</div>
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm mb-1">{locale === 'ru' ? 'Испания — Гандия' : 'Spain — Gandia'}</p>
                  <p className="text-[#0A1628]/50 text-sm mb-1">{t('office_es')}</p>
                  <a href="tel:+34641005590" className="text-[#E8500A] text-sm font-medium hover:underline">{t('phone_es')}</a>
                </div>
              </div>

              {/* Kazakhstan */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center text-lg flex-shrink-0">🇰🇿</div>
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm mb-1">{locale === 'ru' ? 'Казахстан' : 'Kazakhstan'}</p>
                  <a href="tel:+77775755748" className="text-[#E8500A] text-sm font-medium hover:underline">{t('phone_kz')}</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-lg flex items-center justify-center text-lg flex-shrink-0">✉️</div>
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm mb-1">Email</p>
                  <a href="mailto:info@terradstr.com" className="text-[#E8500A] text-sm font-medium hover:underline">info@terradstr.com</a>
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
                <div className="grid grid-cols-2 gap-4">
                  <input name="name" value={form.name} onChange={handleChange} required placeholder={t('name')} className={inputClass} />
                  <input name="company" value={form.company} onChange={handleChange} placeholder={t('company')} className={inputClass} />
                </div>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder={t('email')} className={inputClass} />
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={t('phone')} className={inputClass} />
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder={t('message')} className={`${inputClass} resize-none`} />

                {status === 'error' && (
                  <p className="text-red-500 text-sm">{t('error')}</p>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60">
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
