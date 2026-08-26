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
  CheckCircle2 
} from 'lucide-react';

export default function Navbar({ onOpenTrial }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Notification Announcement */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-badge">
                <Award size={12} /> Al-Azhar Ijazah Certified Faculty
              </span>
              <span className="hide-mobile">✨ 1-on-1 Personalized Live Lessons</span>
              <span className="hide-mobile">📊 3-Month Documented Progress Reviews</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <a 
                href="https://wa.me/201061858535?text=Hello%20Wird%20Academy,%20I%20would%20like%20to%20inquire%20about%20Quran%20and%20Arabic%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="top-bar-link"
                aria-label="Contact Wird Academy on WhatsApp"
              >
                <MessageCircle size={14} />
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
                  width={46} 
                  height={46}
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
                Courses
              </Link>
              <Link href="/#values" className="nav-item">
                Core Values
              </Link>
              <Link href="/#why-us" className="nav-item">
                Why Us
              </Link>
              <Link href="/about#faculty" className="nav-item">
                Faculty
              </Link>
              <Link href="/contact" className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
                Contact Us
              </Link>
            </nav>

            {/* Header Actions */}
            <div className="header-cta-group">
              <a 
                href="https://wa.me/201061858535?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20classes%20at%20Wird%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp hide-mobile"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>

              <button 
                onClick={onOpenTrial}
                className="button button-gold hide-mobile"
                id="header-book-trial-btn"
              >
                <Sparkles size={14} />
                <span>Book a Free Trial</span>
              </button>

              {/* Mobile Hamburger Toggle */}
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
                  <span>🏠 Home (الرئيسية)</span>
                  <ChevronRight size={16} />
                </Link>
                <Link 
                  href="/about" 
                  className={`mobile-nav-item ${pathname === '/about' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>🏛️ About Us &amp; Mission (من نحن)</span>
                  <ChevronRight size={16} />
                </Link>
                <Link 
                  href="/#courses" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>📚 Academic Programs (البرامج والكورسات)</span>
                  <ChevronRight size={16} />
                </Link>
                <Link 
                  href="/#values" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>⭐ Core Values (القيم الجوهرية)</span>
                  <ChevronRight size={16} />
                </Link>
                <Link 
                  href="/#why-us" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>🛡️ Why Families Trust Us (ليه إحنا)</span>
                  <ChevronRight size={16} />
                </Link>
                <Link 
                  href="/about#faculty" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>🎓 Certified Faculty (المعلمون المعتمدون)</span>
                  <ChevronRight size={16} />
                </Link>
                <Link 
                  href="/contact" 
                  className={`mobile-nav-item ${pathname === '/contact' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>📞 Contact Us (تواصل معنا)</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenTrial) onOpenTrial();
                  }}
                  className="button button-gold full"
                >
                  <Sparkles size={15} />
                  <span>Book a Free Trial</span>
                </button>
                
                <a 
                  href="https://wa.me/201061858535?text=Hello%20Wird%20Academy,%20I%20would%20like%20to%20book%20a%20free%20trial%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-whatsapp full"
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
