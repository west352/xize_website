'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-xl font-bold text-gray-900">Xize Auto Parts</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">About</a>
            <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Gallery</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Services</a>
            <a href="#why-us" onClick={(e) => handleLinkClick(e, '#why-us')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Why Choose Us</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200">Contact Us</a>
          </div>

          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">About</a>
              <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">Gallery</a>
              <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">Services</a>
              <a href="#why-us" onClick={(e) => handleLinkClick(e, '#why-us')} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">Why Choose Us</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
