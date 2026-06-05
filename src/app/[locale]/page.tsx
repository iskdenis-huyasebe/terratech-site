import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BrandsMarquee from '@/components/sections/BrandsMarquee';
import ProductsSection from '@/components/sections/ProductsSection';
import BrandsCarousel from '@/components/sections/BrandsCarousel';
import WhySection from '@/components/sections/WhySection';
import GeographySection from '@/components/sections/GeographySection';
import ContactForm from '@/components/sections/ContactForm';
import Reveal from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandsMarquee />
        <ProductsSection />
        <Reveal><BrandsCarousel /></Reveal>
        <Reveal><WhySection /></Reveal>
        <Reveal><GeographySection /></Reveal>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
