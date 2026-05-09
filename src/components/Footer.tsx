import { IceCream, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                🍦
              </div>
              <span className="text-xl font-display text-brand-red tracking-wide">Scoops with Smiles</span>
            </div>
            <p className="text-[#7A5C5A] text-sm leading-relaxed mb-6 font-medium">
              Spreading joy one scoop at a time. Groveport's favorite destination for sweet moments and family fun.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, url: 'https://www.instagram.com/scoopswithsmiles/' },
                { Icon: Facebook, url: 'https://www.facebook.com/scoopswithsmiles' },
                { Icon: Twitter, url: '#' }
              ].map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center text-brand-brown hover:bg-brand-pink hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-brand-brown mb-6">Sweet Menu</h4>
            <ul className="space-y-4">
              {['Classic Scoops', 'Premium Flavors', 'Milkshakes', 'Fruit Sorbets', 'Waffle Cones'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#7A5C5A] hover:text-brand-red transition-colors font-bold uppercase tracking-widest text-[10px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-brand-brown mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Gallery', 'Meet the Team', 'Gift Cards', 'Careers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-[#7A5C5A] hover:text-brand-red transition-colors font-bold uppercase tracking-widest text-[10px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-brand-brown mb-6">Newsletter</h4>
            <p className="text-sm text-[#7A5C5A] mb-4 font-medium">Join our list for flavor alerts and special deals!</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-brand-cream border-2 border-orange-50 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-brand-pink transition-all font-sans font-bold"
              />
              <button className="bg-brand-red text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#ff5252] transition-all shadow-md">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A58C8A] text-[10px] font-bold uppercase tracking-widest">
            © 2026 Scoops with Smiles Ice Cream. All rights reserved.
          </p>
          <p className="text-[#A58C8A] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
            Made with <span className="text-brand-pink text-sm">❤️</span> in Groveport, OH
          </p>
        </div>
      </div>
    </footer>
  );
}
