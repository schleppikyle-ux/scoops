import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '../assets/images/regenerated_image_1778298736494.jpg';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-yellow/30 border border-brand-yellow text-brand-brown px-4 py-1 rounded-full text-xs font-bold uppercase tracking-tighter mb-6 shadow-sm">
              <span>⭐ 4.6 Rating</span>
              <span className="opacity-50">|</span>
              <span>29 Happy Customers</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display leading-[1.1] mb-6 text-brand-brown">
              Serving <span className="text-brand-pink">Happiness</span>,<br />One Scoop at a Time.
            </h1>
            <p className="text-xl text-[#7A5C5A] mb-10 max-w-lg leading-relaxed">
              Experience the most affordable and friendly ice cream shop in Groveport. From priceless milkshakes to our warm family ambiance.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brand-teal/20 hover:scale-105 transition-transform flex items-center gap-2">
                Explore Flavors <ArrowRight size={20} />
              </button>
              <button className="bg-white text-brand-red border-2 border-brand-red px-8 py-4 rounded-2xl font-bold text-lg hover:bg-rose-50 transition-colors">
                Read Reviews
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center pt-10"
          >
            <div className="absolute w-[500px] h-[500px] bg-brand-yellow rounded-full opacity-30 -right-20 -top-10"></div>
            <div className="absolute w-[300px] h-[300px] bg-brand-pink rounded-full opacity-20 -right-20 bottom-10"></div>
            
            <div className="relative z-10 animate-float">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={heroImage} 
                  alt="Delicious Ice Cream" 
                  className="w-full h-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50">
                <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white text-xl">✓</div>
                <div>
                  <p className="text-[10px] font-bold opacity-60 uppercase">Now Serving</p>
                  <p className="font-bold text-sm text-brand-brown whitespace-nowrap">Strawberry Cheesecake</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
