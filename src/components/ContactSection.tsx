import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-brown rounded-[4rem] overflow-hidden shadow-2xl relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-8">Visit Us</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-pink">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-orange-200 tracking-widest mb-1">Location</h4>
                    <p className="text-white text-lg">530 Main St, Groveport, OH 43125</p>
                    <button className="mt-2 flex items-center gap-2 text-brand-teal text-sm font-bold hover:text-brand-teal transition-colors">
                      Get Directions <Navigation size={14} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-teal">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-orange-200 tracking-widest mb-1">Status</h4>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="w-3 h-3 bg-brand-yellow rounded-full shadow-[0_0_10px_rgba(255,230,109,0.5)]"></span>
                       <p className="text-white text-lg font-bold">Closed · Opens 2 PM Sat</p>
                    </div>
                    <p className="text-white/60 text-sm">Mon-Fri: 2PM-9PM | Sat-Sun: 12PM-10PM</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-yellow">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-orange-200 tracking-widest mb-1">Contact</h4>
                    <p className="text-white text-lg">hello@scoopssmiles.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto bg-gray-800 relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549466600-475306636ac5?q=80&w=2670&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                alt="Shop Interior"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
