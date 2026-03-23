import image_b64b929adc6f76a7ee6a419b912123a8f5bf0b03 from 'figma:asset/b64b929adc6f76a7ee6a419b912123a8f5bf0b03.png';
import { Menu, Sparkles, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  currentPage?: "home" | "store-locator" | "financesuite" | "easy-wishlist";
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string, hash: string) => {
    setMobileMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(`/#${hash}`, { replace: true });
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", id: "about", hash: "about" },
    { label: "Our Apps", id: "apps", hash: "ourapps" },
    { label: "Why Us", id: "why-choose-us", hash: "whyus" },
    { label: "Testimonials", id: "testimonials", hash: "testimonials" },
    { label: "Blog", id: "blog", hash: "blog" },
    { label: "Support", id: "support", hash: "support" },
    { label: "Contact", id: "contact", hash: "contact" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={handleLogoClick}
          >
            <ImageWithFallback 
              src={image_b64b929adc6f76a7ee6a419b912123a8f5bf0b03}
              alt="MeBiz Apps Logo" 
              className="h-[60px] w-auto object-contain" 
            />
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id, link.hash)}
                className="px-4 py-2 text-gray-700 hover:text-[#303591] hover:bg-[#F2F2FA] rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => window.open('https://apps.shopify.com/partners/mebiz', '_blank')}
              className="hidden md:inline-flex bg-[#303591] hover:bg-[#303591]/90 hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </Button>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id, link.hash)}
                      className="px-4 py-3 text-left text-gray-700 hover:text-[#303591] hover:bg-[#F2F2FA] rounded-lg transition-all"
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => window.open('https://apps.shopify.com/partners/mebiz', '_blank')}
                    className="mt-4 bg-[#303591] hover:bg-[#303591]/90"
                  >
                    Get Started
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}