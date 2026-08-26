'use client';

import { useState } from 'react';
import { Play, Sparkles, X, CheckCircle2 } from 'lucide-react';

const DEMO_VIDEOS = [
  {
    id: 'noorani-qaidah',
    title: 'Interactive Reading & Noorani Qaida for Kids',
    arabicTitle: 'تأسيس القراءة والقاعدة النورانية التفاعلية للأطفال',
    category: 'Kids & Beginners Track',
    videoSrc: '/assets/videos/demo-noorani-qaidah.mp4',
    thumbnail: '/assets/videos/thumbnails/thumb-noorani-qaidah.jpg',
    duration: '0:58 min',
    description: 'Live interactive whiteboard lesson teaching Arabic letter articulation, sounds, and Noorani Qaida phonetics tailored for young non-native beginners.',
    tags: ['Noorani Qaida', 'Letter Articulation', 'Kids Friendly', '1-on-1 Zoom']
  },
  {
    id: 'quranic-arabic',
    title: 'Quranic Arabic & Grammar for Non-Arabs',
    arabicTitle: 'تعليم اللغة العربية القرآنية وقواعد النحو لغير الناطقين بها',
    category: 'Arabic Language Track',
    videoSrc: '/assets/videos/demo-quranic-arabic.mp4',
    thumbnail: '/assets/videos/thumbnails/thumb-quranic-arabic.jpg',
    duration: '0:55 min',
    description: 'Practical Azhari breakdown of Arabic conjunctions (حروف العطف) and sentence structures for English-speaking youth and adult students.',
    tags: ['Quranic Grammar', 'English Medium', 'Arabic Syntax', 'Non-Native Pedagogy']
  },
  {
    id: 'tafseer-alkahf',
    title: 'Tafseer & Quranic Meanings in English (Surah Al-Kahf)',
    arabicTitle: 'تفسير وتدبر سورة الكهف باللغة الإنجليزية والعربية',
    category: 'Islamic Studies Track',
    videoSrc: '/assets/videos/demo-tafseer-alkahf.mp4',
    thumbnail: '/assets/videos/thumbnails/thumb-tafseer-alkahf.jpg',
    duration: '0:54 min',
    description: 'Deep reflection on Surah Al-Kahf verses, connecting classical Azhari tafseer with English translations and daily spiritual insights.',
    tags: ['Surah Al-Kahf', 'Bilingual Tafseer', 'Spiritual Reflection', 'Teens & Adults']
  }
];

export default function LiveClassesShowcase({ onOpenTrial }) {
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  const openVideoModal = (video) => {
    setActiveModalVideo(video);
  };

  const closeVideoModal = () => {
    setActiveModalVideo(null);
  };

  return (
    <section className="live-classes-section" style={{ padding: '80px 0', background: '#07172e', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="badge-pill-gold" style={{ display: 'inline-flex', padding: '6px 18px', borderRadius: '999px', marginBottom: '14px' }}>
            <Sparkles size={14} /> Live Class Demonstrations • نماذج حية من الحصص
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '14px' }}>
            See Our Teaching Methodology <span className="gold-gradient-text">In Action</span>
          </h2>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '15.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
            Watch genuine recorded excerpts from our 1-on-1 live sessions. Experience firsthand how our certified Azhari tutors teach Noorani Qaida, Quranic Arabic, and Tafseer to English-speaking students.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '40px'
          }}
        >
          {DEMO_VIDEOS.map((video) => (
            <div 
              key={video.id}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '22px',
                border: '1px solid rgba(212, 175, 55, 0.22)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                backdropFilter: 'blur(8px)'
              }}
            >
              {/* Video / Thumbnail Container */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '280px',
                  background: '#040d1a',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => openVideoModal(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    transition: 'transform 0.4s ease'
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 23, 46, 0.95) 0%, rgba(7, 23, 46, 0.2) 60%, rgba(0,0,0,0.4) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '16px'
                  }}
                >
                  {/* Top Badges */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span 
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '8px',
                        background: 'rgba(212, 175, 55, 0.92)',
                        color: '#07172e'
                      }}
                    >
                      {video.category}
                    </span>
                    <span 
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(0,0,0,0.6)',
                        color: '#ffffff',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      ⏱️ {video.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #d4af37 0%, #b8861e 100%)',
                      color: '#07172e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)'
                    }}
                  >
                    <Play size={28} fill="#07172e" style={{ marginLeft: '4px' }} />
                  </div>

                  {/* Bottom Prompt */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--gold-300)', fontSize: '12px', fontWeight: 700 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <Play size={13} fill="currentColor" /> Click to Watch Live Clip
                    </span>
                    <span style={{ fontSize: '11px', opacity: 0.8 }}>HD Audio &amp; Video</span>
                  </div>
                </div>
              </div>

              {/* Card Content Info */}
              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', marginBottom: '4px', lineHeight: 1.35 }}>
                    {video.title}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--gold-300)', fontFamily: 'Cairo, sans-serif', fontWeight: 700, marginBottom: '10px' }}>
                    {video.arabicTitle}
                  </div>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {video.description}
                  </p>
                </div>

                {/* Highlights Tags */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {video.tags.map((t, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.85)',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        ✓ {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => openVideoModal(video)}
                    style={{
                      width: '100%',
                      padding: '11px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #d4af37 0%, #b8861e 100%)',
                      color: '#07172e',
                      fontWeight: 800,
                      fontSize: '13.5px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 15px rgba(212,175,55,0.3)'
                    }}
                  >
                    <Play size={16} fill="#07172e" />
                    <span>Watch Full Demo Clip</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Call To Action */}
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(14,46,92,0.4) 100%)',
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: '18px',
            padding: '24px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Want to see how your child interacts in a live 1-on-1 session?
            </h4>
            <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.5 }}>
              Book your complimentary 1-on-1 trial class today with a certified Azhari tutor. No credit card required.
            </p>
          </div>

          <button
            onClick={onOpenTrial}
            className="button button-gold"
            style={{ padding: '12px 24px', fontSize: '14.5px', whiteSpace: 'nowrap' }}
          >
            <Sparkles size={16} />
            <span>Book a Free Trial Session</span>
          </button>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {activeModalVideo && (
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
          onClick={closeVideoModal}
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
            {/* Modal Header */}
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
                  {activeModalVideo.title}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                  Jazeel Academy Official Recorded Session
                </div>
              </div>

              <button
                onClick={closeVideoModal}
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

            {/* Video Player */}
            <div style={{ background: '#000000', width: '100%', maxHeight: '68vh', display: 'flex', justifyContent: 'center' }}>
              <video
                src={activeModalVideo.videoSrc}
                controls
                autoPlay
                playsInline
                style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain' }}
              />
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '14px 18px', background: '#07172e', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.85)' }}>
                ✨ Certified Al-Azhar 1-on-1 Instruction
              </div>

              <button
                onClick={() => {
                  closeVideoModal();
                  if (onOpenTrial) onOpenTrial();
                }}
                className="button button-gold"
                style={{ padding: '7px 14px', fontSize: '12px' }}
              >
                <Sparkles size={13} />
                <span>Book This Class</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
