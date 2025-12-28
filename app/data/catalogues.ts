// Cloudflare R2 bucket base URL (from environment variable)
const R2_BASE_URL = process.env.NEXT_PUBLIC_R2_BASE_URL || '';

export interface Catalogue {
  id: string;
  title: string;
  description: string;
  filename: string; // The PDF filename in R2 bucket
}

// Add your catalogues here
export const catalogues: Catalogue[] = [
  {
    id: 'byd-parts',
    title: 'BYD Parts',
    description: 'Complete catalogue of genuine and aftermarket parts for BYD vehicles',
    filename: 'byd.pdf',
  },
  {
    id: 'vw-parts',
    title: 'Volkswagen Parts',
    description: 'Comprehensive parts listing for Volkswagen models',
    filename: 'vw.pdf',
  },
  {
    id: 'byd-parts2',
    title: 'BYD Parts',
    description: 'Complete catalogue of genuine and aftermarket parts for BYD vehicles',
    filename: 'byd.pdf',
  },
  {
    id: 'vw-parts2',
    title: 'Volkswagen Parts',
    description: 'Comprehensive parts listing for Volkswagen models',
    filename: 'vw.pdf',
  },
  {
    id: 'vw-parts3',
    title: 'Volkswagen Parts',
    description: 'Comprehensive parts listing for Volkswagen models',
    filename: 'vw.pdf',
  },
];

// Helper function to get the full URL for a catalogue PDF
export function getCatalogueUrl(filename: string): string {
  return `${R2_BASE_URL}/catalogues/${filename}`;
}
