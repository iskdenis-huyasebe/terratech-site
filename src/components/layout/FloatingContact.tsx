'use client';

export default function FloatingContact() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'flex-end',
    }}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/77775755748"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          transition: 'transform 0.2s, opacity 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.55 4.1 1.508 5.83L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.388l-.36-.214-3.733.873.936-3.629-.235-.372A9.799 9.799 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/>
        </svg>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/+77775755748"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#2AABEE',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          transition: 'transform 0.2s, opacity 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
        </svg>
      </a>
    </div>
  );
}
