import { motion } from "motion/react";
import { Target, Users, Zap } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  return (
    <section id="about" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="mb-6 text-[#303591]" style={{ fontSize: '28px', fontWeight: 700 }}>
            Empowering Shopify Merchants Worldwide
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Mebiz Apps, we're dedicated to creating exceptional Shopify applications that solve real business challenges. 
            Our mission is to empower merchants with tools that are powerful yet simple to use, helping them grow their 
            businesses and delight their customers.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <Card className="group p-8 text-center bg-white border-2 border-gray-100 hover:border-[#303591] hover:shadow-2xl transition-all duration-500 h-full">
              <motion.div 
                className="w-20 h-20 bg-[#303591] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="mb-2 group-hover:text-[#303591] transition-colors" style={{ fontSize: '24px', fontWeight: 700 }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Build innovative solutions that help Shopify merchants succeed in the competitive e-commerce landscape.
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <Card className="group p-8 text-center bg-white border-2 border-gray-100 hover:border-[#24AE4E] hover:shadow-2xl transition-all duration-500 h-full">
              <motion.div 
                className="w-20 h-20 bg-[#24AE4E] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="mb-2 group-hover:text-[#24AE4E] transition-colors" style={{ fontSize: '24px', fontWeight: 700 }}>User-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature we develop is designed with your customers and business needs at the forefront.
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <Card className="group p-8 text-center bg-white border-2 border-gray-100 hover:border-[#303591] hover:shadow-2xl transition-all duration-500 h-full">
              <motion.div 
                className="w-20 h-20 bg-[#303591] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="mb-2 group-hover:text-[#303591] transition-colors" style={{ fontSize: '24px', fontWeight: 700 }}>Performance First</h3>
              <p className="text-gray-600 leading-relaxed">
                Our apps are built for speed and reliability, ensuring your store runs smoothly at all times.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
