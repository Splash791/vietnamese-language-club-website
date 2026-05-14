import type { Metadata } from 'next';
import { config } from '@/config';
import './globals.css';
import './layout.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

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
        <LanguageProvider>
          <Navigation />
          <main className="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
