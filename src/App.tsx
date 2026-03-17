import { useMemo } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FadeInSection } from './components/FadeInSection';
import { MakerSection } from './components/MakerSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { WeatherfordWoodworkingPage } from './pages/WeatherfordWoodworkingPage';
import { galleryImages } from './data/galleryImages';
import { featuredProducts } from './data/products';
import { values } from './data/values';
import coverPhoto from './assets/logos/frontline-crafted-cover-photo.jpg';
import { ConfiguratorPage } from './pages/ConfiguratorPage.tsx';

const navItems = [
  { label: 'About / Values', href: '#about' },
  { label: 'The Maker', href: '#maker' },
  { label: 'Pieces', href: '#pieces' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Configurator', href: '/configurator' },
  { label: 'Contact', href: '#contact' },
];

const HomePage = () => {
  return (
    <>
      <HeroSection
        title="Handcrafted furniture built to last."
        description="Frontline Crafted creates handcrafted furniture and outdoor pieces with a focus on durable materials, clean design, and honest craftsmanship. Based in Weatherford, Texas, we build cedar planters, patio furniture, and custom woodworking projects for homeowners across Parker County and the surrounding area."
        image={coverPhoto}
      />

      <FadeInSection>
        <AboutSection
          description="Frontline Crafted is a veteran-owned woodworking business focused on furniture and outdoor pieces that combine rugged durability with clean, timeless design. Every build is made with pride, attention to detail, and a commitment to quality that stands apart from mass-produced furniture."
          values={values}
        />
      </FadeInSection>

      <FadeInSection delay={0.05}>
        <MakerSection />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <ProductsSection products={featuredProducts} />
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <GallerySection images={galleryImages} />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <ContactSection />
      </FadeInSection>
    </>
  );
};

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Header navItems={navItems} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/configurator" element={<ConfiguratorPage />} />
        <Route path="/weatherford-tx-custom-woodworking" element={<WeatherfordWoodworkingPage />} />
      </Routes>

      <Footer year={year} />
    </Box>
  );
}

export default App;
