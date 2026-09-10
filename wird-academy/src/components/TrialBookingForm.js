'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  User, 
  MapPin, 
  Phone, 
  BookOpen, 
  HelpCircle,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

const DAYS_OF_WEEK = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
];

const TIME_PERIODS = [
  'Morning',
  'Afternoon',
  'Evening',
  'Night'
];

const AGE_OPTIONS = [
  'Young Children (4 - 7 years)',
  'Children (8 - 12 years)',
  'Teens (13 - 17 years)',
  'Adults (18+ years)'
];

const PROGRAMMES = [
  'Arabic Reading Foundations',
  'Quran Recitation & Tajweed',
  'Hifz & Quran Memorisation',
  'Islamic Studies',
  'Quranic Arabic',
  'Not Sure — I Need Guidance'
];

const TIMEZONE_OPTIONS = [
  'UK & Ireland (London - GMT / BST)',
  'USA & Canada — Eastern (New York, Toronto - EST / EDT)',
  'USA & Canada — Central (Chicago, Dallas - CST / CDT)',
  'USA & Canada — Mountain (Denver, Calgary - MST / MDT)',
  'USA & Canada — Pacific (Los Angeles, Vancouver - PST / PDT)',
  'Europe (Paris, Berlin, Amsterdam - CET / CEST)',
  'Gulf & Saudi Arabia (Riyadh, Dubai, Doha - AST / GST)',
  'Australia & New Zealand (Sydney, Auckland - AEST)',
  'Other Timezone / City'
];

export default function TrialBookingForm({ isModal = false, onSuccess }) {
  const [formData, setFormData] = useState({
    learnerName: '',
    ageGroup: 'Children (8 - 12 years)',
    parentName: '',
    programme: 'Quran Recitation & Tajweed',
    currentLevel: '',
    learningGoals: '',
    timeZone: 'UK & Ireland (London - GMT / BST)',
    customLocation: '',
    whatsappNumber: ''
  });

  // Array of { day: 'Saturday', period: 'Morning' }
  const [preferredTrialSlots, setPreferredTrialSlots] = useState([
    { day: 'Saturday', period: 'Morning' },
    { day: 'Sunday', period: 'Afternoon' }
  ]);

  // Array of { day: 'Monday', period: 'Evening' }
  const [weeklyAvailabilitySlots, setWeeklyAvailabilitySlots] = useState([
    { day: 'Monday', period: 'Evening' },
    { day: 'Wednesday', period: 'Evening' }
  ]);

  const [validationError, setValidationError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isMinor = formData.ageGroup !== 'Adults (18+ years)';

  // Helper to toggle a day in preferred slots
  const toggleTrialDay = (day) => {
    setValidationError('');
    const existing = preferredTrialSlots.find(s => s.day === day);
    if (existing) {
      setPreferredTrialSlots(preferredTrialSlots.filter(s => s.day !== day));
    } else {
      setPreferredTrialSlots([...preferredTrialSlots, { day, period: 'Morning' }]);
    }
  };

  const updateTrialPeriod = (day, newPeriod) => {
    setPreferredTrialSlots(preferredTrialSlots.map(s => 
      s.day === day ? { ...s, period: newPeriod } : s
    ));
  };

  // Helper to toggle a day in weekly slots
  const toggleWeeklyDay = (day) => {
    const existing = weeklyAvailabilitySlots.find(s => s.day === day);
    if (existing) {
      setWeeklyAvailabilitySlots(weeklyAvailabilitySlots.filter(s => s.day !== day));
    } else {
      setWeeklyAvailabilitySlots([...weeklyAvailabilitySlots, { day, period: 'Evening' }]);
    }
  };

  const updateWeeklyPeriod = (day, newPeriod) => {
    setWeeklyAvailabilitySlots(weeklyAvailabilitySlots.map(s => 
      s.day === day ? { ...s, period: newPeriod } : s
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (preferredTrialSlots.length < 2) {
      setValidationError('Please select at least two preferred trial time slots to ensure we can schedule your trial promptly.');
      return;
    }

    if (weeklyAvailabilitySlots.length < 1) {
      setValidationError('Please select at least one regular weekly availability day.');
      return;
    }

    setValidationError('');
    setSubmitted(true);

    const trialSlotsFormatted = preferredTrialSlots
      .map(s => `• ${s.day} (${s.period})`)
      .join('%0A');

    const weeklySlotsFormatted = weeklyAvailabilitySlots
      .map(s => `• ${s.day} (${s.period})`)
      .join('%0A');

    const timeZoneString = formData.timeZone === 'Other Timezone / City' && formData.customLocation
      ? `Other (${formData.customLocation})`
      : formData.timeZone;

    let msg = `*Book Your Free 1-to-1 Trial - Wird Academy*%0A%0A` +
      `*1. Learner's Full Name:* ${encodeURIComponent(formData.learnerName)}%0A` +
      `*2. Learner's Age:* ${encodeURIComponent(formData.ageGroup)}%0A`;

    if (isMinor && formData.parentName) {
      msg += `*3. Parent/Guardian Name:* ${encodeURIComponent(formData.parentName)}%0A`;
    }

    msg += `*4. Programme of Interest:* ${encodeURIComponent(formData.programme)}%0A` +
      `*5. Current Level:* ${encodeURIComponent(formData.currentLevel || 'Initial assessment required')}%0A` +
      `*6. Learning Goals:* ${encodeURIComponent(formData.learningGoals || 'Mastery and confidence')}%0A%0A` +
      `*7. Preferred Trial Times (Selected slots):*%0A${trialSlotsFormatted}%0A%0A` +
      `*8. Regular Weekly Availability:*%0A${weeklySlotsFormatted}%0A%0A` +
      `*9. Student's Time Zone:* ${encodeURIComponent(timeZoneString)}%0A` +
      `*10. WhatsApp Number:* ${encodeURIComponent(formData.whatsappNumber)}%0A`;

    window.open(`https://wa.me/201061858535?text=${msg}`, '_blank');

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className={`trial-form-wrapper ${isModal ? 'is-modal' : ''}`}>
      {/* Form Header */}
      <div className="trial-form-header">
        <span className="trial-form-badge">
          <Sparkles size={13} /> FREE TRIAL &amp; ASSESSMENT
        </span>
        <h3 className="trial-form-title">
          Book Your Free 1-to-1 Trial
        </h3>
        <p className="trial-form-desc">
          Tell us a little about the learner so we can arrange a suitable trial time, identify their starting point, and recommend the most appropriate programme and next steps.
        </p>

        {/* 3 Value Pillars */}
        <div className="trial-form-pillars">
          <div className="trial-form-pillar-item">
            <CheckCircle2 size={16} className="pillar-icon" />
            <span>Live 1-to-1 Level Assessment</span>
          </div>
          <div className="trial-form-pillar-item">
            <CheckCircle2 size={16} className="pillar-icon" />
            <span>Personalised Three-Month Learning Plan</span>
          </div>
          <div className="trial-form-pillar-item">
            <CheckCircle2 size={16} className="pillar-icon" />
            <span>No Commitment — Completely Free</span>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="trial-submitted-card">
          <CheckCircle2 size={48} className="submitted-icon" />
          <h4>Thank You for Booking!</h4>
          <p>
            Your request has been initiated. We have opened WhatsApp to confirm your preferred trial slot with our team.
          </p>
          <button 
            type="button" 
            onClick={() => setSubmitted(false)}
            className="button button-gold"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="trial-actual-form">
          {validationError && (
            <div className="trial-validation-alert">
              <AlertCircle size={18} />
              <span>{validationError}</span>
            </div>
          )}

          {/* 1. Learner Full Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="learnerName">
              1. Learner's Full Name <span className="req">*</span>
            </label>
            <input 
              id="learnerName"
              type="text" 
              required 
              placeholder="Enter the learner's full name"
              value={formData.learnerName}
              onChange={(e) => setFormData({ ...formData, learnerName: e.target.value })}
              className="form-input"
            />
          </div>

          {/* 2. Learner Age (Dropdown) */}
          <div className="form-group">
            <label className="form-label" htmlFor="ageGroup">
              2. Learner's Age <span className="req">*</span>
            </label>
            <select 
              id="ageGroup"
              value={formData.ageGroup}
              onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
              className="form-select"
            >
              {AGE_OPTIONS.map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>

          {/* 3. Parent or Guardian Name (Visible ONLY if learner is under 18) */}
          {isMinor && (
            <div className="form-group conditional-fade">
              <label className="form-label" htmlFor="parentName">
                3. Parent or Guardian's Name <span className="req">*</span>
              </label>
              <input 
                id="parentName"
                type="text" 
                required={isMinor}
                placeholder="Enter the parent or guardian's full name"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="form-input"
              />
            </div>
          )}

          {/* 4. Programme of Interest */}
          <div className="form-group">
            <label className="form-label" htmlFor="programme">
              4. Programme of Interest <span className="req">*</span>
            </label>
            <select 
              id="programme"
              value={formData.programme}
              onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
              className="form-select"
            >
              {PROGRAMMES.map((prog) => (
                <option key={prog} value={prog}>{prog}</option>
              ))}
            </select>
          </div>

          {/* 5. Current Level */}
          <div className="form-group">
            <label className="form-label" htmlFor="currentLevel">
              5. Current Level <span className="req">*</span>
            </label>
            <textarea 
              id="currentLevel"
              required
              rows={2}
              placeholder="Tell us what the learner can currently do in Quran, Arabic, or Islamic Studies."
              value={formData.currentLevel}
              onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
              className="form-textarea"
            />
          </div>

          {/* 6. Learning Goals */}
          <div className="form-group">
            <label className="form-label" htmlFor="learningGoals">
              6. Learning Goals <span className="req">*</span>
            </label>
            <textarea 
              id="learningGoals"
              required
              rows={2}
              placeholder="What would you like the learner to achieve? For example: read the Quran independently, improve Tajweed, memorise selected surahs, understand Quranic Arabic, or strengthen their Islamic knowledge."
              value={formData.learningGoals}
              onChange={(e) => setFormData({ ...formData, learningGoals: e.target.value })}
              className="form-textarea"
            />
          </div>

          {/* 7. Preferred Trial Times (Interactive Day & Time Selector, Min 2 required) */}
          <div className="form-group">
            <div className="form-label-row">
              <label className="form-label">
                7. Preferred Trial Times <span className="req">*</span>
              </label>
              <span className="form-hint-badge">
                Selected: {preferredTrialSlots.length} (Min 2 required)
              </span>
            </div>
            <p className="form-helper-text">
              Select at least two suitable time slots in your local time so we can arrange your session quickly:
            </p>

            <div className="schedule-chips-grid">
              {DAYS_OF_WEEK.map((day) => {
                const isSelected = preferredTrialSlots.some(s => s.day === day);
                const currentSlot = preferredTrialSlots.find(s => s.day === day);
                return (
                  <div key={day} className={`schedule-day-card ${isSelected ? 'is-active' : ''}`}>
                    <button
                      type="button"
                      onClick={() => toggleTrialDay(day)}
                      className="schedule-day-toggle"
                    >
                      <span className="checkbox-indicator">{isSelected ? '✓' : '+'}</span>
                      <span className="day-name">{day}</span>
                    </button>

                    {isSelected && (
                      <div className="period-dropdown-wrap">
                        <select
                          value={currentSlot?.period || 'Morning'}
                          onChange={(e) => updateTrialPeriod(day, e.target.value)}
                          className="period-select"
                          aria-label={`Time period for ${day}`}
                        >
                          {TIME_PERIODS.map((period) => (
                            <option key={period} value={period}>{period}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 8. Regular Weekly Availability (Interactive Day & Time Selector) */}
          <div className="form-group">
            <div className="form-label-row">
              <label className="form-label">
                8. Regular Weekly Availability <span className="req">*</span>
              </label>
              <span className="form-hint-badge">
                Selected: {weeklyAvailabilitySlots.length}
              </span>
            </div>
            <p className="form-helper-text">
              Select the days and time ranges that could work for regular weekly lessons:
            </p>

            <div className="schedule-chips-grid">
              {DAYS_OF_WEEK.map((day) => {
                const isSelected = weeklyAvailabilitySlots.some(s => s.day === day);
                const currentSlot = weeklyAvailabilitySlots.find(s => s.day === day);
                return (
                  <div key={day} className={`schedule-day-card ${isSelected ? 'is-active' : ''}`}>
                    <button
                      type="button"
                      onClick={() => toggleWeeklyDay(day)}
                      className="schedule-day-toggle"
                    >
                      <span className="checkbox-indicator">{isSelected ? '✓' : '+'}</span>
                      <span className="day-name">{day}</span>
                    </button>

                    {isSelected && (
                      <div className="period-dropdown-wrap">
                        <select
                          value={currentSlot?.period || 'Evening'}
                          onChange={(e) => updateWeeklyPeriod(day, e.target.value)}
                          className="period-select"
                          aria-label={`Regular weekly period for ${day}`}
                        >
                          {TIME_PERIODS.map((period) => (
                            <option key={period} value={period}>{period}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 9. Student's Time Zone */}
          <div className="form-group">
            <label className="form-label" htmlFor="timeZone">
              9. Student's Time Zone <span className="req">*</span>
            </label>
            <select
              id="timeZone"
              value={formData.timeZone}
              onChange={(e) => setFormData({ ...formData, timeZone: e.target.value })}
              className="form-input"
            >
              {TIMEZONE_OPTIONS.map((tz) => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
            <span className="form-helper-text">
              Ensures your 1-to-1 trial and weekly lessons match your local time.
            </span>

            {formData.timeZone === 'Other Timezone / City' && (
              <div style={{ marginTop: '10px' }}>
                <input
                  type="text"
                  required
                  placeholder="Please specify your City & Country (e.g. Singapore / Tokyo)"
                  value={formData.customLocation}
                  onChange={(e) => setFormData({ ...formData, customLocation: e.target.value })}
                  className="form-input"
                />
              </div>
            )}
          </div>

          {/* 10. WhatsApp Number */}
          <div className="form-group">
            <label className="form-label" htmlFor="whatsappNumber">
              10. WhatsApp Number <span className="req">*</span>
            </label>
            <input 
              id="whatsappNumber"
              type="text" 
              required 
              placeholder="Include your country code, e.g. +44 7123 456789"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              className="form-input"
            />
          </div>

          {/* Submit Action */}
          <div className="form-action-wrap">
            <button 
              type="submit" 
              className="button button-gold full trial-submit-button"
            >
              <Sparkles size={16} />
              <span>Request a Free Trial</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
