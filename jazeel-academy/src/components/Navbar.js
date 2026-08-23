'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Award, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function Navbar({ onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-badge">
              <Award size={12} /> Al-Azhar Licensed
            </span>
            <span>🏛️ 12+ Years Teaching Non-Native Speakers</span>
            <span className="hide-mobile">✨ Free Trial Session</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="https://wa.me/201041479418?text=Hello%20Jazeel%20Academy,%20I%20would%20like%20to%20inquire%20about%20Quran%20and%20Islamic%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-link"
              aria-label="Contact Jazeel Academy on WhatsApp"
            >
              <MessageCircle size={14} />
              <span>WhatsApp: 01041479418</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container">
        <div className="nav-row">
          {/* Logo & Brand Name */}
          <Link href="/" className="brand-link" id="nav-brand-logo">
            <div className="brand-emblem">
              <img 
                src="/assets/logo.jpg" 
                alt="Jazeel Academy Official Logo" 
                width={44} 
                height={44}
              />
            </div>
            <div className="brand-info">
              <div className="brand-title">JAZEEL <span className="gold-gradient-text">ACADEMY</span></div>
              <div className="brand-subtitle">أكاديمية جزيل للقرآن والعلوم الشرعية</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
              About Us
            </Link>
            <Link href="/#programs" className="nav-item">
              Courses
            </Link>
            <Link href="/#why-us" className="nav-item">
              Why Us
            </Link>
            <Link href="/#reviews" className="nav-item">
              Reviews
            </Link>
            <Link href="/#pricing" className="nav-item">
              Tuition
            </Link>
            <Link href="/contact" className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
              Contact Us
            </Link>
          </nav>

          {/* Header Actions */}
          <div className="header-cta-group">
            <a 
              href="https://wa.me/201041479418?text=Assalamu%20Alaikum,%20I%20want%20to%20inquire%20about%20classes%20at%20Jazeel%20Academy."
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
              <span>Book a Trial</span>
            </button>

            {/* Mobile Toggle Button */}
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

      {/* Mobile Drawer */}
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
                <span>🏛️ About Us &amp; Azhar License (من نحن)</span>
                <ChevronRight size={16} />
              </Link>
              <Link 
                href="/#programs" 
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>📚 Academic Courses (الكورسات)</span>
                <ChevronRight size={16} />
              </Link>
              <Link 
                href="/#why-us" 
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>⭐ Why Choose Us (القيمة الجوهرية)</span>
                <ChevronRight size={16} />
              </Link>
              <Link 
                href="/#reviews" 
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>💬 22+ Parent Testimonials (آراء العملاء)</span>
                <ChevronRight size={16} />
              </Link>
              <Link 
                href="/#pricing" 
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>💳 Tuition Tracks (المسارات)</span>
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
                href="https://wa.me/201041479418?text=Hello%20Jazeel%20Academy,%20I%20am%20interested%20in%20taking%20Quran%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp full"
              >
                <MessageCircle size={15} />
                <span>WhatsApp: 01041479418</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
