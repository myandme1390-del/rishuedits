import React, { useState } from 'react';
import { VIDEO_PROJECTS } from '../constants';
import { Play, Share2 } from 'lucide-react';

interface VideoPortfolioProps {
  onNavigateToVideoEdits?: () => void;
}

const VideoPortfolio: React.FC<VideoPortfolioProps> = ({ onNavigateToVideoEdits }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleVideoClick = (video: typeof VIDEO_PROJECTS[0]) => {
    if (video.externalUrl) {
      window.open(video.externalUrl, '_blank');
    }
  };

  return (
    <section id="video-portfolio" className="py-24 px-6 md:px-12 bg-noir text-cream">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
        <div className="space-y-4">
          <span className="text-amber text-xs uppercase tracking-[0.4em] font-black">Motion Works</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-tight">
            Video Editing<br /><span className="text-cream/30">Portfolio</span>
          </h2>
        </div>
        <div className="max-w-md lg:text-right lg:ml-auto">
          <p className="text-cream/60 text-lg font-light leading-relaxed">
            Crafting rhythm through frames. Our video editing philosophy blends technical precision with emotional storytelling to create unforgettable motion experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 lg:justify-end">
            {['Color Grading', 'Sound Design', 'VFX', 'Storytelling'].map(tag => (
              <span key={tag} className="px-4 py-1.5 border border-cream/20 rounded-full text-[10px] uppercase tracking-widest font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {VIDEO_PROJECTS.map((video) => (
          <div 
            key={video.id} 
            className="group cursor-pointer relative"
            onMouseEnter={() => setHoveredId(video.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleVideoClick(video)}
          >
            <div className={`relative ${video.aspectRatio || 'aspect-video'} rounded-[40px] overflow-hidden border border-cream/5 bg-softGray/5`}>
              {/* Static Thumbnail / Frame Pic */}
              <img 
                src={video.thumbnailUrl} 
                alt={video.title} 
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  hoveredId === video.id && video.videoUrl ? 'opacity-0 scale-105' : 'opacity-100'
                }`}
              />

              {/* Video Player */}
              {video.videoUrl && hoveredId === video.id && (
                <div className="absolute inset-0 z-10 animate-in fade-in duration-500">
                  {video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
                    <iframe 
                      src={`${video.videoUrl}${video.videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0`}
                      className="w-full h-full object-cover border-none pointer-events-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <video 
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </div>
              )}
              
              {/* Info Overlay (Hover State) */}
              <div className="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-8 md:p-10 z-20 pointer-events-none">
                <div className="flex justify-between items-start">
                  <div /> 
                </div>

                <div className="flex items-center justify-center flex-grow">
                   <div className="w-20 h-20 bg-amber rounded-full flex items-center justify-center text-noir transform scale-90 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-cream leading-none">
                    {video.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {video.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-cream/50 font-bold border border-cream/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="absolute top-6 right-6 w-10 h-10 bg-cream/10 backdrop-blur-md rounded-full flex items-center justify-center border border-cream/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <Share2 className="w-4 h-4 text-cream" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Center Button */}
      <div className="mt-24 flex justify-center">
        <button 
          onClick={onNavigateToVideoEdits}
          className="px-12 py-5 bg-cream text-noir rounded-full text-xs uppercase tracking-[0.4em] font-black hover:bg-amber transition-all duration-500 shadow-[0_0_30px_rgba(244,183,64,0.1)] hover:shadow-[0_0_50px_rgba(244,183,64,0.3)]"
        >
          View All Edits
        </button>
      </div>

      {/* CTA Section */}
      <div className="mt-32 pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-3xl font-black italic uppercase tracking-tighter">Ready to bring your motion to life?</p>
          <p className="text-cream/40 text-sm uppercase tracking-widest mt-2">Available for custom video editing & motion graphics</p>
        </div>
        <button className="px-12 py-5 bg-amber text-noir rounded-full text-[10px] uppercase tracking-[0.4em] font-black hover:bg-cream transition-all duration-300">
          Book a Project
        </button>
      </div>
    </section>
  );
};

export default VideoPortfolio;