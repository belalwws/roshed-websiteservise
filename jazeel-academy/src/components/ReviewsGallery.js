'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, MessageCircle, Play, X, ChevronLeft, ChevronRight, ZoomIn, Award, Sparkles } from 'lucide-react';

const REVIEWS_DATA = [
  { id: '02ceccaf-3d56-4cec-b180-9712e84626f2', category: 'Quran & Arabic', student: 'Sis Camille', quote: 'Hager explains Quranic recitation and Arabic clearly, taking the time to ensure each lesson is fully understood before moving on. She is kind, professional, and always willing to answer questions.' },
  { id: '041c34f7-9d42-41a8-abb5-3d9fd93f5384', category: 'Quran & Arabic', student: 'Sis Camille', quote: 'I highly recommend Hager as a Quran and Arabic teacher. She is patient, knowledgeable, and has a wonderful way of making lessons engaging and easy to understand.' },
  { id: '0955463d-a3cc-4934-89af-5656f3082ab0', category: 'General Feedback', student: 'Asmaa Hafez', quote: 'I have thoroughly enjoyed learning with Ustadh Hager. She is incredibly patient, explains everything clearly and creates a comfortable environment to ask questions.' },
  { id: '18812f6f-77c4-4a8a-a783-a209efca6335', category: 'Tajweed & Confidence', student: 'Nabiha (UK)', quote: 'Ustadh Hager is a brilliant teacher. She explains things as thoroughly and simply as possible... Her teaching style has greatly helped me build my confidence and understanding.' },
  { id: '1eeaba1e-797a-410b-99fd-37547cdc6b8b', category: 'General Feedback', student: 'Sis Ishika', quote: 'May Allah grant you abundant levels of barakah in the academy!! Fantastic news. Of course I will send a voice recording recommendation in sha Allah.' },
  { id: '1efe62be-ab67-4cf8-b498-bcf0fd98ef78', category: 'Quran & Hifdh', student: 'Sis Sumayyah', quote: 'Alhamdulillah I started lessons with Ustadhah Hajar 6 years ago and have completed reciting the whole Quran with her. She has also been a source of guidance for my son\'s hifdh.' },
  { id: '336e0325-2038-4cf6-90a6-8c7bbcc5bac5', category: 'Kids Quran', student: 'Husena (Umm Zainab)', quote: 'Yes I would recommend your teaching to any sisters or children who want to learn Arabic/Quran and apply Tajweed rules. Alhamdulilah you taught Zainab on how to memorise Surahs online.' },
  { id: '3a9a969a-59a1-401a-a811-4f7118d07156', category: 'Kids Quran', student: 'Mother of Sufiyan & Sulayman', quote: 'Over the past four years, it has been an absolute blessing to have Ustadh Hajar teaching my sons Qur\'an, Arabic, and Tajweed. She has shown exceptional dedication, patience, and sincerity.' },
  { id: '3b2b5f77-4c4d-44c9-b25a-1c152e0b82ed', category: 'General Feedback', student: 'Sis Salma', quote: 'Congratulations sister this is such a beautiful next step for you. I hope it all goes wonderfully. May Allah make it beneficial and successful ameen.' },
  { id: '483184e8-bb3e-4382-8601-fbb535c73e33', category: 'Quran & Hifdh', student: 'Sis Sumayyah', quote: 'She has a very good level of English, which makes it easy for non Arabic speaking students like myself to be able to clarify any mistakes or misunderstandings.' },
  { id: '5658dfd8-c714-4f0b-8098-cc98b3cb04a5', category: 'Quran, Arabic & Fiqh', student: 'Rawdhat', quote: 'I have been studying with Teacher Hagar for nearly two years now, and during that time I have studied Qur\'an, Arabic and fiqh with her. It has truly been one of the best investments I have ever made.' },
  { id: '580eb679-8e6b-410a-8470-0a2e8ff80c59', category: 'Islamic Studies & Arabic', student: 'Ranya', quote: 'She has a deep understanding of the subjects she teaches and explains them in a way that is clear and easy to follow, especially for English-speaking students.' },
  { id: '5ff0eed1-fb3a-43f7-9977-29b3855162c4', category: 'Quran & Tafseer', student: 'Sis Ishika', quote: 'For the past 5 years, she has been an absolutely incredible Quran teacher... Her way of teaching the translation is almost like a tafseer, providing deep insights that make the verses come alive.' },
  { id: '75dca86a-4efb-45b2-a691-4a7c0e62315e', category: 'Kids Quran', student: 'Sis Ripa', quote: 'Ustada Hager has been so helpful for the last few years we have been taking lessons with her. My daughters have progressed a lot masha Allah with their memorisation and reading.' },
  { id: '7ed530bb-6852-47b1-ac7a-1aa7aa5f7b6c', category: 'Kids Quran', student: 'Mother of Sufiyan & Sulayman', quote: 'As a parent, I couldn\'t be happier with the progress my sons have made over the past four years. Watching them improve in their recitation, pronunciation, and memorisation has been incredibly rewarding.' },
  { id: '8f37ddb4-502e-49ef-979e-fad2fae6a0cd', category: 'Quran, Arabic & Fiqh', student: 'Rawdhat', quote: 'She follows your pace, helps you truly understand what you are learning, and is such a patient, kind and caring teacher, Allahumma barik. Being taught by teacher Hagar makes learning such a beautiful experience!' },
  { id: 'b11941fc-95f0-40fc-a782-c1808f8ca2a3', category: 'General Feedback', student: 'Sis Salma', quote: 'Yes I would be more than happy to review your teaching... Let me know if the audio is not clear and I can record again.' },
  { id: 'b4a27a0c-8771-4b8e-b280-41bec4269aaf', category: 'Islamic Studies & Arabic', student: 'Ranya', quote: 'I highly recommend Ustadh Hager as a teacher of Arabic, Quran, and Islamic studies... What stands out most is her sincerity, patience, and dedication to her students.' },
  { id: 'd4b2f447-81df-4eee-ae33-c4a4d4c5d176', category: 'Kids Quran', student: 'Mother of Sufiyan & Sulayman', quote: 'Beyond teaching the technical aspects of Qur\'an and Arabic, she instils beautiful Islamic values, respect, discipline, and a love for seeking knowledge.' },
  { id: 'ea5e83fa-4ce6-416a-9011-72b14cf885d6', category: 'Tajweed & Tafseer', student: 'Sis Mobina', quote: 'I studied tajweed and tafseer / Arabic language classes with Ustadh Hager over a few years. It greatly increased my confidence in the recitation and pronunciation of the Quran.' },
  { id: 'eec3b374-3066-4193-98d5-ffa4f666136d', category: 'General Feedback', student: 'Sis Ishika', quote: 'Salaam sister! I hope you are well. Of course I will send a voice recording recommendation in sha Allah... May Allah grant you abundant levels of barakah in the academy!!' },
  { id: 'f39807e5-735c-45c3-8b23-8ea88ab157fd', category: 'Kids Quran', student: 'Sis Ripa', quote: 'With her encouragement I was able to memorise surah Mulk which I thought was impossible for me. Love her for the sake of Allah.' },
];

const FEATURED_VIDEO_TESTIMONIALS = [
  {
    id: 'parent-reel',
    title: 'What Parents & Students Say About Jazeel Academy',
    arabicTitle: 'آراء ورسائل أولياء الأمور والطلاب الصوتية والكتابية',
    videoSrc: '/assets/videos/reviews-parent-reel.mp4',
    thumbnail: '/assets/videos/thumbnails/thumb-parent-reel.jpg',
    duration: '0:56 min',
    desc: 'Authentic WhatsApp messages, voice reflections, and progress feedback from European and American parents.'
  },
  {
    id: 'student-certs',
    title: 'Student Quran Memorization & Appreciation Honors',
    arabicTitle: 'شهادات تقدير وتكريم إنجازات الطلاب في حفظ القرآن',
    videoSrc: '/assets/videos/students-appreciation-certificates.mp4',
    thumbnail: '/assets/videos/thumbnails/thumb-student-certs.jpg',
    duration: '2:30 min',
    desc: 'Celebrating student milestones, Surah completions, and dedicated achievement certificates.'
  }
];

export default function ReviewsGallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const categories = ['All', 'Kids Quran', 'Quran & Arabic', 'Quran & Tafseer', 'Islamic Studies & Arabic'];

  const filteredReviews = activeTab === 'All' 
    ? REVIEWS_DATA 
    : REVIEWS_DATA.filter(r => r.category === activeTab);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setSelectedImage(filteredReviews[index]);
  };

  const handleNext = useCallback(() => {
    if (filteredReviews.length === 0) return;
    const nextIdx = (lightboxIndex + 1) % filteredReviews.length;
    setLightboxIndex(nextIdx);
    setSelectedImage(filteredReviews[nextIdx]);
  }, [lightboxIndex, filteredReviews]);

  const handlePrev = useCallback(() => {
    if (filteredReviews.length === 0) return;
    const prevIdx = (lightboxIndex - 1 + filteredReviews.length) % filteredReviews.length;
    setLightboxIndex(prevIdx);
    setSelectedImage(filteredReviews[prevIdx]);
  }, [lightboxIndex, filteredReviews]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage && !activeVideoModal) return;
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setActiveVideoModal(null);
      }
      if (selectedImage) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, activeVideoModal, handleNext, handlePrev]);

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag light">Parent &amp; Student Testimonials • آراء العملاء</div>
          <h2 className="section-title light">
            Authentic Student &amp; Parent <span className="gold-gradient-text">Feedback</span>
          </h2>
          <p className="section-subtitle light">
            Explore authentic WhatsApp feedback, exam successes, and heartfelt testimonials from parents and students across the UK, USA, Canada, and Europe.
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '16px', padding: '16px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '26px', fontWeight: 900, color: 'var(--gold-400)' }}>12+ Years</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gold-300)', marginTop: '4px' }}>Non-Native Teaching</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>Specialized Azhari Pedagogy</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '16px', padding: '16px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff' }}>Al-Azhar</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gold-300)', marginTop: '4px' }}>Official Accreditation</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>Licensed Institution</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '16px', padding: '16px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff' }}>22+ Reviews</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gold-300)', marginTop: '4px' }}>WhatsApp Verified</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>Real Parent Testimonials</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '16px', padding: '16px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff' }}>1-on-1</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gold-300)', marginTop: '4px' }}>Periodic Follow-up</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>Direct Parent Reports</div>
          </div>
        </div>

        {/* Featured Video Feedback Reels Card */}
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(14,46,92,0.3) 100%)',
            border: '1px solid rgba(212,175,55,0.35)',
            borderRadius: '20px',
            padding: '22px',
            marginBottom: '36px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--gold-500)', color: '#07172e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={18} fill="#07172e" />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Featured Video Testimonials &amp; Student Honors
                </h3>
                <span style={{ fontSize: '12.5px', color: 'var(--gold-300)', fontFamily: 'Cairo, sans-serif' }}>
                  فيديوهات توثيق تقييمات أولياء الأمور وتكريمات حفظة القرآن
                </span>
              </div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', background: 'rgba(37,211,102,0.2)', color: '#25d366', border: '1px solid rgba(37,211,102,0.4)' }}>
              ▶ Video Testimonials
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {FEATURED_VIDEO_TESTIMONIALS.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideoModal(vid)}
                style={{
                  background: 'rgba(5, 18, 36, 0.8)',
                  borderRadius: '14px',
                  border: '1px solid rgba(212,175,55,0.25)',
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold-400)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, background: '#020710' }}>
                  <img 
                    src={vid.thumbnail} 
                    alt={vid.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gold-500)', color: '#07172e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={14} fill="#07172e" style={{ marginLeft: '2px' }} />
                    </div>
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff', lineHeight: 1.35, marginBottom: '3px' }}>
                    {vid.title}
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--gold-300)', fontFamily: 'Cairo, sans-serif', marginBottom: '4px' }}>
                    {vid.arabicTitle}
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.65)' }}>
                    ⏱️ {vid.duration} • Click to Watch
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                padding: '7px 18px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 700,
                border: activeTab === cat ? '1px solid var(--gold-400)' : '1px solid rgba(255,255,255,0.15)',
                background: activeTab === cat ? 'linear-gradient(135deg, #d4af37 0%, #b8861e 100%)' : 'rgba(255,255,255,0.07)',
                color: activeTab === cat ? '#0b2545' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Screenshots and Quotes Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredReviews.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="review-card-item"
            >
              {/* WhatsApp Screenshot preview thumbnail */}
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#07162c' }}>
                <img 
                  src={`/assets/reviews/${item.id}.jpg`}
                  alt={`Student review from ${item.student}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.4s ease'
                  }}
                  loading="lazy"
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6,21,43,0.92) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    padding: '10px 12px'
                  }}
                >
                  <span style={{ fontSize: '10.5px', fontWeight: 800, padding: '3px 7px', borderRadius: '5px', background: 'rgba(37,211,102,0.92)', color: '#ffffff' }}>
                    WhatsApp Verified
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--gold-300)', fontWeight: 700 }}>
                    <ZoomIn size={13} /> Click to Expand
                  </span>
                </div>
              </div>

              {/* Review Quote & Country */}
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, marginBottom: '12px', fontStyle: 'italic' }}>
                  "{item.quote}"
                </p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--gold-300)' }}>
                      {item.student}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>
                      {item.category}
                    </div>
                  </div>
                  <div style={{ display: 'flex', color: '#f59e0b' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#f59e0b" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Modal */}
        {selectedImage && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(4, 13, 27, 0.92)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div 
              style={{
                position: 'relative',
                maxWidth: '620px',
                width: '100%',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#06152b',
                borderRadius: '20px',
                border: '1px solid var(--border-gold)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
                padding: '16px',
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid rgba(212,175,55,0.2)', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MessageCircle size={18} style={{ color: '#25d366' }} />
                  <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--gold-300)' }}>
                    {selectedImage.student} • {selectedImage.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
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

              {/* Image with Prev/Next buttons */}
              <div style={{ position: 'relative', width: '100%', maxHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
                <img 
                  src={`/assets/reviews/${selectedImage.id}.jpg`}
                  alt={`Student review from ${selectedImage.student}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '58vh',
                    objectFit: 'contain',
                    borderRadius: '10px'
                  }}
                />

                <button
                  onClick={handlePrev}
                  style={{
                    position: 'absolute',
                    left: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={handleNext}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
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

              {/* Quote footer */}
              <div style={{ width: '100%', marginTop: '14px', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                  "{selectedImage.quote}"
                </p>
                <div style={{ marginTop: '6px', fontSize: '11px', color: 'var(--gold-400)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Verified Review</span> • <span>Review {lightboxIndex + 1} of {filteredReviews.length}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Lightbox Modal */}
        {activeVideoModal && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(3, 10, 22, 0.95)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setActiveVideoModal(null)}
          >
            <div 
              style={{
                position: 'relative',
                maxWidth: '480px',
                width: '100%',
                maxHeight: '92vh',
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
              <div 
                style={{
                  padding: '14px 18px',
                  background: '#040d1a',
                  borderBottom: '1px solid rgba(212,175,55,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--gold-300)' }}>
                    {activeVideoModal.title}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                    {activeVideoModal.arabicTitle}
                  </div>
                </div>

                <button
                  onClick={() => setActiveVideoModal(null)}
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

              <div style={{ background: '#000000', width: '100%', maxHeight: '68vh', display: 'flex', justifyContent: 'center' }}>
                <video
                  src={activeVideoModal.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain' }}
                />
              </div>

              <div style={{ padding: '12px 18px', background: '#07172e', fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
                {activeVideoModal.desc}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
