import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Reveal, Stagger, StaggerItem, Float } from '../../components/MotionPrimitives';
import {
  Heart, ShieldCheck, Sparkles, Clock3, Sprout, ArrowRight,
  CheckCircle2, Users, Award, Globe, BookOpen, Star, MessageCircle
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Learner First',
    arabic: 'الطالب أولاً',
    text: 'Every student receives a learning path shaped around their current level, goals, pace, strengths, and challenges.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Sincerity',
    arabic: 'الجودة والإخلاص',
    text: 'We value quality, sincerity, consistency, and care throughout every step of the learner’s educational journey.',
  },
  {
    icon: Sparkles,
    title: 'Patience & Care',
    arabic: 'الصبر والرعاية',
    text: 'We value sincerity and patience throughout the learning journey, helping each learner build confidence step by step.',
  },
  {
    icon: Clock3,
    title: 'Steady Consistency',
    arabic: 'المداومة والأثر',
    text: 'Sustainable progress through regular bite-sized practice, steady revision, and encouragement that produces lasting knowledge.',
  },
  {
    icon: Sprout,
    title: 'Continuous Growth',
    arabic: 'التطوير المستمر',
    text: 'We value continuous growth and keep improving the learning experience for non-Arabic speakers from different countries and backgrounds.',
  },
];

export default function AboutPage() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* ABOUT HERO */}
      <section className="about-premium-hero">
        <div className="hero-ambient hero-ambient-one" />
        <div className="hero-ambient hero-ambient-two" />
        <div className="container about-premium-grid">
          <Reveal className="about-premium-copy">
            <div className="premium-pill">
              <span className="pill-dot" />
              <Sparkles size={14} className="pill-icon" />
              <span>About Tazkera Academy · Teaching Experience Since 2017</span>
            </div>
            <h1 className="hero-title">
              Learning That Builds <br />
              <em className="gold-gradient-text">Knowledge, Confidence & Connection</em>
            </h1>
            <p className="about-hero-lead">
              Tazkera Academy is a specialized educational academy helping non-Arabic speakers build a meaningful connection with the Qur’an, Arabic language, and Islamic knowledge. Since 2017, our team has guided learners from different countries, ages, and backgrounds around their individual needs and goals.
            </p>
            <div className="about-hero-stats">
              <div><strong>Since 2017</strong><span>Teaching Experience</span></div>
              <div className="stat-sep"/>
              <div><strong>Personal</strong><span>Learner-First Approach</span></div>
              <div className="stat-sep"/>
              <div><strong>2</strong><span>Free Trials</span></div>
            </div>
          </Reveal>

          <div className="about-orbit-wrap">
            <div className="orbit-ambient-glow" />
            <Float duration={7.5} distance={8}>
              <Image
                src="/assets/generated/about-mission.webp"
                alt="3D Golden Crescent Moon and Open Quran Mission Artwork"
                width={700}
                height={700}
                priority
                sizes="(max-width: 900px) 88vw, 480px"
                className="about-orbit-figure-3d"
              />
            </Float>
            <div className="about-floating-quote">
              <span>“The best among you are those who learn the Quran and teach it.”</span>
              <small>— Sahih Al-Bukhari</small>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY & MISSION */}
      <section className="premium-section story-editorial-section">
        <div className="container editorial-grid">
          <Reveal className="editorial-main">
            <span className="section-kicker">Our Heritage & Mission</span>
            <h2>We believe learning should leave something everlasting.</h2>
            <p>
              We believe learning is not simply about completing lessons. It is about building lasting knowledge, confidence, and a genuine connection with what is being learned.
            </p>
            <p>
              Our approach focuses on understanding before memorization, progress before perfection, and building a lasting relationship with knowledge rather than simply finishing a syllabus.
            </p>
            <div className="editorial-pillars">
              <div className="pillar-item">
                <CheckCircle2 size={20} className="pillar-icon"/>
                <div>
                  <b>Experienced Teaching Team</b>
                  <p>Teaching experience since 2017, with a focus on the needs of non-Arabic speakers.</p>
                </div>
              </div>
              <div className="pillar-item">
                <CheckCircle2 size={20} className="pillar-icon"/>
                <div>
                  <b>Tailored Pace for Every Learner</b>
                  <p>Programs support children, teens, and adults at different starting levels and learning goals.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mission-premium-card">
            <div className="mission-badge">Our Mission</div>
            <h3>Make the Qur’an, Arabic, and Islamic knowledge accessible to every non-Arabic speaker.</h3>
            <p>
              Regardless of age, background, or starting level, our mission is to turn learning into a meaningful journey that lasts beyond the classroom.
            </p>
            <div className="mission-signature-row">
              <div className="mission-motto">“Light Your Path With The Quran”</div>
              <div className="mission-arabic-motto">نور طريقك بالقرآن</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-premium-section">
        <div className="container">
          <Reveal className="premium-heading centered-premium">
            <div>
              <span className="section-kicker">Guiding Principles</span>
              <h2>Our Core Educational Values</h2>
            </div>
            <p>The timeless values that guide how our teachers interact with every student in every lesson.</p>
          </Reveal>

          <Stagger className="values-premium-grid">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <StaggerItem className="value-premium-card" key={val.title}>
                  <div className="value-card-top">
                    <div className="value-icon"><Icon size={24}/></div>
                    <span className="value-arabic-tag">{val.arabic}</span>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* GLOBAL REACH & RECOGNITION */}
      <section className="premium-section global-recognition-section">
        <div className="container global-rec-grid">
          <Reveal className="global-rec-visual">
            <div className="global-img-stage">
              <Float duration={6.8} distance={7}>
                <Image
                  src="/assets/generated/global-learning.webp"
                  alt="3D Emerald and Gold Global Network for Quran Learning"
                  width={500}
                  height={500}
                  className="global-globe-3d"
                />
              </Float>
              <div className="global-cert-badge-floating">
                <Image
                  src="/assets/generated/certificate-badge.webp"
                  alt="Course completion certificate illustration"
                  width={200}
                  height={200}
                  className="cert-mini-badge-3d"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="global-rec-copy">
            <span className="section-kicker">Learning Across Borders</span>
            <h2>Built for non-Arabic speakers from different countries and backgrounds.</h2>
            <p>
              Tazkera Academy has guided learners from different countries, ages, and backgrounds since 2017, with each learning experience shaped around the student’s level, goals, pace, strengths, and challenges.
            </p>
            <div className="rec-feature-list">
              <div className="rec-feat-item">
                <Globe size={22} className="rec-feat-icon" />
                <div>
                  <b>Personalized Learning Plan</b>
                  <p>Each learner’s plan is shaped around level, goals, pace, strengths, and challenges.</p>
                </div>
              </div>
              <div className="rec-feat-item">
                <Award size={22} className="rec-feat-icon" />
                <div>
                  <b>Progress Tracking & Feedback</b>
                  <p>Regular progress tracking and feedback help learners understand where they are improving.</p>
                </div>
              </div>
              <div className="rec-feat-item">
                <Users size={22} className="rec-feat-icon" />
                <div>
                  <b>Homework & Revision Support</b>
                  <p>Support between lessons reinforces learning and helps students build consistency.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRIAL CTA */}
      <section className="premium-cta-section">
        <div className="container premium-cta-card">
          <div className="cta-ambient-glow" />
          <Reveal className="cta-copy-wrap">
            <span className="section-kicker light">Experience the Difference</span>
            <h2>Start with 2 Complimentary Trial Lessons.</h2>
            <p>Meet two different teachers through two free trial lessons, compare the experience, and choose the teacher who feels like the best fit.</p>
          </Reveal>
          <Reveal delay={0.1} className="cta-btns-wrap">
            <Link href="/contact#trial" className="button premium-gold-light">
              <span>Book Your Free Trials</span>
              <ArrowRight size={18}/>
            </Link>
            <a
              href="https://wa.me/201105778132"
              target="_blank"
              rel="noreferrer"
              className="button premium-whatsapp-cta"
            >
              <MessageCircle size={18}/>
              <span>Chat on WhatsApp</span>
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
