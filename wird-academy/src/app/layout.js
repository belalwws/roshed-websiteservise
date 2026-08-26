import './globals.css';

export const metadata = {
  metadataBase: new URL('https://wirdacademy.com'),
  title: 'Wird Academy | أكاديمية ورد - Read it as it was revealed',
  description: 'Wird Academy offers 1-on-1 online Quran recitation, Tajweed, Classical Arabic, and Islamic Studies with certified Al-Azhar Ijazah scholars. 100% personalized learning for students worldwide.',
  keywords: 'Wird Academy, أكاديمية ورد, Learn Quran online, Tajweed classes, Noor Al-Bayan, Al-Azhar certified tutors, Quran memorization Hifz, Islamic studies in English, Arabic for non-native speakers',
  icons: {
    icon: '/assets/logo.jpg',
    apple: '/assets/logo.jpg',
  },
  openGraph: {
    title: 'Wird Academy | Read it as it was revealed',
    description: 'Bespoke 1-on-1 online Quran, Tajweed, and Arabic education with certified Al-Azhar scholars holding authentic Ijazah.',
    images: [
      {
        url: '/assets/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Wird Academy Logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.jpg" type="image/jpeg" />
        <meta name="theme-color" content="#081b33" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
