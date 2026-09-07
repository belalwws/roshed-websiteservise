'use client';

import { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

export default function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    ageGroup: 'أطفال (7-12 سنة)',
    track: 'تحفيظ القرآن الكريم وتجويده',
    country: 'السعودية 🇸🇦',
    level: '',
    whatsapp: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `✨ *طلب حجز حصة تجريبية مجانية - أكاديمية المنذر* ✨%0A%0A` +
      `👤 *اسم الطالب:* ${formData.firstName} ${formData.lastName}%0A` +
      `🎂 *الفئة العمرية:* ${formData.ageGroup}%0A` +
      `🌍 *الدولة:* ${formData.country}%0A` +
      `📖 *المسار المطلوب:* ${formData.track}%0A` +
      `📝 *مستوى الطالب والملاحظات:* ${formData.level || 'جديد / تحديد في جلسة التقييم'}%0A` +
      `📱 *رقم الواتساب:* ${formData.whatsapp}%0A%0A` +
      `🎯 *المرجو تأكيد موعد جلسة التقييم والحصة التجريبية المجانية.*`;

    const whatsappUrl = `https://wa.me/201551669364?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(4, 14, 22, 0.82)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#0c2333',
        border: '1px solid rgba(205, 168, 78, 0.35)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '560px',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(205, 168, 78, 0.25)',
        color: '#f8fafc',
        position: 'relative',
        padding: '30px 24px'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(205, 168, 78, 0.2)',
            color: '#f8fafc',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(205, 168, 78, 0.25)'; e.currentTarget.style.color = '#cda84e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#f8fafc'; }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 14px',
            borderRadius: '999px',
            background: 'rgba(205, 168, 78, 0.12)',
            border: '1px solid rgba(205, 168, 78, 0.3)',
            color: '#cda84e',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '10px'
          }}>
            <Sparkles size={16} />
            حصة تجريبية مجانية 100%
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
            احجز حصة تقييم وتجربة لابنك الآن
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
            جلسة فردية خاصة (1-on-1) مع معلم متخصص لتحديد المستوى ووضع الخطة المناسبة
          </p>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(37, 211, 102, 0.15)',
              border: '2px solid #25d366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              color: '#25d366'
            }}>
              <CheckCircle2 size={40} />
            </div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', color: '#f8fafc' }}>
              تم إرسال طلبك بنجاح!
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.7 }}>
              جارٍ تحويلك إلى محادثة الواتساب المباشرة مع إدارة أكاديمية المنذر لتأكيد موعد الحصة التجريبية.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={() => { setIsSubmitted(false); onClose(); }}
                className="btn-gold"
                style={{ padding: '10px 24px', fontSize: '0.95rem' }}
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div>
                <label className="form-label" style={{ fontSize: '0.88rem' }}>الاسم الأول للطفل / الطالب *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="مثال: يوسف"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-control"
                  style={{ padding: '10px 14px', fontSize: '0.95rem' }}
                />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.88rem' }}>اسم العائلة / ولي الأمر *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="مثال: الغامدي"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-control"
                  style={{ padding: '10px 14px', fontSize: '0.95rem' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div>
                <label className="form-label" style={{ fontSize: '0.88rem' }}>الفئة العمرية *</label>
                <select
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                  className="form-control"
                  style={{ padding: '10px 14px', fontSize: '0.92rem' }}
                >
                  <option value="أطفال (4-6 سنوات)">أطفال (4-6 سنوات)</option>
                  <option value="أطفال (7-12 سنة)">أطفال (7-12 سنة)</option>
                  <option value="مراهقين (13-17 سنة)">مراهقين (13-17 سنة)</option>
                  <option value="بالغين (18+ سنة)">بالغين (18+ سنة)</option>
                  <option value="جميع الأعمار / عائلي">حلقة عائلية</option>
                </select>
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.88rem' }}>دولة الإقامة *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="form-control"
                  style={{ padding: '10px 14px', fontSize: '0.92rem' }}
                >
                  <option value="السعودية 🇸🇦">السعودية 🇸🇦</option>
                  <option value="مصر 🇪🇬">مصر 🇪🇬</option>
                  <option value="الإمارات 🇦🇪">الإمارات 🇦🇪</option>
                  <option value="الكويت 🇰🇼">الكويت 🇰🇼</option>
                  <option value="قطر 🇶🇦">قطر 🇶🇦</option>
                  <option value="سلطنة عمان 🇴🇲">سلطنة عمان 🇴🇲</option>
                  <option value="البحرين 🇧🇭">البحرين 🇧🇭</option>
                  <option value="دولة أخرى 🌍">دولة أخرى 🌍</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '14px' }}>
              <label className="form-label" style={{ fontSize: '0.88rem' }}>المسار التعليمي المرغوب *</label>
              <select
                name="track"
                value={formData.track}
                onChange={handleChange}
                className="form-control"
                style={{ padding: '10px 14px', fontSize: '0.92rem' }}
              >
                <option value="تحفيظ القرآن الكريم وتجويده">تحفيظ القرآن الكريم وتجويده</option>
                <option value="كورس تجويد للمبتدئين">كورس تجويد للمبتدئين</option>
                <option value="تأسيس اللغة العربية (القاعدة النورانية / نور البيان)">تأسيس اللغة العربية (القاعدة النورانية / نور البيان)</option>
                <option value="تدريس العلوم الشرعية (فقه، عقيدة، حديث، سيرة)">تدريس العلوم الشرعية (فقه، عقيدة، حديث، سيرة)</option>
                <option value="تأسيس وعي الطفل المسلم (آداب وأخلاق إسلامية)">تأسيس وعي الطفل المسلم (آداب وأخلاق إسلامية)</option>
                <option value="المواد الدراسية والمناهج المدرسية (تأسيس ومتابعة)">المواد الدراسية والمناهج المدرسية (تأسيس ومتابعة)</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: '14px' }}>
              <label className="form-label" style={{ fontSize: '0.88rem' }}>رقم الواتساب للتواصل وتحديد الموعد *</label>
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="مثال: +966500000000 أو 01000000000"
                value={formData.whatsapp}
                onChange={handleChange}
                className="form-control"
                style={{ padding: '10px 14px', fontSize: '0.95rem', direction: 'ltr', textAlign: 'right' }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label" style={{ fontSize: '0.88rem' }}>مستوى الطالب الحالي أو أي ملاحظات للمعلم</label>
              <textarea
                name="level"
                rows="2"
                placeholder="مثال: يحفظ جزء عم، أو مبتدئ في الحروف ونور البيان..."
                value={formData.level}
                onChange={handleChange}
                className="form-control"
                style={{ padding: '10px 14px', fontSize: '0.92rem', resize: 'vertical' }}
              ></textarea>
            </div>

            {/* Trust features */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '10px 14px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              color: '#cbd5e1',
              marginBottom: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={16} color="#cda84e" /> بدون التزام مالي
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <HeartHandshake size={16} color="#cda84e" /> معلمون ومعلمات معتمدون
              </span>
            </div>

            <button
              type="submit"
              className="btn-gold"
              style={{ width: '100%', padding: '13px', fontSize: '1.05rem', borderRadius: '14px' }}
            >
              <Send size={18} />
              تأكيد حجز الحصة التجريبية عبر الواتساب
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
