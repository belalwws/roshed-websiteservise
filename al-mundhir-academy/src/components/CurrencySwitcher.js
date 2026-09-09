'use client';

import { useState } from 'react';
import { Sparkles, Check, Star, Zap } from 'lucide-react';

const CURRENCIES = {
  SAR: { symbol: 'ر.س', name: 'ريال سعودي', flag: '🇸🇦' },
  AED: { symbol: 'د.إ', name: 'درهم إماراتي', flag: '🇦🇪' },
  KWD: { symbol: 'د.ك', name: 'دينار كويتي', flag: '🇰🇼' },
  EGP: { symbol: 'ج.م', name: 'جنيه مصري', flag: '🇪🇬' },
  USD: { symbol: '$', name: 'دولار أمريكي', flag: '🌍' },
};

const PLANS = [
  {
    id: 'starter',
    name: 'باقة التأسيس',
    subtitle: 'حصتان أسبوعياً • 8 حصص شهرياً',
    target: 'تعليم فردي يناسب مستوى الطالب',
    popular: false,
    badge: null,
    prices: {
      SAR: 150,
      AED: 150,
      KWD: 13,
      EGP: 650,
      USD: 40,
    },
    features: [
      'تعليم فردي يناسب مستوى كل طالب',
      'تحفيظ القرآن الكريم مع تصحيح التلاوة والتجويد',
      'معلمون ومعلمات متخصصون',
      'متابعة مستمرة وتقييم لمستوى الطالب',
      'تواصل ومتابعة مع ولي الأمر',
      'مواعيد مرنة تناسب مختلف الدول والأوقات',
    ],
    cta: 'حجز تجربة مجانية',
  },
  {
    id: 'featured',
    name: 'باقة التميز والمتابعة',
    subtitle: '3 حصص أسبوعياً • 12 حصة شهرياً',
    target: 'الخيار الأكثر طلباً لأولياء الأمور في الخليج',
    popular: true,
    badge: 'الأكثر طلباً ⭐',
    prices: {
      SAR: 210,
      AED: 210,
      KWD: 18,
      EGP: 900,
      USD: 55,
    },
    features: [
      'تعليم فردي 1-on-1 (12 حصة شهرياً)',
      'تحفيظ القرآن الكريم مع تصحيح التلاوة والتجويد',
      'تأسيس اللغة العربية أو العلوم الشرعية',
      'متابعة مستمرة وتقييم دقيق لمستوى الطالب',
      'تواصل أسبوعي وإشعار ولي الأمر بالتقدم',
      'مواعيد مرنة تناسب ظروف الأسرة والدراسة',
      'أسلوب تربوي يحفّز الطالب ويحببه في القرآن',
    ],
    cta: 'ابدأ باقة التميز',
  },
  {
    id: 'mastery',
    name: 'باقة الإتقان',
    subtitle: '4 حصص أسبوعياً • 16 حصة شهرياً',
    target: 'مسار مكثف للحفظ المتقن والإتقان',
    popular: false,
    badge: 'المسار المكثف',
    prices: {
      SAR: 280,
      AED: 280,
      KWD: 24,
      EGP: 1200,
      USD: 75,
    },
    features: [
      '16 حصة فردية شهرياً مكثفة',
      'تحفيظ وتثبيت مستمر مع تصحيح الأحكام والمخارج',
      'معلمون ومعلمات متخصصون من ذوي الخبرة',
      'تقييم دوري شامل لمستوى الإتقان',
      'تواصل ومتابعة مستمرة مع ولي الأمر',
      'مواعيد مرنة وتنسيق كامل للجدول الشهري',
    ],
    cta: 'ابدأ مسار الإتقان',
  },
];

export default function CurrencySwitcher({ onOpenTrial }) {
  const [currency, setCurrency] = useState('SAR');
  const currInfo = CURRENCIES[currency];

  return (
    <section id="pricing" className="py-24 relative bg-[#0B031E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="tartelah-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>باقات الاشتراك</span>
          </div>

          <h2 className="font-cairo font-black text-3xl sm:text-4xl text-white">
            اختر الخطة <span className="gold-gradient-text">المناسبة لك ولأبنائك</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-tajawal">
            باقات مرنة تناسب السوق الخليجي والمصري مع إمكانية تجربة الحصة الأولى مجاناً.
          </p>

          {/* Currency Switcher Tabs */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#140833] border border-[#E8C76A]/25 shadow-lg">
              {Object.keys(CURRENCIES).map((key) => {
                const c = CURRENCIES[key];
                return (
                  <button
                    key={key}
                    onClick={() => setCurrency(key)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      currency === key
                        ? 'bg-[#E8C76A] text-[#0B031E] shadow-md shadow-[#E8C76A]/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid in Tartelah Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const price = plan.prices[currency];

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#18093C] border-2 border-[#E8C76A] shadow-2xl shadow-[#7C3AED]/30 md:-translate-y-2'
                    : 'bg-[#140833] border border-[#E8C76A]/20 hover:border-[#E8C76A]/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-[#E8C76A] text-[#0B031E] text-xs font-black px-4 py-1 rounded-full shadow-lg shadow-[#E8C76A]/40">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-cairo font-black text-xl text-white">
                      {plan.name}
                    </h3>
                    {plan.badge && !plan.popular && (
                      <span className="text-[11px] bg-[#E8C76A]/15 text-[#E8C76A] px-2.5 py-0.5 rounded-full border border-[#E8C76A]/30">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#E8C76A] font-medium">
                    {plan.subtitle}
                  </p>

                  <p className="text-xs text-gray-400 font-tajawal">
                    {plan.target}
                  </p>

                  {/* Price Tag */}
                  <div className="py-4 border-y border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-cairo font-black text-4xl text-white">
                        {price}
                      </span>
                      <span className="text-[#E8C76A] font-bold text-sm">
                        {currInfo.symbol} / شهرياً
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>يشمل الحصة التجريبية المجانية وتقييم المستوى</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 pt-2 text-xs text-gray-300 font-tajawal">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#E8C76A] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-auto">
                  <button
                    onClick={onOpenTrial}
                    className={`w-full py-3.5 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'btn-tartelah-gold'
                        : 'btn-tartelah-outline'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{plan.cta}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
