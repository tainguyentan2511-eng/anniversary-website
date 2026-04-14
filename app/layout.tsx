import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Happy 3rd Anniversary 💕 | Our Love Story',
  description: 'Celebrating 3 beautiful years of love, laughter, and unforgettable memories together.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}