'use client';

import Link from 'next/link';
import { 
  Sparkles, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  BookOpen, 
  Award,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onOpenTrial }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <Link href="/" className="brand-link" style={{ marginBottom: '8px' }}>
              <div className="brand-emblem">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Wird Academy Logo" 
                  width={46} 
                  height={46}
                />
              </div>
              <div className="brand-info">
                <div className="brand-title" style={{ color: '#ffffff' }}>
                  WIRD <span className="gold-gradient-text">ACADEMY</span>
                </div>
                <div className="brand-subtitle" style={{ color: 'var(--gold-400)' }}>
                  Online Quran &amp; Arabic Academy
                </div>
              </div>
            </Link>

            <p className="footer-desc">
              "Wird Academy exists for one reason: so that a Muslim who doesn't speak Arabic can read the Quran properly — not approximately, not from transliteration, but as it was revealed."
            </p>

            <div style={{ marginTop: '8px', display: 'flex', gap: '10px' }}>
              <a 
                href="https://wa.me/201061858535" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button button-whatsapp"
                style={{ minHeight: '38px', padding: '0 14px', fontSize: '13px' }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp: 01061858535</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="footer-col-title">Quick Navigation</h4>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About Us &amp; Mission</Link>
              <Link href="/#courses" className="footer-link">5 Focused Programmes</Link>
              <Link href="/#approach" className="footer-link">Teaching Approach</Link>
              <Link href="/#why-us" className="footer-link">Why Choose Us</Link>
              <Link href="/#feedback" className="footer-link">Verified Reviews</Link>
              <Link href="/about#teachers" className="footer-link">Meet Our Teachers</Link>
              <Link href="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>

          {/* Social & Direct Channels */}
          <div>
            <h4 className="footer-col-title">Official Channels</h4>
            <div className="footer-links">
              <a 
                href="https://wa.me/201061858535" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={15} color="#25d366" />
                <span>WhatsApp: 01061858535</span>
              </a>

              <a 
                href="tel:01061858535" 
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Phone size={15} color="var(--gold-400)" />
                <span>Phone: 01061858535</span>
              </a>

              <a 
                href="https://www.facebook.com/share/1YwYTJCwob/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <ExternalLink size={15} color="var(--gold-400)" />
                <span>Facebook Official Page</span>
              </a>

              <a 
                href="https://www.instagram.com/wird_academy?igsh=MTNhMHU2OGl5cGFzag==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <ExternalLink size={15} color="var(--gold-400)" />
                <span>Instagram @wird_academy</span>
              </a>
            </div>

            <div style={{ marginTop: '20px' }}>
              <button 
                onClick={onOpenTrial}
                className="button button-gold full"
                style={{ minHeight: '38px', fontSize: '13px' }}
              >
                <Sparkles size={14} />
                <span>Book a Free Trial Session</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>Wird Academy</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span>🔒 1-on-1 Dedicated Sessions</span>
            <span>⭐ Al-Azhar Ijazah Certified</span>
            <span style={{ color: 'var(--gold-400)', fontSize: '13px', fontWeight: 600 }}>
              Read As It Was Revealed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
