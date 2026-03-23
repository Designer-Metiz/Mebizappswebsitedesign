import { Mail, Sparkles } from "lucide-react";
import whiteLogo from "figma:asset/7a19bc9bad73da0fec4fa93524d6a9e369d7056f.png";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-[#303591] text-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={whiteLogo} 
                alt="Mebiz Apps Logo" 
                className="h-[30px] w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Trusted Shopify partner delivering innovative app solutions for e-commerce success.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 text-white">Our Apps</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <button 
                  onClick={() => navigate('/store-finder')}
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block cursor-pointer text-left"
                >
                  Mebiz Store Finder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/gst-suite')}
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block cursor-pointer text-left"
                >
                  GST Suite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/wishlister')}
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block cursor-pointer text-left"
                >
                  Wishlister
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="https://mebiz.agency/#about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Support</a>
              </li>
              <li>
                <a href="https://mebiz.agency/#contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Documentation</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-10 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/70">
              © 2025 Mebiz Apps. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}