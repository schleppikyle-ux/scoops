import { motion } from 'motion/react';
import { IceCream } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center text-white text-xl shadow-lg">
              🍦
            </div>
            <span className="text-2xl font-display text-brand-red tracking-wide">Scoops with Smiles</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Flavors', 'Menu', 'Gallery', 'Reviews', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest text-brand-brown hover:text-brand-pink transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
