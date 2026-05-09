import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: 'Jeremy Clark',
    role: 'Local Guide',
    text: 'Stopped in about 730pm on a Friday evening. Absolutely worth the stop. The customer service was polite and helpful!',
    rating: 5
  },
  {
    name: 'Aeon Holton',
    role: 'Local Guide',
    text: 'I had an awesome experience here milkshakes priceless. Definitely coming back with the family!',
    rating: 5
  },
  {
    name: 'David Yennerell',
    role: 'Local Guide',
    text: 'Absolutely delicious and affordable. Such a great atmosphere. We felt welcomed right when we entered.',
    rating: 5
  }
];

export default function ReviewSection() {
  return (
    <section id="reviews" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display text-brand-brown mb-4">What Neighbors Say</h2>
            <p className="text-[#7A5C5A]">Real smiles from our Groveport community.</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-[2rem] shadow-md border border-orange-100">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-brand-yellow text-brand-yellow" />
              ))}
            </div>
            <span className="font-display text-2xl text-brand-brown">4.6</span>
            <span className="text-[#7A5C5A] text-sm uppercase font-bold">(29 reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] relative shadow-lg shadow-orange-100/50 hover:shadow-xl transition-all border-b-8 border-brand-pink/20"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-[#4A2C2A] text-lg font-medium leading-relaxed relative z-10 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-brand-cream">
                <div className="w-12 h-12 bg-brand-pink text-white rounded-2xl flex items-center justify-center font-display text-xl shadow-md rotate-3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-brand-brown">{review.name}</h4>
                  <p className="text-[10px] text-brand-teal font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
              <Quote className="absolute top-10 right-10 text-brand-cream w-16 h-16 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
