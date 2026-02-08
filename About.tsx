import React from 'react';
import { Target, Search } from 'lucide-react';

const About: React.FC = () => {
  const softwareLogos = [
    { name: 'Photoshop', url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
    { name: 'Premiere Pro', url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
    { name: 'After Effects', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' }
  ];

  return (
    <section id="about" className="py-32 bg-noir text-cream relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="relative z-10">
                {/* About Me Label with Yellow Outline */}
                <div className="inline-block border border-amber px-6 py-2 mb-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber">
                    ABOUT ME
                  </span>
                </div>
                
                <h2 className="text-[7.5vw] md:text-[50px] lg:text-[60px] font-black leading-[0.9] uppercase tracking-tighter mb-8">
                  GRAPHIC DESIGNER<br />
                  <span className="text-amber">
                    VIDEO EDITOR
                  </span>
                </h2>
              </div>
              
              {/* Description */}
              <div className="max-w-xl">
                <p className="text-base md:text-lg text-cream/90 leading-relaxed font-bold uppercase tracking-tight">
                  Hii I Am RISHU .<br />
                  a GRAPHIC DESIGNER AND VIDEO EDITOR I WAS 16 YRS OLD WHEN I STARTED THE EDITING IN 2024 AND NOW I PROVIDE SERVICES . I HAVE 20 + HAPPY CLIENTS WHICH IS OUR ACHIEVEMENT IN 2 YEARS .
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-12 pt-8 border-t border-cream/10">
              <div className="space-y-2">
                <span className="text-5xl font-black text-amber">2+</span>
                <p className="text-[10px] uppercase tracking-widest font-bold text-cream/40">Years Experience</p>
              </div>
              <div className="space-y-2 px-0 py-2 relative">
                <span className="text-5xl font-black text-amber">20+</span>
                <p className="text-[10px] uppercase tracking-widest font-bold text-cream/40">Happy Clients</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
              {/* Visionary Approach - Column 1 */}
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0 bg-amber/5 group-hover:bg-amber group-hover:text-noir transition-all duration-500">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight">VISIONARY APPROACH</h4>
                  <p className="text-[11px] text-cream/40 mt-2 uppercase tracking-widest font-bold leading-relaxed max-w-sm">
                    Every frame is a deliberate choice to guide the<br className="hidden md:block" />viewer's journey through light and motion.
                  </p>
                </div>
              </div>
              
              {/* Technical Mastery - Column 2 */}
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0 bg-amber/5 group-hover:bg-amber group-hover:text-noir transition-all duration-500">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight">TECHNICAL MASTERY</h4>
                  <p className="text-[11px] text-cream/40 mt-2 uppercase tracking-widest font-bold leading-relaxed max-w-sm">
                    Utilizing cutting-edge tools to ensure pixel-perfect<br className="hidden md:block" />delivery across all digital platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-end">
            <div className="relative">
              {/* Pill-shaped image container */}
              <div className="aspect-[4/5] md:aspect-[5/6] rounded-[140px] overflow-hidden border border-cream/5 relative shadow-2xl">
                <img 
                  src="https://i.ibb.co/N2CzyHdq/a640ee15-cacd-4cc1-8879-d06719f5f14e.png" 
                  alt="Artist Portrait" 
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-1000"
                />
              </div>
              
              {/* Round Badge overlapping the image */}
              <div className="absolute bottom-10 -right-6 md:-right-12 w-48 h-48 bg-amber rounded-full flex items-center justify-center text-noir shadow-[0_0_50px_rgba(244,183,64,0.3)] border-[8px] border-noir transform hover:scale-105 transition-transform duration-500 z-20">
                <div className="text-center p-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] leading-tight block">Full Spectrum<br />Aesthetics</span>
                </div>
              </div>
            </div>

            {/* SOFTWARE I USE - Boxed Label */}
            <div className="mt-12 mr-0 md:mr-4 w-full md:w-auto">
              <div className="border-2 border-cream/80 px-8 py-3 md:px-12 md:py-5 inline-block w-full text-center md:text-right">
                <h3 className="text-xl md:text-3xl font-black uppercase tracking-[0.3em] text-cream/95 whitespace-nowrap">
                  Software I Use
                </h3>
              </div>
              
              {/* LOGOS OF PHOTOSHOP, PREMIERE PRO, AFTER EFFECTS - Shifted slightly left with md:mr-24 */}
              <div className="mt-8 flex items-center justify-center md:justify-end space-x-8 md:space-x-12 md:mr-24">
                {softwareLogos.map((logo) => (
                  <div key={logo.name} className="group/logo relative">
                    <img 
                      src={logo.url} 
                      alt={logo.name} 
                      className="w-10 h-10 md:w-14 md:h-14 object-contain filter grayscale opacity-50 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-500 transform group-hover/logo:scale-110"
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-widest text-amber opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background branding element */}
      <div className="absolute top-10 right-10 flex items-center space-x-2 text-cream/10 pointer-events-none">
         <span className="text-[9px] font-black uppercase tracking-widest italic">✦ rishuedits</span>
      </div>
    </section>
  );
};

export default About;