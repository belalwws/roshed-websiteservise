'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Sparkles, 
  MessageCircle, 
  ChevronRight, 
  Award,
  BookOpen,
  ShieldCheck,
  Star,
  Phone
} from 'lucide-react';

export default function Navbar({ onOpenTrial }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-badge">
                <Award size={12} /> Al-Azhar Ijazah Certified Faculty
              </span>
              <span className="hide-tablet">✨ 1-on-1 Personalized Live Lessons</span>
              <span className="hide-mobile">📊 3-Month Documented Reviews</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a 
                href="https://wa.me/201061858535?text=Hello%20Wird%20Academy,%20I%20would%20like%20to%20inquire%20about%20Quran%20and%20Arabic%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="top-bar-link"
                aria-label="Contact Wird Academy on WhatsApp"
              >
                <MessageCircle size={13} />
                <span>WhatsApp: 01061858535</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="nav-row">
            {/* Brand Logo & Title */}
            <Link href="/" className="brand-link" id="nav-brand-logo">
              <div className="brand-emblem">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Wird Academy Official Logo" 
                  width={44} 
                  height={44}
                />
              </div>
              <div className="brand-info">
                <div className="brand-title">WIRD <span className="gold-gradient-text">ACADEMY</span></div>
                <div className="brand-subtitle">أكاديمية ورد للقرآن والعلوم الشرعية</div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="nav-links" aria-label="Main Navigation">
              <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
              <Link href="/about" className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
                About Us
              </Link>
              <Link href="/#courses" className="nav-item">
                Programs
              </Link>
              <Link href="/#why-us" className="nav-item">
                Why Us
              </Link>
              <Link href="/#feedback" className="nav-item">
                Reviews
              </Link>
              <Link href="/about#faculty" className="nav-item">
                Faculty
              </Link>
              <Link href="/contact" className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </nav>

            {/* Header Actions */}
            <div className="header-cta-group">
              {/* Desktop WhatsApp & Trial Buttons */}
              <a 
                href="https://wa.me/201061858535?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20classes%20at%20Wird%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp hide-tablet"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>

              <button 
                onClick={onOpenTrial}
                className="button button-gold hide-tablet"
                id="header-book-trial-btn"
              >
                <Sparkles size={14} />
                <span>Book Free Trial</span>
              </button>

              {/* Mobile Compact WhatsApp Quick Action */}
              <a 
                href="https://wa.me/201061858535" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-quick-whatsapp show-tablet"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle size={18} />
              </a>

              {/* Mobile Hamburger Menu Toggle */}
              <button 
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="container">
              <div className="mobile-nav-list">
                <Link 
                  href="/" 
                  className={`mobile-nav-item ${pathname === '/' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>🏠</span>
                    <span>Home (الرئيسية)</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/about" 
                  className={`mobile-nav-item ${pathname === '/about' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>🏛️</span>
                    <span>About Us &amp; Mission (من نحن)</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/#courses" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>📚</span>
                    <span>6 Academic Programs (البرامج والكورسات)</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/#values" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>⭐</span>
                    <span>Core Values (القيم الجوهرية)</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/#why-us" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>🛡️</span>
                    <span>Why Families Trust Us (ليه إحنا)</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/#feedback" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>📜</span>
                    <span>Certificates &amp; Reviews (الشهادات والآراء)</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/about#faculty" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>🎓</span>
                    <span>Certified Scholars (المعلمون المعتمدون)</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/contact" 
                  className={`mobile-nav-item ${pathname === '/contact' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>📞</span>
                    <span>Contact Us (تواصل معنا)</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Mobile Drawer Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenTrial) onOpenTrial();
                  }}
                  className="button button-gold full"
                  style={{ minHeight: '42px', fontSize: '14px' }}
                >
                  <Sparkles size={15} />
                  <span>Book a Free Trial Session</span>
                </button>
                
                <a 
                  href="https://wa.me/201061858535?text=Hello%20Wird%20Academy,%20I%20would%20like%20to%20inquire%20about%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-whatsapp full"
                  style={{ minHeight: '42px', fontSize: '14px' }}
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp: 01061858535</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
