import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductsCatalog from '@/components/sections/ProductsCatalog';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsCatalog />
      </main>
      <Footer />
    </>
  );
}
