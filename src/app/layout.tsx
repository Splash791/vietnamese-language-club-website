import type { Metadata } from 'next';
import { config } from '@/config';
import './globals.css';
import './layout.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout">
        <Navigation />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
