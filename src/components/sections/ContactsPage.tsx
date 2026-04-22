'use client';
import { useState } from 'react';
import { useLocale } from 'next-intl';

const offices = [
  {
    country: 'Литва',
    countryEn: 'Lithuania',
    city: 'Вильнюс',
    cityEn: 'Vilnius',
    address: 'Airiu 10C, 13282',
    phone: '+370 652 88897',
    phoneHref: '+37065288897',
    email: 'info@terradstr.com',
    flag: '🇱🇹',
    note: 'Главный офис · Европа',
    noteEn: 'Head office · Europe',
  },
  {
    country: 'Испания',
    countryEn: 'Spain',
    city: 'Гандия',
    cityEn: 'Gandia',
    address: 'Ermita 22, 5-10',
    phone: '+34 641 005 590',
    phoneHref: '+34641005590',
    email: 'info@terradstr.com',
    flag: '🇪🇸',
    note: 'Представительство',
    noteEn: 'Representative office',
  },
  {
    country: 'Казахстан',
    countryEn: 'Kazakhstan',
    city: 'Алматы',
    cityEn: 'Almaty',
    address: 'Офис по запросу',
    addressEn: 'Address on request',
    phone: '+7 777 575 5748',
    phoneHref: '+77775755748',
    email: 'info@terradstr.com',
    flag: '🇰🇿',
    note: 'Поставки в Центральную Азию',
    noteEn: 'Central Asia deliveries',
  },
];

export default function ContactsPage() {
  const locale = useLocale();
  const isRu = locale === 'ru';
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [honeypot, setHoneypot] = useState(''); // bot trap

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check — bots fill hidden fields, humans don't
    if (honeypot) return;
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

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0A1628] pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8500A] opacity-[0.05] rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-4">
            {isRu ? 'Свяжитесь с нами' : 'Get in Touch'}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6 max-w-2xl">
            {isRu ? 'Обсудим ваш проект' : 'Let\'s discuss your project'}
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            {isRu
              ? 'Оставьте заявку или свяжитесь напрямую — ответим в течение 2 часов в рабочее время. Подготовим КП с техническими характеристиками и сроками.'
              : 'Submit a request or contact us directly — we respond within 2 hours during business hours. We\'ll prepare a proposal with technical specifications and delivery timelines.'}
          </p>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="section bg-[#F7F6F3]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ── FORM ── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[#E2DDD6] p-5 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl text-[#0A1628] mb-2">
                  {isRu ? 'Запросить КП' : 'Request Quote'}
                </h2>
                <p className="text-[#0A1628]/50 text-sm mb-8">
                  {isRu
                    ? 'Опишите задачу — подберём оборудование и подготовим предложение'
                    : 'Describe your needs — we\'ll select equipment and prepare a proposal'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — hidden from humans, bots fill it */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={e => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628]/60 mb-2">
                        {isRu ? 'Имя' : 'Name'} *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] bg-[#F7F6F3] text-[#0A1628] text-sm focus:outline-none focus:border-[#E8500A] focus:bg-white transition-all"
                        placeholder={isRu ? 'Иван Петров' : 'John Smith'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628]/60 mb-2">
                        {isRu ? 'Компания' : 'Company'}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] bg-[#F7F6F3] text-[#0A1628] text-sm focus:outline-none focus:border-[#E8500A] focus:bg-white transition-all"
                        placeholder={isRu ? 'ООО "Инженерные решения"' : 'Your Company Ltd.'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628]/60 mb-2">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] bg-[#F7F6F3] text-[#0A1628] text-sm focus:outline-none focus:border-[#E8500A] focus:bg-white transition-all"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628]/60 mb-2">
                        {isRu ? 'Телефон' : 'Phone'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] bg-[#F7F6F3] text-[#0A1628] text-sm focus:outline-none focus:border-[#E8500A] focus:bg-white transition-all"
                        placeholder="+7 777 123 45 67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628]/60 mb-2">
                      {isRu ? 'Задача или перечень оборудования' : 'Request Details'} *
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] bg-[#F7F6F3] text-[#0A1628] text-sm focus:outline-none focus:border-[#E8500A] focus:bg-white transition-all resize-none"
                      placeholder={isRu
                        ? 'Например: шкафы Rittal VX25 800×600×2000 — 12 штук, доставка в Алматы, срок до 15 июня...'
                        : 'For example: Rittal VX25 800×600×2000 cabinets — 12 units, delivery to Almaty, due June 15...'}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending'
                        ? (isRu ? 'Отправляем...' : 'Sending...')
                        : (isRu ? 'Отправить заявку' : 'Send Request')}
                      {status !== 'sending' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
                    </button>
                    <p className="text-[#0A1628]/40 text-xs">
                      {isRu
                        ? 'Отправляя заявку, вы соглашаетесь с обработкой персональных данных'
                        : 'By submitting, you agree to the processing of personal data'}
                    </p>
                  </div>

                  {status === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                      <p className="text-green-800 text-sm font-medium">
                        ✓ {isRu
                          ? 'Заявка отправлена! Свяжемся в течение 2 часов в рабочее время.'
                          : 'Request sent! We\'ll contact you within 2 hours during business hours.'}
                      </p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-red-800 text-sm">
                        {isRu
                          ? 'Ошибка отправки. Напишите напрямую на '
                          : 'Submission error. Please email us directly at '}
                        <a href="mailto:info@terradstr.com" className="font-semibold underline">info@terradstr.com</a>
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-5">
              {/* Quick contact */}
              <div className="bg-[#0A1628] rounded-2xl p-7 text-white">
                <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
                  {isRu ? 'Быстрый контакт' : 'Quick Contact'}
                </p>
                <h3 className="font-display text-xl mb-5">
                  {isRu ? 'Напишите или позвоните' : 'Email or Call'}
                </h3>

                <div className="space-y-3">
                  <a href="mailto:info@terradstr.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group">
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#E8500A]/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    info@terradstr.com
                  </a>
                  <a href="tel:+37065288897" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group">
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#E8500A]/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    +370 652 88897
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-white rounded-2xl border border-[#E2DDD6] p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0A1628]/60">
                    {isRu ? 'Мы в сети' : 'Online now'}
                  </p>
                </div>
                <h3 className="font-display text-lg text-[#0A1628] mb-2">
                  {isRu ? 'Ответ — в течение 2 часов' : 'Reply within 2 hours'}
                </h3>
                <p className="text-[#0A1628]/50 text-sm leading-relaxed">
                  {isRu
                    ? 'Пн–Пт 9:00–18:00 (CET). Заявки, поступившие в выходные, обрабатываются в понедельник утром.'
                    : 'Mon–Fri 9:00–18:00 (CET). Weekend requests are processed Monday morning.'}
                </p>
              </div>

              {/* What we need */}
              <div className="bg-white rounded-2xl border border-[#E2DDD6] p-7">
                <h3 className="font-display text-lg text-[#0A1628] mb-4">
                  {isRu ? 'Что нужно для КП' : 'For a quote we need'}
                </h3>
                <ul className="space-y-3 text-sm text-[#0A1628]/70">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#E8500A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {isRu ? 'Перечень оборудования или ТЗ' : 'Equipment list or specifications'}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#E8500A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {isRu ? 'Место и срок поставки' : 'Delivery location and deadline'}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#E8500A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {isRu ? 'Контакты для связи' : 'Contact details'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Offices ── */}
      <section className="section bg-white border-t border-[#E2DDD6]">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
                {isRu ? 'География' : 'Locations'}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-[#0A1628]">
                {isRu ? 'Наши офисы' : 'Our Offices'}
              </h2>
            </div>
            <p className="text-[#0A1628]/55 text-base max-w-sm leading-relaxed">
              {isRu
                ? 'Три представительства для работы с Европой и странами СНГ'
                : 'Three locations serving Europe and CIS countries'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <div key={i} className="bg-[#F7F6F3] rounded-2xl p-7 border border-[#E2DDD6] hover:border-[#E8500A]/40 transition-all">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl leading-none">{office.flag}</span>
                  <span className="text-xs font-semibold text-[#E8500A] bg-[#E8500A]/10 px-3 py-1 rounded-full">
                    {isRu ? office.note : office.noteEn}
                  </span>
                </div>
                <h3 className="font-display text-xl text-[#0A1628] mb-1">
                  {isRu ? office.country : office.countryEn}
                </h3>
                <p className="text-[#0A1628]/50 text-sm mb-5">
                  {isRu ? office.city : office.cityEn}
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#0A1628]/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[#0A1628]/70">
                      {isRu ? office.address : (office.addressEn || office.address)}
                    </span>
                  </div>
                  <a href={`tel:${office.phoneHref}`} className="flex items-center gap-3 text-[#0A1628] hover:text-[#E8500A] transition-colors font-medium">
                    <svg className="w-4 h-4 text-[#0A1628]/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
