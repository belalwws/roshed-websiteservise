'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TrialModal from '../../components/TrialModal';
import { 
  Sparkles, 
  MessageCircle, 
  Phone, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  Award,
  Globe
} from 'lucide-react';

export default function ContactPage() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    ageGroup: 'Kids (5 - 12 Years)',
    level: '',
    program: 'Quran & Tajweed (Recitation as Revealed)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = `*New Contact Inquiry - Wird Academy*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}%0A` +
      `*Age Group:* ${encodeURIComponent(formData.ageGroup)}%0A` +
      `*Program:* ${encodeURIComponent(formData.program)}%0A` +
      `*Current Level:* ${encodeURIComponent(formData.level || 'Not specified')}%0A` +
      `*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message || 'General inquiry')}%0A`;

    window.open(`https://wa.me/201061858535?text=${msg}`, '_blank');
  };

  return (
    <div>
      <Navbar onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Page Header */}
      <section style={{ padding: '60px 0 40px', background: 'radial-gradient(circle at 80% 20%, rgba(201,154,69,0.12) 0%, transparent 60%), var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <div className="hero-badge-tag" style={{ marginBottom: '14px' }}>
              <MessageCircle size={13} /> Contact Us • تواصل معنا
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, color: 'var(--primary-900)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Get in Touch with Academic Coordinators
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7 }}>
              Have questions about our Al-Azhar certified faculty, curriculum, or scheduling? Connect directly with our administration on WhatsApp or submit your inquiry below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {/* Left: Contact Info & Channels */}
            <div>
              <div className="section-tag">Direct Communication</div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '16px', lineHeight: 1.3 }}>
                Fast &amp; Responsive Academic Support
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
                Our team responds to all inquiries promptly to guide you toward the right program, tutor match, and flexible global time slot.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* WhatsApp Box */}
                <a 
                  href="https://wa.me/201061858535" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 20px',
                    borderRadius: '16px',
                    background: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.25)',
                    transition: 'transform 0.2s ease',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: '#25d366', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#128c7e', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Official WhatsApp (Direct Support)
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginTop: '2px' }}>
                      01061858535 (+201061858535)
                    </div>
                  </div>
                </a>

                {/* Phone Box */}
                <a 
                  href="tel:01061858535" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 20px',
                    borderRadius: '16px',
                    background: 'var(--bg-soft)',
                    border: '1px solid var(--border-light)',
                    transition: 'transform 0.2s ease',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'var(--primary-900)', color: 'var(--gold-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--gold-800)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Direct Phone
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginTop: '2px' }}>
                      01061858535
                    </div>
                  </div>
                </a>

                {/* Social Media Links */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '6px' }}>
                  <a 
                    href="https://www.facebook.com/share/1YwYTJCwob/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--border-light)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--primary-900)'
                    }}
                  >
                    <ExternalLink size={16} color="var(--gold-600)" />
                    <span>Facebook Page</span>
                  </a>

                  <a 
                    href="https://www.instagram.com/wird_academy?igsh=MTNhMHU2OGl5cGFzag==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--border-light)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--primary-900)'
                    }}
                  >
                    <ExternalLink size={16} color="var(--gold-600)" />
                    <span>Instagram Profile</span>
                  </a>
                </div>

                {/* Operating Hours Note */}
                <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--gold-100)', border: '1px solid var(--border-gold)', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 800, color: 'var(--gold-900)', marginBottom: '4px' }}>
                    <Clock size={16} /> 24/7 Global Timezone Coordination
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--gold-900)', lineHeight: 1.5 }}>
                    Classes are scheduled around the clock to suit students in the USA, Canada, UK, Europe, Australia, and the Middle East.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '32px 26px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                Send an Academic Inquiry
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Fill in your details below and our team will get in touch via WhatsApp.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                        First Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Zayd"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '13.5px'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                        Last Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Ali"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '13.5px'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                        Age Group *
                      </label>
                      <select 
                        value={formData.ageGroup}
                        onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '13px'
                        }}
                      >
                        <option value="Kids (4 - 7 Years)">Kids (4 - 7 Years)</option>
                        <option value="Kids (8 - 12 Years)">Kids (8 - 12 Years)</option>
                        <option value="Teens (13 - 17 Years)">Teens (13 - 17 Years)</option>
                        <option value="Adults (18+ Years)">Adults (18+ Years)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                        Program of Interest *
                      </label>
                      <select 
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '13px'
                        }}
                      >
                        <option value="Arabic Phonics & Noor Al-Bayan">1. Arabic Phonics & Noor Al-Bayan</option>
                        <option value="Quran & Tajweed">2. Quran & Tajweed</option>
                        <option value="Hifz — Quran Memorization">3. Hifz — Quran Memorization</option>
                        <option value="Islamic Studies">4. Islamic Studies</option>
                        <option value="Quranic Arabic">5. Quranic Arabic</option>
                        <option value="Spoken Arabic">6. Spoken Arabic</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                      Current Recitation Level (مستوى الطالب)
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. Beginner / Memorized 1 Juz / Needs Tajweed correction"
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13.5px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                      WhatsApp Contact Number *
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13.5px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                      Your Message or Questions
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Any preferred timing, timezone, or specific goals for the classes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13px',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="button button-gold full"
                    style={{ minHeight: '44px', fontSize: '14px', marginTop: '4px' }}
                  >
                    <Sparkles size={16} />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.15)', color: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                    Inquiry Transmitted!
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                    Thank you <strong>{formData.firstName}</strong>! Our academic team will get in touch with you shortly.
                  </p>
                  <a 
                    href="https://wa.me/201061858535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp"
                  >
                    <MessageCircle size={15} />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenTrial={() => setIsTrialOpen(true)} />
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </div>
  );
}
