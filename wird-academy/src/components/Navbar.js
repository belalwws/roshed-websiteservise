'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              {/* Desktop announcement */}
              <div className="top-bar-desktop-content hide-mobile">
                <span className="top-bar-badge">
                  <Award size={12} /> Al-Azhar Ijazah Certified Teachers
                </span>
                <span className="top-bar-text-main">
                  Qualified Quran Teachers • Personalised 1-to-1 Lessons • Clear Progress Reports
                </span>
              </div>

              {/* Mobile announcement */}
              <div className="top-bar-mobile-content show-mobile-only">
                <span className="top-bar-badge">
                  <Award size={12} /> 1-to-1 Quran Lessons for Non-Arabic Speakers
                </span>
              </div>
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
              <Link href="/about#teachers" className="nav-item">
                Teachers
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
                    <span>Home</span>
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
                    <span>About Us &amp; Mission</span>
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
                    <span>5 Focused Programmes</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/#approach" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>⭐</span>
                    <span>Teaching Approach</span>
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
                    <span>Why Choose Us</span>
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
                    <span>Reviews &amp; Experiences</span>
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link 
                  href="/about#teachers" 
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>🎓</span>
                    <span>Meet Our Teachers</span>
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
                    <span>Contact Us</span>
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
