
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import VideoPortfolio from './components/VideoPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThumbnailDesignPage from './components/ThumbnailDesignPage';
import VideoEditsPage from './components/VideoEditsPage';
import IGPostDesignPage from './components/IGPostDesignPage';

function App() {
  const [view, setView] = useState<'home' | 'thumbnails' | 'video-edits' | 'ig-posts'>('home');

  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } else if (href === '#') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, [view]);

  if (view === 'thumbnails') {
    return (
      <div className="relative min-h-screen selection:bg-amber selection:text-noir font-sans bg-cream">
        <ThumbnailDesignPage onBack={() => setView('home')} />
        <Footer />
      </div>
    );
  }

  if (view === 'ig-posts') {
    return (
      <div className="relative min-h-screen selection:bg-amber selection:text-noir font-sans bg-cream">
        <IGPostDesignPage onBack={() => setView('home')} />
        <Footer />
      </div>
    );
  }

  if (view === 'video-edits') {
    return (
      <div className="relative min-h-screen selection:bg-amber selection:text-noir font-sans bg-noir">
        <VideoEditsPage onBack={() => setView('home')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-amber selection:text-noir font-sans">
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero onExplore={() => setView('video-edits')} />
        
        {/* Editorial Divider */}
        <div className="h-[2px] bg-noir/5 mx-6 md:mx-12" />
        
        <About />
        
        <Portfolio 
          onNavigateToThumbnails={() => setView('thumbnails')} 
          onNavigateToIGPosts={() => setView('ig-posts')}
        />

        <VideoPortfolio onNavigateToVideoEdits={() => setView('video-edits')} />
        
        <Contact />
      </main>

      <Footer />
      
      {/* Background Accent Graphics */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-[0.03]">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full border border-noir" />
        <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] rounded-full border border-noir" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-noir rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-noir -rotate-12" />
      </div>
    </div>
  );
}

export default App;
