import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xizeautoparts.com'),
  title: 'Shandong Xize Auto Parts - BYD & Volkswagen Parts Wholesale & Export',
  description:
    'Shandong Xize Auto Parts Co., Ltd. is a professional automotive parts company specializing in wholesale and retail of BYD and Volkswagen parts. 30 years experience, 10+ stores, export services available.',
  keywords:
    'auto parts, BYD parts, Volkswagen parts, car parts wholesale, automotive parts export, Shandong auto parts, China auto parts supplier',
  authors: [{ name: 'Shandong Xize Auto Parts Co., Ltd.' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://xizeautoparts.com/',
    title: 'Shandong Xize Auto Parts - BYD & Volkswagen Parts Wholesale & Export',
    description:
      'Shandong Xize Auto Parts Co., Ltd. is a professional automotive parts company specializing in wholesale and retail of BYD and Volkswagen parts. 30 years experience, 10+ stores, export services available.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shandong Xize Auto Parts - BYD & Volkswagen Parts Wholesale & Export',
    description:
      'Shandong Xize Auto Parts Co., Ltd. is a professional automotive parts company specializing in wholesale and retail of BYD and Volkswagen parts. 30 years experience, 10+ stores, export services available.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/images/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shandong Xize Auto Parts Co., Ltd.',
              description:
                'Professional automotive parts company specializing in wholesale and retail of BYD and Volkswagen parts',
              url: 'https://xizeautoparts.com',
              foundingDate: '1995',
              numberOfEmployees: {
                '@type': 'QuantitativeValue',
                value: 100,
              },
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Shandong',
                addressCountry: 'CN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'contact@xizeautoparts.com',
              },
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 font-sans antialiased">{children}</body>
    </html>
  );
}
