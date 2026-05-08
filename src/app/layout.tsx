import type { Metadata } from 'next';
import './globals.css';
import './layout.css';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Vietnamese Language Club at OSU',
  description: 'Learn Vietnamese with the OSU community. Master speaking, listening, grammar, and vocabulary through structured lessons and conversation practice.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout">
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
