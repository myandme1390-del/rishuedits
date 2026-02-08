
import React from 'react';
import { EXHIBITIONS } from '../constants';
import { Ticket } from 'lucide-react';

const Exhibitions: React.FC = () => {
  return (
    <section id="exhibitions" className="py-24 px-6 md:px-12 bg-cream border-t border-noir/5">
      <div className="whitespace-nowrap flex overflow-hidden select-none mb-20">
        <div className="flex animate-marquee-reverse">
          {[1,2,3,4,5].map((i) => (
            <span key={i} className="text-[120px] font-black uppercase tracking-tighter inline-block mx-8 opacity-90">
              exhibitions . exhibitions .
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-0">
        {EXHIBITIONS.map((item) => (
          <div 
            key={item.id} 
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-noir/10 hover:bg-noir hover:text-cream transition-colors duration-500 px-4 md:px-8 rounded-2xl md:rounded-none"
          >
            <div className="md:col-span-1 text-2xl font-black text-noir/20 group-hover:text-amber transition-colors">
              {item.index}
            </div>
            
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter group-hover:pl-4 transition-all duration-500">
                {item.title}
              </h3>
            </div>
            
            <div className="md:col-span-3 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-noir/40 group-hover:text-cream/50 font-bold mb-1">
                Location & Date
              </span>
              <span className="text-sm font-medium">{item.location}, {item.date}</span>
            </div>
            
            <div className="md:col-span-2 flex items-center justify-end">
              <button className="flex items-center space-x-2 px-6 py-3 border border-noir/20 rounded-full text-[10px] uppercase tracking-widest font-bold group-hover:bg-amber group-hover:border-amber group-hover:text-noir transition-all duration-300">
                <span>Buy Ticket</span>
                <Ticket className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          display: flex;
          width: fit-content;
          animation: marquee-reverse 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Exhibitions;
