'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TrialModal from './TrialModal';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function LayoutWrapper({ children }) {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span className="top-bar-badge">عرض خاص</span>
          <span>
            🎁 احجز حصتك التجريبية المجانية الآن واكتشف منهجية أكاديمية المنذر التربوية | فصول فردية 1-on-1
          </span>
          <button
            onClick={() => setIsTrialModalOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#cda84e',
              fontWeight: 800,
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.85rem'
            }}
          >
            احجز الآن ←
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      {/* Page Content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Main Footer */}
      <Footer onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      {/* Floating WhatsApp Quick Button */}
      <a
        href="https://wa.me/201551669364?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%AD%D8%AC%D8%B2%20%D8%AD%D8%B5%D8%A9%20%D8%AA%D8%AC%D8%B1%D9%8A%D8%A8%D9%8A%D8%A9%20%D9%84%D8%AF%D9%89%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D8%B0%D8%B1"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="محادثة واتساب سريعة"
      >
        <MessageCircle size={32} />
      </a>

      {/* Global Trial Booking Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </>
  );
}
