import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PeriyaFlavours • Tamil Nadu\'s Finest',
  description: 'Discover the best restaurants and authentic Tamil Nadu dishes in Periyakulam',
  icons: {
    icon: "/biryani.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="bg-zinc-950 text-zinc-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}