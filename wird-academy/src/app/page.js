'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrialModal from '../components/TrialModal';
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
  Ear, 
  HeartHandshake, 
  GraduationCap, 
  ChevronRight, 
  ArrowRight,
  HelpCircle,
  CalendarCheck
} from 'lucide-react';

export default function HomePage() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [activeCourseCategory, setActiveCourseCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);

  const courses = [
    {
      id: 'phonics',
      category: 'arabic',
      badge: 'Foundations • التأسيس والقراءة',
      title: '1. Arabic Phonics & Reading Foundations',
      titleAr: 'تأسيس القراءة باللغة العربية ونور البيان',
      desc: 'The starting point of every Quran journey — sound by sound, word by word, verse by verse. Every letter is applied directly to real Quranic words, with your pronunciation heard and corrected live in every lesson, until you read your very first page with clarity and confidence.',
      tags: ['Noor Al-Bayan / Qaida', 'Letter Articulation (Makharij)', 'All Ages (Kids & Adults)']
    },
    {
      id: 'tajweed',
      category: 'quran',
      badge: 'Core Recitation • التلاوة والتجويد',
      title: '2. Quran & Tajweed',
      titleAr: 'تلاوة القرآن الكريم وأحكام التجويد',
      desc: 'Recite the Quran as it was revealed — every letter from its precise articulation point, so a ح never slips into a ه. Nothing added, nothing dropped, with every rule explained clearly and your recitation corrected live in every lesson.',
      tags: ['Precise Makharij', 'Practical Rules Application', 'Live 1-on-1 Correction']
    },
    {
      id: 'hifz',
      category: 'quran',
      badge: 'Memorization • الحفظ والمراجعة',
      title: '3. Hifz — Quran Memorization',
      titleAr: 'تحفيظ القرآن الكريم مع فهم المعاني',
      desc: "A structured memorization plan, reviewed in every lesson and paced to each learner's level — with the meaning taught alongside, so you understand what you memorize, not just recite it, and every lesson taught by Ijazah-certified teachers. Because memorizing a page is easy; keeping it is the real work.",
      tags: ['Systematic Retention', 'Meaning & Reflection', 'Ijazah Certified Scholars']
    },
    {
      id: 'islamic-studies',
      category: 'islamic',
      badge: 'Faith & Life • العلوم الشرعية',
      title: '4. Islamic Studies',
      titleAr: 'العلوم الشرعية (عقيدة، فقه، سيرة، أذكار)',
      desc: "Don't just learn about Islam — live it, with good character and a clear heart. From who Allah is and why we are here, to purification and prayer step by step, the life of the Prophet ﷺ and his Companions, the stories of the Prophets, and the du'as of daily life — all taught from authentic sources.",
      tags: ['Aqeedah & Fiqh', 'Prophet Stories & Seerah', 'Daily Adhkar & Morals']
    },
    {
      id: 'quranic-arabic',
      category: 'arabic',
      badge: 'Comprehension • لغة القرآن',
      title: '5. Quranic Arabic',
      titleAr: 'فهم معاني ومفردات القرآن الكريم',
      desc: 'Start recognizing the meaning in what you recite — the core words of the Quran and the basics of its grammar: the first door into understanding the words of Allah directly without intermediary translations.',
      tags: ['High-Frequency Vocabulary', 'Foundational Quranic Grammar', 'Direct Understanding']
    },
    {
      id: 'spoken-arabic',
      category: 'arabic',
      badge: 'Fluency • المحادثة والتواصل',
      title: '6. Spoken Arabic',
      titleAr: 'المحادثة والتواصل باللغة العربية',
      desc: 'Speak Arabic with confidence: everyday conversation, listening, reading, and writing for real-life situations — until holding a real conversation feels natural, not something you have to prepare for.',
      tags: ['Daily Situations', 'Listening & Speaking', 'Real-world Fluency']
    }
  ];

  const filteredCourses = activeCourseCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === activeCourseCategory);

  const trustPillars = [
    {
      icon: <Award size={26} />,
      title: '1. Al-Azhar Graduates, Ijazah-Certified',
      titleAr: 'خريجو الأزهر الشريف وحملة الإجازات',
      desc: 'Every teacher is an Al-Azhar graduate holding a certified Ijazah, and specialises in teaching Quran and Arabic to non-native speakers.'
    },
    {
      icon: <HeartHandshake size={26} />,
      title: '2. Support That Makes It Stick',
      titleAr: 'تثبيت مستمر ورعاية تعليمية',
      desc: "We help each student memorize the new verses, make sure the day's lesson settles in before it ends, and revise earlier memorization in every session."
    },
    {
      icon: <Users size={26} />,
      title: '3. One Student, One Teacher',
      titleAr: 'معلم واحد لكل طالب (تعليم فردي كامل)',
      desc: 'Every lesson belongs to your child alone, from start to finish, with mistakes corrected on the spot before they turn into habits.'
    },
    {
      icon: <Target size={26} />,
      title: '4. A Plan That Moves With Your Child',
      titleAr: 'خطة مخصصة تتطور مع مستوى طفلك',
      desc: "The plan starts from where your child actually is, not from a fixed syllabus, and it shifts as they go: moving slower when something needs more time, and further ahead once it's solid."
    },
    {
      icon: <BarChart3 size={26} />,
      title: '5. Clear Milestones, Documented Progress',
      titleAr: 'تقارير دورية وخطة ربع سنوية',
      desc: 'After the trial lesson you receive a written level report and a three-month plan, then a short report after every session. No student moves up a level without passing an assessment first.'
    },
    {
      icon: <CalendarCheck size={26} />,
      title: '6. The Bigger Picture, Every Three Months',
      titleAr: 'تقييم شامل كل ثلاثة أشهر',
      desc: "Every three months you receive a full review: what the student has achieved, the strengths they've built along the way, the points that still need work, and the plan for the three months ahead."
    },
    {
      icon: <Ear size={26} />,
      title: '7. Progress You Can Hear',
      titleAr: 'تطور تسمعه في التلاوة الحقيقية',
      desc: "You won't need a report to know it's working; you'll hear it in the recitation itself with clear letter articulation and Tajweed mastery."
    },
    {
      icon: <Sparkles size={26} />,
      title: '8. See It for Yourself',
      titleAr: 'حصة تجريبية مجانية لتقييم المستوى',
      desc: "Your first lesson is free, at a time that suits your timezone. You'll leave it knowing exactly where your child stands and what the next three months look like."
    }
  ];

  const faqs = [
    {
      q: 'How does the free trial lesson and level assessment work?',
      a: "Your first lesson is 100% complimentary and conducted 1-on-1 with a certified Al-Azhar scholar. The teacher assesses your or your child's current pronunciation, Makharij, and reading level, followed by a written level report and customized 3-month roadmap."
    },
    {
      q: 'What makes Wird Academy different from large online platforms?',
      a: 'We operate under our core philosophy: "Read it as it was revealed." We prioritize accuracy before speed, every session is private (1-on-1), every teacher is an Al-Azhar graduate with an authentic Ijazah, and progress is earned through verified assessments, not just elapsed hours.'
    },
    {
      q: 'What age groups do you teach?',
      a: 'We teach all age groups — starting from young children (ages 4–7) with playful Noor Al-Bayan phonetics, to older kids, teenagers, and adults beginning their Quran journey or seeking advanced Ijazah certification.'
    },
    {
      q: 'How are the teachers qualified?',
      a: 'All our instructors are graduates of prestigious faculties at Al-Azhar University (Islamic Sharī\'ah, Quranic Sciences, English Sections) holding verified Ijazahs in Hafs and multiple Qirā\'āt, with extensive training in teaching non-native speakers in English.'
    },
    {
      q: 'How do parents receive feedback and monitor progress?',
      a: 'Parents receive a written follow-up summary after every single lesson detailing what was covered, along with enjoyable revision activities. Additionally, a comprehensive quarterly review is conducted every 3 months before advancing to the next level.'
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
              <div className="hero-badges">
                <span className="hero-badge-tag">
                  <Award size={13} /> Al-Azhar Graduate Faculty
                </span>
                <span className="hero-badge-tag">
                  <Sparkles size={13} /> 1-on-1 Private Instruction
                </span>
              </div>

              <div>
                <h1 className="hero-headline">
                  Master Quran Recitation, Tajweed &amp; Arabic <span className="gold-gradient-text">As It Was Revealed</span>
                </h1>
                <span className="hero-slogan-arabic">
                  اقرأه كما أُنزِل — أكاديمية ورد للقرآن والعلوم الشرعية
                </span>
              </div>

              <p className="hero-desc">
                Wird Academy exists so that every Muslim who doesn’t speak Arabic can read the Book of Allah properly — not approximately, not from transliteration, but with authentic Tajweed guided by certified Al-Azhar scholars.
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
                  href="https://wa.me/201061858535?text=Hello%20Wird%20Academy,%20I%20would%20like%20to%20inquire%20about%20classes."
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
                  <span>One Student, One Teacher</span>
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

            {/* Right Visual with 3D Quran Artwork */}
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img 
                  src="/assets/generated/hero-quran-3d.jpg" 
                  alt="Holy Quran on Gilded Velvet Stand with Radiant Illumination" 
                  width={440}
                  height={440}
                />
              </div>

              <div className="hero-floating-badges-mobile">
                {/* Floating Badge 1 */}
                <div className="floating-card floating-card-1">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-800)', flexShrink: 0 }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--primary-900)' }}>Al-Azhar Ijazah</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Sanad Connected Reciters</div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="floating-card floating-card-2">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(37, 211, 102, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366', flexShrink: 0 }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--primary-900)' }}>1-on-1 Dedicated</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Every Lesson Belongs to You</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={22} />
              </div>
              <div>
                <div className="stat-number">1-on-1</div>
                <div className="stat-label">Private Live Teaching</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="stat-number">Al-Azhar</div>
                <div className="stat-label">Ijazah-Certified Scholars</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <BarChart3 size={22} />
              </div>
              <div>
                <div className="stat-number">3 Months</div>
                <div className="stat-label">Full Milestone Reviews</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Sparkles size={22} />
              </div>
              <div>
                <div className="stat-number">All Ages</div>
                <div className="stat-label">Children, Youth &amp; Adults</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Educational Philosophy</div>
            <h2 className="section-title">
              Our Four <span className="navy-gradient-text">Core Pillars &amp; Values</span>
            </h2>
            <p className="section-subtitle">
              We measure our work by one thing: how our students recite. Here is how we uphold that standard every single day.
            </p>
          </div>

          <div className="grid-2">
            <div className="value-card">
              <div className="value-icon">
                <Target size={24} />
              </div>
              <h3 className="value-title">1. Accuracy Before Speed</h3>
              <div className="value-quote">
                "We would rather a student read one page correctly than ten pages approximately."
              </div>
              <p className="value-desc">
                We never rush students through the Quran. Every letter must be articulated from its exact anatomical point (Makhraj) so that meaning and reverence are preserved.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <BarChart3 size={24} />
              </div>
              <h3 className="value-title">2. Progress That Is Earned</h3>
              <div className="value-quote">
                "A level ends when the student passes its assessment, not when its lessons run out."
              </div>
              <p className="value-desc">
                No student is moved to a new book or Surah prematurely. Advancement is celebrated only when the learner has genuinely mastered the current milestone.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Clock size={24} />
              </div>
              <h3 className="value-title">3. Consistency Over Intensity</h3>
              <div className="value-quote">
                "A small portion held to every week outlasts a burst of effort that fades."
              </div>
              <p className="value-desc">
                Consistent, focused 1-on-1 sessions held weekly produce unbreakable lifelong retention, steady confidence, and genuine love for the Quran.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users size={24} />
              </div>
              <h3 className="value-title">4. Every Student Is Known</h3>
              <div className="value-quote">
                "No one here is a slot on a schedule."
              </div>
              <p className="value-desc">
                Your child is paired with a dedicated Azhari teacher who understands their temperament, pacing, strengths, and areas of revision intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section id="courses" style={{ padding: '80px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Curriculum &amp; Programs</div>
            <h2 className="section-title">
              Our 6 Specialized <span className="navy-gradient-text">Academic Programs</span>
            </h2>
            <p className="section-subtitle">
              Structured courses taught in fluent English and Arabic, tailored for non-native speakers of all ages.
            </p>

            {/* Category Filter */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActiveCourseCategory('all')}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeCourseCategory === 'all' ? 'var(--primary-900)' : '#ffffff',
                  color: activeCourseCategory === 'all' ? '#ffffff' : 'var(--text-body)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                All Programs
              </button>
              <button 
                onClick={() => setActiveCourseCategory('quran')}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeCourseCategory === 'quran' ? 'var(--primary-900)' : '#ffffff',
                  color: activeCourseCategory === 'quran' ? '#ffffff' : 'var(--text-body)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Quran &amp; Tajweed
              </button>
              <button 
                onClick={() => setActiveCourseCategory('arabic')}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeCourseCategory === 'arabic' ? 'var(--primary-900)' : '#ffffff',
                  color: activeCourseCategory === 'arabic' ? '#ffffff' : 'var(--text-body)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Arabic Language
              </button>
              <button 
                onClick={() => setActiveCourseCategory('islamic')}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeCourseCategory === 'islamic' ? 'var(--primary-900)' : '#ffffff',
                  color: activeCourseCategory === 'islamic' ? '#ffffff' : 'var(--text-body)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Islamic Studies
              </button>
            </div>
          </div>

          <div className="grid-3">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-badge">{course.badge}</div>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-title-ar">{course.titleAr}</div>
                <p className="course-desc">{course.desc}</p>

                <div className="course-meta-tags">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className="course-meta-tag">
                      <CheckCircle2 size={12} color="var(--gold-600)" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setIsTrialOpen(true)}
                  className="button button-gold full"
                  style={{ minHeight: '40px', fontSize: '13px' }}
                >
                  <Sparkles size={14} />
                  <span>Book Free Trial for This Course</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us (8 Pillars from form) */}
      <section id="why-us" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">
              Why Discerning Families <span className="navy-gradient-text">Trust Wird Academy</span>
            </h2>
            <p className="section-subtitle">
              8 concrete commitments that make your learning journey authentic, structured, and enjoyable.
            </p>
          </div>

          <div className="grid-4">
            {trustPillars.map((pillar, idx) => (
              <div key={idx} className="value-card" style={{ padding: '22px 18px' }}>
                <div className="value-icon" style={{ width: '42px', height: '42px', marginBottom: '14px' }}>
                  {pillar.icon}
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '4px', lineHeight: 1.3 }}>
                  {pillar.title}
                </h4>
                <div style={{ fontSize: '12px', color: 'var(--gold-800)', fontFamily: 'Amiri, serif', marginBottom: '8px', fontWeight: 700 }}>
                  {pillar.titleAr}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Registration Journey (From Form) */}
      <section style={{ padding: '80px 0', background: 'var(--bg-cream)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Simple 4-Step Journey</div>
            <h2 className="section-title">
              How to Begin Your <span className="navy-gradient-text">Learning Journey</span>
            </h2>
            <p className="section-subtitle">
              From your initial consultation to earning verified Quranic milestones.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '24px 20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '14px' }}>
                1
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                Request Free Trial
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Submit our short assessment form with your student name, age, and recitation level, or reach out directly on WhatsApp.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '24px 20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '14px' }}>
                2
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                Live Level Assessment
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Meet your dedicated Al-Azhar teacher 1-on-1 at a time that suits your timezone to assess letter articulation and pace.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '24px 20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '14px' }}>
                3
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                3-Month Custom Plan
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Receive a written level assessment report, a structured 3-month roadmap, and choose your preferred weekly schedule.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '24px 20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '14px' }}>
                4
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                Earned Progress Reviews
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Enjoy reports after every lesson and full quarterly milestone assessments. Progress you can clearly hear in the recitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Preview Strip */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #081b33 0%, #194682 100%)', borderRadius: '24px', padding: '40px 32px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(201, 154, 69, 0.25)', color: 'var(--gold-300)', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
                <GraduationCap size={14} /> Certified Al-Azhar Scholars
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1.25, marginBottom: '8px' }}>
                Learn With Verified Ijazah Holders &amp; Azhari Graduates
              </h3>
              <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6 }}>
                Meet our 5 esteemed scholars holding authentic chains of transmission (Sanad) in Hafs, Shu'bah, and Ten Qirā'āt, with specialized training in Noor Al-Bayan and inclusive education.
              </p>
            </div>

            <div>
              <Link href="/about#faculty" className="button button-gold">
                <span>Meet All Our Faculty Members</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header">
            <div className="section-tag">Frequently Asked Questions</div>
            <h2 className="section-title">
              Common Questions <span className="navy-gradient-text">Answered</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about our 1-on-1 teaching philosophy, level assessment, and scheduling.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '15.5px',
                    fontWeight: 800,
                    color: 'var(--primary-900)'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--gold-700)', fontSize: '18px', fontWeight: 800, marginLeft: '12px' }}>
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {activeFaq === idx && (
                  <div style={{ padding: '0 20px 18px', fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, borderTop: '1px solid var(--bg-soft)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <div className="hero-badge-tag" style={{ background: 'rgba(201, 154, 69, 0.25)', color: 'var(--gold-300)', borderColor: 'rgba(201, 154, 69, 0.4)', marginBottom: '14px' }}>
              ✨ Experience The Wird Academy Standard
            </div>
            <h2 className="cta-title">
              Begin Your Quran Journey with an Authentic Foundation
            </h2>
            <p className="cta-desc">
              Book your complimentary 1-on-1 level assessment with a certified Al-Azhar tutor today. Receive a personalized 3-month roadmap matching your timezone.
            </p>
            <div className="cta-actions">
              <button 
                onClick={() => setIsTrialOpen(true)}
                className="button button-gold"
              >
                <Sparkles size={16} />
                <span>Book a Free Trial Session</span>
              </button>

              <a 
                href="https://wa.me/201061858535?text=Hello%20Wird%20Academy,%20I%20am%20ready%20to%20start%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp: 01061858535</span>
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
