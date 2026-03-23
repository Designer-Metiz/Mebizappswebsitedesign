import { Card } from "./ui/card";
import { motion } from "motion/react";
import { Star, Quote, ThumbsUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Store Owner, Fashion Boutique",
    content: "Mebiz Store Finder has been a game-changer for our multi-location business. Customers can now easily find our nearest store, and we've seen a 40% increase in foot traffic!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTg3NzcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Finance Director, Home Goods Store",
    content: "GST Suite has simplified our accounting workflow tremendously. The automated reports save us hours every week, and the insights help us make better business decisions.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTg3NzcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "E-commerce Manager, Beauty Brand",
    content: "Wishlister has increased our customer engagement significantly. Shoppers love being able to save products and share them with friends. It's boosted our conversion rate by 25%!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTg3NzcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <Badge className="bg-white border-2 border-[#24AE4E] text-[#24AE4E] mb-4 px-4 py-1">
              <ThumbsUp className="w-3 h-3 mr-2" />
              Customer Reviews
            </Badge>
          </motion.div>
          <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
            Loved by Shopify Merchants
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See what store owners are saying about our apps and how they've transformed 
            their businesses.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group p-8 h-full bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Decorative solid color on hover */}
                <div className="absolute inset-0 bg-[#303591] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                {/* Large decorative quote */}
                <div className="absolute -top-2 -right-2 w-24 h-24 opacity-5">
                  <Quote className="w-full h-full text-[#303591]" />
                </div>
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <Star className="w-5 h-5 fill-[#24AE4E] text-[#24AE4E]" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#303591] rounded-full blur-md opacity-30"></div>
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-lg">
                        <ImageWithFallback 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Card className="relative overflow-hidden bg-white border-2 border-gray-100 shadow-2xl max-w-4xl mx-auto">
            {/* Solid accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#303591]"></div>
            
            <div className="grid md:grid-cols-3 gap-8 p-8">
              {/* Main rating */}
              <div className="text-center md:border-r border-gray-200">
                <p className="inline-flex items-baseline gap-2 mb-3">
                  <span className="text-5xl text-[#303591]">4.8</span>
                  <Star className="w-8 h-8 fill-[#24AE4E] text-[#24AE4E] mb-1" />
                </p>
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#24AE4E] text-[#24AE4E]" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">Average Rating</p>
              </div>
              
              {/* Review count */}
              <div className="text-center md:border-r border-gray-200">
                <p className="text-3xl text-[#303591] mb-3">1,200+</p>
                <p className="text-sm text-gray-500 mb-2">Verified Reviews</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#24AE4E]/10 rounded-full">
                  <ThumbsUp className="w-3.5 h-3.5 text-[#24AE4E]" />
                  <span className="text-xs text-[#24AE4E]">98% Recommended</span>
                </div>
              </div>
              
              {/* Satisfaction rate */}
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#F2F2FA"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#303591"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="201"
                      strokeDashoffset="20"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg text-[#303591]">90%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Satisfaction Rate</p>
              </div>
            </div>
            
            {/* Bottom accent */}
            <div className="bg-[#F2F2FA] px-8 py-4 border-t border-gray-100">
              <p className="text-xs text-center text-gray-500">
                Trusted by merchants worldwide • Updated monthly • Verified by Shopify
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}