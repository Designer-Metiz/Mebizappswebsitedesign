import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { MapPin, Search, Layers, Smartphone, BarChart3, Palette, CheckCircle2, ArrowRight, Star, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MetaTags } from "./MetaTags";
import storeLocatorHeroImage from "figma:asset/0fed610ffb9678c06589f84bcd232be006b35f13.png";
import { useNavigate } from "react-router-dom";

interface StoreLocatorPageProps {
  currentPage?: "home" | "store-locator" | "financesuite" | "easy-wishlist";
}

const features = [
  {
    icon: Search,
    title: "Advanced Search & Filters",
    description: "Powerful search capabilities with custom filters for distance, store type, amenities, and more.",
  },
  {
    icon: Layers,
    title: "Custom Map Styling",
    description: "Fully customizable maps that match your brand with custom markers, colors, and styling options.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Beautiful, responsive design that works flawlessly on all devices and screen sizes.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track store visits, popular locations, and search patterns with comprehensive analytics.",
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description: "Match your store's look and feel with extensive customization options for colors, fonts, and layouts.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures quick load times and smooth interactions for your customers.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "Free",
    period: "",
    annualPrice: "",
    annualSavings: "",
    description: "For testing and small stores",
    features: [
      "Up to 3 locations",
      "Basic maps",
    ],
    popular: false,
  },
  {
    name: "Basic",
    price: "$4.99",
    period: "/month",
    annualPrice: "$49.99/year",
    annualSavings: "save 17%",
    description: "For small to medium businesses",
    features: [
      "Up to 50 locations",
      "Customizable maps",
      "7-day free trial",
    ],
    popular: true,
  },
  {
    name: "Business Plan",
    price: "$9.99",
    period: "/month",
    annualPrice: "$99.99/year",
    annualSavings: "save 17%",
    description: "For growing businesses",
    features: [
      "Up to 150 locations",
      "Bulk upload (Unlimited)",
      "Robust support",
      "7-day free trial",
    ],
    popular: false,
  },
];

export function StoreLocatorPage({ currentPage }: StoreLocatorPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <MetaTags 
        title="Mebiz Store Finder - Advanced Store Finder for Shopify | Mebiz Apps"
        description="Help customers find your physical stores with Mebiz Store Finder. Features advanced filtering, custom styling, mobile-optimized maps, and comprehensive analytics."
        image="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=630&fit=crop"
      />
      <Header currentPage={currentPage} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#F2F2FA]/50"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#303591]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#24AE4E]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-[#303591] text-white mb-6 px-4 py-1">
                <MapPin className="w-4 h-4 mr-2 inline" />
                Mebiz Store Finder
              </Badge>
              
              <h1 className="mb-6 text-[#303591]" style={{ fontSize: '54px', fontWeight: 700 }}>
                Help Customers Find Your Stores Instantly
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Create beautiful, custom store locators that help customers find your physical 
                locations with ease. Features advanced filtering, custom styling, and mobile-optimized maps.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#303591] hover:bg-[#303591]/90 text-white px-8"
                  onClick={() => window.open('https://apps.shopify.com/store-locator-24', '_blank')}
                >
                  Install on Shopify
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/')}
                  className="border-[#303591] text-[#303591] hover:bg-[#303591]/10"
                >
                  Back to Home
                </Button>
              </div>
              
              <div className="flex items-center gap-8 mt-10">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#24AE4E] text-[#24AE4E]" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 Rating</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="text-[#303591]">2,500+</span> Active Stores
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={storeLocatorHeroImage}
                  alt="Store Locator Interface"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#24AE4E]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#24AE4E]" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Locations Found</div>
                    <div className="text-[#303591] text-2xl">247</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-[#24AE4E] text-white mb-6 px-4 py-1">
                About Mebiz Store Finder
              </Badge>
              
              <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
                The Complete Store Locator Solution
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Mebiz Store Finder is the most comprehensive and user-friendly store locator app for Shopify. 
                Designed with both merchants and customers in mind, it makes finding physical store locations 
                effortless while providing powerful customization options to match your brand perfectly.
              </p>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#303591] text-[#303591] hover:bg-[#303591] hover:text-white px-8"
                onClick={() => window.open('https://mebiz.agency/mebiz-store-finder', '_blank')}
              >
                Learn More About Store Locator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full border-2 border-gray-100 hover:border-[#303591]/20 transition-colors">
                <h3 className="text-[#303591] mb-4" style={{ fontSize: '24px', fontWeight: 700 }}>For Merchants</h3>
                <p className="text-gray-600 leading-relaxed">
                  Easy setup with intuitive interface. Manage unlimited locations, customize every aspect 
                  of your store locator, and gain valuable insights through our analytics dashboard. 
                  No coding required.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 h-full border-2 border-gray-100 hover:border-[#303591]/20 transition-colors">
                <h3 className="text-[#303591] mb-4" style={{ fontSize: '24px', fontWeight: 700 }}>For Customers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lightning-fast search experience with real-time results. Find nearby stores instantly, 
                  get directions, view store hours, and filter by amenities. Beautiful on any device.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F2FA]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#303591] text-white mb-6 px-4 py-1">
              Features
            </Badge>
            
            <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
              Everything You Need and More
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Packed with powerful features to help your customers find your stores quickly and easily.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-white border-2 border-gray-100 hover:border-[#303591]/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-[#303591] rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-[#303591] mb-3" style={{ fontSize: '24px', fontWeight: 700 }}>{feature.title}</h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#24AE4E] text-white mb-6 px-4 py-1">
              Pricing Plans
            </Badge>
            
            <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
              Pricing
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`p-8 h-full border-2 ${
                  plan.popular 
                    ? 'border-[#303591] shadow-2xl scale-105' 
                    : 'border-gray-100 hover:border-[#303591]/20'
                } transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[#24AE4E] text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-[#303591] mb-4" style={{ fontSize: '24px', fontWeight: 700 }}>{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl text-[#303591]">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    {plan.annualPrice && (
                      <div className="mb-4">
                        <span className="text-sm text-gray-600">or </span>
                        <span className="text-sm text-[#303591]">{plan.annualPrice}</span>
                        <span className="text-sm text-[#24AE4E] ml-1">{plan.annualSavings}</span>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#24AE4E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-[#303591] hover:bg-[#303591]/90 text-white' 
                        : 'bg-white border-2 border-[#303591] text-[#303591] hover:bg-[#303591] hover:text-white'
                    }`}
                    onClick={() => window.open('https://apps.shopify.com/store-locator-24', '_blank')}
                  >
                    {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600">
              All charges are billed in USD. Recurring and usage-based charges are billed every 30 days.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}