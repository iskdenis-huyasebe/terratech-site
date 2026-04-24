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
              <span className="flex items-center gap-1.5 mt-1"><a href="https://wa.me/37065288897" target="_blank" rel="noopener" title="WhatsApp" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.55 4.1 1.508 5.83L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.388l-.36-.214-3.733.873.936-3.629-.235-.372A9.799 9.799 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/></svg>
            </a><a href="https://t.me/+37065288897" target="_blank" rel="noopener" title="Telegram" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2AABEE] hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
            </a></span>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">{locale === 'ru' ? 'Испания' : 'Spain'}</p>
                <p>Ermita 22, Gandia</p>
                <a href="tel:+34641005590" className="hover:text-white transition-colors">{t('contact.phone_es')}</a>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">{locale === 'ru' ? 'Казахстан' : 'Kazakhstan'}</p>
                <a href="tel:+77775755748" className="hover:text-white transition-colors">{t('contact.phone_kz')}</a>
              <span className="flex items-center gap-1.5 mt-1"><a href="https://wa.me/77775755748" target="_blank" rel="noopener" title="WhatsApp" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.55 4.1 1.508 5.83L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.388l-.36-.214-3.733.873.936-3.629-.235-.372A9.799 9.799 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/></svg>
            </a><a href="https://t.me/+77775755748" target="_blank" rel="noopener" title="Telegram" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2AABEE] hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
            </a></span>
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
