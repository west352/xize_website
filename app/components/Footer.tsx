'use client';

import { LogoIcon, LocationIcon, MailIcon, FacebookIcon } from './Icons';
import { navLinks } from './Navigation';
import AnchorLink from './AnchorLink';

type FooterProps = {
  address: string;
  email: string;
  facebook: string;
};

export default function Footer({ address, email, facebook }: FooterProps) {
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
              Professional automotive parts for BYD and Volkswagen vehicles. Serving customers with
              quality and reliability since 1998.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
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
              <li className="flex items-center">
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-white"
                >
                  <FacebookIcon className="mr-2 h-5 w-5" />
                  Facebook
                </a>
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
