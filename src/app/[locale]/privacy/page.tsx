import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Privacy Policy',
  robots: { index: false },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRu = locale === 'ru';

  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', fontFamily: 'sans-serif', color: '#0A1628', lineHeight: '1.7' }}>
        {isRu ? (
          <>
            <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Политика конфиденциальности</h1>
            <p style={{ color: '#666', marginBottom: '40px' }}>Последнее обновление: июнь 2025 г.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>1. Кто мы</h2>
            <p>Terratech Distribution — компания, осуществляющая поставку профессионального IT-оборудования и промышленной автоматизации. Юридические лица: Terratech UAB (Литва), Terratech S.L. (Испания), Terratech Distribution LLP (Казахстан). Контактный email: <a href="mailto:dkislenko@terradstr.com" style={{ color: '#E8500A' }}>dkislenko@terradstr.com</a>.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>2. Какие данные мы собираем</h2>
            <p>Через контактную форму на сайте terradstr.com мы получаем: имя, название компании, адрес электронной почты, номер телефона (по желанию) и текст сообщения. Дополнительно фиксируется IP-адрес отправителя для защиты от спама.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>3. Цель обработки</h2>
            <p>Данные используются исключительно для ответа на ваш запрос и последующей деловой переписки. Мы не продаём, не передаём и не сдаём в аренду ваши данные третьим лицам в маркетинговых целях.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>4. Правовое основание (GDPR)</h2>
            <p>Обработка данных осуществляется на основании вашего явного согласия (ст. 6(1)(a) GDPR), которое вы даёте, отмечая чекбокс при отправке формы. Согласие можно отозвать в любой момент, направив письмо на <a href="mailto:dkislenko@terradstr.com" style={{ color: '#E8500A' }}>dkislenko@terradstr.com</a>.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>5. Хранение данных</h2>
            <p>Данные хранятся на защищённых серверах сервисов Resend (доставка email) и Vercel (хостинг). Мы храним переписку не более 3 лет, если более длительное хранение не требуется для исполнения договора.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>6. Ваши права</h2>
            <p>В соответствии с GDPR вы вправе: запросить доступ к своим данным, потребовать их исправления или удаления, ограничить обработку, подать жалобу в надзорный орган. Для реализации прав обращайтесь на <a href="mailto:dkislenko@terradstr.com" style={{ color: '#E8500A' }}>dkislenko@terradstr.com</a>.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>7. Файлы cookie</h2>
            <p>Сайт использует только технически необходимые cookie. Аналитические cookie подключаются только при наличии соответствующих сервисов и с уведомлением пользователя.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>8. Изменения политики</h2>
            <p>Мы вправе обновлять настоящую политику. Актуальная версия всегда доступна по адресу terradstr.com/ru/privacy.</p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Privacy Policy</h1>
            <p style={{ color: '#666', marginBottom: '40px' }}>Last updated: June 2025</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>1. Who we are</h2>
            <p>Terratech Distribution supplies professional IT infrastructure and industrial automation equipment. Legal entities: Terratech UAB (Lithuania), Terratech S.L. (Spain), Terratech Distribution LLP (Kazakhstan). Contact email: <a href="mailto:dkislenko@terradstr.com" style={{ color: '#E8500A' }}>dkislenko@terradstr.com</a>.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>2. Data we collect</h2>
            <p>Through the contact form on terradstr.com we collect: name, company name, email address, phone number (optional), and message text. We also log the sender's IP address for anti-spam purposes.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>3. Purpose of processing</h2>
            <p>Data is used solely to respond to your enquiry and for subsequent business correspondence. We do not sell, share or rent your personal data to third parties for marketing purposes.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>4. Legal basis (GDPR)</h2>
            <p>Processing is based on your explicit consent (Art. 6(1)(a) GDPR) given by checking the consent box on the contact form. You may withdraw consent at any time by emailing <a href="mailto:dkislenko@terradstr.com" style={{ color: '#E8500A' }}>dkislenko@terradstr.com</a>.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>5. Data retention</h2>
            <p>Data is stored on secured servers of Resend (email delivery) and Vercel (hosting). We retain correspondence for no more than 3 years unless a longer period is required to fulfil a contract.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>6. Your rights</h2>
            <p>Under GDPR you have the right to access, rectify, or erase your data, restrict processing, and lodge a complaint with a supervisory authority. To exercise your rights, contact us at <a href="mailto:dkislenko@terradstr.com" style={{ color: '#E8500A' }}>dkislenko@terradstr.com</a>.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>7. Cookies</h2>
            <p>This website uses only strictly necessary cookies. Analytics cookies are loaded only when the relevant services are enabled and users are informed accordingly.</p>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>8. Changes to this policy</h2>
            <p>We may update this policy from time to time. The current version is always available at terradstr.com/en/privacy.</p>
          </>
        )}
      </div>
    </main>
  );
}
