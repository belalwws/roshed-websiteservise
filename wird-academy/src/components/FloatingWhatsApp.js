'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href="https://wa.me/201061858535?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20Wird%20Academy%20classes."
        target="_blank"
        rel="noopener noreferrer"
        className="wird-floating-whatsapp"
        aria-label="Chat with Wird Academy on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <span className="floating-whatsapp-pulse" aria-hidden="true" />
        <MessageCircle className="floating-whatsapp-icon" />
        <span className="floating-whatsapp-tooltip" role="tooltip">WhatsApp</span>
      </a>
    </aside>
  );
}
