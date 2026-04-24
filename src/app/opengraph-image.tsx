import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Terratech — Поставка промышленного оборудования';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Orange accent line */}
        <div style={{ width: 80, height: 4, background: '#E8500A', marginBottom: 40 }} />

        {/* Logo text */}
        <div style={{ fontSize: 64, fontWeight: 800, color: 'white', marginBottom: 20, letterSpacing: -2 }}>
          TERRA<span style={{ color: '#E8500A' }}>TECH</span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.7)', marginBottom: 48, maxWidth: 700 }}>
          Поставка промышленного оборудования в Казахстан, Узбекистан, Азербайджан и СНГ
        </div>

        {/* Brands */}
        <div style={{ display: 'flex', gap: 24 }}>
          {['Rittal', 'Legrand', 'Phoenix Contact', 'ZPAS'].map(brand => (
            <div key={brand} style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 8,
              padding: '10px 20px',
              fontSize: 18,
              color: 'rgba(255,255,255,0.85)',
            }}>
              {brand}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: 'absolute', bottom: 60, right: 80, fontSize: 20, color: 'rgba(255,255,255,0.4)' }}>
          terradstr.com
        </div>
      </div>
    ),
    { ...size }
  );
}
