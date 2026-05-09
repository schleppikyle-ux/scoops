import { motion } from 'motion/react';
import { Camera, Heart, MessageCircle } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2574&auto=format&fit=crop',
    caption: 'Aeon\'s priceless milkshake',
    likes: 12,
    comments: 2
  },
  {
    url: 'https://images.unsplash.com/photo-1505394033223-431a04d2b58h?q=80&w=2670&auto=format&fit=crop',
    caption: 'Friday night treats',
    likes: 24,
    comments: 5
  },
  {
    url: 'https://images.unsplash.com/photo-1560008511-11c63416e52d?q=80&w=2574&auto=format&fit=crop',
    caption: 'The Ice Cream Expert in action!',
    likes: 18,
    comments: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1517093157656-b9421bd361dd?q=80&w=2670&auto=format&fit=crop',
    caption: 'Grovetown vibes',
    likes: 31,
    comments: 7
  },
  {
    url: 'https://images.unsplash.com/photo-1543508282-5c1f427f023f?q=80&w=2574&auto=format&fit=crop',
    caption: 'Perfect sprinkles',
    likes: 42,
    comments: 12
  },
  {
    url: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=2574&auto=format&fit=crop',
    caption: 'Double scoop delight',
    likes: 27,
    comments: 4
  }
];

export default function CommunityGallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">
            <Camera size={14} />
            <span>Community Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-brand-brown mb-4">Smiles Captured</h2>
          <p className="text-[#7A5C5A] max-w-2xl mx-auto text-lg leading-relaxed">
            From first tastes to late-night milkshakes, here are some of our favorite 
            moments shared by the Groveport community.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group break-inside-avoid"
            >
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-md group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 via-brand-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white font-bold mb-4">{img.caption}</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white/90 text-sm font-bold">
                      <Heart size={18} fill="currentColor" className="text-brand-pink" />
                      {img.likes}
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm font-bold">
                      <MessageCircle size={18} fill="currentColor" />
                      {img.comments}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-brand-pink text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-pink/20">
            Share Your Smile
          </button>
        </div>
      </div>
    </section>
  );
}
