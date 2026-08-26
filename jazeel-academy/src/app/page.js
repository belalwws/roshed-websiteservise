'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrialModal from '../components/TrialModal';
import ReviewsGallery from '../components/ReviewsGallery';
import LiveClassesShowcase from '../components/LiveClassesShowcase';
import { 
  Sparkles, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Globe, 
  ShieldCheck, 
  Users, 
  Star, 
  MessageCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  HeartHandshake,
  GraduationCap,
  Laptop,
  Check,
  Calendar
} from 'lucide-react';
import { ScrollIcon } from '../components/Icons';

const COURSES_LIST = [
  {
    id: 'arabic-reading-tajweed',
    title: 'Arabic Reading & Quran Tajweed for Beginners',
    arabicTitle: 'كورس تعليم قراءة القرآن والتجويد للمبتدئين',
    tag: 'Quran & Tajweed',
    level: 'Beginner to Intermediate',
    language: 'English & Arabic',
    ageGroup: 'Kids (4+) & Adults',
    badge: 'Most Popular',
    desc: 'Designed specifically for non-Arabic speakers. Learn Arabic phonetics, Noorani Qaida, letter articulation (Makharij), and foundational Tajweed rules with patient native Azhari instructors.',
    highlights: [
      'Interactive Noorani Qaida & Arabic alphabet',
      'Accurate Makharij & Sifat pronunciation',
      'Basic rules: Noon Sakinah, Meem Sakinah & Madd',
      'Daily recitation practice of short Surahs (Juz Amma)'
    ]
  },
  {
    id: 'advanced-tajweed',
    title: 'Theoretical & Practical Advanced Tajweed',
    arabicTitle: 'كورس تجويد نظري وعملي متقدم باللغة الإنجليزية',
    tag: 'Quran & Tajweed',
    level: 'Intermediate to Advanced',
    language: 'Taught in English',
    ageGroup: 'Teens & Adults',
    badge: 'Azhar Standard',
    desc: 'In-depth study of classical Tajweed poems (Matn Tuhfat Al-Atfal & Al-Jazariyyah) explained in fluent English with continuous practical application during live recitation.',
    highlights: [
      'Full study of Tuhfat Al-Atfal & Al-Jazariyyah in English',
      'Advanced stopping & starting rules (Waqf & Ibtida)',
      'Detailed study of letter characteristics and subtle errors',
      'Continuous oral feedback & correction from certified Shuyookh'
    ]
  },
  {
    id: 'fiqh-essentials',
    title: 'Islamic Jurisprudence (Fiqh) Essentials',
    arabicTitle: 'كورس فقه إسلامي باللغة الإنجليزية',
    tag: 'Islamic Studies',
    level: 'All Levels',
    language: 'Taught in English',
    ageGroup: 'Kids, Teens & Adults',
    badge: 'Essential Knowledge',
    desc: 'Understand the fundamental rulings of Taharah (purification), Salah (prayer), Sawm (fasting), Zakah, and practical daily Islamic ethics in clear, modern English.',
    highlights: [
      'Step-by-step practical guides to Wudu and Prayer',
      'Rulings of Fasting, Ramadan & Halal lifestyle',
      'Contemporary Muslim youth dilemmas & solutions',
      'Interactive Q&A based on authentic classical schools'
    ]
  },
  {
    id: 'tafseer-quran',
    title: 'Tafseer & Quranic Understanding in English',
    arabicTitle: 'كورس تفسير القرآن الكريم باللغة الإنجليزية',
    tag: 'Islamic Studies',
    level: 'All Levels',
    language: 'Taught in English',
    ageGroup: 'Teens & Adults',
    badge: 'Deep Reflection',
    desc: 'Delve into the meanings, historical contexts (Asbab al-Nuzul), linguistic wonders, and spiritual lessons of the Holy Quran explained through classical Azhari scholarship.',
    highlights: [
      'Thematic study of Surahs with life applications',
      'Reasons for revelation (Asbab Al-Nuzul)',
      'Spiritual and moral dimensions of Quranic verses',
      'Connecting Quranic guidance with daily modern life'
    ]
  },
  {
    id: 'prophetic-seerah',
    title: 'Prophetic Biography (Seerah) in English',
    arabicTitle: 'كورس سيرة نبوية عطرة باللغة الإنجليزية',
    tag: 'Islamic Studies',
    level: 'All Levels',
    language: 'Taught in English',
    ageGroup: 'Kids & Teens Special Track',
    badge: 'Character Building',
    desc: 'Inspire your children and family with the noble life, character, leadership, and gentle compassion of Prophet Muhammad ﷺ through storytelling and moral reflections.',
    highlights: [
      'Chronological journey from Mecca to Medina',
      'Lessons on noble character (Akhlaq) and compassion',
      'Stories of the Sahabah (Companions) and Mothers of Believers',
      'Engaging story-driven worksheets for young learners'
    ]
  },
  {
    id: 'hadith-sunnah',
    title: 'Hadith & Sunnah Studies in English',
    arabicTitle: 'كورس الحديث الشريف والسنة النبوية',
    tag: 'Islamic Studies',
    level: 'Intermediate',
    language: 'Taught in English',
    ageGroup: 'Teens & Adults',
    badge: 'Authentic Sunnah',
    desc: 'Study classical Hadith collections including Imam Nawawi’s 40 Hadith and Riyad as-Salihin with explanation of Hadith terminology and modern implementation.',
    highlights: [
      'Study of Al-Arba’in An-Nawawiyyah (40 Hadith)',
      'Understanding Hadith authenticity and chains (Isnad)',
      'Practical daily Sunnahs and etiquette (Adab)',
      'Memorization of key short Hadiths with translation'
    ]
  },
  {
    id: 'classical-arabic',
    title: 'Classical Arabic (Fusha) for Non-Native Speakers',
    arabicTitle: 'كورس تعليم اللغة العربية الفصحى للناطقين بغيرها',
    tag: 'Arabic Language',
    level: 'Beginner to Advanced',
    language: 'English / Immersion',
    ageGroup: 'All Ages',
    badge: 'Fluency Track',
    desc: 'Master reading, writing, listening, and conversational Arabic using accredited curricula (Madinah Arabic / Bayna Yadayk) tailored for Western learners.',
    highlights: [
      'Comprehensive Grammar (Nahw) and Morphology (Sarf)',
      'Conversational skills for daily and Quranic understanding',
      'Vocabulary building through contextual stories',
      'Interactive exercises and digital workbooks'
    ]
  },
  {
    id: 'teacher-training',
    title: 'Quran & Tajweed Teacher Training Course',
    arabicTitle: 'كورس إعداد وتأهيل معلمات القرآن والتجويد',
    tag: 'Teacher Qualification',
    level: 'Advanced',
    language: 'Bilingual (Eng/Ar)',
    ageGroup: 'Female Aspirants & Teachers',
    badge: 'Professional Diploma',
    desc: 'A specialized pedagogy diploma for aspiring sisters and tutors to teach Quran, Tajweed, and Islamic studies to non-Arabic speakers using modern e-learning tools.',
    highlights: [
      'Online teaching methodologies & classroom management',
      'Techniques for addressing English phoneme challenges',
      'Curriculum planning and student assessment metrics',
      'Certificate of Completion licensed by Azhar scholars'
    ]
  },
  {
    id: 'ijazah-sanad',
    title: 'Sanad Ijazah Program (Hafs & Shu’bah)',
    arabicTitle: 'منح إجازة مسندة بروايتي حفص وشعبة عن عاصم',
    tag: 'Ijazah & Sanad',
    level: 'Advanced Memorizers',
    language: 'Arabic / English Support',
    ageGroup: 'Committed Students',
    badge: 'Connected Chain',
    desc: 'Recite the entire Holy Quran from memory with rigorous Tajweed precision to an authorized Sanad-holder, receiving a formal connected Ijazah linked back to Prophet Muhammad ﷺ.',
    highlights: [
      'Authorized Riwayah: Hafs & Shu’bah ‘an ‘Asim',
      'Rigorous Khatmah with detailed oral examination',
      'Official stamped certificate with unbroken chain (Sanad)',
      '1-on-1 private mentoring with senior Azhari Qari'
    ]
  }
];

export default function HomePage() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [activeCourseCategory, setActiveCourseCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);

  const courseCategories = ['All', 'Quran & Tajweed', 'Islamic Studies', 'Arabic Language', 'Teacher Qualification', 'Ijazah & Sanad'];

  const filteredCourses = activeCourseCategory === 'All'
    ? COURSES_LIST
    : COURSES_LIST.filter(c => c.tag === activeCourseCategory);

  const studyTracks = [
    {
      name: 'Starter Reading & Tajweed Track',
      arabicName: 'مسار التأسيس والقراءة والتجويد',
      desc: 'Focused 1-on-1 foundational recitation, Arabic phonetics, and Noorani Qaida for non-native children and beginners.',
      badge: 'Beginners & Kids',
      popular: false,
      features: [
        '1-on-1 Private Live Lessons with Certified Azhari Tutors',
        'Noorani Qaida, Makharij & Foundations of Tajweed',
        'Customized weekly frequency matching student pace',
        'Direct Monthly Progress Reports to Parents',
        '24/7 Global Flexible Scheduling & Rescheduling',
        'Complimentary 1-on-1 Trial Assessment'
      ]
    },
    {
      name: 'Comprehensive Quran & Islamic Studies',
      arabicName: 'مسار القرآن والعلوم الشرعية بالإنجليزية',
      desc: 'Combined track offering Quran recitation alongside Fiqh, Seerah, Hadith, and Tafseer taught in fluent English.',
      badge: '★ Recommended',
      popular: true,
      features: [
        '1-on-1 Comprehensive Quran + Islamic Sciences in English',
        'Specialized Azhari Shuyookh & Muallimat for all ages',
        'Interactive digital worksheets & practical daily Sunnahs',
        'Continuous oral feedback & periodic parent WhatsApp updates',
        'Priority weekend and evening slot coordination',
        'Complimentary 1-on-1 Trial Assessment'
      ]
    },
    {
      name: 'Sanad Ijazah & Teacher Qualification',
      arabicName: 'مسار الإجازة المسندة وتأهيل المعلمات',
      desc: 'Advanced Khatmah recitation for unbroken Sanad connected to Prophet Muhammad ﷺ or Teacher Pedagogy Diploma.',
      badge: 'Sanad Linked',
      popular: false,
      features: [
        'Connected Sanad in Hafs & Shu’bah ‘an ‘Asim',
        'Rigorous Khatmah oral examination & Matn studies',
        'Teacher qualification pedagogy for non-Arabic teaching',
        'Official stamped certification from Al-Azhar scholars',
        'Dedicated 1-on-1 mentoring with Senior Qaris',
        'Complimentary 1-on-1 Trial Assessment'
      ]
    }
  ];

  const faqs = [
    {
      q: 'How does the Free Trial Lesson work?',
      a: 'We provide you with a complimentary 1-on-1 private trial lesson with a certified Azhari tutor. This gives you or your child the opportunity to experience our live teaching methodology, assess your recitation level, and determine the ideal weekly schedule before enrolling.'
    },
    {
      q: 'What language are the Islamic Studies and Fiqh classes taught in?',
      a: 'All our Islamic Studies, Fiqh, Seerah, Tafseer, and Hadith courses for Western and non-Arabic speaking students are taught in fluent, clear English. Our teachers are graduates of Al-Azhar University who are fluent in English and experienced in Western pedagogy.'
    },
    {
      q: 'Are the teachers certified by Al-Azhar Al-Sharif?',
      a: 'Yes, 100% of our academic staff are graduates of Al-Azhar University faculties (Quran Sciences, Islamic Dawah, Usul al-Din, and Arabic Language) and hold authentic Ijazahs with connected chains of transmission (Sanad) linked back to Prophet Muhammad ﷺ.'
    },
    {
      q: 'How do parents receive progress reports and feedback?',
      a: 'After every class, teachers log attendance, lesson topics, and memorized verses. Every month, parents receive a comprehensive PDF performance report via WhatsApp and email outlining Tajweed accuracy, homework completion, behavioral milestones, and next month goals.'
    },
    {
      q: 'Can we request female teachers for our daughters or sisters?',
      a: 'Yes, absolutely! We have a dedicated department of highly qualified, Azhari-certified female teachers (Muallimat) with Ijazahs in Hafs and Shu’bah available for sisters, young girls, and children.'
    },
    {
      q: 'What if we need to reschedule a class due to school or travel?',
      a: 'We understand family schedules! With our 24/7 coordination team, you can easily reschedule any session with at least 4 hours advance notice through our dedicated WhatsApp support coordinator.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <Navbar onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-badges">
                <span className="badge-pill">
                  <Award size={15} style={{ color: 'var(--gold-600)' }} />
                  <span>Licensed by Al-Azhar Al-Sharif</span>
                </span>
                <span className="badge-pill badge-pill-gold">
                  <Sparkles size={14} />
                  <span>12+ Years Teaching Non-Native Speakers</span>
                </span>
              </div>

              <h1 className="hero-headline">
                Master Quran Recitation, Tajweed &amp; Islamic Sciences <span className="gold-gradient-text">From Home</span>
              </h1>

              <p className="hero-desc">
                Personalized <strong>1-on-1 online classes</strong> with certified Azhari scholars for non-Arabic speaking students, children, and adults across the USA, UK, Europe, and worldwide. Enjoy authentic learning with fluent English explanations.
              </p>

              {/* CTAs */}
              <div className="hero-actions">
                <button 
                  onClick={() => setIsTrialOpen(true)}
                  className="button button-gold"
                  id="hero-trial-cta"
                >
                  <Sparkles size={16} />
                  <span>Book a Free Trial</span>
                </button>

                <a 
                  href="https://wa.me/201041479418?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20classes%20at%20Jazeel%20Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  <MessageCircle size={16} style={{ color: '#25d366' }} />
                  <span>WhatsApp: 01041479418</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="hero-trust-list">
                <div className="hero-trust-item">
                  <CheckCircle2 size={17} className="hero-trust-icon" />
                  <span>Licensed by Al-Azhar</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={17} className="hero-trust-icon" />
                  <span>Connected Sanad Ijazahs</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={17} className="hero-trust-icon" />
                  <span>Periodic Parent Reports</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={17} className="hero-trust-icon" />
                  <span>Flexible Global Timings</span>
                </div>
              </div>
            </div>

            {/* Right Visual with 3D Quran Artwork */}
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img 
                  src="/assets/generated/hero-quran-3d.jpg" 
                  alt="Holy Quran on Gilded Blue Velvet Stand with Radiant Tajweed Rays" 
                  width={430}
                  height={430}
                />
              </div>

              <div className="hero-floating-badges-mobile">
                {/* Floating Stat Card 1 */}
                <div className="floating-card floating-card-1">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-800)', flexShrink: 0 }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-900)' }}>Al-Azhar Approved</div>
                    <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Official Academic License</div>
                  </div>
                </div>

                {/* Floating Stat Card 2 */}
                <div className="floating-card floating-card-2">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(37, 211, 102, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-900)' }}>12+ Years Experience</div>
                    <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Teaching Non-Arabs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Clock size={22} />
              </div>
              <div>
                <div className="stat-number">12+ Years</div>
                <div className="stat-label">Non-Native Teaching Pedagogy</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Award size={22} />
              </div>
              <div>
                <div className="stat-number">Al-Azhar</div>
                <div className="stat-label">Licensed Institution</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="stat-number">Theory &amp; Practice</div>
                <div className="stat-label">Qualified Azhari Faculty</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Globe size={22} />
              </div>
              <div>
                <div className="stat-number">24/7 Flexible</div>
                <div className="stat-label">Global Schedule Coordination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Core Values */}
      <section className="values-section" id="why-us">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why Jazeel Academy • القيمة الجوهرية</div>
            <h2 className="section-title">
              Why Discerning Parents &amp; Students <span className="navy-gradient-text">Choose Jazeel</span>
            </h2>
            <p className="section-subtitle">
              We combine centuries-old Al-Azhar scholarly authenticity with state-of-the-art digital interactive learning methods tailored specifically for non-native Arabic speakers.
            </p>
          </div>

          <div className="values-grid">
            {/* Value 1 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Award size={26} />
              </div>
              <h3 className="value-title">Officially Licensed by Al-Azhar</h3>
              <p className="value-desc">
                Our curriculum, syllabi, and assessment rubrics are officially accredited and supervised by senior scholars from Al-Azhar Al-Sharif, the beacon of moderate Islamic knowledge.
              </p>
            </div>

            {/* Value 2 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Users size={26} />
              </div>
              <h3 className="value-title">12+ Years Teaching Non-Arabs</h3>
              <p className="value-desc">
                Teaching non-native speakers requires unique pedagogical mastery. For over 12 years, our tutors have perfected English-based phonetics and child-friendly Tajweed explanations.
              </p>
            </div>

            {/* Value 3 */}
            <div className="value-card">
              <div className="value-icon-box">
                <GraduationCap size={26} />
              </div>
              <h3 className="value-title">Theoretical &amp; Practical Mastery</h3>
              <p className="value-desc">
                Our teachers excel in both theoretical science (rules, Matn texts, linguistics) and practical application (oral recitation, Makharaj, and spiritual resonance).
              </p>
            </div>

            {/* Value 4 */}
            <div className="value-card">
              <div className="value-icon-box">
                <ScrollIcon size={26} />
              </div>
              <h3 className="value-title">Authentic Sanad Ijazahs</h3>
              <p className="value-desc">
                Earn connected Ijazahs in the recitations of Hafs and Shu'bah 'an 'Asim with unbroken chains tracing directly back to the Messenger of Allah ﷺ.
              </p>
            </div>

            {/* Value 5 */}
            <div className="value-card">
              <div className="value-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h3 className="value-title">Detailed Monthly Parent Reports</h3>
              <p className="value-desc">
                Stay continuously informed with detailed monthly performance logs, attendance tracking, memorization charts, and direct WhatsApp consultations with the academic supervisor.
              </p>
            </div>

            {/* Value 6 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Clock size={26} />
              </div>
              <h3 className="value-title">Flexible 24/7 Global Schedules</h3>
              <p className="value-desc">
                Whether you live in New York, London, Toronto, Berlin, or Sydney, our round-the-clock schedule guarantees class timings that seamlessly fit your school and work routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Digital Classroom Spotlight (Responsive Grid) */}
      <section style={{ padding: '80px 0', background: 'var(--bg-cream)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="spotlight-grid">
            <div>
              <div className="section-tag">Next-Generation Learning</div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, color: 'var(--primary-900)', lineHeight: 1.2, marginBottom: '16px' }}>
                Engaging, Interactive 1-on-1 <span className="gold-gradient-text">Classroom Experience</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '22px' }}>
                We believe learning Quran and Islamic values should be an uplifting, joyful journey. Our digital classrooms feature interactive whiteboards, Noorani Qaida phonetics games, animated Tajweed rules, and real-time mouth positioning guidance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={15} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-900)', fontSize: '14.5px' }}>Customized Pace for Each Student:</strong>
                    <p style={{ fontSize: '13px', color: 'var(--text-body)', marginTop: '2px' }}>Never rushed. Lessons adapt to your child’s cognitive ability and confidence.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={15} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-900)', fontSize: '14.5px' }}>Dedicated Male &amp; Female Teachers:</strong>
                    <p style={{ fontSize: '13px', color: 'var(--text-body)', marginTop: '2px' }}>Azhari Muallimat for sisters and girls; expert Shuyookh for brothers and boys.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={15} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-900)', fontSize: '14.5px' }}>2 Trial Sessions with 2 Different Teachers:</strong>
                    <p style={{ fontSize: '13px', color: 'var(--text-body)', marginTop: '2px' }}>Try two distinct instructors so you are 100% happy with the tutor match.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsTrialOpen(true)}
                className="button button-primary"
              >
                <Sparkles size={16} />
                <span>Experience Our 2 Free Trials</span>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '2px solid var(--border-gold)',
                  background: '#ffffff',
                  maxWidth: '460px',
                  width: '100%'
                }}
              >
                <img 
                  src="/assets/generated/interactive-learning-3d.jpg" 
                  alt="3D Interactive Quran & Tajweed Online Class with Tablet and Teacher" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '16px 20px', background: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--primary-900)' }}>Interactive Tajweed &amp; Arabic Phonics</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Makharij, Sifat &amp; Quranic rules for non-native kids</div>
                    </div>
                    <span className="badge-pill-gold" style={{ padding: '3px 10px', fontSize: '11px', borderRadius: '999px' }}>
                      All Ages
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Classroom Demonstrations */}
      <LiveClassesShowcase onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Programs Showcase */}
      <section className="courses-section" id="programs">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Comprehensive Curriculum • البرامج والكورسات</div>
            <h2 className="section-title">
              Our Specialized <span className="navy-gradient-text">Academic Programs</span>
            </h2>
            <p className="section-subtitle">
              Structured courses taught in fluent English and Arabic, adhering to Al-Azhar syllabi for all age groups and proficiencies.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="course-filter-bar">
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCourseCategory(cat)}
                className={`filter-btn ${activeCourseCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Courses */}
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-card-badge">{course.badge}</div>

                <div className="course-card-header">
                  <div className="course-card-tag">{course.tag}</div>
                  <h3 className="course-card-title">{course.title}</h3>
                  <div className="course-card-arabic">{course.arabicTitle}</div>
                </div>

                <div className="course-card-body">
                  <p className="course-card-desc">{course.desc}</p>

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '6px', background: 'var(--primary-50)', color: 'var(--primary-700)', fontWeight: 700 }}>
                      🎯 {course.level}
                    </span>
                    <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '6px', background: 'var(--gold-100)', color: 'var(--gold-900)', fontWeight: 700 }}>
                      🌐 {course.language}
                    </span>
                    <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '6px', background: '#f1f5f9', color: '#475569', fontWeight: 700 }}>
                      👥 {course.ageGroup}
                    </span>
                  </div>

                  <ul className="course-features-list">
                    {course.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="course-card-footer">
                  <button 
                    onClick={() => setIsTrialOpen(true)}
                    className="button button-gold full"
                  >
                    <Sparkles size={14} />
                    <span>Book a Free Trial</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <button onClick={() => setIsTrialOpen(true)} className="button button-primary">
              <Sparkles size={15} />
              <span>Book a Free Trial Session</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Registration Journey */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">How It Works • خطوات التسجيل</div>
            <h2 className="section-title">
              Start Your Journey in <span className="gold-gradient-text">4 Simple Steps</span>
            </h2>
            <p className="section-subtitle">
              Getting started at Jazeel Academy is seamless and transparent.
            </p>
          </div>

          <div className="journey-grid">
            <div className="journey-card">
              <div className="journey-step-num">01</div>
              <h3 className="journey-title">Request a Free Trial</h3>
              <p className="journey-desc">
                Fill out our quick form or message us directly on WhatsApp to choose your desired course and level.
              </p>
            </div>

            <div className="journey-card">
              <div className="journey-step-num">02</div>
              <h3 className="journey-title">1-on-1 Trial Class</h3>
              <p className="journey-desc">
                Experience a live 1-on-1 session with a certified Azhari tutor to evaluate recitation level and compatibility.
              </p>
            </div>

            <div className="journey-card">
              <div className="journey-step-num">03</div>
              <h3 className="journey-title">Tailored Study Plan</h3>
              <p className="journey-desc">
                Our academic supervisor creates a tailored curriculum and assigns the schedule matching your timezone.
              </p>
            </div>

            <div className="journey-card">
              <div className="journey-step-num">04</div>
              <h3 className="journey-title">Begin &amp; Track Growth</h3>
              <p className="journey-desc">
                Start regular classes and receive periodic progress updates directly via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews & WhatsApp Screenshots Gallery */}
      <ReviewsGallery />

      {/* Study Tracks & Packages */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Academic Study Tracks • المسارات التعليمية</div>
            <h2 className="section-title">
              Tailored 1-on-1 <span className="navy-gradient-text">Study Tracks</span>
            </h2>
            <p className="section-subtitle">
              All tracks include personalized 1-on-1 private instruction with certified Azhari teachers and regular progress follow-up.
            </p>
          </div>

          <div className="pricing-grid">
            {studyTracks.map((track, idx) => (
              <div key={idx} className={`pricing-card ${track.popular ? 'featured' : ''}`}>
                {track.popular && <div className="pricing-badge">{track.badge}</div>}

                <div className="pricing-header">
                  <h3 className="pricing-plan-name">{track.name}</h3>
                  <div style={{ fontSize: '13.5px', color: 'var(--gold-700)', fontWeight: 700, fontFamily: 'Cairo, sans-serif', marginTop: '2px' }}>
                    {track.arabicName}
                  </div>
                  <p className="pricing-plan-desc" style={{ marginTop: '6px' }}>{track.desc}</p>

                  <div className="pricing-price-wrap" style={{ flexDirection: 'column', gap: '2px', padding: '10px 0 2px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-800)' }}>Personalized Plan</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Custom weekly schedule matching your timezone</span>
                  </div>
                </div>

                <ul className="pricing-features">
                  {track.features.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsTrialOpen(true)}
                  className={`button ${track.popular ? 'button-gold' : 'button-secondary'} full`}
                >
                  <Sparkles size={14} />
                  <span>Book a Free Trial</span>
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: 'var(--text-muted)' }}>
            ✨ Flexible schedules available for all European and American timezones.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Frequently Asked Questions</div>
            <h2 className="section-title">
              Common Questions <span className="gold-gradient-text">Answered</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about our teaching philosophy, Al-Azhar certifications, trial lessons, and scheduling.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((item, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} color="var(--gold-600)" /> : <ChevronDown size={18} />}
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
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
            <div className="badge-pill-gold" style={{ display: 'inline-flex', padding: '5px 16px', borderRadius: '999px' }}>
              <Sparkles size={13} /> 12+ Years Teaching Quran &amp; Islamic Studies
            </div>

            <h2 className="cta-title">
              Give Your Family the Gift of <span className="gold-gradient-text">Authentic Islamic Knowledge</span>
            </h2>

            <p className="cta-desc">
              Experience the difference of learning Quran and Islamic Sciences with certified Al-Azhar scholars. Begin with a free trial session today.
            </p>

            <div className="cta-actions">
              <button 
                onClick={() => setIsTrialOpen(true)}
                className="button button-gold"
              >
                <Sparkles size={16} />
                <span>Book a Free Trial</span>
              </button>

              <a 
                href="https://wa.me/201041479418?text=Hello%20Jazeel%20Academy,%20I%20am%20ready%20to%20start%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp: 01041479418</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Free Trial Modal */}
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </div>
  );
}
