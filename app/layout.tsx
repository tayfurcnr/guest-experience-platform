import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Venuego',
  description: 'Brand, branch and campaign discovery platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
