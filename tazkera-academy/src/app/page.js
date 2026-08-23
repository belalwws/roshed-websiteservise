import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Reveal, Stagger, StaggerItem, Float } from '../components/MotionPrimitives';
import {
  BookOpen, Languages, HeartHandshake, Sparkles, CalendarDays, LineChart,
  ArrowRight, Check, Star, Headphones, MessageCircle, Target,
  GraduationCap, Clock3, Users, ChevronRight, PlayCircle, ShieldCheck,
  Award, Globe, CheckCircle2
} from 'lucide-react';

const programs = [
  {
    id: 'quran',
    title: 'Qur’an & Tajweed',
    arabicTitle: 'القرآن والتجويد',
    subtitle: 'Recitation · Memorization · Tajweed · Ijazah',
    text: 'Learn Qur’an recitation, memorization and revision, pronunciation correction, Tajweed rules, correct recitation, and Ijazah pathways.',
    image: '/assets/generated/program-quran.webp',
    tags: ['Recitation', 'Hifz & Revision', 'Ijazah Track'],
  },
  {
    id: 'arabic',
    title: 'Arabic Language',
    arabicTitle: 'اللغة العربية',
    subtitle: 'Reading · Writing · Conversation · Grammar',
    text: 'Arabic for non-Arabic speakers from beginner through intermediate and advanced levels, covering reading, writing, conversation, grammar, morphology, listening, and speaking.',
    image: '/assets/generated/program-arabic.webp',
    tags: ['Beginner to Advanced', 'Conversation', 'Grammar & Morphology'],
  },
  {
    id: 'qaida',
    title: 'Noorani Qaida',
    arabicTitle: 'القاعدة النورانية',
    subtitle: 'Foundational Arabic Reading for Beginners',
    text: 'A structured foundation for young learners and beginners to build confidence with Arabic letters, vowels, pronunciation, and reading.',
    image: '/assets/generated/program-qaida.webp',
    tags: ['Beginners & Kids', 'Phonetics', 'Step-by-Step'],
  },
  {
    id: 'islamic',
    title: 'Islamic Studies',
    arabicTitle: 'الدراسات الإسلامية',
    subtitle: 'Aqeedah · Islamic Studies · Beginner & Advanced',
    text: 'Study Aqeedah and Islamic knowledge through beginner and advanced courses designed around the learner’s level and goals.',
    image: '/assets/generated/program-islamic.webp',
    tags: ['Aqeedah', 'Beginner Courses', 'Advanced Courses'],
  },
];

const plans = [
  {
    name: 'Starter',
    price: '$28',
    frequency: '2 lessons / week',
    hours: '4 hours / month',
    duration: '30 mins / lesson',
    popular: false,
    features: ['2 lessons weekly', '4 hours total per month', 'Personalized learning plan', 'Progress tracking & regular feedback', 'Homework & revision support', 'Certificate upon course completion'],
  },
  {
    name: 'Regular',
    price: '$42',
    frequency: '3 lessons / week',
    hours: '6 hours / month',
    duration: '30 mins / lesson',
    popular: true,
    features: ['3 lessons weekly (Most Popular)', '6 hours total per month', 'Personalized learning plan', 'Progress tracking & regular feedback', 'Homework & revision support', 'Certificate upon course completion'],
  },
  {
    name: 'Progress',
    price: '$56',
    frequency: '4 lessons / week',
    hours: '8 hours / month',
    duration: '30 mins / lesson',
    popular: false,
    features: ['4 lessons weekly', '8 hours total per month', 'Personalized learning plan', 'Progress tracking & regular feedback', 'Homework & revision support', 'Certificate upon course completion'],
  },
  {
    name: 'Intensive',
    price: '$70',
    frequency: '5 lessons / week',
    hours: '10 hours / month',
    duration: '30 mins / lesson',
    popular: false,
    features: ['5 lessons weekly', '10 hours total per month', 'Personalized learning plan', 'Progress tracking & regular feedback', 'Homework & revision support', 'Certificate upon course completion'],
  },
];

const steps = [
  {
    num: '01',
    title: 'Tell Us About The Learner',
    desc: 'Share the student’s age, current level, learning aspirations, and preferred days and time zone.',
  },
  {
    num: '02',
    title: 'Meet 2 Teachers For Free',
    desc: 'Attend two free trial lessons with two different teachers to experience their teaching style and complete a level assessment.',
  },
  {
    num: '03',
    title: 'Choose Your Best Match',
    desc: 'Select the teacher with whom the learner feels most comfortable, motivated, and engaged.',
  },
  {
    num: '04',
    title: 'Start Your Learning Journey',
    desc: 'Begin your tailored roadmap with regular practice, continuous feedback, and dedicated support.',
  },
];

const faqs = [
  {
    q: 'How do the two free trial lessons work?',
    a: 'You receive two free trial lessons with two different teachers, plus a level assessment. This gives the learner a chance to experience both teaching styles and choose the teacher who feels like the best match.'
  },
  {
    q: 'Do you teach both children and adults?',
    a: 'Yes. Tazkera Academy serves learners of different ages and starting levels, including children, teens, and adults. The learning plan is adapted to each student’s level, goals, pace, strengths, and challenges.'
  },
  {
    q: 'Can complete beginners with no Arabic knowledge join?',
    a: 'Yes. Complete beginners can start with Noorani Qaida and foundational Arabic reading, then progress through a learning path suited to their level and goals. The teaching team has experience since 2017 with non-Arabic speakers.'
  },
  {
    q: 'Can I choose my own schedule and change it later?',
    a: 'During booking, share your preferred days, times, and city or time zone. The academy will coordinate the available schedule with you directly on WhatsApp.'
  },
  {
    q: 'What is included in the monthly subscription?',
    a: 'Every plan includes a personalized learning plan, progress tracking and regular feedback, homework and revision support, a supportive learning environment, and a certificate upon course completion.'
  },
];

export default function Home() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* HERO SECTION */}
      <section className="new-hero">
        <div className="hero-ambient hero-ambient-one" />
        <div className="hero-ambient hero-ambient-two" />
        <div className="hero-pattern-overlay" />

        <div className="container new-hero-grid">
          <div className="new-hero-copy">
            <Reveal>
              <div className="premium-pill">
                <span className="pill-dot" />
                <Sparkles size={14} className="pill-icon" />
                <span>Qur’an · Arabic · Islamic Studies · Personalized Learning</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="hero-title">
                Light Your Path <br />
                <em className="gold-gradient-text">With The Quran</em>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="new-hero-lead">
                Personalized Qur’an, Arabic, and Islamic learning for non-Arabic speakers of different ages and starting levels, guided by an experienced teaching team since 2017.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="new-hero-actions">
              <Link href="/contact#trial" className="button premium-primary hero-main-btn">
                <span>Book 2 Free Trials</span>
                <ArrowRight size={18} />
              </Link>
              <a href="#programs" className="button premium-secondary hero-sec-btn">
                <span>Explore Programs</span>
              </a>
            </Reveal>

            <Reveal delay={0.26} className="hero-benefits-row">
              <div className="hero-benefit-item">
                <div className="benefit-icon-box"><CalendarDays size={18}/></div>
                <div><b>Since 2017</b><span>Teaching experience</span></div>
              </div>
              <div className="hero-benefit-item">
                <div className="benefit-icon-box"><Users size={18}/></div>
                <div><b>All Ages</b><span>Kids, teens & adults</span></div>
              </div>
              <div className="hero-benefit-item">
                <div className="benefit-icon-box"><LineChart size={18}/></div>
                <div><b>Personalized</b><span>Built around your goals</span></div>
              </div>
            </Reveal>
          </div>

          <div className="new-hero-visual">
            <div className="hero-visual-glow" />
            <div className="hero-brand-seal" aria-label="Tazkera Academy official logo">
              <Image
                src="/assets/tazkera-official-logo.jpg"
                alt="Tazkera Academy official logo"
                width={140}
                height={140}
                className="hero-brand-logo"
                priority
              />
            </div>
            <Float duration={7} distance={9} className="hero-figure-wrap">
              <Image
                src="/assets/generated/quran-rehal.webp"
                alt="Open Holy Quran on a luxury carved wooden rehal stand with pearl prayer beads"
                className="hero-figure-3d"
                width={720}
                height={720}
                priority
                sizes="(max-width: 1020px) 90vw, 520px"
              />
            </Float>

            <Reveal delay={0.32} className="floating-verse-card">
              <div className="verse-card-header">
                <span className="verse-icon">✦</span>
                <span className="verse-surah">Qur’an 20:114</span>
              </div>
              <span className="arabic-verse">وَقُل رَّبِّ زِدْنِي عِلْمًا</span>
              <p className="verse-english">“And say: My Lord, increase me in knowledge.”</p>
            </Reveal>

            <Float duration={5.8} distance={7} className="mini-proof mini-proof-right">
              <div className="mini-proof-icon"><Star size={18} fill="#C7963E" color="#C7963E" /></div>
              <div>
                <b>2 Free Trials</b>
                <span>With 2 different teachers</span>
              </div>
            </Float>
          </div>
        </div>

        {/* TRUST COUNTERS BAR */}
        <div className="container hero-trust-panel">
          <div className="trust-panel-item">
            <strong>Since 2017</strong>
            <span>Teaching Experience</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-panel-item">
            <strong>2</strong>
            <span>Free Trial Lessons</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-panel-item">
            <strong>Learner First</strong>
            <span>Personalized learning plans</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-panel-item">
            <strong>All Ages</strong>
            <span>Kids, Teens & Adults</span>
          </div>
        </div>
      </section>

      {/* LEARNER-FIRST INTRO */}
      <section className="home-intro premium-section">
        <div className="container home-intro-grid">
          <Reveal className="home-intro-visual">
            <div className="intro-card-glass">
              <Float duration={8} distance={7}>
                <Image
                  src="/assets/generated/adult-student.webp"
                  alt="Adult student studying Arabic and Quran online with headphones"
                  width={680}
                  height={680}
                  sizes="(max-width: 900px) 88vw, 480px"
                  className="intro-asset-3d"
                />
              </Float>
              <div className="intro-floating-tag">
                <ShieldCheck size={18} />
                <span>Tailored for Non-Arabic Speakers</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="home-intro-copy">
            <span className="section-kicker">We Put The Learner First</span>
            <h2>Learning designed around your pace, level, and spiritual goals.</h2>
            <p>
              Every student is unique. We never force a rigid, one-size-fits-all syllabus. We listen to your goals, assess strengths and challenges, and shape each lesson so you feel continuous clarity, motivation, and growth.
            </p>
            <div className="benefit-list-large">
              <div className="benefit-large-item">
                <div className="benefit-icon-round"><Target size={22}/></div>
                <div>
                  <b>Personalized Curriculum</b>
                  <p>Start from the exact level that matches your ability, from the alphabet to advanced Tajweed.</p>
                </div>
              </div>
              <div className="benefit-large-item">
                <div className="benefit-icon-round"><MessageCircle size={22}/></div>
                <div>
                  <b>Continuous Tutor Feedback</b>
                  <p>Receive clear notes and pronunciation corrections after every single lesson.</p>
                </div>
              </div>
              <div className="benefit-large-item">
                <div className="benefit-icon-round"><Headphones size={22}/></div>
                <div>
                  <b>Live Personalized Lessons</b>
                  <p>Learn from home with guidance shaped around the learner’s level, pace, strengths, and challenges.</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="inline-arrow">
              <span>Discover the Tazkera approach</span>
              <ArrowRight size={18}/>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS SHOWCASE */}
      <section id="programs" className="premium-section program-showcase-section">
        <div className="container">
          <Reveal className="premium-heading">
            <div>
              <span className="section-kicker">Academic Programs</span>
              <h2>Comprehensive pathways for Quran, Arabic & Islamic Studies.</h2>
            </div>
            <p>Select the program that matches your goals. Your dedicated teacher will customize every lesson to your exact pace.</p>
          </Reveal>

          <Stagger className="premium-program-grid visual-program-grid">
            {programs.map((prog) => (
              <StaggerItem className="premium-program-card visual-program-card" key={prog.id}>
                <div className="program-image-stage">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    width={400}
                    height={400}
                    sizes="(max-width: 680px) 75vw, 260px"
                    className="program-cutout-3d"
                  />
                </div>
                <div className="program-card-content">
                  <div className="program-header-row">
                    <span className="program-arabic-label">{prog.arabicTitle}</span>
                    <span className="program-subtitle-tag">{prog.subtitle}</span>
                  </div>
                  <h3>{prog.title}</h3>
                  <p>{prog.text}</p>
                  <div className="program-tags">
                    {prog.tags.map((t) => (
                      <span key={t} className="program-tag">{t}</span>
                    ))}
                  </div>
                  <Link href="/contact#trial" className="program-card-btn">
                    <span>Try for Free</span>
                    <ArrowRight size={16}/>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* AUDIENCE DUAL-TRACK (KIDS VS ADULTS) */}
      <section className="premium-section audience-section">
        <div className="container audience-grid">
          <Reveal className="audience-copy">
            <span className="section-kicker">For Children & Adults</span>
            <h2>Same Noble Goal. Tailored Teaching Style.</h2>
            <p>
              Children thrive on gentle patience, encouragement, and engaging activities. Adults need clarity, schedule flexibility, and deep understanding. Our teachers adjust their pedagogical style seamlessly for every age group.
            </p>
            <div className="check-list audience-check-list">
              <span><CheckCircle2 size={18}/> Beginner-friendly learning tracks from scratch</span>
              <span><CheckCircle2 size={18}/> Interactive, engaging sessions for children & teens</span>
              <span><CheckCircle2 size={18}/> Adult learning paths shaped around level and goals</span>
              <span><CheckCircle2 size={18}/> Homework and revision support between lessons</span>
            </div>
            <Link href="/contact#trial" className="button premium-primary">
              <span>Book Trial For Your Family</span>
              <ArrowRight size={17}/>
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="audience-photo-pair">
            <div className="audience-photo-card audience-photo-card-kid">
              <div className="audience-card-img-wrap">
                <Image
                  src="/assets/generated/kid-student.webp"
                  alt="Young learner engaging with Quran lesson on tablet"
                  width={520}
                  height={520}
                  sizes="(max-width: 900px) 76vw, 360px"
                  className="audience-img-3d"
                />
              </div>
              <div className="audience-card-info">
                <span className="audience-card-badge">Kids & Teens</span>
                <h4>Young Learners Track</h4>
                <p>Age-appropriate Quran, Tajweed, Arabic, and foundational learning with patient guidance.</p>
              </div>
            </div>

            <div className="audience-photo-card audience-photo-card-adult">
              <div className="audience-card-img-wrap">
                <Image
                  src="/assets/generated/adult-student.webp"
                  alt="Adult student studying Arabic and Quran online"
                  width={520}
                  height={520}
                  sizes="(max-width: 900px) 76vw, 360px"
                  className="audience-img-3d"
                />
              </div>
              <div className="audience-card-info">
                <span className="audience-card-badge">Adults & Professionals</span>
                <h4>Adult Learners Track</h4>
                <p>Structured grammar, correct pronunciation, and personalized pacing.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TWO TEACHERS TWO FREE TRIALS STORY */}
      <section className="premium-story-band trial-story-band">
        <div className="container premium-story-grid">
          <Reveal className="story-visual-card teacher-story-card teacher-pair-stage">
            <div className="teacher-glow-halo" />
            <div className="teacher-avatars-dual">
              <div className="teacher-avatar-item teacher-left">
                <Image
                  src="/assets/generated/teacher-1.webp"
                  alt="Illustration representing one of the free trial teacher options"
                  width={600}
                  height={600}
                  sizes="(max-width: 900px) 46vw, 280px"
                  className="teacher-cutout-3d"
                />
                <div className="teacher-name-tag">
                  <b>Trial Teacher Option 1</b>
                  <span>Meet a teacher and experience their style</span>
                </div>
              </div>

              <div className="teacher-avatar-item teacher-right">
                <Image
                  src="/assets/generated/teacher-2.webp"
                  alt="Illustration representing a second free trial teacher option"
                  width={600}
                  height={600}
                  sizes="(max-width: 900px) 46vw, 280px"
                  className="teacher-cutout-3d"
                />
                <div className="teacher-name-tag">
                  <b>Trial Teacher Option 2</b>
                  <span>Compare and choose the better match</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="story-copy-block">
            <span className="section-kicker light">Our Differentiator</span>
            <h2>Two Free Trials. Two Different Teachers. Choose Your Best Match.</h2>
            <p>
              The academy’s registration flow includes two free trial lessons with two different teachers. Experience both teaching styles, choose the teacher who feels like the better match, and then continue with a personalized learning plan.
            </p>
            <div className="check-list light-check-list">
              <span><Check size={18}/> 2 free trial lessons before enrollment</span>
              <span><Check size={18}/> Meet 2 different teachers and compare their styles</span>
              <span><Check size={18}/> Level assessment to understand the learner’s needs</span>
              <span><Check size={18}/> Choose the teacher that feels like the best match</span>
            </div>
            <div className="story-actions">
              <Link href="/contact#trial" className="button premium-gold-light">
                <span>Book 2 Free Trials</span>
                <ArrowRight size={17}/>
              </Link>
              <a
                href="https://www.facebook.com/share/r/1DWFhnSHgN/"
                target="_blank"
                rel="noreferrer"
                className="inline-arrow-light"
              >
                <PlayCircle size={18}/>
                <span>Watch Teacher Sample Lesson</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW ENROLLMENT WORKS */}
      <section className="premium-section journey-section">
        <div className="container journey-simple-wrap">
          <Reveal className="premium-heading centered-premium">
            <div>
              <span className="section-kicker">How It Works</span>
              <h2>Four Simple Steps to Begin Your Journey.</h2>
            </div>
            <p>Tell us the learner’s goals, attend two free trials with two different teachers, choose the better match, and begin the learning plan.</p>
          </Reveal>

          <Stagger className="journey-simple-grid">
            {steps.map((s) => (
              <StaggerItem className="journey-simple-card" key={s.num}>
                <div className="journey-number-badge">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section id="pricing" className="premium-section pricing-premium">
        <div className="container">
          <Reveal className="premium-heading centered-premium">
            <div>
              <span className="section-kicker">Transparent Tuition</span>
              <h2>Monthly Plans for Different Learning Schedules.</h2>
            </div>
            <p>
              The standard lesson rate is <b>$10 per hour</b>, with a <b>30% general discount</b> applied to all monthly plans — an effective rate of <b>$7 per hour</b>. Each plan is calculated on a 4-week month.
            </p>
          </Reveal>

          <Stagger className="premium-pricing-grid">
            {plans.map((p) => (
              <StaggerItem
                className={`premium-price-card ${p.popular ? 'featured' : ''}`}
                key={p.name}
              >
                {p.popular && <div className="popular-badge">★ Most Popular</div>}
                <div className="price-card-head">
                  <h3>{p.name}</h3>
                  <div className="premium-price">
                    {p.price}
                    <span>/month</span>
                  </div>
                  <div className="price-detail-tag">{p.frequency} · {p.hours}</div>
                </div>

                <div className="price-divider" />

                <div className="price-feature-list">
                  {p.features.map((feat) => (
                    <div key={feat} className="price-feat-row">
                      <Check size={16} />
                      <span>{feat}</span>
                    </div>
                  ))}
                  <div className="price-feat-row">
                    <Check size={16} />
                    <span>30 minutes per lesson</span>
                  </div>
                </div>

                <Link
                  href="/contact#trial"
                  className={`button ${p.popular ? 'premium-primary' : 'premium-secondary'} full`}
                >
                  Start With 2 Free Trials
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SUPPORT BEYOND LESSONS (WITH CERTIFICATE & GLOBE) */}
      <section className="premium-section included-section">
        <div className="container included-grid">
          <Reveal className="included-copy">
            <span className="section-kicker">Included With Every Plan</span>
            <h2>Comprehensive Support Beyond The Live Lesson.</h2>
            <p>
              Tazkera Academy provides an end-to-end learning ecosystem so students make steady, tangible progress between classes.
            </p>
            <div className="included-visual-badges">
              <div className="badge-visual-item">
                <Image
                  src="/assets/generated/certificate-badge.webp"
                  alt="Tazkera course completion certificate illustration"
                  width={280}
                  height={280}
                  className="included-badge-img"
                />
                <span>Certificate Upon Course Completion</span>
              </div>
              <div className="badge-visual-item">
                <Image
                  src="/assets/generated/global-learning.webp"
                  alt="Learning illustration representing students from different countries"
                  width={280}
                  height={280}
                  className="included-badge-img"
                />
                <span>Learners From Different Countries</span>
              </div>
            </div>
          </Reveal>

          <Stagger className="included-cards">
            <StaggerItem className="included-card">
              <div className="inc-icon"><Target size={24}/></div>
              <div><b>Custom Learning Path</b><span>Tailored precisely around the learner’s goals and starting baseline.</span></div>
            </StaggerItem>
            <StaggerItem className="included-card">
              <div className="inc-icon"><LineChart size={24}/></div>
              <div><b>Progress Tracking & Reports</b><span>Regular evaluation notes so parents and learners always know where they stand.</span></div>
            </StaggerItem>
            <StaggerItem className="included-card">
              <div className="inc-icon"><BookOpen size={24}/></div>
              <div><b>Homework & Revision Support</b><span>Practice and revision support are included to help reinforce learning between lessons.</span></div>
            </StaggerItem>
            <StaggerItem className="included-card">
              <div className="inc-icon"><Clock3 size={24}/></div>
              <div><b>Supportive Learning Environment</b><span>Lessons are designed to be engaging, encouraging, and focused on steady learner growth.</span></div>
            </StaggerItem>
            <StaggerItem className="included-card">
              <div className="inc-icon"><Award size={24}/></div>
              <div><b>Certificate Upon Course Completion</b><span>A course completion certificate is included in the academy’s published plan benefits.</span></div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="premium-section faq-premium-section">
        <div className="container faq-centered-wrap">
          <Reveal className="faq-centered-heading">
            <span className="section-kicker">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before booking your first trial lessons.</p>
          </Reveal>

          <Reveal delay={0.08} className="faq-content-column">
            <div className="faq-list">
              {faqs.map(({ q, a }) => (
                <details key={q} className="faq-item-box">
                  <summary>
                    <span>{q}</span>
                    <ChevronRight size={18} className="faq-chevron" />
                  </summary>
                  <div className="faq-answer">
                    <p>{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="premium-cta-section long-home-cta">
        <div className="container premium-cta-card relevant-cta-card">
          <div className="cta-ambient-glow" />
          <div className="cta-teacher-photo cta-teacher-pair">
            <Image
              src="/assets/generated/teacher-1.webp"
              alt="Tazkera Quran Teacher"
              width={160}
              height={160}
              className="cta-avatar-1"
            />
            <Image
              src="/assets/generated/teacher-2.webp"
              alt="Tazkera Arabic Teacher"
              width={160}
              height={160}
              className="cta-avatar-2"
            />
          </div>

          <Reveal className="cta-copy-wrap">
            <span className="section-kicker light">Your First Two Lessons Are 100% Free</span>
            <h2>Meet 2 Teachers and Begin Your Quranic Journey Today.</h2>
            <p>Experience two free trial lessons with two different teachers, then choose the teacher you prefer and continue with a personalized learning plan.</p>
          </Reveal>

          <Reveal delay={0.1} className="cta-btns-wrap">
            <Link href="/contact#trial" className="button premium-gold-light">
              <span>Book 2 Free Trials</span>
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
