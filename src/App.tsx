import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FAQSection } from './components/FAQSection';
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
import coverPhoto from './assets/products/the-hollis/the-hollis-01.jpeg';
import hollisVideo from './assets/products/the-hollis/the-hollis-smooth.mp4';
import { CustomBuildSection } from './components/CustomBuildSection.tsx';

const navItems = [
  { label: 'Collection', href: '#pieces' },
  { label: 'Custom Builds', href: '#custom' },
  { label: 'Our Story', href: '#maker' },
  { label: 'Contact', href: '#contact' },
];

const HomePage = () => {
  const [inquiry, setInquiry] = useState({ product: '', revision: 0 });
  return (
    <Box component="main" id="main-content">
      <Helmet>
        <title>Frontline Crafted | Handcrafted Furniture in Parker County, TX</title>
        <meta
          name="description"
          content="Explore made-to-order dining tables, chairs, dressers, desks, and storage furniture. Veteran-owned custom furniture in Parker County, Texas."
        />
        <link rel="canonical" href="https://frontlinecrafted.com/" />
        <meta property="og:url" content="https://frontlinecrafted.com/" />
        <meta
          property="og:title"
          content="Frontline Crafted | Handcrafted Furniture in Parker County, TX"
        />
        <meta
          property="og:description"
          content="Explore made-to-order dining tables, chairs, dressers, desks, and storage furniture. Veteran-owned custom furniture in Parker County, Texas."
        />
        <meta
          name="twitter:title"
          content="Frontline Crafted | Handcrafted Furniture in Parker County, TX"
        />
        <meta
          name="twitter:description"
          content="Explore made-to-order dining tables, chairs, dressers, desks, and storage furniture. Veteran-owned custom furniture in Parker County, Texas."
        />
      </Helmet>
      <HeroSection
        title="Furniture with purpose. Made for you."
        description="Handcrafted furniture for your space, your style, and your budget. Explore the collection or bring me an idea—we can plan a piece together, choosing the size, materials, and details to fit what you want to spend."
        image={coverPhoto}
        video={hollisVideo}
        featuredName="The Hollis"
        featuredType="Custom lounge chair"
      />

      <FadeInSection>
        <ProductsSection
          products={featuredProducts}
          onInquire={(product) =>
            setInquiry((previous) => ({ product, revision: previous.revision + 1 }))
          }
        />
      </FadeInSection>
      <FadeInSection>
        <CustomBuildSection />
      </FadeInSection>
      <FadeInSection>
        <MakerSection />
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <GallerySection images={galleryImages} />
      </FadeInSection>

      <FAQSection />

      <FadeInSection delay={0.2}>
        <ContactSection inquiryProduct={inquiry.product} inquiryRevision={inquiry.revision} />
      </FadeInSection>
    </Box>
  );
};

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Header navItems={navItems} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/configurator" element={<Navigate to="/#contact" replace />} />
        <Route path="/weatherford-tx-custom-woodworking" element={<WeatherfordWoodworkingPage />} />
      </Routes>

      <Footer year={year} />
    </Box>
  );
}

export default App;
