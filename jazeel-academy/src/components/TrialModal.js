'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, MessageCircle, Phone, Globe, Calendar, Clock, BookOpen, User } from 'lucide-react';

export default function TrialModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    ageGroup: 'Kids (4-10 yrs)',
    course: 'Arabic Reading & Quran Tajweed for Beginners',
    country: 'United Kingdom (UK)',
    phone: '',
    preferredTime: 'Evenings / Weekends',
    notes: '',
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = `*New 2 Free Trial Request - Jazeel Academy*%0A%0A` +
      `*Student Name:* ${encodeURIComponent(formData.studentName)}%0A` +
      `*Parent Name:* ${encodeURIComponent(formData.parentName || 'Self')}%0A` +
      `*Age Group:* ${encodeURIComponent(formData.ageGroup)}%0A` +
      `*Desired Program:* ${encodeURIComponent(formData.course)}%0A` +
      `*Country / Timezone:* ${encodeURIComponent(formData.country)}%0A` +
      `*WhatsApp / Contact:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Preferred Timing:* ${encodeURIComponent(formData.preferredTime)}%0A` +
      `*Notes:* ${encodeURIComponent(formData.notes || 'Looking for 2 free trials with 2 certified Azhari tutors.')}`;

    window.open(`https://wa.me/201041479418?text=${msg}`, '_blank');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(6, 21, 43, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px 24px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
          border: '1px solid rgba(212, 175, 55, 0.35)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#f1f5f9',
            border: 'none',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#475569'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  background: 'var(--gold-100)',
                  color: 'var(--gold-900)',
                  fontSize: '12px',
                  fontWeight: 800,
                  marginBottom: '8px'
                }}
              >
                <Sparkles size={13} /> 100% Free • No Credit Card Required
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-900)' }}>
                Book a Free Trial Session
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Experience a complimentary 1-on-1 private trial session with a certified Azhari tutor before enrolling.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                  Student's Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Omar Ahmed"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              <div className="two-col-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                    Age Group
                  </label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    style={{
                      width: '100%',
                      height: '44px',
                      padding: '0 10px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13px',
                      background: '#ffffff'
                    }}
                  >
                    <option>Kids (4-10 yrs)</option>
                    <option>Teens (11-17 yrs)</option>
                    <option>Adults (18+ yrs)</option>
                    <option>Teacher Qualification Track</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                    Country / Timezone *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. UK / USA (EST) / Germany"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    style={{
                      width: '100%',
                      height: '44px',
                      padding: '0 12px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13px'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                  Select Desired Program *
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 10px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13px',
                    background: '#ffffff'
                  }}
                >
                  <option>Arabic Reading & Quran Tajweed for Beginners</option>
                  <option>Theoretical & Practical Advanced Tajweed</option>
                  <option>Islamic Jurisprudence (Fiqh) in English</option>
                  <option>Quranic Interpretation (Tafseer) in English</option>
                  <option>Prophetic Biography (Seerah) in English</option>
                  <option>Hadith & Sunnah Studies in English</option>
                  <option>Classical Arabic (Fusha) for Non-Native Speakers</option>
                  <option>Teacher Training & Qualification Course</option>
                  <option>Sanad Ijazah (Hafs & Shu'bah 'an 'Asim)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                  Parent / Student WhatsApp Number *
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +44 7123 456789 or +1 234 567 890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '5px' }}>
                  Preferred Time / Days
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Weekday evenings, Saturdays at 5 PM GMT"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13.5px'
                  }}
                />
              </div>

              <button 
                type="submit"
                className="button button-gold full"
                style={{ minHeight: '44px', marginTop: '6px', fontSize: '14.5px' }}
              >
                <Sparkles size={16} />
                <span>Confirm &amp; Request Free Trial</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                🔒 100% Confidential. Academic coordinators respond within 2 hours.
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(37, 211, 102, 0.15)',
                color: '#25d366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
              Booking Request Received!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '20px' }}>
              JazakAllahu Khairan <strong>{formData.studentName}</strong>! Our academic coordination team has received your free trial request.
            </p>

            <div 
              style={{
                background: 'var(--bg-soft)',
                borderRadius: '14px',
                padding: '16px',
                border: '1px solid var(--border-light)',
                textAlign: 'left',
                marginBottom: '20px',
                fontSize: '13px'
              }}
            >
              <div style={{ marginBottom: '6px' }}><strong>Program:</strong> {formData.course}</div>
              <div style={{ marginBottom: '6px' }}><strong>Age:</strong> {formData.ageGroup}</div>
              <div style={{ marginBottom: '6px' }}><strong>Country:</strong> {formData.country}</div>
              <div><strong>WhatsApp:</strong> 01041479418 (+201041479418)</div>
            </div>

            <a 
              href={`https://wa.me/201041479418?text=Assalamu%20Alaikum,%20I%20have%20submitted%20a%20request%20for%20a%20free%20trial%20session%20for%20${encodeURIComponent(formData.studentName)}.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="button button-whatsapp full"
              style={{ minHeight: '44px', fontSize: '14px' }}
            >
              <MessageCircle size={16} />
              <span>Connect on WhatsApp Now</span>
            </a>

            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                marginTop: '14px',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
