'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TrialModal from '../../components/TrialModal';
import CredentialsShowcase from '../../components/CredentialsShowcase';
import { 
  Award, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Clock, 
  Globe, 
  Users, 
  CheckCircle2, 
  HeartHandshake, 
  BookOpen,
  MessageCircle
} from 'lucide-react';
import { ScrollIcon } from '../../components/Icons';

export default function AboutPage() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <div className="page-wrapper">
      <Navbar onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Header Banner */}
      <section style={{ padding: '60px 0 45px', background: 'radial-gradient(circle at center, #0e2e5c 0%, #06152b 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div className="badge-pill-gold" style={{ display: 'inline-flex', padding: '5px 16px', borderRadius: '999px', marginBottom: '14px' }}>
            <Award size={14} /> 12+ Years of Scholarly Excellence
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 3.8vw, 48px)', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>
            About Jazeel Academy <span className="gold-gradient-text">أكاديمية جزيل</span>
          </h1>
          <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
            Bridging classical Al-Azhar scholarship with modern global education, delivering authentic Quranic, Tajweed, Arabic, and Islamic learning to non-native speakers worldwide.
          </p>
        </div>
      </section>

      {/* Story & Background (Responsive Grid) */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="about-hero-grid">
            <div>
              <div className="section-tag">Our History &amp; Heritage</div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, color: 'var(--primary-900)', lineHeight: 1.25, marginBottom: '18px' }}>
                Twelve Years of Dedicated Service to <span className="navy-gradient-text">Non-Native Muslim Learners</span>
              </h2>
              
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '14px' }}>
                Founded with a sacred mission to make authentic Islamic knowledge accessible across continents, <strong>Jazeel Academy (أكاديمية جزيل)</strong> has grown from a specialized circle of Azhari educators into a trusted online institution educating Muslim families and students across the United States, United Kingdom, Canada, and Europe.
              </p>

              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '22px' }}>
                We understand that non-Arabic speaking students face distinct phonetic, linguistic, and cultural hurdles when learning the Holy Quran and Islamic sciences. Our proprietary pedagogy is specifically formulated to bridge these gaps through fluent English explanations, interactive digital tools, and patient, personalized 1-on-1 mentorship.
              </p>

              <div className="two-col-grid">
                <div style={{ padding: '16px', borderRadius: '14px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '22px', fontWeight: 900, color: 'var(--gold-700)' }}>12+ Years</div>
                  <div style={{ fontSize: '12.5px', color: 'var(--primary-900)', fontWeight: 700, marginTop: '2px' }}>Non-Native Teaching Pedagogy</div>
                </div>

                <div style={{ padding: '16px', borderRadius: '14px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '22px', fontWeight: 900, color: 'var(--primary-700)' }}>100%</div>
                  <div style={{ fontSize: '12.5px', color: 'var(--primary-900)', fontWeight: 700, marginTop: '2px' }}>Al-Azhar Certified Faculty</div>
                </div>
              </div>
            </div>

            {/* Official Azhar Seal Badge Illustration */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '2px solid var(--border-gold)',
                  background: '#ffffff',
                  maxWidth: '420px',
                  width: '100%',
                  padding: '22px',
                  textAlign: 'center'
                }}
              >
                <img 
                  src="/assets/azhar-seal.jpg" 
                  alt="Al-Azhar Accreditation Seal and Certificate Emblem" 
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', marginBottom: '16px' }}
                />
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)' }}>
                  Al-Azhar Al-Sharif Accreditation
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Official authorization certifying academic rigor, moderate Islamic principles, and Sanad authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '70px 0', background: 'var(--bg-cream)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Vision */}
            <div style={{ background: '#ffffff', borderRadius: '18px', padding: '30px 24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--gold-100)', color: 'var(--gold-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '10px' }}>
                Our Vision • الرؤية
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                To be the world’s most trusted online haven for Quranic and classical Islamic education, cultivating a confident global generation of Muslims who recite the Book of Allah with precision, understand its message deeply, and embody the noble character of Prophet Muhammad ﷺ in their daily lives.
              </p>
            </div>

            {/* Mission */}
            <div style={{ background: '#ffffff', borderRadius: '18px', padding: '30px 24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--primary-100)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '10px' }}>
                Our Mission • الرسالة
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                To deliver bespoke, one-on-one live instruction guided by certified Azhari scholars who combine deep traditional mastery with pedagogical warmth, cutting-edge e-learning tools, continuous parent follow-up, and 24/7 global flexibility.
              </p>
            </div>

            {/* Core Values */}
            <div style={{ background: '#ffffff', borderRadius: '18px', padding: '30px 24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(37,211,102,0.15)', color: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '10px' }}>
                Our Core Pillars • القيم الجوهرية
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                Authenticity through Al-Azhar accreditation, empathy and patience with non-native children, uncompromised Tajweed precision, complete parent transparency through monthly reports, and continuous teacher professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Standards & Qualifications */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Academic Excellence</div>
            <h2 className="section-title">
              Our Rigorous <span className="navy-gradient-text">Teacher Selection Process</span>
            </h2>
            <p className="section-subtitle">
              Strict Al-Azhar scholarly criteria, Sanad verification, and pedagogical excellence for all our teachers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '24px', borderRadius: '16px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>🎓</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>Al-Azhar University Degrees</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                Graduates of faculties of Quranic Sciences, Islamic Dawah, Usul al-Din, and Arabic Linguistics.
              </p>
            </div>

            <div style={{ padding: '24px', borderRadius: '16px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>📜</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>Connected Sanad Ijazahs</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                Authorized reciters holding formal chains of transmission in Hafs and Shu'bah 'an 'Asim.
              </p>
            </div>

            <div style={{ padding: '24px', borderRadius: '16px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>🗣️</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>Fluent English &amp; Pedagogy</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                Trained in child psychology, English phonetics, and online interactive whiteboard delivery.
              </p>
            </div>

            <div style={{ padding: '24px', borderRadius: '16px', background: 'var(--bg-soft)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>📊</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>Dedicated Supervisors</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                Every student and teacher is monitored by a senior academic supervisor who reviews monthly progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Credentials, Sanad Ijazahs & Azhar Licenses */}
      <CredentialsShowcase onOpenTrial={() => setIsTrialOpen(true)} />

      {/* CTA Strip */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <h2 className="cta-title">Experience the Jazeel Academy Difference</h2>
            <p className="cta-desc">
              Book a complimentary 1-on-1 trial session with a certified Azhari teacher and see why families worldwide trust Jazeel Academy.
            </p>
            <div className="cta-actions">
              <button onClick={() => setIsTrialOpen(true)} className="button button-gold">
                <Sparkles size={16} />
                <span>Book a Free Trial Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenTrial={() => setIsTrialOpen(true)} />
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </div>
  );
}
