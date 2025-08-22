import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'Bright Brand Studio | Ethical Brand Strategy & Sustainable Marketing',
  description:
    'Audrey Meaulard - Ethical brand strategist helping conscious businesses in Australia build authentic, sustainable brands that make a positive impact.',
  keywords:
    'brand strategy, ethical branding, sustainable marketing, brand consultant Australia, conscious business, brand positioning, visual identity, content strategy',
  authors: [{ name: 'Audrey Meaulard' }],
  creator: 'Audrey Meaulard',
  publisher: 'Bright Brand Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brightbrandstudio.com.au'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/BBS-lightTheme.png', media: '(prefers-color-scheme: light)' },
      { url: '/BBS-darkTheme.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: [
      { url: '/BBS-lightTheme.png', media: '(prefers-color-scheme: light)' },
      { url: '/BBS-darkTheme.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      { url: '/BBS-lightTheme.png', media: '(prefers-color-scheme: light)' },
      { url: '/BBS-darkTheme.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://brightbrandstudio.com.au',
    siteName: 'Bright Brand Studio',
    title:
      'Bright Brand Studio | Ethical Brand Strategy & Sustainable Marketing',
    description:
      'Audrey Meaulard - Ethical brand strategist helping conscious businesses in Australia build authentic, sustainable brands that make a positive impact.',
    images: [
      {
        url: '/logo-BBS.png',
        width: 1200,
        height: 630,
        alt: 'Bright Brand Studio - Ethical Brand Strategy',
      },
    ],
  },
  linkedin: {
    title:
      'Bright Brand Studio | Ethical Brand Strategy & Sustainable Marketing',
    description:
      'Audrey Meaulard - Ethical brand strategist helping conscious businesses in Australia build authentic, sustainable brands that make a positive impact.',
    images: ['/logo-BBS.png'],
    url: 'https://brightbrandstudio.com.au',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
