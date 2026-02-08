import React, { useEffect, useState } from 'react';
import { ArrowLeft, Play, Share2, Film, Monitor, Tv } from 'lucide-react';
import { VIDEO_PROJECTS } from '../constants';
import { VideoProject } from '../types';

interface VideoEditsPageProps {
  onBack: () => void;
}

const VideoEditsPage: React.FC<VideoEditsPageProps> = ({ onBack }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Expanded gallery for the full page
  const extendedVideos: VideoProject[] = [
    ...VIDEO_PROJECTS,
    {
      id: 'v5',
      title: 'Motion Design',
      thumbnailUrl: 'https://i.ibb.co/RxskVW4/Screenshot-2026-02-06-213737.png',
      externalUrl: 'https://drive.google.com/file/d/1_K3wvk4oidSGej37CcxC6-M4aJ6odMdL/view?usp=sharing',
      duration: '1:45',
      category: 'Cinematic',
      tags: ['Animation', 'Long Form', 'Motion']
    },
    {
      id: 'v6',
      title: 'TECH VIDEO#02',
      thumbnailUrl: 'https://www.temp-image.com/ib/E4rcnS9YVXjrMVl_1770397055.jpg',
      externalUrl: 'https://youtu.be/M9vjYtyCsQ4?si=7y5WSz9ymD4Fiw9J',
      duration: '0:55',
      category: 'Motion Design',
      tags: ['Clean', 'Clear', 'Long Form']
    }
  ];

  const handleVideoClick = (video: VideoProject) => {
    if (video.externalUrl) {
      window.open(video.externalUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-noir text-cream pb-32">
      {/* Cinematic Header */}
      <header className="fixed top-0 left-0 w-full bg-noir/80 backdrop-blur-xl z-50 py-6 px-6 md:px-12 border-b border-cream/5 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center space-x-3 group"
        >
          <div className="w-10 h-10 bg-amber text-noir rounded-full flex items-center justify-center group-hover:bg-cream transition-all duration-500">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-amber transition-colors">Return to Hub</span>
        </button>
        <div className="flex items-center space-x-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cream/20">Archive // VOL. 01</span>
            <div className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
            </div>
        </div>
      </header>

      <main className="pt-40 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Title / Hero Area */}
        <div className="mb-32">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-20 bg-amber" />
            <span className="text-amber text-xs uppercase tracking-[0.6em] font-black">Cinematic Archive</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-[12vw] md:text-[140px] font-black uppercase leading-[0.8] tracking-[ -0.05em]">
                Video<br /><span className="text-cream/20">Edits.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-6">
               <p className="text-lg text-cream/40 font-light leading-relaxed uppercase tracking-tight lg:text-right">
                 A curated selection of motion works exploring the boundary between technical perfection and raw visual narrative. From rapid VFX cuts to slow cinematic storytelling.
               </p>
            </div>
          </div>
        </div>

        {/* Filter / Categories */}
        <div className="flex flex-wrap gap-4 mb-20 border-b border-cream/10 pb-8">
            {['All Works', 'VFX', 'Commercial', 'Music Video', 'Motion Graphics', 'Short Film'].map((cat, idx) => (
                <button key={cat} className={`text-[10px] uppercase tracking-[0.3em] font-bold px-6 py-2 rounded-full border transition-all duration-300 ${idx === 0 ? 'bg-amber text-noir border-amber' : 'border-cream/20 hover:border-amber hover:text-amber'}`}>
                    {cat}
                </button>
            ))}
        </div>

        {/* Video Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {extendedVideos.map((video, idx) => (
            <div 
              key={video.id} 
              className={`group relative flex flex-col cursor-pointer ${idx % 3 === 1 && !video.aspectRatio ? 'lg:mt-12' : ''}`}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleVideoClick(video)}
            >
              <div className={`relative ${video.aspectRatio || 'aspect-[16/10]'} overflow-hidden rounded-[40px] border border-cream/5 shadow-2xl bg-softGray/5`}>
                {/* Static Frame / Thumbnail */}
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    hoveredId === video.id && video.videoUrl ? 'opacity-0 scale-110' : 'opacity-100'
                  }`}
                />

                {/* Video reveal on hover */}
                {video.videoUrl && hoveredId === video.id && (
                  <div className="absolute inset-0 z-10 animate-in fade-in duration-500">
                    {video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
                      <iframe 
                        src={`${video.videoUrl}${video.videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1`}
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
                
                {/* Info Overlay (Hover State Only) */}
                <div className="absolute inset-0 bg-noir/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-8 z-20 pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div />
                  </div>

                  <div className="flex items-center justify-center flex-grow">
                     <div className="w-16 h-16 bg-amber text-noir rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Play className="w-6 h-6 fill-current ml-1" />
                     </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-cream">{video.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {video.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-[0.3em] text-cream/40 font-bold px-2 py-1 border border-cream/5 rounded-md">{tag}</span>
                        ))}
                    </div>
                  </div>
                </div>

                <button className="absolute top-6 right-6 w-12 h-12 bg-cream/10 backdrop-blur-md rounded-full flex items-center justify-center border border-cream/20 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-amber hover:text-noir z-30">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Stats Overlay Style */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-cream/10">
            <div className="space-y-4">
                <Monitor className="w-8 h-8 text-amber mb-4" />
                <h4 className="text-xl font-black uppercase tracking-tight">Resolution Mastery</h4>
                <p className="text-xs text-cream/40 uppercase tracking-widest leading-relaxed">
                    All edits delivered in up to 4K Raw formats with industry standard color grading (Log/Rec.709).
                </p>
            </div>
            <div className="space-y-4">
                <Tv className="w-8 h-8 text-amber mb-4" />
                <h4 className="text-xl font-black uppercase tracking-tight">Post-Production</h4>
                <p className="text-xs text-cream/40 uppercase tracking-widest leading-relaxed">
                    Advanced sound design and Foley layering included in every cinematic narrative project.
                </p>
            </div>
            <div className="space-y-4">
                <div className="text-4xl font-black italic text-amber mb-4">24fps</div>
                <h4 className="text-xl font-black uppercase tracking-tight">The Frame Rate</h4>
                <p className="text-xs text-cream/40 uppercase tracking-widest leading-relaxed">
                    Maintaining the cinematic feel through intentional motion blur and professional timing.
                </p>
            </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-40 text-center">
            <h2 className="text-[10vw] font-black uppercase tracking-tighter opacity-10 mb-12">START FILMING</h2>
            <button 
              onClick={() => window.location.hash = '#contact'}
              className="px-16 py-8 bg-amber text-noir rounded-full text-sm uppercase tracking-[0.5em] font-black hover:bg-cream transition-all duration-500 hover:scale-105 shadow-[0_0_80px_rgba(244,183,64,0.3)]"
            >
              Collaborate on a Reel
            </button>
        </div>
      </main>
    </div>
  );
};

export default VideoEditsPage;