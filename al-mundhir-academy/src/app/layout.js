import './globals.css';import Reveal from '../components/Reveal';import Navbar from '../components/Navbar';import Footer from '../components/Footer';import FloatingWhatsApp from '../components/FloatingWhatsApp';
export const viewport={width:'device-width',initialScale:1,themeColor:'#11120f'};
export const metadata={title:{default:'أكادمية المنذر | Al-Mundhir Quran Academy',template:'%s | أكادمية المنذر'},description:'تعليم القرآن الكريم وتجويده، وتأسيس اللغة العربية والعلوم الشرعية أونلاين للأطفال والكبار، مع متابعة مستمرة لكل طالب.',icons:{icon:'/logo.jpg'}};
export default function RootLayout({children}){return <html lang="ar" dir="rtl"><body><Reveal/><Navbar/>{children}<Footer/><FloatingWhatsApp/></body></html>}

