import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import MenuSection from '@/components/MenuSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <MenuSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
