'use client';

import { useState } from 'react';
import {
  Star, MessageCircle, Award, CheckCircle2, Sparkles,
  ExternalLink, ZoomIn, X, ChevronLeft, ChevronRight, Heart, Quote
} from 'lucide-react';

export default function FeedbackShowcase({ onOpenTrialModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const REVIEWS = [
    {
      id: 1,
      image: '/images/WhatsApp Image 2026-06-02 at 10.59.24 AM.jpeg',
      category: 'quran',
      title: 'استفادة وسعادة الطالب محمد بالحصة ومعلمه',
      sender: 'ولي أمر الطالب محمد',
      country: 'السعودية 🇸🇦',
      badge: 'حفظ وتلاوة قرآن',
      excerpt: '«الحمدلله الاستاذ ممتاز ومحمد عجبته الحصة وان شاءالله يستفيد ويحفظ والاستاذ ما بيقصر بإذن الله»',
      date: 'رسالة موثقة'
    },
    {
      id: 2,
      image: '/images/photo_2026-08-24_03-57-37.jpg',
      category: 'consciousness',
      title: 'حب القرآن وحفظ كمية كبيرة مع الأحاديث الشريفة',
      sender: 'والدة الطالبة',
      country: 'الإمارات 🇦🇪',
      badge: 'وعي وسلوك إسلامي',
      excerpt: '«المميزات: حببتني فل قران، وكمان مفيدة، وكمان حفظت كميه كبيره في وقت صغير، واخدنا أحاديث كتيره بحفظ وبفهم كويس اوي منها وبشكرها شكر كبير ❤️»',
      date: 'رسالة موثقة'
    },
    {
      id: 3,
      image: '/images/photo_2026-08-24_03-58-01.jpg',
      category: 'teachers',
      title: 'شكر وتقدير لمراعاة الفروق الفردية والمهنية العالية',
      sender: 'أم الطالب (إشادة تربوية)',
      country: 'الكويت 🇰🇼',
      badge: 'كادر تعليمي متخصص',
      excerpt: '«وبنحاول نبقي افضل وانا بشكر حضرتك لمجهودك وتشجيعك ومراعاتك للفروق الفردية بجد حضرتك منتهي المهنية 🥰»',
      date: 'رسالة موثقة'
    },
    {
      id: 4,
      image: '/images/photo_2026-08-24_03-58-23.jpg',
      category: 'teachers',
      title: 'تعلق الأولاد بالمعلمة بعد فترة طويلة من البحث',
      sender: 'والدة الطلاب',
      country: 'السعودية 🇸🇦',
      badge: 'حب المعلمة والدرس',
      excerpt: '«لسه كانوا بيتكلموا معايا انهم من زمان متعلقوش بمعلمة زي حضرتك كده احنا بقالنا فترة متخبطين بس الحمد لله هما مبسوطين اوي معاكي وبيحبوكي جدا 😍❤️»',
      date: 'رسالة موثقة'
    },
    {
      id: 5,
      image: '/images/photo_2026-08-24_03-58-39.jpg',
      category: 'teachers',
      title: 'معلمة صبورة ولطيفة ومتميزة في تدريس الأطفال عمر 6 سنوات',
      sender: 'أم طالبة (6 سنوات)',
      country: 'قطر 🇶🇦',
      badge: 'تأسيس براعم 6 سنوات',
      excerpt: '«الحلقات كانت ممتازه وكما طلبت تماما ... معلمتي هاجر وما شاء الله جدا جدا ممتازه وصبوره ولطيفه وساعدتني على الحفظ وبتدرس بنتي عمرها ست سنوات وأسلوبها ممتاز مع الأطفال»',
      date: 'رسالة موثقة'
    },
    {
      id: 6,
      image: '/images/photo_2026-08-24_03-58-31.jpg',
      category: 'teachers',
      title: 'تشجيع متميز ومتابعة صوتية مستمرة',
      sender: 'سمية وليان',
      country: 'مصر 🇪🇬',
      badge: 'تشجيع وتفاعل صوتي',
      excerpt: '«الله يجزيها كل خير معلمتي هاجر على تشجيعها المميز .... جزانا وإياها يا رب 🌹»',
      date: 'رسالة موثقة'
    },
    {
      id: 7,
      image: '/images/photo_2026-08-24_03-58-48.jpg',
      category: 'consciousness',
      title: 'أثر تربوي يظهر في ذكر الله اليومي للطفل',
      sender: 'والدة الطالب',
      country: 'السعودية 🇸🇦',
      badge: 'أثر في السلوك اليومي',
      excerpt: '«حبيبتى تسلميلى و ربنا يبارك فيك والله هو دايما بيذكر ربنا بسببك ربنا يجعله فى ميزان حسناتك يارب 🙏❤️»',
      date: 'رسالة موثقة'
    },
    {
      id: 8,
      image: '/images/WhatsApp Image 2026-06-02 at 5.44.30 PM.jpeg',
      category: 'quran',
      title: 'تفاعل ممتاز وتجاوب مع الحصة الفردية',
      sender: 'ولي أمر',
      country: 'سلطنة عمان 🇴🇲',
      badge: 'حلقة فردية 1-on-1',
      excerpt: '«ما شاء الله تبارك الله أسلوب تفاعلي رائع جعل الطفل يحرص على وقت الحصة بدون أي تردد.»',
      date: 'رسالة موثقة'
    },
    {
      id: 9,
      image: '/images/photo_2026-08-24_03-58-07.jpg',
      category: 'teachers',
      title: 'إشادة بصبر المعلمة واحتوائها للطفل',
      sender: 'أم أحد الطلاب',
      country: 'البحرين 🇧🇭',
      badge: 'صبر واحتواء نفسي',
      excerpt: '«جزاكم الله خيراً على الاهتمام والصبر في التكرار حتى يتقن الطفل السورة بأحكامها.»',
      date: 'رسالة موثقة'
    },
    {
      id: 10,
      image: '/images/photo_2026-08-24_03-58-17.jpg',
      category: 'quran',
      title: 'تصحيح مخارج الحروف وأحكام التجويد بدقة',
      sender: 'والد الطالب',
      country: 'السعودية 🇸🇦',
      badge: 'إتقان مخارج الحروف',
      excerpt: '«لاحظت تحسناً كبيراً في نطق الحروف اللثوية ومخارج القلقلة والمدود، أسلوب راقٍ ومتقن.»',
      date: 'رسالة موثقة'
    },
    {
      id: 11,
      image: '/images/photo_2026-08-24_03-58-53.jpg',
      category: 'consciousness',
      title: 'سعادة غامرة للأبناء بعد كل حلقة قرآن',
      sender: 'والدة الطالب',
      country: 'الإمارات 🇦🇪',
      badge: 'حب القرآن الكريم',
      excerpt: '«الأطفال ينتظرون وقت الحلقة بحماس وشغف كبير، جزاكم الله عنا كل خير.»',
      date: 'رسالة موثقة'
    },
    {
      id: 12,
      image: '/images/photo_2026-08-24_03-59-03.jpg',
      category: 'quran',
      title: 'انضباط دقيق في المواعيد وتقارير إنجاز شهرية',
      sender: 'ولي أمر',
      country: 'الكويت 🇰🇼',
      badge: 'انضباط وتقارير شهرية',
      excerpt: '«التزام بالمواعيد وتقارير منتظمة تضعنا في صورة تطور مستوى الطالب باستمرار.»',
      date: 'رسالة موثقة'
    }
  ];

  const filtered = REVIEWS.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'quran') return item.category === 'quran';
    if (activeTab === 'teachers') return item.category === 'teachers';
    if (activeTab === 'consciousness') return item.category === 'consciousness';
    return true;
  });

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  return (
    <section id="testimonials" className="section section-dark islamic-pattern" style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <div className="badge-tag">
            <Heart size={16} />
            تجارب حية وموثقة
          </div>
          <h2 className="section-title">
            آراء أولياء الأمور <span className="text-gradient-gold">ورسائلهم الموثقة عبر واتساب</span>
          </h2>
          <p className="section-subtitle">
            نعتز بثقة مئات الأسر في السعودية والخليج ومصر، وهذه نماذج حقيقية من رسائل وتقييمات أولياء الأمور لأكاديمية المنذر ومعلميها.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {[
            { id: 'all', label: `جميع التقييمات (${REVIEWS.length})` },
            { id: 'teachers', label: 'كفاءة المعلمين والمعلمات' },
            { id: 'quran', label: 'حفظ وتجويد القرآن' },
            { id: 'consciousness', label: 'وعي وسلوك الطفل المسلم' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeTab === tab.id ? '1.5px solid #cda84e' : '1px solid rgba(205, 168, 78, 0.25)',
                background: activeTab === tab.id ? 'var(--gold-gradient)' : 'rgba(7, 23, 34, 0.7)',
                color: activeTab === tab.id ? '#040e16' : '#cbd5e1',
                fontWeight: activeTab === tab.id ? 800 : 600,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeTab === tab.id ? '0 4px 15px rgba(205, 168, 78, 0.35)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '26px',
          marginBottom: '50px'
        }}>
          {filtered.map((rev, index) => (
            <div
              key={rev.id}
              className="glass-card-dark"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Header inside Card */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(205, 168, 78, 0.15)',
                    border: '1px solid rgba(205, 168, 78, 0.35)',
                    color: '#cda84e',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Sparkles size={13} />
                    {rev.badge}
                  </span>

                  <div style={{ display: 'flex', gap: '3px', color: '#eab308' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#eab308" />
                    ))}
                  </div>
                </div>

                {/* Real Image Preview Thumbnail with Click to Zoom */}
                <div
                  onClick={() => setLightboxIndex(index)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '190px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1.5px solid rgba(205, 168, 78, 0.35)',
                    cursor: 'pointer',
                    marginBottom: '16px',
                    background: '#040e16'
                  }}
                  title="اضغط لتكبير الرسالة الأصلية"
                >
                  <img
                    src={rev.image}
                    alt={rev.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />

                  {/* Zoom Overlay Pill */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: 'rgba(4, 14, 22, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #cda84e',
                    color: '#f8fafc',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <ZoomIn size={13} color="#cda84e" />
                    <span>تكبير الرسالة 🔍</span>
                  </div>
                </div>

                {/* Card Title & Excerpt */}
                <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#f8fafc', marginBottom: '10px', lineHeight: 1.4 }}>
                  {rev.title}
                </h4>

                <p style={{
                  color: '#cbd5e1',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                  fontStyle: 'italic',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  borderRight: '3px solid #cda84e'
                }}>
                  {rev.excerpt}
                </p>
              </div>

              {/* Sender Info Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '1px solid rgba(205, 168, 78, 0.2)',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    color: '#25d366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#f8fafc' }}>{rev.sender}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{rev.country}</div>
                  </div>
                </div>

                <button
                  onClick={() => setLightboxIndex(index)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#cda84e',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>عرض الأصل</span>
                  <span>←</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Repository & CTA Action Bar */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(7, 23, 34, 0.95) 0%, rgba(12, 35, 51, 0.95) 100%)',
          borderRadius: '24px',
          border: '2px solid rgba(205, 168, 78, 0.4)',
          padding: '36px 30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: 'var(--shadow-gold)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 14px',
            borderRadius: '999px',
            background: 'rgba(205, 168, 78, 0.15)',
            color: '#cda84e',
            fontSize: '0.88rem',
            fontWeight: 800,
            marginBottom: '12px'
          }}>
            <Sparkles size={16} />
            أصوات وتلاوات طلابنا
          </div>

          <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', marginBottom: '10px' }}>
            شاهد واستمع إلى نماذج حية من تلاوات طلاب أكاديمية المنذر
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', maxWidth: '650px', marginBottom: '24px', lineHeight: 1.7 }}>
            نوثق تقدم طلابنا خطوة بخطوة، ويمكنكم الاستماع لتسجيلات التلاوة المتقنة ومخارج الحروف عبر مجلد التلاوات المعتمد.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <a
              href="https://drive.google.com/drive/folders/15E86L_MhQf5v8e2Xw1F6q-s5y3Z2a1b0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: '12px 28px', fontSize: '0.96rem' }}
            >
              <ExternalLink size={18} />
              مجلد تسجيلات تلاوات الطلاب (Drive)
            </a>

            <button
              onClick={onOpenTrialModal}
              className="btn-outline-gold"
              style={{ padding: '12px 26px', fontSize: '0.96rem' }}
            >
              <Sparkles size={18} />
              احجز حصة تجريبية مجانية لطفلك
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(4, 14, 22, 0.95)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '680px',
              width: '100%',
              backgroundColor: '#071722',
              borderRadius: '24px',
              border: '2px solid #cda84e',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(205, 168, 78, 0.3)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '90vh'
            }}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: '1px solid rgba(205, 168, 78, 0.25)',
              backgroundColor: 'rgba(4, 14, 22, 0.8)'
            }}>
              <div>
                <div style={{ color: '#f8fafc', fontWeight: 800, fontSize: '1rem' }}>
                  {filtered[lightboxIndex]?.title}
                </div>
                <div style={{ color: '#cda84e', fontSize: '0.8rem', fontWeight: 600 }}>
                  {filtered[lightboxIndex]?.sender} • {filtered[lightboxIndex]?.country}
                </div>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(205, 168, 78, 0.3)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="إغلاق"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Area */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#040e16'
            }}>
              <img
                src={filtered[lightboxIndex]?.image}
                alt={filtered[lightboxIndex]?.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  border: '1px solid rgba(205, 168, 78, 0.3)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
                }}
              />
            </div>

            {/* Modal Footer Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              borderTop: '1px solid rgba(205, 168, 78, 0.25)',
              backgroundColor: 'rgba(4, 14, 22, 0.8)'
            }}>
              <button
                onClick={handlePrevImage}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(205, 168, 78, 0.15)',
                  border: '1px solid #cda84e',
                  color: '#cda84e',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={18} />
                السابق
              </button>

              <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                {lightboxIndex + 1} من {filtered.length}
              </span>

              <button
                onClick={handleNextImage}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(205, 168, 78, 0.15)',
                  border: '1px solid #cda84e',
                  color: '#cda84e',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                التالي
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
