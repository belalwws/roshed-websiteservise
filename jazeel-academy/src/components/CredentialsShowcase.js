'use client';

import { useState, useEffect, useCallback } from 'react';
import { Award, ShieldCheck, ZoomIn, X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, FileText } from 'lucide-react';
import { ScrollIcon } from './Icons';

const CREDENTIALS_DATA = [
  {
    id: 'sanad-title',
    category: 'Sanad Ijazah',
    categoryAr: 'الإجازة القرآنية المسندة',
    title: 'Quranic Ijazah with Connected Chain (Sanad)',
    arabicTitle: 'إجازة بقراءة القرآن الكريم وإقرائه بالسند المتصل',
    issuer: 'Dar Hibr Al-Ummah & Turjuman Al-Quran',
    issuerAr: 'دار حبر الأمة وترجمان القرآن',
    image: '/assets/credentials/ijazah-title.jpg',
    badge: 'Connected Chain (Sanad)',
    desc: 'Official Quranic Ijazah granted to Sheikha Hager in the recitation of Asim (Riwayah of Hafs and Shu’bah) via the classical Shatibiyyah route.',
    descAr: 'إجازة معتمدة للشيخة هاجر بنت سيد بن عبد العال بقراءة عاصم بروايتي حفص وشعبة من طريق الشاطبية المبارك.',
    highlights: ['Authorized Reciter & Teacher', 'Hafs & Shu’bah Riwayah', 'Classical Shatibiyyah Pathway']
  },
  {
    id: 'sanad-text',
    category: 'Sanad Ijazah',
    categoryAr: 'الإجازة القرآنية المسندة',
    title: 'Unbroken Sanad Chain to Prophet Muhammad ﷺ',
    arabicTitle: 'نص السند الذهبي المتصل إلى حضرة النبي ﷺ',
    issuer: 'Sheikha Fatima bint Tawfiq (Authorized Scholar)',
    issuerAr: 'الشيخة فاطمة بنت توفيق بن حسين',
    image: '/assets/credentials/ijazah-sanad.jpg',
    badge: 'Golden Isnad',
    desc: 'The verified golden chain of transmission directly tracing Sheikha Hager’s recitation teacher-by-teacher through the Sahabah to Prophet Muhammad ﷺ.',
    descAr: 'سند قرآني متصل شيخاً عن شيخ إلى التابعين والصحابة الكرام وصولاً إلى رسول الله ﷺ.',
    highlights: ['Verified Lineage of Reciters', 'Al-Azhar Senior Scholars', 'Oral Precision & Tajweed']
  },
  {
    id: 'sanad-conclusion',
    category: 'Sanad Ijazah',
    categoryAr: 'الإجازة القرآنية المسندة',
    title: 'Ijazah Completion, Endorsement & Official Seals',
    arabicTitle: 'خاتمة الإجازة والأختام وتصريح الإقراء الرسمي',
    issuer: 'Official Board of Quranic Recitations',
    issuerAr: 'لجنة القراءات والإقراء المعتمدة',
    image: '/assets/credentials/ijazah-conclusion.jpg',
    badge: 'Official Stamp',
    desc: 'Official stamps and signed verification granting permission to teach and grant Ijazahs to qualifying students worldwide.',
    descAr: 'التوثيق الختامي والتوقيع والأختام الرسمية المانحة لإذن الإقراء والتعليم القرآني.',
    highlights: ['Official Stamp Verified', 'Full Khatmah Oral Defense', 'Teacher Authorization']
  },
  {
    id: 'sanad-cover',
    category: 'Sanad Ijazah',
    categoryAr: 'الإجازة القرآنية المسندة',
    title: 'Official Gold-Embossed Sanad Ijazah Register',
    arabicTitle: 'غلاف سجل الإجازة القرآنية المجلد والمذهب',
    issuer: 'Accredited Quranic Board',
    issuerAr: 'السجل القرآني الموثق',
    image: '/assets/credentials/ijazah-cover.jpg',
    badge: 'Preserved Register',
    desc: 'Luxury hardcover archive preserving the student oral examination record and formal Riwayah certifications.',
    descAr: 'توثيق السجل التراثي المحفوظ والمقيد بالسجلات القرآنية الرسمية.',
    highlights: ['Luxury Leather Registry', 'Formal Riwayah Archiving', 'Preserved Academic Record']
  },
  {
    id: 'azhar-license',
    category: 'Al-Azhar License',
    categoryAr: 'تصريح الأزهر الشريف',
    title: 'Al-Azhar Official Quran Center License',
    arabicTitle: 'تصريح رسمي من قطاع المعاهد الأزهرية لشئون القرآن',
    issuer: 'Al-Azhar Al-Sharif - General Administration of Quran Affairs',
    issuerAr: 'الأزهر الشريف - الإدارة العامة لشئون القرآن الكريم',
    image: '/assets/credentials/azhar-license.jpg',
    badge: 'Al-Azhar Approved',
    desc: 'Official government license and clearance from Al-Azhar Al-Sharif authorizing the establishment and management of a formal Quranic teaching center.',
    descAr: 'تصريح واختبار رسمي صادر من الأزهر الشريف بمطابقة المنهج والترخيص الرسمي لتحفيظ كتاب الله.',
    highlights: ['Al-Azhar Central Administration', 'Official Regulatory Clearance', 'Certified Quran Educator']
  },
  {
    id: 'azhar-degree',
    category: 'Degree & Honors',
    categoryAr: 'ليسانس الأزهر والترجمة',
    title: 'Al-Azhar University Degree with Honors (English Dept)',
    arabicTitle: 'شهادة ليسانس اللغات والترجمة الفورية بمرتبة الشرف',
    issuer: 'Al-Azhar University - Faculty of Humanities',
    issuerAr: 'جامعة الأزهر - كلية الدراسات الإنسانية (قسم إنجليزي)',
    image: '/assets/credentials/azhar-degree.jpg',
    badge: 'Honors Degree',
    desc: 'Bachelor degree in European Languages & Simultaneous Translation (English Division) with Very Good with Honors, guaranteeing fluent instruction for Western students.',
    descAr: 'ليسانس اللغات الأوروبية والترجمة الفورية من جامعة الأزهر بتقدير جيد جداً مع مرتبة الشرف، مما يضمن تدريساً باللغة الإنجليزية بأعلى معايير الفصاحة.',
    highlights: ['Fluent English Translation', 'Pedagogical Linguistics', 'Very Good with Honors']
  },
  {
    id: 'appreciation-cert',
    category: 'Appreciation',
    categoryAr: 'شهادات التقدير',
    title: 'Quranic Teaching Distinction & Honor Award',
    arabicTitle: 'شهادة شكر وتقدير ووفاء في خدمة كتاب الله',
    issuer: 'Ansar Al-Sunnah Quranic Association',
    issuerAr: 'جمعية أنصار السنة المحمدية - لجنة شئون القرآن',
    image: '/assets/credentials/appreciation-certificate.jpg',
    badge: 'Community Award',
    desc: 'Recognition of dedication and excellence in Quran memorization programs and mentorship of non-native students.',
    descAr: 'شهادة تقدير وتكريم للجهود المتميزة في تحفيظ القرآن الكريم وتنشئة جيل قرآني متقن.',
    highlights: ['Excellence in Quran Education', 'Community Recognition', 'Active Field Dedication']
  }
];

export default function CredentialsShowcase({ onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCredential, setSelectedCredential] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Sanad Ijazah', 'Al-Azhar License', 'Degree & Honors', 'Appreciation'];

  const filteredCredentials = activeTab === 'All'
    ? CREDENTIALS_DATA
    : CREDENTIALS_DATA.filter(c => c.category === activeTab);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setSelectedCredential(filteredCredentials[index]);
  };

  const handleNext = useCallback(() => {
    if (filteredCredentials.length === 0) return;
    const nextIdx = (lightboxIndex + 1) % filteredCredentials.length;
    setLightboxIndex(nextIdx);
    setSelectedCredential(filteredCredentials[nextIdx]);
  }, [lightboxIndex, filteredCredentials]);

  const handlePrev = useCallback(() => {
    if (filteredCredentials.length === 0) return;
    const prevIdx = (lightboxIndex - 1 + filteredCredentials.length) % filteredCredentials.length;
    setLightboxIndex(prevIdx);
    setSelectedCredential(filteredCredentials[prevIdx]);
  }, [lightboxIndex, filteredCredentials]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedCredential) return;
      if (e.key === 'Escape') setSelectedCredential(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCredential, handleNext, handlePrev]);

  return (
    <section className="credentials-section" style={{ padding: '80px 0', background: 'var(--bg-cream)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">Scholarly Authority • الاعتمادات والإجازات الرسمية</div>
          <h2 className="section-title">
            Authentic Credentials &amp; <span className="navy-gradient-text">Connected Sanad Ijazahs</span>
          </h2>
          <p className="section-subtitle">
            Every teacher and curriculum at Jazeel Academy is backed by verified Al-Azhar university degrees, government licensing, and unbroken chains of recitation (Sanad) linked back to Prophet Muhammad ﷺ.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
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
                background: activeTab === cat ? 'linear-gradient(135deg, #0b2545 0%, #133e6d 100%)' : '#ffffff',
                color: activeTab === cat ? '#ffffff' : 'var(--primary-900)',
                boxShadow: activeTab === cat ? '0 4px 14px rgba(11,37,69,0.25)' : 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat === 'All' && '🌟 All Credentials'}
              {cat === 'Sanad Ijazah' && '📜 Connected Sanad Ijazahs'}
              {cat === 'Al-Azhar License' && '🏛️ Al-Azhar License'}
              {cat === 'Degree & Honors' && '🎓 Azhar English Degree (Honors)'}
              {cat === 'Appreciation' && '🏆 Appreciation Awards'}
            </button>
          ))}
        </div>

        {/* Credentials Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredCredentials.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              {/* Document Image Thumbnail */}
              <div 
                style={{
                  position: 'relative',
                  height: '240px',
                  background: '#07162c',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 25%',
                    transition: 'transform 0.4s ease'
                  }}
                  loading="lazy"
                />

                {/* Badge Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'linear-gradient(135deg, #d4af37 0%, #b8861e 100%)',
                    color: '#07172e',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}
                >
                  ✓ {item.badge}
                </div>

                {/* Bottom Click to Expand Bar */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    insetInline: 0,
                    background: 'linear-gradient(to top, rgba(7, 22, 44, 0.95) 0%, transparent 100%)',
                    padding: '12px 14px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'var(--gold-300)',
                    fontSize: '11.5px',
                    fontWeight: 700
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ZoomIn size={14} /> Click to Inspect Document
                  </span>
                  <span style={{ fontSize: '10.5px', opacity: 0.85 }}>High-Res Scan</span>
                </div>
              </div>

              {/* Document Details */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--gold-700)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                    {item.issuer}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '4px', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--primary-700)', fontFamily: 'Cairo, sans-serif', fontWeight: 700, marginBottom: '10px' }}>
                    {item.arabicTitle}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '14px' }}>
                    {item.desc}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.highlights.map((h, i) => (
                      <span 
                        key={i}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'var(--bg-soft)',
                          color: 'var(--primary-800)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Note */}
        <div 
          style={{
            marginTop: '36px',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--border-gold)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--gold-100)', color: 'var(--gold-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ShieldCheck size={24} />
          </div>
          <div>
            <div style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--primary-900)' }}>
              100% Scholarly Transparency &amp; Verified Documentation
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-body)', marginTop: '2px' }}>
              All instructors at Jazeel Academy undergo rigorous background vetting, oral Tajweed recitations, and formal verification of their Al-Azhar credentials before teaching any student.
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCredential && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(4, 13, 27, 0.95)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setSelectedCredential(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '94vh',
              background: '#07172e',
              borderRadius: '22px',
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
                padding: '14px 20px',
                background: '#040d1a',
                borderBottom: '1px solid rgba(212,175,55,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--gold-300)' }}>
                  {selectedCredential.title}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Cairo, sans-serif' }}>
                  {selectedCredential.arabicTitle}
                </div>
              </div>

              <button
                onClick={() => setSelectedCredential(null)}
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

            {/* Document Image with Nav Arrows */}
            <div 
              style={{
                position: 'relative',
                background: '#020710',
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
                src={selectedCredential.image} 
                alt={selectedCredential.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '58vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
                }}
              />

              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.75)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.75)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Modal Explanatory Footer */}
            <div style={{ padding: '16px 20px', background: '#07172e', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div style={{ maxWidth: '440px' }}>
                <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                  {selectedCredential.desc}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--gold-300)', marginTop: '4px', fontWeight: 600 }}>
                  Issuer: {selectedCredential.issuer}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCredential(null);
                  if (onOpenTrial) onOpenTrial();
                }}
                className="button button-gold"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                <Sparkles size={14} />
                <span>Book a Free Trial</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
