'use client';

import { LogoIcon, LocationIcon, MailIcon } from './Icons';
import AnchorLink from './AnchorLink';

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact' },
];

type FooterProps = {
  address: string;
  email: string;
};

export default function Footer({ address, email }: FooterProps) {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2">
              <LogoIcon className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Xize Auto Parts</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional automotive parts for BYD and Volkswagen vehicles. Serving customers
              with quality and reliability since 1995.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <AnchorLink
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <LocationIcon className="mr-2 h-8 w-8" />
                {address}
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-2 h-5 w-5" />
                {email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Shandong Xize Auto Parts Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
