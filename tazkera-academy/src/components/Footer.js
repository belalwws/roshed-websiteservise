import Link from 'next/link';
import Image from 'next/image';
import { Camera, Users, MessageCircle, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer premium-footer">
      <div className="footer-glow" />
      <div className="container premium-footer-top">
        <div className="footer-brand-block">
          <div className="footer-brand-row">
            <div className="footer-logo-shell">
              <Image
                src="/assets/tazkera-official-logo.jpg"
                alt="Tazkera Academy official logo"
                width={56}
                height={56}
                className="footer-brand-mark"
              />
            </div>
            <div>
              <div className="footer-brand">Tazkera Academy</div>
              <span className="footer-arabic-name" lang="ar" dir="rtl">أكاديمية تذكرة</span>
              <span className="footer-tagline">Light Your Path With The Quran</span>
            </div>
          </div>
          <p className="footer-desc">
            Personalized Qur’an, Tajweed, Arabic language, and Islamic studies for non-Arabic speakers of different ages and starting levels, guided by an experienced teaching team since 2017.
          </p>
          <div className="footer-verse-arabic">
            <span>اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</span>
            <small>“Recite in the name of your Lord who created”</small>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/#programs">Academic Programs</Link>
          <Link href="/#pricing">Tuition & Plans</Link>
          <Link href="/about">About Academy</Link>
          <Link href="/contact">Contact & Free Trial</Link>
        </div>

        <div className="footer-col">
          <h4>Programs</h4>
          <Link href="/#programs">Qur’an & Tajweed</Link>
          <Link href="/#programs">Arabic Language</Link>
          <Link href="/#programs">Noorani Qaida</Link>
          <Link href="/#programs">Islamic Studies</Link>
          <Link href="/contact#trial">Custom Learning Track</Link>
        </div>

        <div className="footer-col">
          <h4>Connect With Us</h4>
          <a href="https://wa.me/201105778132" target="_blank" rel="noreferrer" className="footer-social-link">
            <MessageCircle size={17} /> <span>WhatsApp: +20 110 577 8132</span> <ArrowUpRight size={14} />
          </a>
          <a href="https://www.instagram.com/tazkeraacademy?igsh=MXNuaXZ2dmowZDBndQ==" target="_blank" rel="noreferrer" className="footer-social-link">
            <Camera size={17} /> <span>Instagram: @tazkeraacademy</span> <ArrowUpRight size={14} />
          </a>
          <a href="https://www.facebook.com/share/14gEvZZWsoB/" target="_blank" rel="noreferrer" className="footer-social-link">
            <Users size={17} /> <span>Facebook: Tazkera Academy</span> <ArrowUpRight size={14} />
          </a>
          <a href="mailto:tazkeraacademy9@gmail.com" className="footer-social-link">
            <Mail size={17} /> <span>tazkeraacademy9@gmail.com</span> <ArrowUpRight size={14} />
          </a>
          <div className="footer-guarantee">
            <ShieldCheck size={16} />
            <span>2 Free Trial Lessons with 2 Different Teachers</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom premium-footer-bottom">
        <span>© {new Date().getFullYear()} Tazkera Academy. All rights reserved.</span>
        <div className="footer-bottom-links">
          <span>Learn with purpose · Grow with knowledge</span>
          <span>Made with care for non-Arabic Quran learners</span>
        </div>
      </div>
    </footer>
  );
}
