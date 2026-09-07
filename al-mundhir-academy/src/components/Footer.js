'use client';

import Link from 'next/link';
import { Mail, Phone, MessageCircle, MapPin, Sparkles, Heart, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenTrialModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#040e16',
      color: '#f8fafc',
      borderTop: '2px solid rgba(205, 168, 78, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Gold Border Glow */}
      <div style={{
        height: '2px',
        width: '100%',
        background: 'linear-gradient(90deg, transparent 0%, #cda84e 50%, transparent 100%)'
      }} />

      <div className="container" style={{ paddingTop: '70px', paddingBottom: '40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Column 1: Brand & Narrative */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1.5px solid #cda84e',
                background: '#ffffff'
              }}>
                <img
                  src="/assets/logo.jpg"
                  alt="شعار أكاديمية المنذر"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#f8fafc', margin: 0 }}>
                  أكاديمية المُنذِر
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#cda84e', fontFamily: 'var(--font-amiri)', fontWeight: 600 }}>
                  نتعلّم ... لنفهم ... لنرتقي
                </span>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '20px' }}>
              صرحٌ تعليمي متخصص في تعليم القرآن الكريم وعلومه، نربط قلوب أبنائنا بكتاب الله حفظاً وفهماً وعملاً، بحلقات فردية خاصة ومتابعة مستمرة.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1KBYMsXk6r/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(205, 168, 78, 0.12)',
                  border: '1px solid rgba(205, 168, 78, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cda84e',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                aria-label="فيسبوك"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/al_mundhir_academy?igsi=enZ6c2d1OWY0OTNi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(205, 168, 78, 0.12)',
                  border: '1px solid rgba(205, 168, 78, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cda84e',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                aria-label="إنستجرام"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/201551669364"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                aria-label="واتساب"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#cda84e', marginBottom: '20px' }}>
              روابط سريعة
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  عن أكاديمية المنذر ورؤيتنا
                </Link>
              </li>
              <li>
                <Link href="/#programs" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  المسارات والبرامج التعليمية
                </Link>
              </li>
              <li>
                <Link href="/#why-us" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  لماذا يختارنا أولياء الأمور؟
                </Link>
              </li>
              <li>
                <Link href="/#pricing" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  باقات الاشتراك والأسعار
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>
                  تواصل معنا والحجز المباشر
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#cda84e', marginBottom: '20px' }}>
              المسارات الأكاديمية
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: '#94a3b8' }}>
              <li>📖 تحفيظ القرآن الكريم مع أحكام التجويد</li>
              <li>✨ كورس تجويد تفاعلي للمبتدئين</li>
              <li>🌱 تأسيس اللغة العربية (نور البيان والقاعدة النورانية)</li>
              <li>🕌 تدريس العلوم الشرعية (فقه، عقيدة، حديث)</li>
              <li>🌟 تأسيس وعي الطفل المسلم والآداب النبوية</li>
              <li>📚 تقوية وتأسيس المناهج المدرسية</li>
            </ul>
          </div>

          {/* Column 4: Contact Information (Visible Email Required) */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#cda84e', marginBottom: '20px' }}>
              بيانات التواصل المباشر
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem' }}>
              {/* WhatsApp & Phone */}
              <a
                href="https://wa.me/201551669364"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f8fafc', textDecoration: 'none' }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(37, 211, 102, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366' }}>
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>واتساب / اتصال هاتف</div>
                  <div style={{ fontWeight: 700, direction: 'ltr', textAlign: 'right' }}>01551669364 (20+)</div>
                </div>
              </a>

              {/* Email (Explicitly Displayed as requested in intake) */}
              <a
                href="mailto:almudhiracademy0@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f8fafc', textDecoration: 'none' }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(205, 168, 78, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cda84e' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>البريد الإلكتروني الرسمي</div>
                  <div style={{ fontWeight: 700, direction: 'ltr', textAlign: 'right', fontSize: '0.86rem' }}>almudhiracademy0@gmail.com</div>
                </div>
              </a>

              {/* Markets */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>نطاق التعليم</div>
                  <div style={{ fontWeight: 600, color: '#f8fafc' }}>مصر ودول الخليج العربي أونلاين</div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenTrialModal}
              className="btn-gold"
              style={{ width: '100%', marginTop: '20px', padding: '10px', fontSize: '0.9rem' }}
            >
              <Sparkles size={16} />
              احجز حصة تجريبية مجانية
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.85rem',
          color: '#94a3b8'
        }}>
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} <strong style={{ color: '#cda84e' }}>أكاديمية المنذر (Al-Mundhir Quran Academy)</strong>.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>نتعلّم ... لنفهم ... لنرتقي</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(205, 168, 78, 0.1)',
                border: '1px solid rgba(205, 168, 78, 0.25)',
                color: '#cda84e',
                padding: '6px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem'
              }}
            >
              <ArrowUp size={14} /> للأعلى
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
