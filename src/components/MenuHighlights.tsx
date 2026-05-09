import { motion } from 'motion/react';
import { IceCream as Cup, Snowflake, Heart } from 'lucide-react';
import signatureScoopsImg from '../assets/images/regenerated_image_1778298882476.jpg';

const categories = [
  {
    title: 'Signature Scoops',
    description: 'Double scoops of happiness in every cone.',
    icon: '🍦',
    bg: 'bg-brand-yellow/30',
    border: 'border-brand-yellow',
    img: signatureScoopsImg
  },
  {
    title: 'Thick Milkshakes',
    description: 'Creamy, rich, and absolutely priceless.',
    icon: '🥤',
    bg: 'bg-brand-pink/20',
    border: 'border-brand-pink',
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Family Sundaes',
    description: 'Perfect for sharing moments with loved ones.',
    icon: '🍧',
    bg: 'bg-brand-teal/20',
    border: 'border-brand-teal',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2670&auto=format&fit=crop'
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-brand-brown mb-4">Menu Highlights</h2>
          <p className="text-[#7A5C5A] max-w-2xl mx-auto text-lg">
            Each treat is crafted with the finest ingredients and a pinch of love.
            Explore our favorites below!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${cat.bg} border ${cat.border} p-6 rounded-[3rem] flex flex-col items-center text-center group cursor-pointer hover:shadow-xl transition-all duration-500`}
            >
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border-4 border-white shadow-sm">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-4xl mb-4 p-2 bg-white rounded-2xl shadow-sm rotate-3 group-hover:rotate-0 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-display text-brand-brown mb-2">{cat.title}</h3>
              <p className="text-[#7A5C5A] mb-6 mb-auto leading-relaxed">{cat.description}</p>
              <button className="px-6 py-3 bg-brand-brown text-white rounded-2xl text-sm font-bold shadow-sm hover:scale-105 transition-all">
                See Flavors
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
