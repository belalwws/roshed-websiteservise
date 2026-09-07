'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TrialModal from '../../components/TrialModal';
import {
  MessageCircle, Phone, Mail, MapPin, Clock, Send,
  Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, Globe
} from 'lucide-react';

export default function ContactPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'السعودية 🇸🇦',
    subject: 'حجز حصة تجريبية مجانية',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `✨ *رسالة واستفسار جديد من صفحة التواصل - أكاديمية المنذر* ✨%0A%0A` +
      `👤 *الاسم:* ${formData.name}%0A` +
      `📱 *رقم الواتساب / الهاتف:* ${formData.phone}%0A` +
      `🌍 *الدولة:* ${formData.country}%0A` +
      `📌 *الموضوع:* ${formData.subject}%0A` +
      `💬 *الرسالة / الاستفسار:* ${formData.message || 'أرغب في مزيد من المعلومات حول البرامج المتاحة'}`;

    window.open(`https://wa.me/201551669364?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#faf8f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span className="top-bar-badge">عرض خاص</span>
          <span>
            🎁 احجز حصتك التجريبية المجانية الآن واكتشف منهجية أكاديمية المنذر التربوية | فصول فردية 1-on-1
          </span>
          <button
            onClick={() => setIsTrialModalOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#cda84e',
              fontWeight: 800,
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.85rem'
            }}
          >
            احجز الآن ←
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      {/* 1. Header Banner */}
      <section style={{
        backgroundColor: '#071722',
        color: '#ffffff',
        padding: '70px 0',
        borderBottom: '2px solid rgba(205, 168, 78, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(205, 168, 78, 0.1) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div className="badge-tag">
            <MessageCircle size={16} />
            تواصل مباشر مع الإدارة
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '14px' }}>
            تواصل مع <span className="text-gradient-gold">أكاديمية المنذر</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '680px', margin: '0 auto', lineHeight: 1.8 }}>
            فريقنا الإداري والتربوي متاح دائماً للإجابة على كافة استفساراتكم وترتيب الحصص التجريبية المجانية.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start'
          }}>
            {/* Left: Contact Channels Cards */}
            <div>
              <div className="badge-tag">
                <Globe size={16} />
                قنوات الاتصال المعتمدة
              </div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 900, color: '#071722', marginBottom: '24px' }}>
                نسعد بخدمتكم <span className="text-gradient-gold">على مدار الأسبوع</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
                {/* WhatsApp & Phone */}
                <a
                  href="https://wa.me/201551669364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-card-light"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1.5px solid rgba(37, 211, 102, 0.4)',
                    color: '#25d366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>محادثة واتساب سريعة</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#071722', direction: 'ltr', textAlign: 'right' }}>
                      01551669364 (20+)
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#25d366', fontWeight: 700 }}>متاح الآن للرد الفوري</div>
                  </div>
                </a>

                {/* Email (Explicitly Displayed as requested) */}
                <a
                  href="mailto:almudhiracademy0@gmail.com"
                  className="luxury-card-light"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: 'rgba(205, 168, 78, 0.15)',
                    border: '1.5px solid rgba(205, 168, 78, 0.4)',
                    color: '#cda84e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>البريد الإلكتروني الرسمي</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#071722', direction: 'ltr', textAlign: 'right' }}>
                      almudhiracademy0@gmail.com
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#cda84e', fontWeight: 700 }}>للمراسلات الرسمية والاستفسارات</div>
                  </div>
                </a>

                {/* Working Hours */}
                <div
                  className="luxury-card-light"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: 'rgba(7, 23, 34, 0.08)',
                    border: '1.5px solid rgba(7, 23, 34, 0.15)',
                    color: '#071722',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>أوقات العمل والجداول</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#071722' }}>
                      طوال أيام الأسبوع (حسب جدول الطالب)
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      متوافق مع توقيت مصر والسعودية ودول الخليج
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{
                background: '#071722',
                borderRadius: '20px',
                padding: '24px',
                color: '#ffffff',
                border: '1.5px solid rgba(205, 168, 78, 0.3)'
              }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#cda84e', marginBottom: '14px' }}>
                  تابعونا على منصات التواصل الاجتماعي
                </h4>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <a
                    href="https://www.facebook.com/share/1KBYMsXk6r/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold"
                    style={{ padding: '10px 18px', fontSize: '0.9rem' }}
                  >
                    صفحتنا على فيسبوك
                  </a>
                  <a
                    href="https://www.instagram.com/al_mundhir_academy?igsi=enZ6c2d1OWY0OTNi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold"
                    style={{ padding: '10px 18px', fontSize: '0.9rem' }}
                  >
                    حساب إنستجرام
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact & Trial Form */}
            <div style={{
              backgroundColor: '#071722',
              borderRadius: '28px',
              border: '2px solid rgba(205, 168, 78, 0.4)',
              padding: '40px 32px',
              boxShadow: 'var(--shadow-card-dark), var(--shadow-gold)',
              color: '#f8fafc'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="badge-tag">
                  <Sparkles size={16} />
                  نموذج التواصل السريع
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#ffffff', marginBottom: '6px' }}>
                  أرسل لنا استفسارك أو احجز تجربة
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  سيتم توجيه رسالتك مباشرة إلى إدارة الأكاديمية عبر الواتساب لتأكيد الرد.
                </p>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '2px solid #25d366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    color: '#25d366'
                  }}>
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                    تم الإرسال بنجاح!
                  </h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '24px' }}>
                    تم فتح محادثة الواتساب مع إدارة الأكاديمية.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-gold"
                    style={{ padding: '10px 24px', fontSize: '0.95rem' }}
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#cbd5e1' }}>الاسم الكامل *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="مثال: يوسف أحمد"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                    <div>
                      <label className="form-label" style={{ color: '#cbd5e1' }}>رقم الواتساب *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+966..."
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        style={{ direction: 'ltr', textAlign: 'right' }}
                      />
                    </div>
                    <div>
                      <label className="form-label" style={{ color: '#cbd5e1' }}>الدولة *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="السعودية 🇸🇦">السعودية 🇸🇦</option>
                        <option value="مصر 🇪🇬">مصر 🇪🇬</option>
                        <option value="الإمارات 🇦🇪">الإمارات 🇦🇪</option>
                        <option value="الكويت 🇰🇼">الكويت 🇰🇼</option>
                        <option value="قطر 🇶🇦">قطر 🇶🇦</option>
                        <option value="سلطنة عمان 🇴🇲">سلطنة عمان 🇴🇲</option>
                        <option value="البحرين 🇧🇭">البحرين 🇧🇭</option>
                        <option value="دولة أخرى 🌍">دولة أخرى 🌍</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ color: '#cbd5e1' }}>الموضوع / نوع الاستفسار *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="حجز حصة تجريبية مجانية">حجز حصة تجريبية مجانية</option>
                      <option value="استفسار عن أسعار وباقات الاشتراك">استفسار عن أسعار وباقات الاشتراك</option>
                      <option value="استفسار عن مسار تأسيس نور البيان للأطفال">استفسار عن مسار تأسيس نور البيان للأطفال</option>
                      <option value="استفسار عن دورات العلوم الشرعية">استفسار عن دورات العلوم الشرعية</option>
                      <option value="متابعة وتقوية المناهج المدرسية">متابعة وتقوية المناهج المدرسية</option>
                      <option value="استفسار عام آخر">استفسار عام آخر</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ color: '#cbd5e1' }}>نص الرسالة أو تفاصيل مستوى الطالب</label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="اكتب رسالتك أو استفسارك هنا..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ width: '100%', padding: '14px', fontSize: '1.05rem', borderRadius: '14px', marginTop: '10px' }}
                  >
                    <Send size={18} />
                    إرسال الرسالة عبر الواتساب (01551669364)
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <Footer onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      {/* Floating WhatsApp Quick Button */}
      <a
        href="https://wa.me/201551669364?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D8%B0%D8%B1"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="محادثة واتساب سريعة"
      >
        <MessageCircle size={32} />
      </a>

      {/* Global Trial Booking Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </div>
  );
}
