import { motion } from "motion/react";
import { Shield, Headphones, Gauge, Award } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Award,
    title: "Trusted by 5K+ Stores",
    description: "Join thousands of successful merchants who rely on our apps daily to power their businesses.",
    stat: "5,000+",
    color: "#303591"
  },
  {
    icon: Headphones,
    title: "Fast Support",
    description: "Our dedicated support team is available 24/7 to help you succeed with quick, helpful responses.",
    stat: "< 2 hrs",
    color: "#24AE4E"
  },
  {
    icon: Gauge,
    title: "Built for Performance",
    description: "Optimized code and efficient architecture ensure your store loads fast and runs smoothly.",
    stat: "99.9%",
    color: "#303591"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee keep your store safe and always accessible.",
    stat: "A+ Rated",
    color: "#24AE4E"
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#303591]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#24AE4E]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
            Why Choose Mebiz Apps?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We go beyond just building apps. We create solutions that make a real difference 
            to your business and your customers.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="group relative p-6 h-full bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 text-center overflow-hidden">
                  {/* Background solid color on hover */}
                  <div className="absolute inset-0 bg-[#303591] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
                      style={{ backgroundColor: feature.color }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Stat badge */}
                    <motion.div 
                      className="absolute -top-2 -right-2 bg-white rounded-lg shadow-lg px-3 py-1 border border-gray-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <span className="text-xs text-[#303591]">{feature.stat}</span>
                    </motion.div>
                  </div>
                  
                  <h3 className="mb-3 group-hover:text-[#303591] transition-colors" style={{ fontSize: '24px', fontWeight: 700 }}>{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
