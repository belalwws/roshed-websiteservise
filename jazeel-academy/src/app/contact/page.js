'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TrialModal from '../../components/TrialModal';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Send,
  Globe,
  Award
} from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '../../components/Icons';

export default function ContactPage() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [msgData, setMsgData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Quran Classes Inquiry',
    message: ''
  });

  const handleSend = (e) => {
    e.preventDefault();
    setFormSent(true);

    const formattedMsg = `*New Contact Message - Jazeel Academy*%0A%0A` +
      `*Name:* ${encodeURIComponent(msgData.name)}%0A` +
      `*Email:* ${encodeURIComponent(msgData.email)}%0A` +
      `*Phone/WhatsApp:* ${encodeURIComponent(msgData.phone)}%0A` +
      `*Subject:* ${encodeURIComponent(msgData.subject)}%0A` +
      `*Message:* ${encodeURIComponent(msgData.message)}`;

    window.open(`https://wa.me/201041479418?text=${formattedMsg}`, '_blank');
  };

  return (
    <div className="page-wrapper">
      <Navbar onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Header Banner */}
      <section style={{ padding: '60px 0 45px', background: 'radial-gradient(circle at center, #0e2e5c 0%, #06152b 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div className="badge-pill-gold" style={{ display: 'inline-flex', padding: '5px 16px', borderRadius: '999px', marginBottom: '14px' }}>
            <MessageCircle size={14} /> 24/7 Global Student Support
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 3.8vw, 48px)', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>
            Contact &amp; Student <span className="gold-gradient-text">Support Hub</span>
          </h1>
          <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
            Have questions about our curriculum, scheduling, or teacher allocation? Our dedicated coordination team is available around the clock to assist you.
          </p>
        </div>
      </section>

      {/* Main Contact Section (Responsive Grid) */}
      <section style={{ padding: '70px 0', background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#ffffff', borderRadius: '18px', padding: '26px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '16px' }}>
                  Direct Contact Channels
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* WhatsApp */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#25d366', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700 }}>WhatsApp Coordination (24/7)</div>
                      <a href="https://wa.me/201041479418" target="_blank" rel="noopener noreferrer" style={{ fontSize: '15.5px', fontWeight: 800, color: 'var(--primary-800)' }}>
                        +20 104 147 9418
                      </a>
                      <div style={{ fontSize: '11.5px', color: '#16a34a', fontWeight: 700, marginTop: '2px' }}>● Fast response within minutes</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--primary-100)', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700 }}>Direct Phone Support</div>
                      <div style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--primary-800)' }}>
                        <a href="tel:+201016984596">+20 101 698 4596</a>
                      </div>
                      <div style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--primary-800)', marginTop: '2px' }}>
                        <a href="tel:+201111523856">+20 111 152 3856</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--gold-100)', color: 'var(--gold-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700 }}>Official Email Address</div>
                      <a href="mailto:info@jazeelacademy.com" style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--primary-800)' }}>
                        info@jazeelacademy.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ background: '#ffffff', borderRadius: '18px', padding: '26px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '12px' }}>
                  Official Social Channels
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a 
                    href="https://www.facebook.com/share/1Ej3gNjMh6/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--border-light)',
                      fontWeight: 700,
                      color: 'var(--primary-900)',
                      fontSize: '13.5px'
                    }}
                  >
                    <FacebookIcon size={18} style={{ color: '#1877f2' }} />
                    <span>Jazeel Academy Official Facebook</span>
                  </a>

                  <a 
                    href="https://www.instagram.com/jazeelacademy?igsh=MXgzczR4bTRiZWV4Zg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--border-light)',
                      fontWeight: 700,
                      color: 'var(--primary-900)',
                      fontSize: '13.5px'
                    }}
                  >
                    <InstagramIcon size={18} style={{ color: '#e1306c' }} />
                    <span>@jazeelacademy on Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Message Form */}
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '32px 26px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
              {!formSent ? (
                <>
                  <div style={{ marginBottom: '20px' }}>
                    <div className="section-tag">Direct Inquiry</div>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-900)' }}>
                      Send Us a Message
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
                      Fill in the details below and we will connect with you via WhatsApp or Email right away.
                    </p>
                  </div>

                  <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                        Your Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Abdullah Khan"
                        value={msgData.name}
                        onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                        style={{
                          width: '100%',
                          height: '44px',
                          padding: '0 14px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div className="two-col-grid">
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                          Email Address *
                        </label>
                        <input 
                          type="email"
                          required
                          placeholder="e.g. name@example.com"
                          value={msgData.email}
                          onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                          style={{
                            width: '100%',
                            height: '44px',
                            padding: '0 12px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            fontSize: '13.5px',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                          WhatsApp / Phone *
                        </label>
                        <input 
                          type="tel"
                          required
                          placeholder="e.g. +44 7911 123456"
                          value={msgData.phone}
                          onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            height: '44px',
                            padding: '0 12px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            fontSize: '13.5px',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                        Inquiry Subject
                      </label>
                      <select
                        value={msgData.subject}
                        onChange={(e) => setMsgData({ ...msgData, subject: e.target.value })}
                        style={{
                          width: '100%',
                          height: '44px',
                          padding: '0 10px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '13.5px',
                          background: '#ffffff'
                        }}
                      >
                        <option>2 Free Trial Lessons Inquiry</option>
                        <option>Kids Quran & Tajweed Program</option>
                        <option>Islamic Studies in English (Fiqh/Seerah)</option>
                        <option>Classical Arabic Language Track</option>
                        <option>Teacher Qualification Diploma</option>
                        <option>Sanad Ijazah (Hafs & Shu'bah)</option>
                        <option>Tuition & Sibling Discounts</option>
                        <option>Other Question</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                        Your Message / Questions *
                      </label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Tell us about the student's age, level, goals, or preferred timing..."
                        value={msgData.message}
                        onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '13.5px',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="button button-gold full"
                      style={{ height: '48px', fontSize: '15px' }}
                    >
                      <Send size={16} />
                      <span>Send Inquiry &amp; Open WhatsApp</span>
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(37,211,102,0.15)', color: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '20px' }}>
                    Thank you <strong>{msgData.name}</strong>. Our academic team has received your message and will reply immediately.
                  </p>
                  <button 
                    onClick={() => setFormSent(false)}
                    className="button button-secondary"
                  >
                    Send Another Message
                  </button>
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
