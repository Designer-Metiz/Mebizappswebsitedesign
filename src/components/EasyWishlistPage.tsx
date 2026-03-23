import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Heart, Share2, Mail, ShoppingBag, Users, Palette, CheckCircle2, ArrowRight, Star, Zap, Bell, Smartphone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MetaTags } from "./MetaTags";
import { useNavigate } from "react-router-dom";

interface EasyWishlistPageProps {
  currentPage?: "home" | "store-locator" | "financesuite" | "easy-wishlist";
}

const features = [
  {
    icon: Users,
    title: "Guest Wishlists",
    description: "Allow customers to create wishlists without creating an account, reducing friction and increasing engagement.",
  },
  {
    icon: Mail,
    title: "Email Sharing",
    description: "Customers can easily share their wishlists via email with friends and family for birthdays and special occasions.",
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description: "One-click sharing to Facebook, Twitter, Pinterest, and more to spread the word about favorite products.",
  },
  {
    icon: Palette,
    title: "Customizable Design",
    description: "Match your brand perfectly with customizable colors, buttons, and layouts that blend seamlessly with your store.",
  },
  {
    icon: Bell,
    title: "Price Drop Alerts",
    description: "Notify customers when items on their wishlist go on sale, driving conversions and building loyalty.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Beautiful, responsive design ensures a perfect wishlist experience on any device or screen size.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Up to 100 wishlist items",
      "Basic customization",
      "Email sharing",
      "Mobile responsive",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$14.99",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Unlimited wishlist items",
      "Advanced customization",
      "Social sharing",
      "Price drop alerts",
      "Priority support",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Plus",
    price: "$29.99",
    period: "/month",
    description: "For high-volume stores",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Bulk operations",
      "Advanced analytics",
      "24/7 dedicated support",
      "White-label options",
    ],
    popular: false,
  },
];

export function EasyWishlistPage({ currentPage }: EasyWishlistPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <MetaTags 
        title="Wishlister - Boost Sales with Customer Wishlists | Mebiz Apps"
        description="Let customers save and share favorite products with Wishlister. Features guest wishlists, social sharing, price drop alerts, and beautiful customizable design."
        image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=630&fit=crop"
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
                <Heart className="w-4 h-4 mr-2 inline" />
                Wishlister
              </Badge>
              
              <h1 className="mb-6 text-[#303591]" style={{ fontSize: '54px', fontWeight: 700 }}>
                Let Customers Save & Share Their Favorite Products
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Boost engagement and sales with wishlists that are simple to use and beautifully designed. 
                Allow customers to save products, share with friends, and get notified about price drops.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#303591] hover:bg-[#303591]/90 text-white px-8"
                  onClick={() => window.open('https://apps.shopify.com/easy-wishlist', '_blank')}
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
                  <span className="text-[#303591]">5,200+</span> Active Stores
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
                  src="https://i.postimg.cc/BvzVvGvL/Screenshot-2025-11-03-at-4-49-42-PM.png"
                  alt="Wishlister Interface"
                  className="w-full h-auto"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
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
                    <Heart className="w-6 h-6 text-[#24AE4E]" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Wishlist Items</div>
                    <div className="text-[#303591] text-2xl">1,247</div>
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
                About Wishlister
              </Badge>
              
              <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
                The Most User-Friendly Wishlist Solution
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Wishlister is designed to increase customer engagement and drive more sales by allowing 
                shoppers to save their favorite products and share them with others. With powerful features 
                and seamless integration, it's the perfect addition to any Shopify store.
              </p>
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
                <h3 className="text-[#303591] mb-2" style={{ fontSize: '24px', fontWeight: 700 }}>For Merchants</h3>
                <p className="text-gray-600 leading-relaxed">
                  Increase conversions with wishlists that keep customers engaged. Track popular products, 
                  send targeted promotions, and recover potentially lost sales with automated price drop notifications.
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
                <h3 className="text-[#303591] mb-2" style={{ fontSize: '24px', fontWeight: 700 }}>For Customers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Save favorite products for later, share wishlists with friends and family, and get notified 
                  when prices drop. No account required to start - it's that simple.
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
              Powerful Features for Maximum Engagement
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to create a wishlist experience your customers will love.
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
              Choose the Perfect Plan for Your Store
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Start free and upgrade as you grow. All plans include core wishlist features.
            </p>
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
                    <h3 className="text-[#303591] mb-2" style={{ fontSize: '24px', fontWeight: 700 }}>{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl text-[#303591]">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#24AE4E] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-[#303591] hover:bg-[#303591]/90 text-white' 
                        : 'bg-white border-2 border-[#303591] text-[#303591] hover:bg-[#303591] hover:text-white'
                    }`}
                    onClick={() => window.open('https://apps.shopify.com/easy-wishlist', '_blank')}
                  >
                    {plan.price === "$0" ? "Get Started Free" : "Start Free Trial"}
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
              All paid plans include a 14-day free trial. <a href="#contact" className="text-[#303591] hover:underline">Contact us</a> for custom enterprise solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}