'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const otherLocale = locale === 'ru' ? 'en' : 'ru';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/products`, label: t('products') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/contacts`, label: t('contacts') },
  ];

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2DDD6]' : 'bg-transparent'
    )}>
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#E8500A] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className={clsx(
              'font-bold text-xl tracking-tight transition-colors',
              scrolled ? 'text-[#0A1628]' : 'text-white'
            )}>
              Terra<span className="text-[#E8500A]">tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-[#E8500A] whitespace-nowrap',
                  scrolled ? 'text-[#0A1628]' : 'text-white/90',
                  pathname === link.href && 'text-[#E8500A]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href={switchPath}
              className={clsx(
                'text-sm font-semibold px-3 py-1.5 rounded border transition-all',
                scrolled
                  ? 'border-[#E2DDD6] text-[#0A1628] hover:border-[#E8500A] hover:text-[#E8500A]'
                  : 'border-white/40 text-white hover:border-white'
              )}
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link href={`/${locale}/contacts`} className="btn-primary text-sm py-2.5 px-5">
              {t('request')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? (
              <span className={clsx('text-xl font-light', scrolled ? 'text-[#0A1628]' : 'text-white')}>✕</span>
            ) : (
              <div className="space-y-1.5">
                <span className={clsx('block w-6 h-0.5', scrolled ? 'bg-[#0A1628]' : 'bg-white')}></span>
                <span className={clsx('block w-6 h-0.5', scrolled ? 'bg-[#0A1628]' : 'bg-white')}></span>
                <span className={clsx('block w-4 h-0.5', scrolled ? 'bg-[#0A1628]' : 'bg-white')}></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[#E2DDD6] py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-[#0A1628] font-medium hover:text-[#E8500A] hover:bg-[#F7F6F3] rounded">
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3 flex items-center gap-3">
              <Link href={switchPath} className="text-sm font-semibold border border-[#E2DDD6] px-3 py-2 rounded">
                {otherLocale.toUpperCase()}
              </Link>
              <Link href={`/${locale}/contacts`} className="btn-primary text-sm py-2 px-4 flex-1 text-center justify-center">
                {t('request')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
