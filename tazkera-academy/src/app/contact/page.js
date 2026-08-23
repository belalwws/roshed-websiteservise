'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Reveal, Stagger, StaggerItem, Float } from '../../components/MotionPrimitives';
import {
  MessageCircle, Camera, Users, Send, User, Phone, GraduationCap,
  CalendarDays, ArrowRight, ShieldCheck, Sparkles, CheckCircle2,
  Clock3, BookOpen, Mail, BadgeDollarSign
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    age: '',
    program: 'Qur’an & Tajweed',
    plan: 'Not sure yet',
    schedule: '',
    timezone: '',
    goals: ''
  });

  function update(e) {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    const message = `Assalamu Alaykum Tazkera Academy!%0A%0A🌟 *Booking 2 Free Trial Lessons:*%0A👤 *Name:* ${encodeURIComponent(form.name)}%0A📱 *WhatsApp:* ${encodeURIComponent(form.phone)}%0A🎂 *Student Age / Track:* ${encodeURIComponent(form.age || 'Not specified')}%0A📚 *Program:* ${encodeURIComponent(form.program || 'General')}%0A💳 *Preferred Plan:* ${encodeURIComponent(form.plan || 'Not sure yet')}%0A⏰ *Preferred Schedule:* ${encodeURIComponent(form.schedule || 'Flexible')}%0A🌍 *Time Zone:* ${encodeURIComponent(form.timezone || 'Not specified')}%0A🎯 *Learning Goals:* ${encodeURIComponent(form.goals || 'Start from the appropriate level')}`;
    
    window.open(`https://wa.me/201105778132?text=${message}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="page-wrapper">
      <Header />

      {/* CONTACT HERO */}
      <section className="contact-premium-hero">
        <div className="hero-ambient hero-ambient-one" />
        <div className="hero-ambient hero-ambient-two" />
        <div className="container contact-premium-hero-grid">
          <Reveal>
            <div className="premium-pill">
              <span className="pill-dot" />
              <Sparkles size={14} className="pill-icon" />
              <span>Contact & Free Trial Booking</span>
            </div>
            <h1 className="hero-title">
              Start Your Journey <br />
              <em className="gold-gradient-text">With 2 Free Trial Lessons</em>
            </h1>
            <p className="contact-hero-lead">
              Share the learner’s details below, then continue on WhatsApp to coordinate two free trial lessons with two different teachers and choose the best match.
            </p>
            <div className="contact-quick-badges">
              <div className="quick-badge-item"><CheckCircle2 size={16}/> 2 Free Trial Lessons</div>
              <div className="quick-badge-item"><CheckCircle2 size={16}/> 2 Different Teachers</div>
              <div className="quick-badge-item"><CheckCircle2 size={16}/> Free Trial & Level Assessment</div>
            </div>
          </Reveal>

          <div className="contact-lantern-wrap">
            <div className="lantern-glow-halo" />
            <Float duration={6.8} distance={8}>
              <Image
                src="/assets/generated/contact-lantern.webp"
                alt="3D Glowing Golden Islamic Fanoos Lantern"
                width={500}
                height={500}
                priority
                className="contact-lantern-3d"
              />
            </Float>
          </div>
        </div>
      </section>

      {/* MAIN BOOKING & CONTACT FORM SECTION */}
      <section id="trial" className="premium-section contact-premium-section">
        <div className="container contact-premium-grid">
          {/* SOCIAL & DIRECT REACH PANEL */}
          <Reveal className="contact-social-panel">
            <span className="section-kicker light">Get in Touch Directly</span>
            <h2>We’re Here to Guide You Every Step.</h2>
            <p>
              Book through WhatsApp or contact the academy through its official social channels. You can ask about programs, monthly plans, trial lessons, and enrollment.
            </p>

            <div className="social-premium-list">
              <a
                href="https://wa.me/201105778132"
                target="_blank"
                rel="noreferrer"
                className="social-contact-card"
              >
                <div className="social-icon-box whatsapp-box">
                  <MessageCircle size={22}/>
                </div>
                <div className="social-contact-info">
                  <b>WhatsApp Direct Chat</b>
                  <span>+20 110 577 8132</span>
                  <small>Official academy WhatsApp</small>
                </div>
                <ArrowRight size={18} className="social-card-arrow"/>
              </a>

              <a
                href="https://www.instagram.com/tazkeraacademy?igsh=MXNuaXZ2dmowZDBndQ=="
                target="_blank"
                rel="noreferrer"
                className="social-contact-card"
              >
                <div className="social-icon-box instagram-box">
                  <Camera size={22}/>
                </div>
                <div className="social-contact-info">
                  <b>Instagram</b>
                  <span>@tazkeraacademy</span>
                  <small>Official Tazkera Academy Instagram</small>
                </div>
                <ArrowRight size={18} className="social-card-arrow"/>
              </a>

              <a
                href="https://www.facebook.com/share/14gEvZZWsoB/"
                target="_blank"
                rel="noreferrer"
                className="social-contact-card"
              >
                <div className="social-icon-box facebook-box">
                  <Users size={22}/>
                </div>
                <div className="social-contact-info">
                  <b>Facebook</b>
                  <span>Tazkera Academy</span>
                  <small>Official academy Facebook page</small>
                </div>
                <ArrowRight size={18} className="social-card-arrow"/>
              </a>

              <a
                href="mailto:tazkeraacademy9@gmail.com"
                className="social-contact-card"
              >
                <div className="social-icon-box email-box">
                  <Mail size={22}/>
                </div>
                <div className="social-contact-info">
                  <b>Email</b>
                  <span>tazkeraacademy9@gmail.com</span>
                  <small>Official email contact</small>
                </div>
                <ArrowRight size={18} className="social-card-arrow"/>
              </a>
            </div>

            <div className="privacy-note">
              <ShieldCheck size={20}/>
              <span>The booking form prepares a WhatsApp message with the details you enter so you can send your trial request directly to the academy.</span>
            </div>
          </Reveal>

          {/* BOOKING FORM */}
          <Reveal delay={0.1} className="trial-form-card">
            <div className="form-card-head">
              <span className="section-kicker">Book 2 Free Trials</span>
              <h2>Tell Us About The Student</h2>
              <p>Fill out this short form, then continue on WhatsApp to send the academy your trial request.</p>
            </div>

            <form onSubmit={submit} className="premium-form">
              <div className="form-row">
                <label className="form-label">
                  <span><User size={15}/> Full Name *</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="e.g. Abdullah Smith"
                    required
                    className="form-input"
                  />
                </label>

                <label className="form-label">
                  <span><Phone size={15}/> WhatsApp Number *</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    placeholder="e.g. +1 555 123 4567"
                    required
                    className="form-input"
                  />
                </label>
              </div>

              <div className="form-row">
                <label className="form-label">
                  <span><GraduationCap size={15}/> Student Age / Level</span>
                  <input
                    name="age"
                    value={form.age}
                    onChange={update}
                    placeholder="e.g. 8 years old, Teen, Adult"
                    className="form-input"
                  />
                </label>

                <label className="form-label">
                  <span><BookOpen size={15}/> Program of Interest</span>
                  <select
                    name="program"
                    value={form.program}
                    onChange={update}
                    className="form-input form-select"
                  >
                    <option>Qur’an & Tajweed</option>
                    <option>Arabic Language</option>
                    <option>Noorani Qaida (Beginners)</option>
                    <option>Islamic Studies</option>
                    <option>Custom Track / Combination</option>
                  </select>
                </label>
              </div>

              <label className="form-label span-full">
                <span><BadgeDollarSign size={15}/> Preferred Monthly Plan</span>
                <select
                  name="plan"
                  value={form.plan}
                  onChange={update}
                  className="form-input form-select"
                >
                  <option>Not sure yet</option>
                  <option>Starter — $28/month · 2 lessons/week · 4 hours/month</option>
                  <option>Regular — $42/month · 3 lessons/week · 6 hours/month</option>
                  <option>Progress — $56/month · 4 lessons/week · 8 hours/month</option>
                  <option>Intensive — $70/month · 5 lessons/week · 10 hours/month</option>
                </select>
              </label>

              <div className="form-row">
                <label className="form-label">
                  <span><CalendarDays size={15}/> Preferred Days & Times</span>
                  <input
                    name="schedule"
                    value={form.schedule}
                    onChange={update}
                    placeholder="e.g. Weekends, Mon & Wed evenings"
                    className="form-input"
                  />
                </label>

                <label className="form-label">
                  <span><Clock3 size={15}/> Time Zone / City</span>
                  <input
                    name="timezone"
                    value={form.timezone}
                    onChange={update}
                    placeholder="e.g. EST (New York), GMT (London)"
                    className="form-input"
                  />
                </label>
              </div>

              <label className="form-label span-full">
                <span><MessageCircle size={15}/> Learning Goals or Current Level</span>
                <textarea
                  name="goals"
                  value={form.goals}
                  onChange={update}
                  rows={4}
                  placeholder="Tell us what you'd like to achieve (e.g. learn from alphabet, improve Tajweed, memorize Juz Amma...)"
                  className="form-input form-textarea"
                />
              </label>

              <button className="button premium-primary full form-submit-btn" type="submit">
                <span>Continue on WhatsApp & Book Free Trials</span>
                <Send size={18}/>
              </button>

              <p className="form-disclaimer">
                Submitting this form opens WhatsApp with your booking details. The academy will then coordinate the two free trial lessons with you directly.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* THREE SIMPLE STEPS */}
      <section className="values-premium-section">
        <div className="container">
          <Reveal className="premium-heading centered-premium">
            <div>
              <span className="section-kicker">Simple Onboarding</span>
              <h2>How Your Free Trial Works</h2>
            </div>
            <p>Three straightforward steps to begin learning with zero friction.</p>
          </Reveal>

          <Stagger className="steps-premium-grid">
            <StaggerItem className="step-premium-card">
              <div className="step-badge-num">01</div>
              <h3>Share Learner Goals</h3>
              <p>Tell us the student’s age, baseline level, and preferred weekly schedule.</p>
            </StaggerItem>

            <StaggerItem className="step-premium-card">
              <div className="step-badge-num">02</div>
              <h3>Attend 2 Free Trials</h3>
              <p>Take two free trial lessons with two different teachers and complete a level assessment.</p>
            </StaggerItem>

            <StaggerItem className="step-premium-card">
              <div className="step-badge-num">03</div>
              <h3>Choose & Begin</h3>
              <p>Continue with the teacher who best matches the student and start your roadmap.</p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <Footer />
    </main>
  );
}
