'use client';

import { useState, useEffect } from 'react';
import { Sparkles, ArrowLeft, ArrowRight, ShieldCheck, HeartHandshake, BookOpen, Star, Award, CheckCircle2 } from 'lucide-react';

export default function HeroSlider({ onOpenTrialModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      badge: '✨ صرح تعليمي متخصص في تعليم القرآن وعلومه',
      title: 'نصنع جيلاً يحمل القرآن في صدره',
      titleHighlight: 'ويظهر أثره في أخلاقه وسلوكه وحياته',
      description: 'في أكاديمية المنذر، لا نعامل الطالب كرقم في حلقة، بل نتعامل معه كـ أمانة ومسؤولية. نقدّم تعليماً أونلاين فردياً بأسلوب عصري وتربوي يحبب الطالب في كتاب الله.',
      image: '/assets/generated/slider-quran.jpg',
      statLabel: '100% حلقات خاصة فردية',
      statSub: 'معلم مخصص لكل طالب 1-on-1',
      trustPill: '⭐ تقييم 4.9/5 من أولياء الأمور'
    },
    {
      id: 2,
      badge: '🌱 تأسيس وعي وهوية الطفل المسلم',
      title: 'تعليم تفاعلي ممتع ومحفز للأطفال',
      titleHighlight: 'بدون ضغط أو ملل.. خطط مخصصة لكل عمر',
      description: 'نؤسس أطفالنا في اللغة العربية، القاعدة النورانية، وحفظ القرآن الكريم بالتجويد المبسط والآداب والأذكار اليومية بأساليب تعليمية وتربوية حديثة.',
      image: '/assets/generated/slider-kids.jpg',
      statLabel: '+1,500 طالب وطالبة',
      statSub: 'في مصر ومختلف دول الخليج العربي',
      trustPill: '🏆 متابعة وتقارير شهرية دورية'
    },
    {
      id: 3,
      badge: '🕌 العلوم الشرعية والمناهج المدرسية',
      title: 'معلمون ومعلمات متخصصون وذوو خبرة',
      titleHighlight: 'مواعيد مرنة تناسب توقيت مصر ودول الخليج',
      description: 'تدريس الفقه الميسر، العقيدة، الحديث، والسيرة النبوية، بالإضافة إلى تقوية وتأسيس المناهج المدرسية مع متابعة حية ومباشرة مع ولي الأمر.',
      image: '/assets/generated/slider-islamic-studies.jpg',
      statLabel: '+50 معلماً ومعلمة',
      statSub: 'كفاءة علمية وخبرة تربوية موثقة',
      trustPill: '🎯 خطط تناسب الفروق الفردية'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#071722',
        overflow: 'hidden',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(205, 168, 78, 0.25)'
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Graphic Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(205, 168, 78, 0.14) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27, 122, 83, 0.16) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ padding: '60px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '40px'
        }}>
          {/* Left Text & CTA Content */}
          <div style={{ color: '#f8fafc' }}>
            <div className="badge-tag" style={{ animation: 'fadeIn 0.5s ease' }}>
              <Sparkles size={16} />
              {slide.badge}
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '16px',
              color: '#ffffff'
            }}>
              {slide.title}{' '}
              <span className="text-gradient-gold" style={{ display: 'block', marginTop: '6px' }}>
                {slide.titleHighlight}
              </span>
            </h1>

            <p style={{
              fontSize: '1.08rem',
              color: '#cbd5e1',
              lineHeight: 1.8,
              marginBottom: '30px',
              maxWidth: '580px'
            }}>
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '35px' }}>
              <button
                onClick={onOpenTrialModal}
                className="btn-gold"
                style={{ padding: '14px 30px', fontSize: '1.05rem' }}
              >
                <Sparkles size={18} />
                احجز حصتك التجريبية مجاناً
              </button>
              <a
                href="#programs"
                className="btn-outline-gold"
                style={{ padding: '13px 26px' }}
              >
                <BookOpen size={18} />
                استكشف المسارات التعليمية
              </a>
            </div>

            {/* Slogan & Value Points */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(205, 168, 78, 0.2)',
              fontSize: '0.9rem',
              color: '#94a3b8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cda84e', fontWeight: 700 }}>
                <CheckCircle2 size={18} />
                <span>شعارنا: نتعلّم ... لنفهم ... لنرتقي</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={18} color="#25d366" />
                <span>حصص فردية خاصة 1-on-1</span>
              </div>
            </div>
          </div>

          {/* Right Image & Floating Badges */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '2px solid rgba(205, 168, 78, 0.4)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(205, 168, 78, 0.25)',
              aspectRatio: '16/10',
              maxHeight: '440px'
            }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 23, 34, 0.75) 0%, transparent 50%)'
              }} />

              {/* Floating Stat Card Inside Image */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                left: '16px',
                background: 'rgba(12, 35, 51, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(205, 168, 78, 0.3)',
                borderRadius: '16px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 800, color: '#f8fafc', fontSize: '1rem' }}>
                    {slide.statLabel}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#cda84e' }}>
                    {slide.statSub}
                  </div>
                </div>
                <div style={{
                  background: 'rgba(205, 168, 78, 0.15)',
                  border: '1px solid rgba(205, 168, 78, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#cda84e'
                }}>
                  {slide.trustPill}
                </div>
              </div>
            </div>

            {/* Slider Switcher Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '18px'
            }}>
              <button
                onClick={prevSlide}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(205, 168, 78, 0.25)',
                  color: '#cda84e',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                aria-label="الشريحة السابقة"
              >
                <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: currentSlide === index ? '28px' : '9px',
                      height: '9px',
                      borderRadius: '5px',
                      background: currentSlide === index ? 'var(--gold-gradient)' : 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={`شريحة ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(205, 168, 78, 0.25)',
                  color: '#cda84e',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                aria-label="الشريحة التالية"
              >
                <ArrowLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
