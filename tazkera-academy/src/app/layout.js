import './globals.css';

export const metadata = {
  title: 'Tazkera Academy | Personalized Quran, Arabic & Islamic Studies',
  description: 'Tazkera Academy offers personalized Qur’an, Tajweed, Arabic language, and Islamic studies for non-Arabic speakers, with teaching experience since 2017 and two free trial lessons with two different teachers.',
  icons: {
    icon: '/assets/tazkera-official-logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/tazkera-official-logo.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
