'use client';

import { useState } from 'react';
import { LogoIcon, MenuIcon, CloseIcon } from './Icons';
import AnchorLink from './AnchorLink';

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#catalogues', label: 'Product Catalogues' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center space-x-2">
            <LogoIcon className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">Xize Auto Parts</span>
          </div>

          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => {
              if (link.href === '#contact')
                return (
                  <AnchorLink
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Contact Us
                  </AnchorLink>
                );
              return (
                <AnchorLink
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-700 transition-colors hover:text-primary-600"
                >
                  {link.label}
                </AnchorLink>
              );
            })}
          </div>

          <div className="lg:hidden">
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
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <AnchorLink
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                >
                  {link.label}
                </AnchorLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
