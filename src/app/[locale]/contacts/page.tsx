import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactsPage from '@/components/sections/ContactsPage';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ContactsPage />
      </main>
      <Footer />
    </>
  );
}
