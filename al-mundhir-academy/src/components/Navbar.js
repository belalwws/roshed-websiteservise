'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall, Sparkles, MessageCircle, BookOpen, UserCheck } from 'lucide-react';

export default function Navbar({ onOpenTrialModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'البرامج والمسارات', href: '/#programs' },
    { name: 'لماذا المنذر؟', href: '/#why-us' },
    { name: 'باقات الأسعار', href: '/#pricing' },
    { name: 'تجارب أولياء الأمور', href: '/#testimonials' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(4, 14, 22, 0.95)' : 'rgba(7, 23, 34, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(205, 168, 78, 0.22)',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px'
      }}>
        {/* Brand Logo & Slogan */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          color: '#ffffff'
        }}>
          <div style={{
            position: 'relative',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1.5px solid #cda84e',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(205, 168, 78, 0.3)'
          }}>
            <img
              src="/assets/logo.jpg"
              alt="شعار أكاديمية المنذر"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: 900,
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              letterSpacing: '-0.2px'
            }}>
              أكاديمية المُنذِر
              <span style={{
                fontSize: '0.72rem',
                color: '#cda84e',
                fontWeight: 700,
                border: '1px solid rgba(205, 168, 78, 0.4)',
                padding: '1px 6px',
                borderRadius: '6px',
                background: 'rgba(205, 168, 78, 0.1)'
              }}>
                القرآن وعلومه
              </span>
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: '#cda84e',
              fontWeight: 600,
              fontFamily: 'var(--font-amiri)'
            }}>
              نتعلّم ... لنفهم ... لنرتقي
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '22px'
        }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: isActive ? '#cda84e' : '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.96rem',
                  fontWeight: isActive ? 800 : 600,
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  padding: '6px 0'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#cda84e'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#e2e8f0'; }}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--gold-gradient)',
                    borderRadius: '2px'
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Quick WhatsApp Call/Chat */}
          <a
            href="https://wa.me/201551669364?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AF%D8%B1%D9%88%D8%B3%20%D9%88%D8%A8%D8%B1%D8%A7%D9%85%D8%AC%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D8%B0%D8%B1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              padding: '8px 16px',
              fontSize: '0.88rem',
              display: 'none'
            }}
            id="header-whatsapp-btn"
          >
            <MessageCircle size={16} />
            <span>01551669364</span>
          </a>

          {/* Book Trial CTA Button */}
          <button
            onClick={onOpenTrialModal}
            className="btn-gold"
            style={{
              padding: '9px 20px',
              fontSize: '0.92rem',
              boxShadow: '0 4px 15px rgba(205, 168, 78, 0.35)'
            }}
          >
            <Sparkles size={16} />
            <span>احجز حصة تجريبية مجاناً</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(205, 168, 78, 0.3)',
              color: '#ffffff',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            className="mobile-hamburger"
            aria-label="القائمة الرئيسية"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: '#071722',
          borderBottom: '2px solid #cda84e',
          padding: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: pathname === link.href ? '#cda84e' : '#f8fafc',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: pathname === link.href ? 'rgba(205, 168, 78, 0.12)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.name}</span>
                <span style={{ color: '#cda84e', fontSize: '0.85rem' }}>←</span>
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenTrialModal(); }}
              className="btn-gold"
              style={{ width: '100%', padding: '12px' }}
            >
              <Sparkles size={18} />
              احجز حصة تجريبية مجاناً
            </button>
            <a
              href="https://wa.me/201551669364"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', padding: '12px' }}
            >
              <MessageCircle size={18} />
              محادثة مباشرة عبر واتساب (01551669364)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
