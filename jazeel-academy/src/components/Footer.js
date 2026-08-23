'use client';

import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Award, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './Icons';

export default function Footer({ onOpenTrial }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-emblem">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Jazeel Academy Emblem" 
                  width={46} 
                  height={46}
                />
              </div>
              <div>
                <div className="footer-title">JAZEEL <span style={{ color: 'var(--gold-400)' }}>ACADEMY</span></div>
                <div className="footer-subtitle">أكاديمية جزيل للقرآن والعلوم الشرعية</div>
              </div>
            </div>

            <p className="footer-desc">
              A premier online Islamic institution licensed by <strong>Al-Azhar Al-Sharif</strong>. Delivering authentic Quran recitation, Tajweed, Classical Arabic, and English-taught Islamic Sciences to students worldwide with over 12 years of specialized non-native teaching experience.
            </p>

            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              <a 
                href="https://www.facebook.com/share/1Ej3gNjMh6/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '10px', 
                  background: 'rgba(255,255,255,0.08)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#ffffff',
                  border: '1px solid rgba(212,175,55,0.3)',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Facebook Page"
              >
                <FacebookIcon size={17} />
              </a>

              <a 
                href="https://www.instagram.com/jazeelacademy?igsh=MXgzczR4bTRiZWV4Zg==" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '10px', 
                  background: 'rgba(255,255,255,0.08)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#ffffff',
                  border: '1px solid rgba(212,175,55,0.3)',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={17} />
              </a>

              <a 
                href="https://wa.me/201041479418?text=Assalamu%20Alaikum%20Jazeel%20Academy" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '10px', 
                  background: '#25d366', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s ease'
                }}
                aria-label="WhatsApp Chat"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Academic Programs */}
          <div className="footer-col">
            <h4>Academic Courses</h4>
            <ul className="footer-links">
              <li>
                <Link href="/#programs">
                  <ChevronRight size={13} /> Quran &amp; Tajweed for Beginners
                </Link>
              </li>
              <li>
                <Link href="/#programs">
                  <ChevronRight size={13} /> Advanced Tajweed (Matn Texts)
                </Link>
              </li>
              <li>
                <Link href="/#programs">
                  <ChevronRight size={13} /> Islamic Studies in English (Fiqh/Seerah)
                </Link>
              </li>
              <li>
                <Link href="/#programs">
                  <ChevronRight size={13} /> Classical Arabic (Fusha) for Non-Arabs
                </Link>
              </li>
              <li>
                <Link href="/#programs">
                  <ChevronRight size={13} /> Teacher Training &amp; Pedagogy
                </Link>
              </li>
              <li>
                <Link href="/#programs">
                  <ChevronRight size={13} /> Sanad Ijazah (Hafs &amp; Shu'bah)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">
                  <ChevronRight size={13} /> Home Page (الرئيسية)
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <ChevronRight size={13} /> About Us &amp; Azhar License
                </Link>
              </li>
              <li>
                <Link href="/#why-us">
                  <ChevronRight size={13} /> Why Choose Jazeel
                </Link>
              </li>
              <li>
                <Link href="/#reviews">
                  <ChevronRight size={13} /> 22+ Real Parent Feedback
                </Link>
              </li>
              <li>
                <Link href="/#pricing">
                  <ChevronRight size={13} /> Tuition &amp; Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <ChevronRight size={13} /> Contact Us (تواصل معنا)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>Contact Details</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MessageCircle size={17} />
                <div>
                  <strong>WhatsApp (24/7 Support):</strong><br />
                  <a href="https://wa.me/201041479418" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-300)' }}>
                    01041479418 (+201041479418)
                  </a>
                </div>
              </li>

              <li className="footer-contact-item">
                <Phone size={17} />
                <div>
                  <strong>Direct Phones:</strong><br />
                  <a href="tel:+201016984596" style={{ color: 'rgba(255,255,255,0.9)' }}>01016984596</a> / <a href="tel:+201111523856" style={{ color: 'rgba(255,255,255,0.9)' }}>01111523856</a>
                </div>
              </li>

              <li className="footer-contact-item">
                <Mail size={17} />
                <div>
                  <strong>Direct Email:</strong><br />
                  <a href="mailto:info@jazeelacademy.com" style={{ color: 'var(--gold-300)' }}>
                    info@jazeelacademy.com
                  </a>
                </div>
              </li>

              <li className="footer-contact-item">
                <Award size={17} />
                <div>
                  <strong>Official Accreditation:</strong><br />
                  <span>Licensed from Al-Azhar Al-Sharif</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>Jazeel Academy (أكاديمية جزيل)</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span>🔒 Safe &amp; Secure 1-on-1 Sessions</span>
            <span>⭐ Licensed by Al-Azhar</span>
            <button 
              onClick={onOpenTrial} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--gold-400)', 
                cursor: 'pointer', 
                fontWeight: 700 
              }}
            >
              Book a Free Trial →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
