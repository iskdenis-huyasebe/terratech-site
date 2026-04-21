import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectsPage from '@/components/sections/ProjectsPage';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ProjectsPage />
      </main>
      <Footer />
    </>
  );
}
