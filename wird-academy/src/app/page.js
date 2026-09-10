'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrialModal from '../components/TrialModal';
import TrialBookingForm from '../components/TrialBookingForm';
import FeedbackGallery from '../components/FeedbackGallery';
import { 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  Users, 
  Target, 
  BarChart3, 
  GraduationCap, 
  ArrowRight,
  HelpCircle,
  CalendarCheck,
  Languages,
  BookMarked,
  Heart,
  Compass
} from 'lucide-react';

export default function HomePage() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [activeCourseCategory, setActiveCourseCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);

  // 5 Focused Programmes requested
  const programmes = [
    {
      id: 'reading-foundations',
      category: 'arabic',
      badge: 'Level 1 • Foundations',
      title: '1. Arabic Reading Foundations',
      desc: 'Build a strong foundation from recognising Arabic letters to reading Quranic words and verses. Learners develop accurate pronunciation and reading fluency through personalised guidance and immediate live correction.',
      tags: ['Noor Al-Bayan / Qaida', 'Letter Recognition & Makharij', 'Children, Teens & Adults']
    },
    {
      id: 'recitation-tajweed',
      category: 'quran',
      badge: 'Core Recitation & Tajweed',
      title: '2. Quran Recitation & Tajweed',
      desc: 'Develop clear, confident recitation through accurate makharij and applied Tajweed. Each lesson combines guided practice, live correction, and focused feedback, helping learners apply Tajweed rules accurately and recite with clarity and confidence.',
      tags: ['Accurate Makharij', 'Applied Tajweed', 'Live 1-to-1 Correction']
    },
    {
      id: 'hifz-memorisation',
      category: 'quran',
      badge: 'Quran Memorisation & Retention',
      title: '3. Hifz & Quran Memorisation',
      desc: 'Follow a structured memorisation plan tailored to the learner’s level and pace. New memorisation is supported by systematic revision and regular assessment to strengthen accuracy and long-term retention.',
      tags: ['Personalised Hifz Plan', 'Systematic Revision', 'Progress Reviews']
    },
    {
      id: 'islamic-studies',
      category: 'islamic',
      badge: 'Faith & Islamic Studies',
      title: '4. Islamic Studies',
      desc: 'Build sound Islamic knowledge through age-appropriate lessons grounded in authentic sources. Learners explore Aqeedah, Fiqh, Seerah, worship, daily adhkar, and Islamic manners in a clear, practical way.',
      tags: ['Aqeedah & Fiqh', 'Seerah & Stories of the Prophets', 'Adhkar & Islamic Manners']
    },
    {
      id: 'quranic-arabic',
      category: 'arabic',
      badge: 'Quranic Arabic & Meaning',
      title: '5. Quranic Arabic',
      desc: 'Begin understanding the language of the Quran through high-frequency vocabulary, essential grammar, and familiar Quranic expressions. Learners gradually recognise words and structures within the verses they recite.',
      tags: ['High-Frequency Quranic Vocabulary', 'Foundational Grammar', 'Guided Verse Understanding']
    }
  ];

  const filteredProgrammes = activeCourseCategory === 'all' 
    ? programmes 
    : programmes.filter(p => p.category === activeCourseCategory);

  // 4 Principles Behind Every Wird Lesson (Teaching Approach)
  const principles = [
    {
      number: '1',
      title: 'Accuracy Before Speed',
      quote: '“We would rather a learner read one page accurately than ten pages without mastery.”',
      desc: 'We never rush learners through the Quran. Each letter is taught from its correct point of articulation (makhraj), helping preserve accurate pronunciation, meaning, and reverence.',
      icon: <Target size={24} />
    },
    {
      number: '2',
      title: 'Progress Through Mastery',
      quote: '“A level is complete when the learner demonstrates mastery—not simply when the lessons end.”',
      desc: 'Learners do not move to a new book or surah prematurely. Progress happens only after the skills and milestones of the current stage have been securely mastered.',
      icon: <BarChart3 size={24} />
    },
    {
      number: '3',
      title: 'Consistency Over Intensity',
      quote: '“A small portion sustained each week outlasts a burst of effort that quickly fades.”',
      desc: 'Regular, focused 1-to-1 lessons support stronger long-term retention, steady confidence, and a lasting connection with the Quran.',
      icon: <Clock size={24} />
    },
    {
      number: '4',
      title: 'Every Learner Is Known',
      quote: '“Every learner is seen, understood, and supported.”',
      desc: 'Each learner is paired with a dedicated teacher who comes to understand their starting point, learning pace, strengths, and areas needing further practice.',
      icon: <Users size={24} />
    }
  ];

  // 7 Commitments Behind Every Wird Learning Journey
  const commitments = [
    {
      number: '1',
      title: 'Al-Azhar Graduates & Ijazah Holders',
      desc: 'Our teaching team brings together Al-Azhar graduates and Ijazah holders with experience teaching Quran and Arabic to non-Arabic speakers.',
      icon: <Award size={24} />
    },
    {
      number: '2',
      title: 'One Learner, One Teacher',
      desc: 'Every lesson is fully 1-to-1, giving each learner focused attention, immediate correction, and teaching adapted to their individual needs.',
      icon: <Users size={24} />
    },
    {
      number: '3',
      title: 'A Plan Built Around the Learner',
      desc: 'Every learner begins with an assessment and a personalised plan that adapts to their pace, progress, and areas requiring further support.',
      icon: <Compass size={24} />
    },
    {
      number: '4',
      title: 'Review That Strengthens Retention',
      desc: 'Previous learning is reviewed regularly before new material is introduced, helping knowledge and skills become more accurate, secure, and lasting.',
      icon: <ShieldCheck size={24} />
    },
    {
      number: '5',
      title: 'Clear Milestones & Documented Progress',
      desc: 'After the trial, each learner receives a level summary and a three-month plan. Progress is then tracked through regular reports, milestone assessments, and a full review every three months.',
      icon: <BarChart3 size={24} />
    },
    {
      number: '6',
      title: 'Progress You Can See and Hear',
      desc: 'Progress becomes visible in stronger retention and growing independence—and audible in clearer articulation, more accurate Tajweed, and greater confidence in recitation.',
      icon: <Sparkles size={24} />
    },
    {
      number: '7',
      title: 'Flexible Learning Across Time Zones',
      desc: 'Lessons are scheduled around families in different time zones, with consistent weekly times that support a steady and sustainable learning routine.',
      icon: <Clock size={24} />
    }
  ];

  // 4-Step Journey
  const steps = [
    {
      step: '1',
      title: 'Book Your Free Trial',
      desc: "Complete our short form with the learner's age, goals, and current experience, or contact us directly on WhatsApp to arrange a suitable time."
    },
    {
      step: '2',
      title: 'Join a Live 1-to-1 Assessment',
      desc: "A qualified teacher will identify the learner's starting point through level-appropriate activities and a focused sample lesson."
    },
    {
      step: '3',
      title: 'Receive Your Personalised Plan',
      desc: 'After the trial, receive a clear level summary and a tailored three-month learning plan, then choose a consistent weekly schedule that suits your time zone.'
    },
    {
      step: '4',
      title: 'Begin Learning & Track Progress',
      desc: "Start personalised 1-to-1 lessons with regular review, clear milestones, and progress updates. A full review every three months helps shape the learner's next stage."
    }
  ];

  const faqs = [
    {
      q: 'How does the free trial lesson and level assessment work?',
      a: "Your first lesson is 100% complimentary and conducted 1-on-1 with a qualified Al-Azhar teacher. The instructor assesses the learner's current pronunciation, Makharij, and reading starting point, followed by a level summary and a tailored 3-month plan."
    },
    {
      q: 'What makes Wird Academy different from large online platforms?',
      a: 'We operate under our core philosophy: "Read the Quran as It Was Revealed." We prioritize accuracy before speed, every session is strictly 1-to-1, every teacher is an Al-Azhar graduate with an authentic Ijazah, and progress is earned through verified mastery rather than just elapsed hours.'
    },
    {
      q: 'What age groups do you teach?',
      a: 'We teach all age groups—from young children (ages 4–7) with engaging phonetics and foundational reading, to older children (8–12), teenagers (13–17), and adults seeking foundational Arabic reading, Tajweed refinement, or structured memorisation.'
    },
    {
      q: 'How are the teachers qualified?',
      a: 'All our instructors are graduates of prestigious faculties at Al-Azhar University (Islamic Sharī\'ah, Quranic Sciences, and English Sections) holding authentic Ijazahs with Sanad, trained in teaching non-Arabic speakers with clear bilingual communication.'
    },
    {
      q: 'How do parents receive feedback and monitor progress?',
      a: 'Parents receive regular updates after lessons detailing what was covered and areas of practice, along with milestone assessments and a full review every three months to ensure continuous, documented progress.'
    }
  ];

  return (
    <div>
      <Navbar onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              {/* Two small badges above the title */}
              <div className="hero-badges">
                <span className="hero-badge-tag">
                  <Award size={13} /> Al-Azhar Graduates &amp; Ijazah Holders
                </span>
                <span className="hero-badge-tag">
                  <Sparkles size={13} /> Personalised 1-to-1 Live Lessons
                </span>
              </div>

              <div>
                <h1 className="hero-headline">
                  Read the Quran <span className="gold-gradient-text">as It Was Revealed</span>
                </h1>
                <div className="hero-subheadline-custom">
                  Build Confidence in Quran Recitation, Tajweed, and Memorisation
                </div>
              </div>

              <p className="hero-desc">
                Whether beginning with the Arabic alphabet or refining Quran recitation, every learner follows a personalised 1-to-1 path—starting exactly where they are and progressing at the right pace.
              </p>

              <div className="hero-actions">
                <button 
                  onClick={() => setIsTrialOpen(true)}
                  className="button button-gold"
                  id="hero-book-trial-btn"
                >
                  <Sparkles size={16} />
                  <span>Book a Free Trial</span>
                </button>

                <a 
                  href="https://wa.me/201061858535?text=Hello%20Wird%20Academy,%20I%20would%20like%20to%20inquire%20about%20a%20free%20trial%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-whatsapp"
                  id="hero-whatsapp-btn"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp: 01061858535</span>
                </a>
              </div>

              {/* 4 Trust Checkmarks */}
              <div className="hero-trust-list">
                <div className="hero-trust-item">
                  <CheckCircle2 size={17} className="hero-trust-icon" />
                  <span>Al-Azhar Ijazah Certified</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={17} className="hero-trust-icon" />
                  <span>One Learner, One Teacher</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={17} className="hero-trust-icon" />
                  <span>3-Month Documented Reviews</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={17} className="hero-trust-icon" />
                  <span>Flexible Global Timezones</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Static Authentic Educational Image Card */}
            <div className="hero-visual">
              <div className="hero-static-visual-card">
                <div className="hero-static-img-frame">
                  <img 
                    src="/assets/generated/family-quran-hero.jpg" 
                    alt="Loving Muslim Family Learning Quran Online with Al-Azhar Scholar at Wird Academy" 
                    className="hero-static-photo"
                    width={520}
                    height={390}
                    priority="true"
                  />
                  
                  {/* Subtle Elegant Floating Pill */}
                  <div className="hero-photo-top-badge">
                    <span className="live-pulse-dot" />
                    <span>Live 1-to-1 Online Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Ribbon / Stats Strip (الشريط الازرق) */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={22} />
              </div>
              <div>
                <div className="stat-number">1-to-1</div>
                <div className="stat-label">Personalised Live Lessons</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="stat-number">Al-Azhar</div>
                <div className="stat-label">Graduates &amp; Ijazah Holders</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <BarChart3 size={22} />
              </div>
              <div>
                <div className="stat-number">3-Month Plan</div>
                <div className="stat-label">Clear Milestones &amp; Progress Reviews</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Sparkles size={22} />
              </div>
              <div>
                <div className="stat-number">All Ages</div>
                <div className="stat-label">Children, Teens &amp; Adults</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach: The Principles Behind Every Wird Lesson */}
      <section id="approach" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR TEACHING APPROACH</div>
            <h2 className="section-title">
              The Principles Behind Every <span className="navy-gradient-text">Wird Lesson</span>
            </h2>
            <p className="section-subtitle">
              We measure our work by how our learners recite and understand the Quran. Here is the educational foundation behind every session.
            </p>
          </div>

          <div className="grid-2">
            {principles.map((p) => (
              <div key={p.number} className="value-card">
                <div className="value-icon">
                  {p.icon}
                </div>
                <h3 className="value-title">{p.number}. {p.title}</h3>
                <div className="value-quote">
                  {p.quote}
                </div>
                <p className="value-desc">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum & Programmes Section */}
      <section id="courses" style={{ padding: '80px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">CURRICULUM &amp; PROGRAMMES</div>
            <h2 className="section-title">
              Five Focused Programmes for <span className="navy-gradient-text">Every Stage of Learning</span>
            </h2>
            <p className="section-subtitle">
              Personalised 1-to-1 learning in Quran, Quranic Arabic, and Islamic Studies—designed for non-Arabic speakers of all ages.
            </p>

            {/* Category Filter */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActiveCourseCategory('all')}
                className={`filter-pill-btn ${activeCourseCategory === 'all' ? 'is-active' : ''}`}
              >
                All 5 Programmes
              </button>
              <button 
                onClick={() => setActiveCourseCategory('quran')}
                className={`filter-pill-btn ${activeCourseCategory === 'quran' ? 'is-active' : ''}`}
              >
                Quran &amp; Tajweed
              </button>
              <button 
                onClick={() => setActiveCourseCategory('arabic')}
                className={`filter-pill-btn ${activeCourseCategory === 'arabic' ? 'is-active' : ''}`}
              >
                Arabic Foundations
              </button>
              <button 
                onClick={() => setActiveCourseCategory('islamic')}
                className={`filter-pill-btn ${activeCourseCategory === 'islamic' ? 'is-active' : ''}`}
              >
                Islamic Studies
              </button>
            </div>
          </div>

          <div className="grid-3">
            {filteredProgrammes.map((prog) => (
              <div key={prog.id} className="course-card">
                <div className="course-badge">{prog.badge}</div>
                <h3 className="course-title">{prog.title}</h3>
                <p className="course-desc">{prog.desc}</p>

                <div className="course-meta-tags">
                  {prog.tags.map((tag, idx) => (
                    <span key={idx} className="course-meta-tag">
                      <CheckCircle2 size={12} color="var(--gold-600)" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setIsTrialOpen(true)}
                  className="button button-gold full"
                  style={{ minHeight: '40px', fontSize: '13px', marginTop: 'auto' }}
                >
                  <Sparkles size={14} />
                  <span>Book Free Trial for This Programme</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us: Seven Commitments Behind Every Wird Learning Journey */}
      <section id="why-us" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">WHY WIRD ACADEMY</div>
            <h2 className="section-title">
              Seven Commitments Behind Every <span className="navy-gradient-text">Wird Learning Journey</span>
            </h2>
            <p className="section-subtitle">
              Qualified teachers, personalised 1-to-1 support, and clear progress tracking—from the first assessment onwards.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '44px' }}>
            {commitments.map((c) => (
              <div key={c.number} className="value-card" style={{ padding: '22px 18px' }}>
                <div className="value-icon" style={{ width: '42px', height: '42px', marginBottom: '14px' }}>
                  {c.icon}
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '8px', lineHeight: 1.3 }}>
                  {c.number}. {c.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          {/* START WITH A FREE TRIAL Callout */}
          <div className="start-trial-banner">
            <div className="start-trial-content">
              <span className="start-trial-tag">START WITH A FREE TRIAL</span>
              <h3 className="start-trial-title">
                Experience Personalised 1-to-1 Learning Today
              </h3>
              <p className="start-trial-desc">
                Your first lesson includes a level assessment, a short guided lesson, and clear next steps based on the learner’s individual needs.
              </p>
            </div>
            <div className="start-trial-cta">
              <button 
                onClick={() => setIsTrialOpen(true)}
                className="button button-gold"
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                <Sparkles size={16} />
                <span>Book a Free Trial</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works: Your Wird Journey in Four Simple Steps */}
      <section style={{ padding: '80px 0 60px', background: 'var(--bg-cream)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">HOW IT WORKS</div>
            <h2 className="section-title">
              Your Wird Journey in <span className="navy-gradient-text">Four Simple Steps</span>
            </h2>
            <p className="section-subtitle">
              From your first enquiry to a personalised plan and measurable progress.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '50px' }}>
            {steps.map((st) => (
              <div key={st.step} style={{ background: '#ffffff', borderRadius: '16px', padding: '24px 20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '14px' }}>
                  {st.step}
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '8px' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Inline Dedicated Trial Assessment Form */}
          <div id="book-trial-section" style={{ marginTop: '20px' }}>
            <TrialBookingForm />
          </div>
        </div>
      </section>

      {/* Verified WhatsApp Reviews Gallery with Lightbox */}
      <FeedbackGallery onOpenTrial={() => setIsTrialOpen(true)} />

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Common Questions</div>
            <h2 className="section-title">
              Frequently Asked <span className="navy-gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about our Al-Azhar teachers, curriculum, and free trial assessment.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--primary-900)'
                  }}
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '18px', color: 'var(--gold-600)', transition: 'transform 0.2s ease', transform: activeFaq === idx ? 'rotate(45deg)' : 'rotate(0)' }}>
                    +
                  </span>
                </button>

                {activeFaq === idx && (
                  <div style={{ padding: '0 22px 18px', fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, borderTop: '1px solid rgba(8, 27, 51, 0.04)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section style={{ padding: '80px 0', background: 'radial-gradient(circle at 50% 50%, #0d284d 0%, #040d1a 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(201, 154, 69, 0.25)', color: 'var(--gold-300)', padding: '5px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 800, marginBottom: '16px' }}>
              <Sparkles size={13} /> Begin With an Authentic Foundation
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
              Read the Quran As It Was Revealed
            </h2>
            <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '28px' }}>
              Book your complimentary 1-to-1 trial session today. Meet your Al-Azhar teacher, receive an authentic level assessment, and embark on a clear learning roadmap.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setIsTrialOpen(true)}
                className="button button-gold"
                style={{ minHeight: '48px', padding: '0 28px', fontSize: '15px' }}
              >
                <Sparkles size={16} />
                <span>Book Your Free Trial</span>
              </button>
              <a 
                href="https://wa.me/201061858535?text=Hello%20Wird%20Academy,%20I%20would%20like%20to%20inquire%20about%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp"
                style={{ minHeight: '48px', padding: '0 24px', fontSize: '15px' }}
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenTrial={() => setIsTrialOpen(true)} />
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </div>
  );
}
