
import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Graphic Portfolio', href: '#portfolio' },
    { name: 'Video Portfolio', href: '#video-portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between ${
        scrolled ? 'bg-cream/80 backdrop-blur-md border-b border-noir/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="flex space-x-0.5">
          <div className="w-4 h-4 rounded-full bg-noir" />
          <div className="w-4 h-4 rounded-full border-2 border-noir" />
        </div>
      </div>

      <div className="hidden xl:flex items-center space-x-12">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs font-medium uppercase tracking-[0.2em] hover:text-amber transition-colors relative group whitespace-nowrap"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4 text-xs font-medium tracking-widest text-noir/60">
        <span className="hidden lg:inline-flex items-center">
          <span className="text-amber mr-2">✦</span> rishuedits
        </span>
        <div className="w-6 h-6 rounded-full bg-amber/20 flex items-center justify-center">
          <Globe className="w-3.5 h-3.5 text-amber" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
