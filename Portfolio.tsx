import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onNavigateToThumbnails?: () => void;
  onNavigateToIGPosts?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigateToThumbnails, onNavigateToIGPosts }) => {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-cream">
      <div className="mb-20">
        <div className="space-y-4">
          <span className="text-amber text-xs uppercase tracking-[0.4em] font-black">Graphic Works</span>
          
          <div className="relative flex flex-col">
            {/* Upper line: Graphic Designing */}
            <h2 className="text-3xl md:text-4xl lg:text-[3.5vw] font-black uppercase tracking-tighter leading-tight text-noir whitespace-nowrap">
              Graphic Designing
            </h2>
            
            {/* Lower line: Portfolio - Reduced size slightly from 11vw to 9.5vw for a more refined look */}
            <h2 className="text-5xl md:text-7xl lg:text-[9.5vw] font-black uppercase tracking-tighter leading-[0.8] text-noir -mt-2 md:-mt-4">
              Portfolio
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {PROJECTS.map((project, idx) => {
          const isLarge = project.size === 'large';
          const isThumbnailProject = project.id === '1';
          const isIGPostProject = project.id === '2';
          const hasYellowTitle = isThumbnailProject || isIGPostProject;

          const handleProjectClick = () => {
            if (isThumbnailProject && onNavigateToThumbnails) {
              onNavigateToThumbnails();
            } else if (isIGPostProject && onNavigateToIGPosts) {
              onNavigateToIGPosts();
            }
          };

          return (
            <div 
              key={project.id} 
              className={`relative ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div 
                onClick={handleProjectClick}
                className={`group relative overflow-hidden rounded-[40px] cursor-pointer ${
                  isLarge ? 'aspect-video' : 'aspect-square'
                }`}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                    idx % 2 === 0 ? 'bg-softGray' : 'bg-noir'
                  }`}
                />
                
                <div className="absolute inset-0 bg-noir/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                  <div className="flex justify-between items-end transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber">
                        {project.category}
                      </span>
                      <h3 className={`text-3xl font-black uppercase ${hasYellowTitle ? 'text-amber' : 'text-cream'}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-cream/70 max-w-xs">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-col items-center group/arrow relative">
                      <span className="absolute -top-12 opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300 text-[10px] font-black uppercase tracking-widest bg-amber text-noir px-3 py-1.5 rounded-full whitespace-nowrap shadow-xl">
                        {(isThumbnailProject || isIGPostProject) ? 'VIEW DESIGNS' : 'VIEW PROJECT'}
                      </span>
                      <div 
                        className="w-14 h-14 bg-amber rounded-full flex items-center justify-center text-noir hover:scale-110 transition-transform duration-300"
                      >
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute top-6 left-6 ${idx === 1 ? 'bg-noir/80' : 'bg-cream/10'} backdrop-blur-md px-4 py-1.5 rounded-full border border-cream/20`}>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cream">
                    Design {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;