import './globals.css';

export const metadata = {
  metadataBase: new URL('https://jazeelacademy.com'),
  title: 'Jazeel Academy | أكاديمية جزيل - Learn Quran, Tajweed, Arabic & Islamic Studies',
  description: 'Jazeel Academy offers 1-on-1 online Quran recitation, Tajweed, Classical Arabic, and Islamic Studies in English for non-native speakers worldwide. Licensed by Al-Azhar Al-Sharif with 12+ years of teaching experience. Free trial lesson available.',
  keywords: 'Quran online, learn Tajweed, Islamic studies in English, Arabic for non-native speakers, Al-Azhar certified teachers, Ijazah Hafs Asim, Quran classes for kids UK USA Europe, Jazeel Academy, أكاديمية جزيل',
  icons: {
    icon: '/assets/logo.jpg',
    apple: '/assets/logo.jpg',
  },
  openGraph: {
    title: 'Jazeel Academy | Premium Online Quran & Islamic Studies',
    description: 'Master Quran recitation, Tajweed, and Islamic sciences with certified Azhari scholars. 1-on-1 interactive online classes for kids & adults in English.',
    images: [
      {
        url: '/assets/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Jazeel Academy Logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.jpg" type="image/jpeg" />
        <meta name="theme-color" content="#0b2545" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
