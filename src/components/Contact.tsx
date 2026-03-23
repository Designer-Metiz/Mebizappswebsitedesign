import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Send, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#24AE4E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#303591]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our apps or need help getting started? We'd love to hear from you. 
            Our team is ready to assist!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-white border-2 border-gray-100 shadow-xl">
              <h3 className="mb-8">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 border-2 focus:border-[#303591]"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2 border-2 focus:border-[#303591]"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="app">Which app are you interested in?</Label>
                  <Input 
                    id="app"
                    type="text"
                    placeholder="e.g., Mebiz Store Finder"
                    className="mt-2 border-2 focus:border-[#303591]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your store and how we can help..."
                    className="mt-2 min-h-32 border-2 focus:border-[#303591]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#303591] hover:bg-[#303591]/90 hover:shadow-xl group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="mb-8">Other ways to connect</h3>
            
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="group p-6 hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#303591] bg-white">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#303591] rounded-xl blur-md opacity-30"></div>
                    <div className="relative w-14 h-14 bg-[#303591] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 group-hover:text-[#303591] transition-colors">Email Support</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Get help via email. We typically respond within 2 hours.
                    </p>
                    <a href="mailto:mebizapps@gmail.com" className="text-[#303591] text-sm hover:underline inline-flex items-center gap-1">
                      mebizapps@gmail.com
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="p-8 bg-[#303591] text-white border-none shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <h4 className="mb-3 text-white">Ready to get started?</h4>
                  <p className="mb-6 text-white/90 text-sm leading-relaxed">
                    Install our apps directly from the Shopify App Store and start transforming your store today.
                  </p>
                  <Button 
                    variant="secondary"
                    className="w-full bg-white text-[#303591] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                    onClick={() => window.open('https://apps.shopify.com/partners/mebiz', '_blank')}
                  >
                    Browse Apps on Shopify
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
