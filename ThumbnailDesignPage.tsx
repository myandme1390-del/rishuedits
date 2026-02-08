import React, { useEffect, useState } from 'react';
import { ArrowLeft, Grid, Layout, Layers, X } from 'lucide-react';

interface ThumbnailDesignPageProps {
  onBack: () => void;
}

const ThumbnailDesignPage: React.FC<ThumbnailDesignPageProps> = ({ onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      title: "Nothing Phone 3A Review",
      src: "https://i.ibb.co/ym6Cmn8g/nothing-thumb.jpg",
      type: "Wide"
    },
    {
      title: "Human Mind Podcast",
      src: "https://i.ibb.co/m5KvfXzD/podcaste-thumbnail-1.jpg",
      type: "Wide"
    },
    {
      title: "YouTube Trends Analysis",
      src: "https://i.ibb.co/ynwWsvn2/thumbnail-1.jpg",
      type: "Wide"
    },
    {
      title: "$400 Billion SpaceX Story",
      src: "https://i.ibb.co/Rp3bBkm4/spacex.jpg",
      type: "Wide"
    },
    {
      title: "Dirty Politics Breakdown",
      src: "https://i.ibb.co/20WbJ8cN/thumb-4.jpg",
      type: "Wide"
    },
    {
      title: "Paytm Business Crisis",
      src: "https://i.ibb.co/zWJC9Fg8/paytm-closed.jpg",
      type: "Wide"
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
          
          <div className="relative max-w-6xl w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-cream/10">
            <img 
              src={selectedImage} 
              alt="Zoomed Work" 
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-8">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cream/40">Editorial Selection // RishuEdits</span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-cream/80 backdrop-blur-md z-50 py-6 px-6 md:px-12 border-b border-noir/5 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 group"
        >
          <div className="w-10 h-10 bg-noir text-cream rounded-full flex items-center justify-center group-hover:bg-amber group-hover:text-noir transition-all duration-300">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-amber transition-colors">Back to Portfolio</span>
        </button>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-noir/40">RishuEdits // DESIGN 01</span>
      </header>

      {/* Main Content */}
      <main className="pt-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-end">
            <div>
              <span className="text-amber text-xs uppercase tracking-[0.4em] font-black block mb-6">Specialization</span>
              <h1 className="text-[12vw] md:text-[100px] lg:text-[120px] font-black uppercase leading-[0.85] tracking-tighter">
                Thumbnail<br />Designs
              </h1>
            </div>
            <div className="lg:pb-4">
              <p className="text-base md:text-lg font-light leading-relaxed text-noir/70 uppercase max-w-md lg:ml-auto lg:text-right">
                Visual hooks designed to capture attention in the first 0.1 seconds of scrolling. High retention, high impact.
              </p>
            </div>
          </div>

          {/* Stats / Info Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-noir/10 mb-20">
            <div className="space-y-2">
              <Layout className="w-5 h-5 text-amber" />
              <h4 className="text-[10px] uppercase font-black tracking-widest text-noir/40">Approach</h4>
              <p className="text-xs font-bold uppercase">Grid-First Composition</p>
            </div>
            <div className="space-y-2">
              <Layers className="w-5 h-5 text-amber" />
              <h4 className="text-[10px] uppercase font-black tracking-widest text-noir/40">Technique</h4>
              <p className="text-xs font-bold uppercase">Dynamic Layering</p>
            </div>
            <div className="space-y-2">
              <Grid className="w-5 h-5 text-amber" />
              <h4 className="text-[10px] uppercase font-black tracking-widest text-noir/40">CTR Boost</h4>
              <p className="text-xs font-bold uppercase">Avg +24% increase</p>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-black italic">50+</span>
              <h4 className="text-[10px] uppercase font-black tracking-widest text-noir/40">Custom Works</h4>
              <p className="text-xs font-bold uppercase">Across 12 Genres</p>
            </div>
          </div>

          {/* Editorial Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(item.src)}
                className={`group relative overflow-hidden rounded-[40px] shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-zoom-in ${
                  item.type === 'Wide' ? 'aspect-video' : 
                  item.type === 'Tall' ? 'row-span-2 aspect-[3/5]' : 'aspect-square'
                }`}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-amber text-[10px] uppercase tracking-widest font-black mb-2">THUMBNAIL 0{idx + 1}</span>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-black text-cream uppercase tracking-tight">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Footer */}
          <div className="mt-40 text-center space-y-8">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-noir/10">Elevate Your Presence</h2>
            <button 
              onClick={onBack}
              className="px-12 py-6 bg-noir text-cream rounded-full text-xs uppercase tracking-[0.4em] font-black hover:bg-amber hover:text-noir transition-all duration-500 shadow-2xl"
            >
              Start Your Design Journey
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThumbnailDesignPage;