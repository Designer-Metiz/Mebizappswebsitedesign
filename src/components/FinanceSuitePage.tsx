import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { DollarSign, FileText, Calculator, TrendingUp, Shield, Clock, CheckCircle2, ArrowRight, Star, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MetaTags } from "./MetaTags";
import { useNavigate } from "react-router-dom";

interface FinanceSuitePageProps {
  currentPage?: "home" | "store-locator" | "financesuite" | "easy-wishlist";
}

const features = [
  {
    icon: FileText,
    title: "Automated Invoicing",
    description: "Generate professional GST-compliant invoices automatically with every order. Fully customizable templates.",
  },
  {
    icon: Calculator,
    title: "GST Calculation",
    description: "Automatic GST calculation based on product categories, customer location, and tax rules.",
  },
  {
    icon: TrendingUp,
    title: "Financial Reports",
    description: "Comprehensive financial reports including sales, tax liability, and profit/loss statements.",
  },
  {
    icon: Shield,
    title: "Tax Compliance",
    description: "Stay compliant with the latest GST regulations and automatic updates for tax rule changes.",
  },
  {
    icon: Clock,
    title: "Real-Time Sync",
    description: "Instant synchronization of all financial data across your Shopify store and accounting systems.",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Easy installation and configuration with guided setup wizard. Start managing finances in minutes.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$14.99",
    period: "/month",
    description: "Perfect for small businesses",
    features: [
      "Up to 100 invoices/month",
      "Basic GST calculations",
      "Standard invoice templates",
      "Email support",
      "Monthly reports",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$39.99",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 1000 invoices/month",
      "Advanced tax calculations",
      "Custom invoice templates",
      "Priority support",
      "Detailed financial reports",
      "Multi-currency support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99.99",
    period: "/month",
    description: "For large-scale operations",
    features: [
      "Unlimited invoices",
      "Full tax compliance suite",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced analytics",
      "API access",
    ],
    popular: false,
  },
];

export function FinanceSuitePage({ currentPage }: FinanceSuitePageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <MetaTags 
        title="GST Suite - GST & Financial Management for Shopify | Mebiz Apps"
        description="Streamline your Shopify store's finances with GST Suite. Automated GST calculations, invoicing, tax compliance, and comprehensive financial reporting."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop"
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
                <DollarSign className="w-4 h-4 mr-2 inline" />
                GST Suite
              </Badge>
              
              <h1 className="mb-6 text-[#303591]" style={{ fontSize: '54px', fontWeight: 700 }}>
                Complete Financial Management for Your Store
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Automate GST calculations, generate compliant invoices, and manage your store's finances 
                effortlessly with our comprehensive financial management solution.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#303591] hover:bg-[#303591]/90 text-white px-8"
                  onClick={() => window.open('https://apps.shopify.com/financesuite', '_blank')}
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
                  <span className="text-[#303591]">1,800+</span> Active Users
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
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
                  alt="GST Suite Dashboard"
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
                    <DollarSign className="w-6 h-6 text-[#24AE4E]" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Monthly Revenue</div>
                    <div className="text-[#303591] text-2xl">₹2.4L</div>
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
                About GST Suite
              </Badge>
              
              <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
                Your Complete GST & Finance Solution
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                GST Suite is designed specifically for Indian Shopify merchants who need to manage GST 
                compliance, invoicing, and financial reporting all in one place. Save time, reduce errors, 
                and stay compliant with automated financial management.
              </p>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#303591] text-[#303591] hover:bg-[#303591] hover:text-white px-8"
                onClick={() => window.open('https://mebiz.agency/gst-suite', '_blank')}
              >
                Learn More About GST Suite
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
                  Streamline your financial operations with automated invoicing, GST calculations, and 
                  comprehensive reporting. Focus on growing your business while we handle the compliance.
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
                <h3 className="text-[#303591] mb-4" style={{ fontSize: '24px', fontWeight: 700 }}>Tax Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay up-to-date with the latest GST regulations automatically. Generate compliant invoices 
                  and reports that meet all government requirements without manual effort.
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
              Everything You Need to Manage Finances
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive tools to automate your financial operations and ensure GST compliance.
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
              Simple, Transparent Pricing
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
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
                    onClick={() => window.open('https://apps.shopify.com/financesuite', '_blank')}
                  >
                    Start Free Trial
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
              Need a custom plan? <a href="#contact" className="text-[#303591] hover:underline">Contact us</a> for enterprise solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F2FA]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="mb-6 text-[#303591]" style={{ fontSize: '42px', fontWeight: 700 }}>
              Ready to Take Control of Your Finances?
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Join thousands of Shopify merchants who trust GST Suite for their financial management. 
              Start your free trial today and experience the difference.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[#303591] hover:bg-[#303591]/90 text-white px-10 py-6 text-lg"
              onClick={() => window.open('https://apps.shopify.com/financesuite', '_blank')}
            >
              Start Free Trial Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <p className="text-gray-500 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}