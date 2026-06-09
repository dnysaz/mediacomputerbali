import type { SEO } from 'astro-seo';

const seo: SEO = {
  title: 'Media Computer Bali - Toko Komputer, Laptop, Rakitan PC & Jasa Instalasi Denpasar',
  description: 'Media Computer Bali di Jl. Gatot Subroto Gg. Turi Permai No 26 Denpasar. Jual laptop baru, rakitan PC gaming, aksesoris komputer, printer, dan jasa instalasi software. Harga kompetitif, bisa jemput/kirim.',
  canonical: 'https://mediacomputerbali.com',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://mediacomputerbali.com',
    siteName: 'Media Computer Bali',
    title: 'Media Computer Bali | Toko Komputer & Laptop Denpasar',
    description: 'Toko komputer terpercaya di Denpasar. Laptop baru, PC gaming, aksesoris, printer, jasa instalasi software dengan harga kompetitif.',
    images: [
      {
        url: 'https://mediacomputerbali.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Media Computer Bali - Toko Komputer & Laptop Denpasar',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@mediacomputerbali',
    title: 'Media Computer Bali',
    description: 'Toko komputer, laptop, dan jasa instalasi software di Denpasar Bali.',
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Media Computer Bali',
    description: 'Toko komputer, laptop, rakitan PC, aksesoris, printer, dan jasa instalasi software di Denpasar Bali.',
    url: 'https://mediacomputerbali.com',
    telephone: '+6285738627984',
    email: 'mediacomputerbali@gmail.com',
    image: 'https://mediacomputerbali.com/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Gatot Subroto Gg. Turi Permai No 26',
      addressLocality: 'Denpasar',
      addressRegion: 'Bali',
      addressCountry: 'ID',
      postalCode: '80234',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.670458,
      longitude: 115.212629,
    },
    openingHours: ['Mo-Sa 09:00-21:00', 'Su 10:00-18:00'],
    priceRange: 'Rp',
    sameAs: [
      'https://wa.me/6285738627984',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Denpasar',
    },
  },
};

export default seo;
