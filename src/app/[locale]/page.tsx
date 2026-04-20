import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import BrandsCarousel from '@/components/sections/BrandsCarousel';
import WhySection from '@/components/sections/WhySection';
import GeographySection from '@/components/sections/GeographySection';
import ContactForm from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <BrandsCarousel />
        <WhySection />
        <GeographySection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
