import { ArrowRight, Sparkles, Star, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "figma:asset/8215cd59210a4383125d60042e5c66d7538c0d48.png";

export function Hero() {
  return (
    <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[#F2F2FA]"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#303591]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#24AE4E]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-6 text-[#303591]" style={{ fontSize: '50px', fontWeight: 700 }}>
              Build Your Perfect<br />Shopify Store with Powerful Apps
            </h1>
            
            <p className="text-gray-600 mb-8 max-w-xl leading-relaxed text-lg">
              Mebiz Apps delivers innovative Shopify solutions trusted by over 5,000+ stores worldwide. 
              Enhance your store's functionality with our suite of professional apps designed for growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-[#303591] hover:bg-[#303591]/90 hover:shadow-2xl shadow-lg group px-8 py-6"
                  onClick={() => {
                    const appsSection = document.getElementById('apps');
                    if (appsSection) {
                      appsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Explore Apps
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#303591] text-[#303591] hover:bg-[#303591] hover:text-white px-8 py-6"
                  onClick={() => window.open('https://apps.shopify.com/partners/mebiz', '_blank')}
                >
                  View on Shopify
                </Button>
              </motion.div>
            </div>
            
            <div className="flex items-center gap-6 flex-wrap">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-[#303591] rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#303591]">5,000+</p>
                  <p className="text-xs text-gray-500">Active Stores</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-[#24AE4E] rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-[#303591]">4.8★</p>
                  <p className="text-xs text-gray-500">Average Rating</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-[#303591] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#303591]">24/7</p>
                  <p className="text-xs text-gray-500">Support</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-20 h-20 bg-[#24AE4E] rounded-2xl rotate-12 opacity-20"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [12, 22, 12]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#303591] rounded-full opacity-20"
                animate={{ 
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 p-2">
                <div className="rounded-2xl overflow-hidden shadow-inner">
                  <img 
                    src={heroImage}
                    alt="Web Apps Interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Floating stats badges */}
              <motion.div 
                className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#24AE4E] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Revenue Growth</p>
                    <p className="text-green-600">+127%</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#303591] rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">User Satisfaction</p>
                    <p className="text-[#303591]">98%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}