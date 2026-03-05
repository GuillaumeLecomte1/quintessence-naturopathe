import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quintessence - Delphine BAUMONT | Naturopathe a Roppe',
  description: 'Naturopathe certifiee FENA a Roppe. Consultations personnalisees.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
