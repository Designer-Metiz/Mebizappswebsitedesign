import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { MapPin, DollarSign, Heart, ExternalLink, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const apps = [
  {
    id: 1,
    name: "Mebiz Store Finder",
    icon: MapPin,
    description: "Create beautiful, custom store locators that help customers find your physical locations with ease. Features advanced filtering, custom styling, and mobile-optimized maps.",
    features: ["Custom Map Styling", "Advanced Filters", "Mobile Responsive", "Analytics Dashboard"],
    color: "#303591",
    bgColor: "#303591/10",
    badge: "Popular",
  },
  {
    id: 2,
    name: "GST Suite",
    icon: DollarSign,
    description: "Simplify your financial management with comprehensive reporting, automated reconciliation, and real-time insights into your store's financial health.",
    features: ["GST Compliance", "Automated Invoicing", "Financial Reports", "Tax Calculations"],
    color: "#24AE4E",
    bgColor: "#24AE4E/10",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Wishlister",
    icon: Heart,
    description: "Let customers save and share their favorite products effortlessly. Boost engagement and sales with wishlists that are simple to use and beautifully designed.",
    features: ["Guest Wishlists", "Share via Email", "Social Sharing", "Customizable Design"],
    color: "#303591",
    bgColor: "#303591/10",
    badge: "New",
  }
];

export function AppShowcase() {
  const navigate = useNavigate();

  return (
    <section id="apps" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#F2F2FA]"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Badge className="bg-[#303591] text-white mb-4 px-4 py-1">
              Featured Solutions
            </Badge>
          </motion.div>
          <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
            Our Flagship Apps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our suite of powerful Shopify apps designed to enhance your store's 
            functionality and drive business growth.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  if (app.id === 1) {
                    navigate('/store-finder');
                  } else if (app.id === 2) {
                    navigate('/gst-suite');
                  } else if (app.id === 3) {
                    navigate('/wishlister');
                  }
                }}
                className="cursor-pointer"
              >
                <Card className="group relative p-8 h-full bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Solid background effect on hover */}
                  <div className="absolute inset-0 bg-[#303591] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{ borderColor: app.color, color: app.color }}
                    >
                      {app.badge}
                    </Badge>
                  </div>
                  
                  {/* Icon with solid background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#303591] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div 
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      style={{ backgroundColor: app.color }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="mb-4 group-hover:text-[#303591] transition-colors" style={{ fontSize: '24px', fontWeight: 700 }}>{app.name}</h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {app.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {app.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-3 text-sm text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#24AE4E] flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {app.id === 1 ? (
                    <Button 
                      type="button"
                      className="w-full group/btn hover:shadow-lg text-white border-0"
                      style={{ backgroundColor: app.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/store-finder');
                      }}
                    >
                      About Store Locator
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  ) : app.id === 2 ? (
                    <Button 
                      type="button"
                      className="w-full group/btn hover:shadow-lg text-white border-0"
                      style={{ backgroundColor: app.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/gst-suite');
                      }}
                    >
                      About GST Suite
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button 
                      type="button"
                      className="w-full group/btn hover:shadow-lg text-white border-0"
                      style={{ backgroundColor: app.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/wishlister');
                      }}
                    >
                      About Wishlister
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}