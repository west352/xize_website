'use client';

import { useState } from 'react';
import { LogoIcon, MenuIcon, CloseIcon } from './Icons';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Choose Us' },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <LogoIcon className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Xize Auto Parts</span>
            </a>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-primary-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center rounded-lg border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {[...navLinks, { href: '#contact', label: 'Contact Us' }].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-primary-50 hover:text-primary-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
