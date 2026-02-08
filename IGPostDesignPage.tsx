import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Instagram, Layout, Smartphone, Share2, X } from 'lucide-react';

interface IGPostDesignPageProps {
  onBack: () => void;
}

const IGPostDesignPage: React.FC<IGPostDesignPageProps> = ({ onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      title: "Dark Minimalist",
      src: "https://i.ibb.co/2YqMKV7d/INFIARC.jpg",
      tag: "MINIMAL"
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-noir pb-32">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-noir/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in-95 duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 w-12 h-12 bg-cream text-noir rounded-full flex items-center justify-center hover:bg-amber transition-colors shadow-2xl z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-4xl w-full aspect-square rounded-[60px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-cream/10">
            <img 
              src={selectedImage} 
              alt="Zoomed Work" 
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cream/40">Editorial Selection // Social Graphics</span>
            </div>
          </div>
        </div>
      )}

      {/* Editorial Header */}
      <header className="fixed top-0 left-0 w-full bg-cream/80 backdrop-blur-md z-50 py-6 px-6 md:px-12 border-b border-noir/5 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center space-x-3 group"
        >
          <div className="w-10 h-10 bg-noir text-cream rounded-full flex items-center justify-center group-hover:bg-amber group-hover:text-noir transition-all duration-300">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-amber transition-colors">Return to Gallery</span>
        </button>
        <div className="flex items-center space-x-3">
            <Smartphone className="w-4 h-4 text-noir/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-noir/40">SOCIAL // VOL. 02</span>
        </div>
      </header>

      <main className="pt-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Title Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
            <div className="lg:col-span-8">
              <span className="text-amber text-xs uppercase tracking-[0.5em] font-black block mb-8">Social Media Aesthetics</span>
              <h1 className="text-[10vw] md:text-[80px] lg:text-[100px] font-black uppercase leading-[0.8] tracking-tighter">
                Instagram<br /><span className="text-noir/10 italic">Post Designs</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-4">
              <p className="text-lg font-light leading-relaxed text-noir/60 uppercase tracking-tight lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-amber pl-6 lg:pl-0 lg:pr-6">
                Exploring the Eye-Catchy, Neat, and Clean post structures that stop the scroll and build an authentic connection with your audience.
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-y border-noir/5 mb-24">
            <div className="space-y-4">
               <Instagram className="w-6 h-6 text-amber/40" />
               <h3 className="text-xl font-black uppercase text-noir/20">Brand Cohesion</h3>
               <p className="text-[11px] uppercase tracking-widest text-noir/40 font-bold leading-relaxed">Maintaining a consistent visual language across all platforms for maximum brand recall.</p>
            </div>
            <div className="space-y-4">
               <Layout className="w-6 h-6 text-amber/40" />
               <h3 className="text-xl font-black uppercase text-noir/20">Golden Ratio</h3>
               <p className="text-[11px] uppercase tracking-widest text-noir/40 font-bold leading-relaxed">Mathematical precision in layout design to guide the viewer's eye exactly where it needs to go.</p>
            </div>
            <div className="space-y-4">
               <Share2 className="w-6 h-6 text-amber/40" />
               <h3 className="text-xl font-black uppercase text-noir/20">High Conversion</h3>
               <p className="text-[11px] uppercase tracking-widest text-noir/40 font-bold leading-relaxed">Posts designed with marketing psychology to drive engagement and save rates.</p>
            </div>
          </div>

          {/* The Gallery - Single Item centered and square "frame" */}
          <div className="flex justify-center md:justify-start">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                className="group cursor-zoom-in max-w-md w-full relative"
                onClick={() => setSelectedImage(item.src)}
              >
                {/* The "Frame" - now square and matches the image exactly */}
                <div className="relative aspect-square rounded-[60px] overflow-hidden bg-white p-4 border border-noir/5 shadow-2xl transition-all duration-500 hover:shadow-amber/20">
                  <div className="relative w-full h-full rounded-[45px] overflow-hidden bg-softGray">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-noir/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 bg-cream text-noir rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Tag Overlay */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-cream/80 backdrop-blur-md rounded-full border border-noir/5">
                      <span className="text-[9px] font-black uppercase tracking-widest">{item.tag}</span>
                    </div>

                    {/* Text Content Overlay - Inside the square frame */}
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-noir/80 via-noir/40 to-transparent flex justify-between items-end">
                      <div>
                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-cream leading-none">{item.title}</h4>
                        <p className="text-[10px] uppercase tracking-widest text-cream/60 font-bold mt-2">Design Instance // 01</p>
                      </div>
                      <span className="text-amber text-lg font-black pb-1 animate-pulse">✦</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-48 pt-24 border-t border-noir/10 text-center">
            <span className="text-amber text-xs font-black uppercase tracking-[0.6em] mb-12 block">Transform Your Socials</span>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-16 italic opacity-5 leading-none">CRAFTED FOR IMPACT</h2>
            <button 
              onClick={onBack}
              className="px-16 py-8 bg-noir text-cream rounded-full text-sm uppercase tracking-[0.4em] font-black hover:bg-amber hover:text-noir transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.1)]"
            >
              Back to Main Hub
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IGPostDesignPage;