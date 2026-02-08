
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 md:px-12 bg-cream text-noir overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-noir/10 pt-20 mb-32">
        <div className="flex items-center space-x-4 mb-12 md:mb-0">
          <div className="flex space-x-0.5 scale-150">
            <div className="w-6 h-6 rounded-full bg-noir" />
            <div className="w-6 h-6 rounded-full border-2 border-noir" />
          </div>
          <span className="text-xl font-black uppercase tracking-tighter">RishuEdits</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {['Home', 'About', 'Graphic Portfolio', 'Video Portfolio', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-amber transition-colors whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="relative">
        <h2 className="text-[18vw] font-black uppercase tracking-tighter leading-none text-noir/5 text-center select-none pointer-events-none">
          RISHU
        </h2>
        
        <div className="absolute top-1/2 left-0 w-full flex flex-col md:flex-row justify-between items-center px-4 -translate-y-1/2 text-[10px] uppercase tracking-[0.2em] font-bold text-noir/40">
           <span>© {year} RishuEdits Studios</span>
           <span className="mt-4 md:mt-0">Built for the Avant-Garde</span>
           <div className="mt-4 md:mt-0 flex space-x-4">
             <a href="#" className="hover:text-noir transition-colors">Privacy</a>
             <a href="#" className="hover:text-noir transition-colors">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
