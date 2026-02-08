
import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter, Globe } from 'lucide-react';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/risshuedits?igsh=MTFreXYyZW14MGFsZA==" },
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "https://x.com/RishuEdits" },
  ];

  return (
    <section id="home" className="min-h-screen pt-20 pb-20 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden bg-cream">
      {/* Decorative large background number */}
      <div className="absolute bottom-10 left-12 opacity-[0.03] select-none pointer-events-none z-0">
        <span className="text-[35vw] font-black leading-none">01</span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-10">
          <div className="flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-amber" />
            <span className="text-amber text-xs font-black uppercase tracking-[0.4em]">Creative Editor & Designer</span>
          </div>
          
          <div className="relative">
            <h1 className="text-[12vw] md:text-[140px] font-black uppercase leading-[0.75] tracking-tighter">
              Rishu<br />
              <span className="text-noir/10 opacity-60">Edits.</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-noir/70 max-w-xl font-bold leading-relaxed uppercase tracking-tight">
            Crafting cinematic narratives through precision editing and high-impact visual design for the digital avant-garde.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button 
              onClick={onExplore}
              className="px-14 py-6 bg-noir text-cream rounded-full text-xs uppercase tracking-[0.3em] font-black hover:bg-amber hover:text-noir transition-all duration-500 shadow-xl"
            >
              Explore Works
            </button>
            
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-noir/5 rounded-full flex items-center justify-center hover:bg-noir hover:text-cream transition-all duration-500 hover:scale-110 bg-white/50 shadow-sm"
                >
                  <social.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative">
            {/* Cinematic Portrait with specific rounded corners from screenshot */}
            <div className="aspect-[4/5] bg-softGray rounded-t-[100px] rounded-br-[40px] rounded-bl-[100px] overflow-hidden border border-noir/5 shadow-2xl group relative z-10">
              <img 
                src="https://i.ibb.co/TxDw6R3J/unnamed.jpg" 
                alt="Cinematic Portrait" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
              />
            </div>

            {/* Overlapping Amber Arrow Circle */}
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber rounded-full flex items-center justify-center text-noir shadow-2xl z-20 border-[6px] border-cream group cursor-pointer hover:scale-105 transition-transform duration-500" onClick={onExplore}>
              <ArrowUpRight className="w-16 h-16 stroke-[2.5px]" />
            </div>
            
            {/* Global Reach Badge */}
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-noir text-cream rounded-full flex flex-col items-center justify-center p-4 text-center border-[4px] border-cream shadow-2xl z-20 animate-pulse-slow">
              <Globe className="w-7 h-7 mb-2 text-amber" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] leading-tight">Global // Reach</span>
            </div>

            {/* Subtle branding element */}
            <div className="absolute top-10 right-10 z-20 flex items-center space-x-2 text-white/40">
               <span className="text-[8px] font-black uppercase tracking-widest italic">✦ rishuedits</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
