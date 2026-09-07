'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TrialModal from '../../components/TrialModal';
import {
  Sparkles, Compass, Eye, Target, ShieldCheck, HeartHandshake,
  Users, Award, BookOpen, Star, CheckCircle2, GraduationCap, Heart, Clock, MessageCircle
} from 'lucide-react';

export default function AboutPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const values = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'الطالب أمانة ومسؤولية',
      desc: 'لا نتعامل مع الطالب كرقم في حلقة مكدسة، بل كأمانة غالية تستحق الرعاية والاهتمام الفردي الكامل.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'القرآن منهاج حياة',
      desc: 'نربط الحفظ بالفهم والعمل؛ ليثمر القرآن خلقاً حسناً وأدباً رفيعاً في تعاملات الطالب وسلوكه.'
    },
    {
      icon: <Heart size={32} />,
      title: 'مراعاة الفروق الفردية',
      desc: 'نصمم خططاً تعليمية متدرجة تناسب قدرات واستيعاب كل طالب ليتعلم بثقة وشغف دون أي إحباط.'
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'الشراكة مع الأسرة',
      desc: 'نتواصل باستمرار مع ولي الأمر ونطلعه على تقارير التقدم لأن بناء شخصية الطالب مسؤولية مشتركة.'
    }
  ];

  const facultyStandards = [
    {
      title: 'كفاءة علمية وإتقان للتجويد',
      desc: 'حفظ متقن لكتاب الله وإلمام تام بأحكام التجويد ومخارج الحروف النظرية والتطبيقية.'
    },
    {
      title: 'تأهيل تربوي ونفسي للأطفال',
      desc: 'خبرة عملية في أساليب التعليم الحديثة والتعامل اللطيف والمحفز مع مختلف الفئات العمرية.'
    },
    {
      title: 'معلمات متخصصات للإناث والبراعم',
      desc: 'كادر نسائي مؤهل لتدريس الطالبات والأطفال الصغار ببيئة أسرية دافئة ومطمئنة.'
    },
    {
      title: 'إشراف أكاديمي ومتابعة دورية',
      desc: 'تقييم مستمر لأداء المعلمين ومراجعة خطط الحفظ لضمان أعلى معايير الجودة والأمانة.'
    }
  ];

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

      {/* 1. Page Header Banner */}
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
            <Compass size={16} />
            من نحن ورؤيتنا
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '14px' }}>
            عن <span className="text-gradient-gold">أكاديمية المنذر</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '720px', margin: '0 auto', lineHeight: 1.8 }}>
            صرحٌ تعليمي وتربوي متخصص في تعليم القرآن الكريم وعلومه، نبني جيلاً يحمل القرآن في صدره ويظهر أثره في أخلاقه وسلوكه.
          </p>
        </div>
      </section>

      {/* 2. Slogan & Origin Story Section */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '45px',
            alignItems: 'center'
          }}>
            {/* Story Text */}
            <div>
              <div className="badge-tag">
                <Sparkles size={16} />
                قصة النشأة والرسالة
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#071722', marginBottom: '20px', lineHeight: 1.35 }}>
                رسالة بسيطة وعظيمة..{' '}
                <span className="text-gradient-gold">أن يكون القرآن قريباً من كل بيت</span>
              </h2>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: '18px' }}>
                بدأت <strong>أكاديمية المنذر</strong> من رسالة بسيطة وعظيمة في الوقت نفسه: أن يكون القرآن قريبًا من كل بيت، وأن يجد كل طالب من يعلّمه كتاب الله بإتقان، ويأخذ بيده في رحلةٍ تربويةٍ تبقى آثارها معه.
              </p>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: '18px' }}>
                ومنذ البداية، لم تكن غايتنا مجرد تحفيظ الطالب للقرآن، بل أن نساعده على حفظه وفهمه والعمل به، وأن نجعل القرآن منهاجَ حياته. ومع كل طالب جديد، وكل خطوة يحققها في الحفظ والتلاوة والتجويد، تتجدد رسالتنا ويكبر طموحنا في أن نصل بتعليم القرآن الكريم إلى أكبر عدد ممكن من الطلاب حول العالم.
              </p>

              <div style={{
                background: 'rgba(205, 168, 78, 0.08)',
                borderRight: '4px solid #cda84e',
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
                marginTop: '24px'
              }}>
                <div style={{ fontWeight: 800, color: '#071722', fontSize: '1.08rem', fontFamily: 'var(--font-amiri)' }}>
                  «رحلتنا مستمرة… وطموحنا أن نبني جيلًا يحمل القرآن في صدره، ويظهر أثره في علمه وأخلاقه وحياته.»
                </div>
              </div>
            </div>

            {/* Visual Card with Official Slogan */}
            <div style={{
              backgroundColor: '#071722',
              color: '#ffffff',
              borderRadius: '28px',
              border: '2px solid rgba(205, 168, 78, 0.4)',
              padding: '40px 32px',
              boxShadow: 'var(--shadow-card-dark), var(--shadow-gold)',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid #cda84e',
                background: '#ffffff',
                margin: '0 auto 20px auto'
              }}>
                <img
                  src="/assets/logo.jpg"
                  alt="شعار المنذر"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: '#f8fafc',
                marginBottom: '8px'
              }}>
                أكاديمية المُنذِر
              </div>

              <div style={{
                fontSize: '1.35rem',
                color: '#cda84e',
                fontFamily: 'var(--font-amiri)',
                fontWeight: 700,
                marginBottom: '24px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(205, 168, 78, 0.25)'
              }}>
                نتعلّم ... لنفهم ... لنرتقي
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'right', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#cda84e" />
                  <span>تعليم فردي خاص 1-on-1 يناسب كل طالب</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#cda84e" />
                  <span>تحفيظ القرآن وتصحيح التلاوة والتجويد</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#cda84e" />
                  <span>تأسيس اللغة العربية والعلوم الشرعية</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#cda84e" />
                  <span>متابعة مستمرة وتقارير دورية لأولياء الأمور</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="section section-dark islamic-pattern">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {/* Vision */}
            <div className="glass-card-dark" style={{ padding: '38px 30px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'var(--gold-gradient)',
                color: '#040e16',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Eye size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f8fafc', marginBottom: '14px' }}>
                رؤيتنا
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.8 }}>
                «أن نصنع جيلًا يحمل القرآن في صدره، ويظهر أثره في أخلاقه وسلوكه وحياته.»
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card-dark" style={{ padding: '38px 30px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #25a770 0%, #1b7a53 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Target size={30} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f8fafc', marginBottom: '14px' }}>
                رسالتنا
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.8 }}>
                «أن نجعل تعلم القرآن الكريم تجربة سهلة، ممتعة، مؤثرة، ومتاحة للجميع أينما كانوا.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Detail (القيمة الجوهرية) */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge-tag">
              <Star size={16} />
              قيمنا وركائزنا الجوهرية
            </div>
            <h2 className="section-title">
              كيف نعتني بطالبنا <span className="text-gradient-gold">في كل حصة؟</span>
            </h2>
            <p className="section-subtitle">
              في أكاديمية المنذر لا نعامل الطالب كرقم في حلقة، بل نتعامل معه كـ أمانة ومسؤولية نحرص فيها على بناء حب كتاب الله.
            </p>
          </div>

          <div className="grid-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="luxury-card-light"
                style={{ padding: '32px 24px', textAlign: 'center' }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(205, 168, 78, 0.12)',
                  border: '1.5px solid rgba(205, 168, 78, 0.3)',
                  color: '#cda84e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px auto'
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', color: '#071722' }}>
                  {v.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Faculty & Teaching Standards */}
      <section className="section section-dark islamic-pattern">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge-tag">
              <GraduationCap size={16} />
              الكادر التعليمي والتربوي
            </div>
            <h2 className="section-title">
              معايير انتقاء وتأهيل <span className="text-gradient-gold">معلمي ومعلمات الأكاديمية</span>
            </h2>
            <p className="section-subtitle">
              نختار معلمينا بعناية فائقة لضمان الجمع بين الإتقان العلمي في القرآن والتجويد، والأسلوب التربوي المحفز للأطفال.
            </p>
          </div>

          <div className="grid-4">
            {facultyStandards.map((std, i) => (
              <div
                key={i}
                className="glass-card-dark"
                style={{ padding: '30px 22px' }}
              >
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: '#cda84e',
                  marginBottom: '12px'
                }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#f8fafc', marginBottom: '10px' }}>
                  {std.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section style={{
        backgroundColor: '#0c2333',
        borderTop: '2px solid rgba(205, 168, 78, 0.3)',
        padding: '70px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
            هل ترغب في تجربة حصة تقييم مجانية لطفلك؟
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 28px auto' }}>
            تواصل معنا الآن وسنقوم بترتيب حصة تجريبية فردية 1-on-1 مع المعلم المناسب.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsTrialModalOpen(true)}
              className="btn-gold"
              style={{ padding: '13px 30px' }}
            >
              <Sparkles size={18} />
              احجز الحصة التجريبية الآن
            </button>
            <Link
              href="/contact"
              className="btn-outline-gold"
              style={{ padding: '12px 26px' }}
            >
              صفحة التواصل
            </Link>
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
