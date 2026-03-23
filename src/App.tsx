import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AppShowcase } from "./components/AppShowcase";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StoreLocatorPage } from "./components/StoreLocatorPage";
import { FinanceSuitePage } from "./components/FinanceSuitePage";
import { EasyWishlistPage } from "./components/EasyWishlistPage";
import { MetaTags } from "./components/MetaTags";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that section
      setTimeout(() => {
        const id = hash.replace('#', '');
        // Map hash to actual section ID
        const hashToIdMap: { [key: string]: string } = {
          'about': 'about',
          'ourapps': 'apps',
          'whyus': 'why-choose-us',
          'testimonials': 'testimonials',
          'contact': 'contact',
          'blog': 'blog',
          'support': 'support'
        };
        const sectionId = hashToIdMap[id] || id;
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <MetaTags />
      <Header currentPage="home" />
      <main>
        <Hero />
        <About />
        <AppShowcase />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store-finder" element={<StoreLocatorPage currentPage="store-locator" />} />
        <Route path="/gst-suite" element={<FinanceSuitePage currentPage="financesuite" />} />
        <Route path="/wishlister" element={<EasyWishlistPage currentPage="easy-wishlist" />} />
      </Routes>
    </Router>
  );
}