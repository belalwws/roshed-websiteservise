import './globals.css';

export const metadata = {
  title: 'أكاديمية المنذر | صرح تعليم القرآن الكريم والعلوم الشرعية وتأسيس وعي الطفل المسلم',
  description: 'أكاديمية المنذر Al-Mundhir Quran Academy - صرح تعليمي متخصص في تحفيظ القرآن الكريم وتجويده، تأسيس اللغة العربية ونور البيان، تدريس العلوم الشرعية، وتأسيس وعي الطفل المسلم بحلقات فردية خاصة 1-on-1 ومتابعة مستمرة.',
  keywords: [
    'أكاديمية المنذر',
    'Al-Mundhir Academy',
    'تحفيظ القرآن أونلاين',
    'تعليم التجويد للأطفال',
    'تأسيس نور البيان',
    'القاعدة النورانية',
    'العلوم الشرعية للأطفال',
    'حلقات قرآن خاصة',
    'تحفيظ قرآن السعودية والخليج'
  ],
  icons: {
    icon: '/assets/logo.jpg',
  },
  openGraph: {
    title: 'أكاديمية المنذر | نتعلّم ... لنفهم ... لنرتقي',
    description: 'صرح تعليمي متخصص في تعليم القرآن الكريم وعلومه، نربط قلوب أبنائنا بكتاب الله حفظاً وفهماً وعملاً بحلقات فردية 1-on-1.',
    siteName: 'أكاديمية المنذر',
    locale: 'ar_EG',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#071722" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
