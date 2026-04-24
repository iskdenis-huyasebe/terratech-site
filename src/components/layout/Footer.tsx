import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8500A] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-xl">Terra<span className="text-[#E8500A]">tech</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:dkislenko@terradstr.com" className="text-[#E8500A] hover:text-[#FF6B2B] text-sm font-medium transition-colors">
                dkislenko@terradstr.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              {locale === 'ru' ? 'Навигация' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {[
                { href: `/${locale}`, label: t('nav.home') },
                { href: `/${locale}/products`, label: t('nav.products') },
                { href: `/${locale}/projects`, label: t('nav.projects') },
                { href: `/${locale}/contacts`, label: t('nav.contacts') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              {t('contact.offices')}
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <div>
                <p className="text-white/40 text-xs mb-1">{locale === 'ru' ? 'Литва' : 'Lithuania'}</p>
                <p>Airiu 10C, Vilnius</p>
                <a href="tel:+37065288897" className="hover:text-white transition-colors">{t('contact.phone_lt')}</a>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">{locale === 'ru' ? 'Испания' : 'Spain'}</p>
                <p>Ermita 22, Gandia</p>
                <a href="tel:+34641005590" className="hover:text-white transition-colors">{t('contact.phone_es')}</a>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">{locale === 'ru' ? 'Казахстан' : 'Kazakhstan'}</p>
                <a href="tel:+77775755748" className="hover:text-white transition-colors">{t('contact.phone_kz')}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Terratech. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Rittal · Legrand · Phoenix Contact · ZPAS · Weiss · Hitec</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
