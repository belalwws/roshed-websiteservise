'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#programs', label: 'Programs' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact & Free Trial' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header premium-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="top-announcement-bar">
        <div className="container announcement-inner">
          <span className="announcement-badge"><Sparkles size={13}/> Personalized Qur’an & Arabic Learning</span>
          <span className="announcement-text">Start with <b>2 free trial lessons</b> with 2 different teachers, then choose the best match.</span>
          <a href="https://wa.me/201105778132" target="_blank" rel="noreferrer" className="announcement-link">
            Chat on WhatsApp <ArrowUpRight size={13}/>
          </a>
        </div>
      </div>

      <div className="container header-inner premium-header-inner">
        <Link href="/" className="brand premium-brand" aria-label="Tazkera Academy Home">
          <div className="brand-emblem-wrap">
            <Image
              src="/assets/tazkera-official-logo.jpg"
              alt="Tazkera Academy official logo"
              width={52}
              height={52}
              className="brand-mark-3d"
              priority
            />
          </div>
          <div className="brand-copy">
            <span className="brand-name">Tazkera Academy</span>
            <span className="brand-tagline">Light Your Path With The Quran</span>
          </div>
        </Link>

        <nav className="desktop-nav premium-nav" aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions premium-header-actions">
          <a
            href="https://wa.me/201105778132"
            className="header-whatsapp"
            target="_blank"
            rel="noreferrer"
            aria-label="Direct WhatsApp Contact"
          >
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </a>
          <Link href="/contact#trial" className="header-trial" aria-label="Book 2 Free Trials">
            <span>Free Trial</span>
            <ArrowUpRight size={13} />
          </Link>
          <button
            className="menu-button premium-menu-button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu premium-mobile-menu container"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mobile-menu-links">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`mobile-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mobile-menu-footer">
              <a
                href="https://wa.me/201105778132"
                className="button premium-whatsapp full"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <Link
                href="/contact#trial"
                onClick={() => setOpen(false)}
                className="button premium-primary full"
              >
                Book 2 Free Trials <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
