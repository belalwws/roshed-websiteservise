'use client';

import { useState } from 'react';
import { Check, Sparkles, MessageCircle, ShieldCheck, HelpCircle } from 'lucide-react';

export default function PricingCalculator({ onOpenTrialModal }) {
  const [currency, setCurrency] = useState('SAR');
  const [duration, setDuration] = useState('45'); // '30', '45', '60'

  const currencies = [
    { code: 'SAR', label: 'ريال سعودي', flag: '🇸🇦', symbol: 'ر.س' },
    { code: 'AED', label: 'درهم إماراتي', flag: '🇦🇪', symbol: 'د.إ' },
    { code: 'KWD', label: 'دينار كويتي', flag: '🇰🇼', symbol: 'د.ك' },
    { code: 'EGP', label: 'جنيه مصري', flag: '🇪🇬', symbol: 'ج.م' },
    { code: 'USD', label: 'دولار أمريكي', flag: '🇺🇸', symbol: '$' }
  ];

  // Pricing matrix [currency][duration][tier]
  const pricingData = {
    SAR: {
      '30': { starter: 180, popular: 260, intensive: 340 },
      '45': { starter: 230, popular: 330, intensive: 430 },
      '60': { starter: 280, popular: 400, intensive: 520 }
    },
    AED: {
      '30': { starter: 180, popular: 260, intensive: 340 },
      '45': { starter: 230, popular: 330, intensive: 430 },
      '60': { starter: 280, popular: 400, intensive: 520 }
    },
    KWD: {
      '30': { starter: 15, popular: 22, intensive: 28 },
      '45': { starter: 19, popular: 27, intensive: 35 },
      '60': { starter: 23, popular: 33, intensive: 43 }
    },
    EGP: {
      '30': { starter: 850, popular: 1250, intensive: 1650 },
      '45': { starter: 1100, popular: 1600, intensive: 2100 },
      '60': { starter: 1350, popular: 1950, intensive: 2550 }
    },
    USD: {
      '30': { starter: 48, popular: 70, intensive: 90 },
      '45': { starter: 62, popular: 88, intensive: 115 },
      '60': { starter: 75, popular: 108, intensive: 140 }
    }
  };

  const currSymbol = currencies.find(c => c.code === currency)?.symbol || 'ر.س';
  const currentPrices = pricingData[currency][duration];

  const handleWhatsAppPlan = (planName, price, classesCount) => {
    const msg = `السلام عليكم ورحمة الله، أرغب في الاستفسار والاشتراك في *${planName}* لدى أكاديمية المنذر (%0A- عدد الحصص: ${classesCount}%0A- مدة الحصة: ${duration} دقيقة%0A- السعر: ${price} ${currSymbol} شهرياً%0A- المرجو ترتيب الحصة التجريبية وتأكيد الجدول المناسب).`;
    window.open(`https://wa.me/201551669364?text=${msg}`, '_blank');
  };

  return (
    <section id="pricing" className="section islamic-pattern">
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge-tag">
            <Sparkles size={16} />
            باقات ميسرة ومرنة تناسب الجميع
          </div>
          <h2 className="section-title">
            باقات الاشتراك <span className="text-gradient-gold">الفردي 1-on-1</span>
          </h2>
          <p className="section-subtitle">
            خطط دراسية مخصصة تناسب جداولكم مع إمكانية تجربة حصة تقييم مجانية بالكامل قبل بدء الاشتراك.
          </p>

          {/* Controls Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            marginTop: '30px'
          }}>
            {/* Currency Selector */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              background: '#071722',
              padding: '6px',
              borderRadius: '999px',
              border: '1px solid rgba(205, 168, 78, 0.3)'
            }}>
              {currencies.map(c => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    border: 'none',
                    background: currency === c.code ? 'var(--gold-gradient)' : 'transparent',
                    color: currency === c.code ? '#040e16' : '#cbd5e1',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{c.flag}</span>
                  <span>{c.label}</span>
                </button>
              ))}
            </div>

            {/* Duration Selector */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              padding: '5px',
              borderRadius: '999px',
              border: '1.5px solid #e2e8f0',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', padding: '0 10px' }}>
                مدة الحصة:
              </span>
              {[
                { val: '30', label: '30 دقيقة' },
                { val: '45', label: '45 دقيقة (موصى بها)' },
                { val: '60', label: '60 دقيقة' }
              ].map(d => (
                <button
                  key={d.val}
                  onClick={() => setDuration(d.val)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '999px',
                    border: 'none',
                    background: duration === d.val ? '#0c2333' : 'transparent',
                    color: duration === d.val ? '#cda84e' : '#475569',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {/* Plan 1: Starter */}
          <div className="luxury-card-light" style={{ padding: '35px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>
                البداية والتأسيس
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0f172a', marginBottom: '14px' }}>
                باقة الانطلاق
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', minHeight: '44px' }}>
                مناسبة للأطفال المبتدئين أو الراغبين في التأسيس المتدرج دون ضغط.
              </p>

              {/* Price */}
              <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#071722' }}>
                  {currentPrices.starter}
                </span>
                <span style={{ fontSize: '1rem', color: '#cda84e', fontWeight: 700, marginInlineStart: '6px' }}>
                  {currSymbol} / شهرياً
                </span>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
                  8 حصص في الشهر (حصتان أسبوعياً) • {duration} دقيقة
                </div>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: '#334155' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> حلقة فردية خاصة 1-on-1
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> معلم أو معلمة متخصصة
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> خطة مخصصة وفق مستوى الطالب
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> تقرير شهري لولي الأمر
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> مرونة في تعويض الحصص بعذر
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '30px' }}>
              <button
                onClick={() => handleWhatsAppPlan('باقة الانطلاق (8 حصص)', currentPrices.starter, '8 حصص شهرياً')}
                className="btn-outline-gold"
                style={{ width: '100%', padding: '12px', color: '#071722', borderColor: '#cda84e' }}
              >
                <MessageCircle size={17} />
                اختر هذه الباقة عبر واتساب
              </button>
            </div>
          </div>

          {/* Plan 2: Most Popular ⭐ */}
          <div
            style={{
              backgroundColor: '#071722',
              color: '#ffffff',
              borderRadius: '24px',
              border: '2px solid #cda84e',
              padding: '35px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(205, 168, 78, 0.25)',
              transform: 'scale(1.02)'
            }}
          >
            {/* Top Popular Ribbon */}
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--gold-gradient)',
              color: '#040e16',
              fontSize: '0.8rem',
              fontWeight: 900,
              padding: '4px 18px',
              borderRadius: '999px',
              boxShadow: '0 4px 15px rgba(205, 168, 78, 0.4)'
            }}>
              ⭐ الأكثر اختياراً وإقبالاً
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#cda84e', marginBottom: '8px' }}>
                الإتقان والتميز الشامل
              </div>
              <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
                باقة الإتقان
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '20px', minHeight: '44px' }}>
                الخيار المثالي لتحقيق تقدم سريع وثابت في الحفظ والتجويد ووعي الطفل المسلم.
              </p>

              {/* Price */}
              <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(205, 168, 78, 0.25)' }}>
                <span style={{ fontSize: '2.6rem', fontWeight: 900, color: '#ffffff' }}>
                  {currentPrices.popular}
                </span>
                <span style={{ fontSize: '1.05rem', color: '#cda84e', fontWeight: 800, marginInlineStart: '6px' }}>
                  {currSymbol} / شهرياً
                </span>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '4px' }}>
                  12 حصة في الشهر (3 حصص أسبوعياً) • {duration} دقيقة
                </div>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: '#f1f5f9' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#cda84e" /> حلقة فردية خاصة 1-on-1 بالكامل
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#cda84e" /> تحفيظ وتجويد وتفسير مبسط
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#cda84e" /> تأسيس وعي وسلوك الطفل المسلم والآداب
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#cda84e" /> تقريران مفصلان شهرياً لولي الأمر
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#cda84e" /> شهادة إتقان معتمدة عند إتمام الأجزاء
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#cda84e" /> أولوية في اختيار وتثبيت المواعيد
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '30px' }}>
              <button
                onClick={() => handleWhatsAppPlan('باقة الإتقان (12 حصة)', currentPrices.popular, '12 حصة شهرياً')}
                className="btn-gold"
                style={{ width: '100%', padding: '13px' }}
              >
                <Sparkles size={18} />
                اشترك في باقة الإتقان
              </button>
            </div>
          </div>

          {/* Plan 3: Intensive */}
          <div className="luxury-card-light" style={{ padding: '35px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>
                الحفاظ والعلوم المتقدمة
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0f172a', marginBottom: '14px' }}>
                باقة المكثف
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', minHeight: '44px' }}>
                لمن يرغب في حفظ القرآن كاملاً أو دراسة العلوم الشرعية والمناهج المدرسية بكثافة.
              </p>

              {/* Price */}
              <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#071722' }}>
                  {currentPrices.intensive}
                </span>
                <span style={{ fontSize: '1rem', color: '#cda84e', fontWeight: 700, marginInlineStart: '6px' }}>
                  {currSymbol} / شهرياً
                </span>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
                  16 حصة في الشهر (4 حصص أسبوعياً) • {duration} دقيقة
                </div>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: '#334155' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> حلقة فردية خاصة 1-on-1 مكثفة
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> متابعة حفظ ومراجعة دورية مكثفة
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> إمكانية دمج القرآن والعلوم الشرعية
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> تقرير أسبوعي مفصل ومباشر لولي الأمر
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#25a770" /> أولوية قصوى ومرونة كاملة في الجداول
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '30px' }}>
              <button
                onClick={() => handleWhatsAppPlan('باقة المكثف (16 حصة)', currentPrices.intensive, '16 حصة شهرياً')}
                className="btn-outline-gold"
                style={{ width: '100%', padding: '12px', color: '#071722', borderColor: '#cda84e' }}
              >
                <MessageCircle size={17} />
                اختر هذه الباقة عبر واتساب
              </button>
            </div>
          </div>
        </div>

        {/* Free Trial Guarantee Banner Below Pricing */}
        <div style={{
          marginTop: '45px',
          background: 'rgba(205, 168, 78, 0.08)',
          border: '1.5px dashed rgba(205, 168, 78, 0.4)',
          borderRadius: '18px',
          padding: '22px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'var(--gold-gradient)',
              color: '#040e16',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071722', margin: 0 }}>
                ضمان التجربة المجانية 100% بدون أي التزام مالي مسبق
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', margin: 0, marginTop: '2px' }}>
                احجز حصة تقييم وتجربة أولاً، وتعرف على المعلم والمنهج، ثم قرر باقتك المناسبة بكل اطمئنان.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="btn-gold"
            style={{ padding: '11px 24px', fontSize: '0.95rem' }}
          >
            <Sparkles size={16} />
            احجز الحصة التجريبية الآن
          </button>
        </div>
      </div>
    </section>
  );
}
