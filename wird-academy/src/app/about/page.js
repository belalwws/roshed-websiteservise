'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TrialModal from '../../components/TrialModal';
import { 
  Sparkles, 
  MessageCircle, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Target, 
  GraduationCap, 
  CheckCircle2, 
  Users, 
  Clock, 
  CalendarCheck,
  Languages,
  BookMarked
} from 'lucide-react';

export default function AboutPage() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  const faculty = [
    {
      name: "Ustādha Du'a Qasim",
      nameAr: "أستاذة دعاء قاسم",
      avatarInitials: "DQ",
      role: "Islamic Sharī'ah & Quran Instructor",
      education: "Pursuing studies in Islamic Sharī'ah at Al-Azhar University.",
      ijazah: "Holds an Ijāzah in the recitation of Ḥafṣ 'an 'Āṣim via the path of Ash-Shāṭibiyyah. Memorised the Qur'an by age thirteen; extensively studied foundational and advanced Tajweed texts, including Tuḥfat al-Aṭfāl and Al-Jazariyyah.",
      training: "Completed specialized courses in teaching Tajweed, Islamic Studies, and Foundational Arabic Literacy.",
      experience: "Over two years of experience teaching students across all age groups, ranging from young children to adults. Specializes in Foundational Arabic Literacy and Tajweed mastery."
    },
    {
      name: "Ustādh Mahmoud Al-Qasim",
      nameAr: "أستاذ محمود القاسم",
      avatarInitials: "MQ",
      role: "Senior Quran, Qirā'āt & Fiqh Scholar",
      education: "Pursuing studies in Islamic Sharī'ah at Al-Azhar University.",
      ijazah: "Holds Ijāzahs in four Qirā'āt: 'Āṣim (Ḥafṣ & Shu'bah), Ibn 'Āmir, Khalaf al-'Āshir, and Al-Kisā'ī. Memorised the Qur'an by age twelve; currently advancing to the Ten Qirā'āt. Holds Ijāzahs in Tuḥfat al-Aṭfāl, Al-Jazariyyah, Ṣaḥīḥ al-Bukhārī, and Ṣaḥīḥ Muslim.",
      training: "Specialized training in the Noor Al-Bayan method and in teaching Islamic Studies in English for non-native learners.",
      experience: "Teaching non-native speakers of all ages since 2020. Expertise spans Noor Al-Bayan literacy, Qur'anic recitation, Fiqh, and Tafsīr with high proficiency in explaining complex concepts in English."
    },
    {
      name: "Ustādha Amany Abd Elkarim",
      nameAr: "أستاذة أماني عبد الكريم",
      avatarInitials: "AA",
      role: "Bilingual Tajweed & Arabic Literacy Specialist",
      education: "Graduated from the English Section at Al-Azhar University; completed advanced English language studies at the American University in Cairo (AUC) and Ministry of Defence Language Institute (MODLI).",
      ijazah: "Holds an Ijāzah in the recitation of Ḥafṣ 'an 'Āṣim. Memorised the Qur'an by age fourteen; dedicated two years to rigorous revision at a Qur'anic institute in Egypt; specialized in Tajweed rules in English.",
      training: "Professional English instructor since 2020, bringing exceptional bilingual communication skills to classes.",
      experience: "Over five years of experience teaching non-native speakers of all ages, building Foundational Arabic Literacy alongside Qur'an and Tajweed."
    },
    {
      name: "Ustādha Manar Badawy",
      nameAr: "أستاذة منار بدوي",
      avatarInitials: "MB",
      role: "Inclusive Education & Tajweed Specialist",
      education: "Pursuing a Master's degree in Special Education at Cairo University; graduated from the Faculty of Kindergarten Education at Al-Azhar University.",
      ijazah: "Holds Ijāzahs in the recitations of Ḥafṣ 'an 'Āṣim, Shu'bah, and Ibn 'Amir. Memorised the Qur'an by age thirteen; earned initial Ijāzah at eighteen; advancing studies in Ash-Shāṭibiyyah.",
      training: "Completed specialized training in Special Education at Ain Shams University with deep expertise in supporting students with additional learning needs.",
      experience: "Over five years of experience teaching non-native speakers of all ages via the Noor Al-Bayan method, Qur'an, and Tajweed with empathetic child pedagogy."
    },
    {
      name: "Ustādha Amira Eid",
      nameAr: "أستاذة أميرة عيد",
      avatarInitials: "AE",
      role: "Arabic for Non-Native Speakers & Tajweed Tutor",
      education: "Pursuing studies in Islamic Sharī'ah at Al-Azhar University.",
      ijazah: "Holds an Ijāzah in the recitation of Ḥafṣ 'an 'Āṣim via Ash-Shāṭibiyyah. Memorised the Qur'an by age eleven; earned Ijāzah at fifteen; studied Tuḥfat al-Aṭfāl and Al-Jazariyyah.",
      training: "Holds diplomas in Teaching Arabic to Speakers of Other Languages (TASOL); certified in teaching Tajweed and Islamic Studies in English.",
      experience: "Over two years of experience teaching non-native speakers of all ages, from Noor Al-Bayan phonetics to advanced Qur'anic recitation."
    }
  ];

  return (
    <div>
      <Navbar onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Page Header */}
      <section style={{ padding: '60px 0 40px', background: 'radial-gradient(circle at 80% 20%, rgba(201,154,69,0.12) 0%, transparent 60%), var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="hero-badge-tag" style={{ marginBottom: '14px' }}>
              <Award size={13} /> About Wird Academy • من نحن
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'var(--primary-900)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              "Read It As It Was Revealed"
            </h1>
            <p className="hero-slogan-arabic" style={{ fontSize: '24px', color: 'var(--gold-700)', marginBottom: '16px' }}>
              اقرأه كما أُنزِل — لا تقريبياً ولا بالنقل الحرفي
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
              Dedicated to helping non-Arabic speaking Muslims across the globe master the Holy Quran with precise articulation, authentic Ijazah Sanad, and bespoke 1-on-1 scholarly attention.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story & Purpose */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="section-tag">Our Foundational Purpose</div>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '16px', lineHeight: 1.25 }}>
                Why Wird Academy Exists
              </h2>
              <div style={{ background: 'var(--bg-cream)', padding: '22px', borderRadius: '16px', borderLeft: '4px solid var(--gold-600)', marginBottom: '20px' }}>
                <p style={{ fontSize: '15px', color: 'var(--primary-900)', lineHeight: 1.75, fontWeight: 600 }}>
                  "Wird Academy exists for one reason: so that a Muslim who doesn't speak Arabic can read the Quran properly — not approximately, not from transliteration, but as it was revealed."
                </p>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '16px' }}>
                We teach the Quran, Tajweed, Arabic, and Islamic Studies online — live, one to one, with teachers who are Al-Azhar graduates holding a certified Ijazah. 
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                Whether a student is five years old opening the Mushaf for the first time, or an adult returning to it after years away, they are taught alone and at their own pace. <strong>We measure our work by one thing: how our students recite.</strong>
              </p>
            </div>

            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--border-gold)' }}>
                <img 
                  src="/assets/generated/azhar-scholars-3d.jpg" 
                  alt="Al-Azhar Scholarly Library and Classical Ijazah Certificate" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / 4 Pillars Grid */}
      <section style={{ padding: '70px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Core Values • القيم الجوهرية</div>
            <h2 className="section-title">
              Our 4 Inviolable <span className="navy-gradient-text">Academic Standards</span>
            </h2>
          </div>

          <div className="grid-2">
            <div className="value-card">
              <div className="value-icon">
                <Target size={24} />
              </div>
              <h3 className="value-title">Accuracy Before Speed</h3>
              <div className="value-quote">
                "We would rather a student read one page correctly than ten pages approximately."
              </div>
              <p className="value-desc">
                Precision is non-negotiable. Every Makhraj (articulation point) and Sifah (characteristic) is practiced until articulation is natural and flawless.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Award size={24} />
              </div>
              <h3 className="value-title">Progress That Is Earned</h3>
              <div className="value-quote">
                "A level ends when the student passes its assessment, not when its lessons run out."
              </div>
              <p className="value-desc">
                We believe in genuine mastery. Assessments confirm retention and understanding before moving to higher Surahs or advanced texts.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Clock size={24} />
              </div>
              <h3 className="value-title">Consistency Over Intensity</h3>
              <div className="value-quote">
                "A small portion held to every week outlasts a burst of effort that fades."
              </div>
              <p className="value-desc">
                Following the Prophetic Sunnah of steady, continuous deeds, regular weekly 1-on-1 sessions guarantee lasting Qur'anic connection.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users size={24} />
              </div>
              <h3 className="value-title">Every Student Is Known</h3>
              <div className="value-quote">
                "No one here is a slot on a schedule."
              </div>
              <p className="value-desc">
                Our faculty builds a warm, empathetic relationship with each learner, adjusting methods to their individual learning styles and cognitive needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Scholars Section (All 5 Certified Scholars) */}
      <section id="faculty" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Faculty &amp; Scholars</div>
            <h2 className="section-title">
              Meet Our Certified <span className="navy-gradient-text">Al-Azhar Faculty</span>
            </h2>
            <p className="section-subtitle">
              Every instructor is an Al-Azhar graduate holding an authentic Ijazah, trained in child pedagogy, Tajweed texts, and English instruction.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {faculty.map((teacher, idx) => (
              <div key={idx} className="faculty-card">
                <div className="faculty-header">
                  <div className="faculty-avatar-wrap">
                    {teacher.avatarInitials}
                  </div>
                  <h3 className="faculty-name">{teacher.name}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--gold-300)', fontFamily: 'Amiri, serif', fontWeight: 700, marginBottom: '4px' }}>
                    {teacher.nameAr}
                  </div>
                  <div className="faculty-title">{teacher.role}</div>
                </div>

                <div className="faculty-body">
                  <div>
                    <div className="faculty-section-title">🎓 Education (التعليم الأكاديمي)</div>
                    <p className="faculty-text">{teacher.education}</p>
                  </div>

                  <div>
                    <div className="faculty-section-title">📜 Ijāzahs &amp; Qur'an (الإجازات القرآنية)</div>
                    <p className="faculty-text">{teacher.ijazah}</p>
                  </div>

                  <div>
                    <div className="faculty-section-title">🌟 Courses &amp; Specialization (التدريب والتخصص)</div>
                    <p className="faculty-text">{teacher.training}</p>
                  </div>

                  <div>
                    <div className="faculty-section-title">⏱️ Experience (الخبرة التدريسية)</div>
                    <p className="faculty-text">{teacher.experience}</p>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                    <button 
                      onClick={() => setIsTrialOpen(true)}
                      className="button button-gold full"
                      style={{ minHeight: '38px', fontSize: '13px' }}
                    >
                      <Sparkles size={14} />
                      <span>Request Trial with Faculty</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Milestone System */}
      <section style={{ padding: '70px 0', background: 'var(--bg-cream)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px 30px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <div className="section-tag">Quality Assurance</div>
              <h2 className="section-title" style={{ fontSize: '28px' }}>
                Our 3-Month Documented Evaluation Process
              </h2>
              <p className="section-subtitle">
                How we guarantee real, measurable progress from the first lesson to advanced recitation.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '20px', borderRadius: '14px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📝</div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                  Initial Level Assessment
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  During your free trial, the teacher listens to your recitation, identifies Makharij points to calibrate, and sends you a written report.
                </p>
              </div>

              <div style={{ padding: '20px', borderRadius: '14px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📲</div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                  After-Session Reports
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  Parents receive a concise WhatsApp report after every class summarizing verses recited, homework, and engaging home activities.
                </p>
              </div>

              <div style={{ padding: '20px', borderRadius: '14px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                  Quarterly 3-Month Review
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  Every 3 months, you receive a full academic review: milestones achieved, strengths built, areas to reinforce, and the plan ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <h2 className="cta-title">
              Experience the Wird Academy Difference
            </h2>
            <p className="cta-desc">
              Book your complimentary 1-on-1 trial session today and learn with verified Al-Azhar scholars.
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
                href="https://wa.me/201061858535"
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
