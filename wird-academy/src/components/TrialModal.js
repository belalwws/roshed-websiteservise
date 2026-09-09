'use client';

import { X } from 'lucide-react';
import TrialBookingForm from './TrialBookingForm';

export default function TrialModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="trial-modal-overlay"
      onClick={onClose}
    >
      <div 
        className="trial-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="trial-modal-close-button"
          aria-label="Close trial assessment modal"
        >
          <X size={18} />
        </button>

        <TrialBookingForm isModal={true} onSuccess={onClose} />
      </div>
    </div>
  );
}
