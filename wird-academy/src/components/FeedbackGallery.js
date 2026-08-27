'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, MessageCircle, Award, ZoomIn, X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

const FEEDBACK_ITEMS = [
  {
    id: 'cert-khadija',
    type: 'certificate',
    category: 'Student Certificates',
    categoryAr: 'شهادات الطلاب',
    title: 'Certificate of Achievement — 10 Ajza’ with Tajweed',
    arabicTitle: 'شهادة إتمام تلاوة 10 أجزاء بالتجويد — خديجة إسلام',
    student: 'Khadija Islam',
    teacher: 'Ustādha Amany Badawy',
    image: '/assets/feedback/1b99109f-a0ae-4c62-84e2-9e5477a6315f.jpg',
    badge: '10 Ajza’ Completed',
    quote: 'Khadija has completed the recitation of ten Ajza\' of the Holy Qur\'an with Tajweed, in the narration of Hafs \'an \'Asim, with her teacher Amany Badawy.',
    highlights: ['Hafs \'an \'Asim Narration', 'Noon & Meem Sakinah Rules', 'Makharij & Sifat Precision']
  },
  {
    id: 'review-zayd-mom',
    type: 'review',
    category: 'Parent Testimonials',
    categoryAr: 'آراء أولياء الأمور',
    title: 'Noticeable Difference in Recitation & Pace',
    arabicTitle: 'تطور ملحوظ في مخارج الحروف والتلاوة — والدة زيد',
    student: 'Zayd’s Mother (UK)',
    teacher: 'Wird Academy Faculty',
    image: '/assets/feedback/15a44e45-5fe3-4423-904f-9ceaec2968fd.jpg',
    badge: 'Verified WhatsApp',
    quote: 'Alhumdullilah, no I am really happy with your teaching sister and I can see the difference in Zayd’s recitation and I am really happy with how things are going. Thank you for your details I appreciate them x',
    highlights: ['Noticeable Progress', 'Detailed Session Feedback', 'Patient 1-on-1 Guidance']
  },
  {
    id: 'cert-maryam',
    type: 'certificate',
    category: 'Student Certificates',
    categoryAr: 'شهادات الطلاب',
    title: 'Certificate of Achievement — 3 Ajza’ with Tajweed',
    arabicTitle: 'شهادة إتمام تلاوة 3 أجزاء بالتجويد — مريم إسلام',
    student: 'Maryam Islam',
    teacher: 'Ustādha Amany Badawy',
    image: '/assets/feedback/a6d5cdae-6b13-49f5-b112-2f2db1e5a04b.png',
    badge: '3 Ajza’ Completed',
    quote: 'Maryam has completed the recitation of three Ajza\' of the Holy Qur\'an with Tajweed, in the narration of Hafs \'an \'Asim. She read them aloud in her test, and can now recite any part of them beautifully.',
    highlights: ['Madd & Qalqalah Rules', 'Oral Recitation Exam Passed', 'Hafs \'an \'Asim']
  },
  {
    id: 'review-farhad-dad',
    type: 'review',
    category: 'Parent Testimonials',
    categoryAr: 'آراء أولياء الأمور',
    title: 'Genuine Enjoyment & Love for the Quran',
    arabicTitle: 'حب حقيقي لحصص القرآن وحفظه — والد خديجة ومريم',
    student: 'Farhad (Khadija & Maryam’s Father)',
    teacher: 'Ustādha Amany Badawy',
    image: '/assets/feedback/58a8f335-89ed-4010-8afb-79273fa0dcc9.jpg',
    badge: 'Verified WhatsApp',
    quote: 'BarakAllahu feek. We know you\'re an amazing teacher, Allahumma baarik. The kids have learned so much and genuinely enjoy the Qur\'an and their lessons with you, all thanks to your dedication. JazakAllahu khayran for your understanding and patience.',
    highlights: ['Love for the Quran', 'Unfailing Teacher Patience', 'Dedicated Revision']
  },
  {
    id: 'cert-innaya',
    type: 'certificate',
    category: 'Student Certificates',
    categoryAr: 'شهادات الطلاب',
    title: 'Hifz Certificate — Half Juz’ An-Naba’ by Heart',
    arabicTitle: 'شهادة حفظ نصف جزء عمّ غيباً — عناية',
    student: 'Innaya',
    teacher: 'Ustādha Amany Badawy',
    image: '/assets/feedback/b19f6bf8-91cd-49f5-8a55-883d7fe80581.png',
    badge: 'Memorized by Heart',
    quote: 'Innaya has memorised half of Juz\' An-Naba\' of the Holy Qur\'an by heart, with her teacher Amany Badawy. She recited it from memory in her test, and has shown steady dedication and a real love for the Book of Allah.',
    highlights: ['Memorized by Heart', 'Meaning Taught with Hifz', 'Oral Test Passed']
  },
  {
    id: 'review-sham-uk',
    type: 'review',
    category: 'Parent Testimonials',
    categoryAr: 'آراء أولياء الأمور',
    title: 'Classes with Ustādha Manar Going Beyond Expectations',
    arabicTitle: 'الحصص مع الأستاذة منار تفوق التوقعات — شام (بريطانيا)',
    student: 'Sham (United Kingdom)',
    teacher: 'Ustādha Manar Badawy',
    image: '/assets/feedback/c11e21de-8bae-49fb-9c2a-d9a61f3dc317.jpg',
    badge: 'Verified WhatsApp',
    quote: 'Wa\'alaikumasalaam sister. Alhamdulliah, they are going very, very well. Just as how I was hoping for. 😊',
    highlights: ['Ustādha Manar Badawy Track', 'Inclusive & Warm Pedagogy', 'UK Non-Native Student']
  },
  {
    id: 'review-mahmoud',
    type: 'review',
    category: 'Parent Testimonials',
    categoryAr: 'آراء أولياء الأمور',
    title: 'Deep Gratitude for Ustādh Mahmoud’s Teaching',
    arabicTitle: 'ثناء وتقدير لحصص الأستاذ محمود القاسم',
    student: 'Parent of Student (Europe)',
    teacher: 'Ustādh Mahmoud Al-Qasim',
    image: '/assets/feedback/f8c28e22-6986-42ae-b9ae-189ba2fccb59.jpg',
    badge: 'Verified WhatsApp',
    quote: 'JazakAllahu Khayran, really appreciate the feedback. It is due to the teachings he is receiving that Alhamdulliah he is really enjoying his lessons. May Allah reward Ustad Mahmoud, you and your entire family for the good that you are doing for our Ummah. Ameen. ❤️',
    highlights: ['Ustādh Mahmoud Track', 'Fluent English Explanations', 'Islamic Values & Character']
  },
  {
    id: 'review-fulfilled',
    type: 'review',
    category: 'Parent Testimonials',
    categoryAr: 'آراء أولياء الأمور',
    title: 'Fulfilling & Uplifting Adult Quran Journey',
    arabicTitle: 'تجربة قرآنية ملهمة ومباركة للمتعلمين الكبار',
    student: 'Adult Sister Student',
    teacher: 'Wird Academy Faculty',
    image: '/assets/feedback/aa66c183-aa0e-45f6-a66f-3e468e1a7b56.jpg',
    badge: 'Verified WhatsApp',
    quote: 'Assalamualaikum sister. I wanted to thank you with all my heart for this amazing work you are doing. I am enjoying my lessons so much and feel so fulfilled after each class Alhamdulliah. May Allah shower you and your family with abundant Barakah, good Health and Happiness. 😊',
    highlights: ['Adult Sister Track', 'Comfortable Private Pace', 'Uplifting Spiritual Barakah']
  }
];

export default function FeedbackGallery({ onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Parent Testimonials', 'Student Certificates'];

  const filteredItems = activeTab === 'All'
    ? FEEDBACK_ITEMS
    : FEEDBACK_ITEMS.filter(item => item.category === activeTab);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setSelectedItem(filteredItems[index]);
  };

  const handleNext = useCallback(() => {
    if (filteredItems.length === 0) return;
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
    setSelectedItem(filteredItems[nextIdx]);
  }, [lightboxIndex, filteredItems]);

  const handlePrev = useCallback(() => {
    if (filteredItems.length === 0) return;
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIdx);
    setSelectedItem(filteredItems[prevIdx]);
  }, [lightboxIndex, filteredItems]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handleNext, handlePrev]);

  return (
    <section id="feedback" style={{ padding: '80px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="section-tag">Documented Results • نتائج موثقة</div>
          <h2 className="section-title">
            Progress You Can <span className="navy-gradient-text">Hear &amp; See</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            "You won’t need a report to know it’s working; you’ll hear it in the recitation itself." Explore authentic parent WhatsApp feedback and verified student achievement certificates.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                fontSize: '13.5px',
                fontWeight: 700,
                border: activeTab === cat ? '1px solid var(--gold-600)' : '1px solid var(--border-light)',
                background: activeTab === cat ? 'var(--primary-900)' : '#ffffff',
                color: activeTab === cat ? '#ffffff' : 'var(--primary-900)',
                boxShadow: activeTab === cat ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat === 'All' && '🌟 All Feedback & Honors'}
              {cat === 'Parent Testimonials' && '💬 Parent Testimonials (WhatsApp)'}
              {cat === 'Student Certificates' && '📜 Student Achievement Certificates'}
            </button>
          ))}
        </div>

        {/* Feedback Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '22px'
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--gold-300)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              {/* Media Preview Box */}
              <div 
                style={{
                  position: 'relative',
                  height: item.type === 'certificate' ? '210px' : '220px',
                  background: item.type === 'certificate' ? '#fcfaf5' : '#08172c',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: item.type === 'certificate' ? 'contain' : 'cover',
                    objectPosition: 'top center',
                    padding: item.type === 'certificate' ? '8px' : '0',
                    transition: 'transform 0.35s ease'
                  }}
                  loading="lazy"
                />

                {/* Badge Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: item.type === 'certificate' 
                      ? 'linear-gradient(135deg, #081b33 0%, #194682 100%)' 
                      : 'rgba(37, 211, 102, 0.92)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '3px 9px',
                    borderRadius: '6px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  {item.type === 'certificate' ? '📜 ' + item.badge : '✓ ' + item.badge}
                </div>

                {/* Bottom Click to Expand Bar */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    insetInline: 0,
                    background: 'linear-gradient(to top, rgba(8, 27, 51, 0.92) 0%, transparent 100%)',
                    padding: '10px 12px 6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'var(--gold-300)',
                    fontSize: '11.5px',
                    fontWeight: 700
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ZoomIn size={13} /> Click to Inspect
                  </span>
                  <span style={{ fontSize: '10.5px', opacity: 0.85 }}>
                    {item.type === 'certificate' ? 'High-Res Certificate' : 'WhatsApp Screenshot'}
                  </span>
                </div>
              </div>

              {/* Text Info Box */}
              <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--gold-800)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: '4px' }}>
                    {item.student} • <span style={{ color: 'var(--text-muted)' }}>{item.teacher}</span>
                  </div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '3px', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '12.5px', color: 'var(--primary-700)', fontFamily: 'Amiri, serif', fontWeight: 700, marginBottom: '8px' }}>
                    {item.arabicTitle}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.55, marginBottom: '12px', fontStyle: item.type === 'review' ? 'italic' : 'normal' }}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Tags */}
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {item.highlights.map((h, i) => (
                    <span 
                      key={i}
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 600,
                        padding: '2px 7px',
                        borderRadius: '5px',
                        background: 'var(--bg-cream)',
                        color: 'var(--primary-900)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div 
          style={{
            marginTop: '36px',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--border-gold)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--gold-100)', color: 'var(--gold-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-900)' }}>
                Every Lesson Belongs to Your Child Alone
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-body)', marginTop: '2px' }}>
                Join families across the UK, USA, and Europe learning with verified Al-Azhar Ijazah holders.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenTrial}
            className="button button-gold"
            style={{ padding: '9px 18px', fontSize: '13px' }}
          >
            <Sparkles size={14} />
            <span>Book a Free Trial Lesson</span>
          </button>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedItem && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(4, 13, 27, 0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '660px',
              width: '100%',
              maxHeight: '94vh',
              background: '#07172e',
              borderRadius: '20px',
              border: '2px solid var(--border-gold)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              style={{
                padding: '14px 18px',
                background: '#040d1a',
                borderBottom: '1px solid rgba(201,154,69,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--gold-300)' }}>
                  {selectedItem.title}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Amiri, serif' }}>
                  {selectedItem.student} • {selectedItem.teacher}
                </div>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Box with Nav Arrows */}
            <div 
              style={{
                position: 'relative',
                background: selectedItem.type === 'certificate' ? '#ffffff' : '#020710',
                width: '100%',
                maxHeight: '62vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto',
                padding: '12px'
              }}
            >
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '58vh',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.75)',
                  border: '1px solid rgba(201,154,69,0.4)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.75)',
                  border: '1px solid rgba(201,154,69,0.4)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Modal Quote Footer */}
            <div style={{ padding: '14px 18px', background: '#07172e', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div style={{ maxWidth: '440px' }}>
                <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.9)', fontStyle: selectedItem.type === 'review' ? 'italic' : 'normal', lineHeight: 1.5 }}>
                  "{selectedItem.quote}"
                </div>
                <div style={{ fontSize: '11px', color: 'var(--gold-400)', marginTop: '4px', fontWeight: 600 }}>
                  Item {lightboxIndex + 1} of {filteredItems.length} • {selectedItem.category}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedItem(null);
                  if (onOpenTrial) onOpenTrial();
                }}
                className="button button-gold"
                style={{ padding: '7px 14px', fontSize: '12.5px' }}
              >
                <Sparkles size={13} />
                <span>Book Free Trial</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
