import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import MobileNav from '@/components/mobile-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HelloWorld',
  description: 'Feel Good Dance Music',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {' '}
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
