import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delphine BAUMONT - Naturopathe à Roppe | Quintessence',
  description: 'Consultations en naturopathie à Roppe (90380). Delphine BAUMONT vous accompagne naturellement pour retrouver votre bien-être.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
