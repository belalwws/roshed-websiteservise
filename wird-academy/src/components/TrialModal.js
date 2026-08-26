'use client';

import { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  BookOpen, 
  User, 
  Phone, 
  Globe, 
  Clock 
} from 'lucide-react';

export default function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    ageGroup: 'Kids (5 - 12 Years)',
    course: 'Quran & Tajweed (Recitation as Revealed)',
    levelNotes: '',
    phone: '',
    country: '',
    preferredTime: 'Afternoon / Evening'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = `*New Trial Lesson Request - Wird Academy*%0A%0A` +
      `*Student Name:* ${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}%0A` +
      `*Student Age:* ${encodeURIComponent(formData.ageGroup)}%0A` +
      `*Desired Program:* ${encodeURIComponent(formData.course)}%0A` +
      `*Current Recitation Level & Notes:* ${encodeURIComponent(formData.levelNotes || 'Beginner / Assessment needed')}%0A` +
      `*Country / Timezone:* ${encodeURIComponent(formData.country || 'Global')}%0A` +
      `*WhatsApp / Contact:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Preferred Timing:* ${encodeURIComponent(formData.preferredTime)}%0A`;

    window.open(`https://wa.me/201061858535?text=${msg}`, '_blank');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(4, 13, 26, 0.85)',
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
          maxWidth: '540px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '30px 24px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
          border: '1px solid var(--border-gold)'
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
            width: '32px',
            height: '32px',
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
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
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
                <Sparkles size={13} /> 100% Complimentary • Live 1-on-1 Assessment
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-900)' }}>
                Book Your Free Trial Lesson
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Receive a live level assessment with an Al-Azhar Ijazah certified scholar.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* First & Last Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                    First Name (الاسم الأول) *
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
                    Last Name (الاسم الثاني) *
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

              {/* Age & Program */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                    Student Age (عمر الطالب) *
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
                    <option value="Young Kids (4 - 7 Years)">Young Kids (4 - 7 Years)</option>
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
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13px'
                    }}
                  >
                    <option value="Arabic Phonics & Reading Foundations">1. Arabic Phonics & Noor Al-Bayan</option>
                    <option value="Quran & Tajweed">2. Quran & Tajweed</option>
                    <option value="Hifz — Quran Memorization">3. Hifz — Quran Memorization</option>
                    <option value="Islamic Studies">4. Islamic Studies</option>
                    <option value="Quranic Arabic">5. Quranic Arabic</option>
                    <option value="Spoken Arabic">6. Spoken Arabic</option>
                  </select>
                </div>
              </div>

              {/* Current Level Notes (From intake form specification) */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                  Current Recitation Level &amp; Experience (مستوى الطالب) *
                </label>
                <textarea 
                  rows={2}
                  required
                  placeholder="e.g. Total beginner / Knows Arabic alphabet / Can read short Surahs with Tajweed mistakes / Memorized 2 Juz..."
                  value={formData.levelNotes}
                  onChange={(e) => setFormData({ ...formData, levelNotes: e.target.value })}
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

              {/* WhatsApp Phone & Country */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                    WhatsApp Number *
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
                    Country / Timezone *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. USA (EST), UK (GMT)"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
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

              <button 
                type="submit"
                className="button button-gold full"
                style={{ minHeight: '44px', marginTop: '6px', fontSize: '14.5px' }}
              >
                <Sparkles size={16} />
                <span>Confirm &amp; Request Free Trial</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                🔒 100% Confidential. Directly sent to academic coordinators via WhatsApp.
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(37, 211, 102, 0.15)',
                color: '#25d366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <CheckCircle2 size={34} />
            </div>

            <h3 style={{ fontSize: '21px', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
              Trial Request Received!
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '18px' }}>
              Jazakum Allahu Khairan <strong>{formData.firstName} {formData.lastName}</strong>! Our academic team at Wird Academy has received your request for a live assessment.
            </p>

            <div 
              style={{
                background: 'var(--bg-soft)',
                borderRadius: '12px',
                padding: '14px',
                border: '1px solid var(--border-light)',
                textAlign: 'left',
                marginBottom: '18px',
                fontSize: '12.5px'
              }}
            >
              <div style={{ marginBottom: '4px' }}><strong>Program:</strong> {formData.course}</div>
              <div style={{ marginBottom: '4px' }}><strong>Age:</strong> {formData.ageGroup}</div>
              <div style={{ marginBottom: '4px' }}><strong>Level Note:</strong> {formData.levelNotes}</div>
              <div><strong>Academy WhatsApp:</strong> 01061858535 (+201061858535)</div>
            </div>

            <a 
              href={`https://wa.me/201061858535?text=Assalamu%20Alaikum,%20I%20have%20submitted%20a%20trial%20request%20for%20${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="button button-whatsapp full"
              style={{ minHeight: '44px', fontSize: '14px' }}
            >
              <MessageCircle size={16} />
              <span>Connect on WhatsApp Now</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
