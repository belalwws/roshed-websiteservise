'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, MessageCircle, User, Calendar, BookOpen, Globe, Phone } from 'lucide-react';

export default function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    ageGroup: 'أطفال (7-12 سنة)',
    track: 'تحفيظ القرآن الكريم وتجويده',
    country: 'المملكة العربية السعودية',
    phone: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E8C76A', '#7C3AED', '#25D366', '#FFFFFF']
      });
    } catch (err) {
      console.error(err);
    }

    setIsSubmitted(true);

    const message = `السلام عليكم ورحمة الله وبركاته،
أرغب في حجز الحصة التجريبية المجانية في *أكاديمية المنذر للقرآن الكريم*:
📌 *اسم الطالب/ولي الأمر:* ${formData.name}
🎂 *الفئة العمرية:* ${formData.ageGroup}
📖 *المسار المطلوب:* ${formData.track}
🌍 *الدولة:* ${formData.country}
📱 *رقم الواتساب:* ${formData.phone}
${formData.notes ? `📝 *ملاحظات:* ${formData.notes}` : ''}

شكراً لكم، ونتطلع لتأكيد الموعد المناسب.`;

    const whatsappUrl = `https://wa.me/201551669364?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#140833] border border-[#E8C76A]/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#7C3AED]/20 text-right overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center pb-5 border-b border-white/10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#E8C76A]/15 border border-[#E8C76A]/30 text-[#E8C76A] mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-cairo font-black text-2xl text-white">
                احجز حصتك التجريبية <span className="gold-gradient-text">المجانية</span>
              </h3>
              <p className="text-xs text-gray-300 mt-1 font-tajawal">
                تقييم فوري لمستوى الطالب وتنسيق مواعيد مرنة تناسبكم
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-gray-300 font-medium mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#E8C76A]" />
                  <span>الاسم الكامل *</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="اسم الطالب أو ولي الأمر"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8C76A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E8C76A]" />
                    <span>الفئة العمرية *</span>
                  </label>
                  <select 
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({...formData, ageGroup: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A0B3E] border border-white/10 text-white focus:outline-none focus:border-[#E8C76A]"
                  >
                    <option value="أطفال (4-6 سنوات)">أطفال (٤-٦ سنوات)</option>
                    <option value="أطفال (7-12 سنة)">أطفال (٧-١٢ سنة)</option>
                    <option value="مراهقين (13-17 سنة)">مراهقين (١٣-١٧ سنة)</option>
                    <option value="بالغين (18+) وكل الأعمار">بالغين (١٨+) وكل الأعمار</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#E8C76A]" />
                    <span>الدولة *</span>
                  </label>
                  <select 
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A0B3E] border border-white/10 text-white focus:outline-none focus:border-[#E8C76A]"
                  >
                    <option value="المملكة العربية السعودية">المملكة العربية السعودية</option>
                    <option value="الإمارات العربية المتحدة">الإمارات العربية المتحدة</option>
                    <option value="دولة الكويت">دولة الكويت</option>
                    <option value="دولة قطر">دولة قطر</option>
                    <option value="سلطنة عمان">سلطنة عمان</option>
                    <option value="مملكة البحرين">مملكة البحرين</option>
                    <option value="جمهورية مصر العربية">جمهورية مصر العربية</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#E8C76A]" />
                  <span>المسار أو الكورس المطلوب *</span>
                </label>
                <select 
                  value={formData.track}
                  onChange={(e) => setFormData({...formData, track: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A0B3E] border border-white/10 text-white focus:outline-none focus:border-[#E8C76A]"
                >
                  <option value="تحفيظ القرآن الكريم وتجويده">تحفيظ القرآن الكريم وتجويده</option>
                  <option value="كورس تجويد للمبتدئين">كورس تجويد للمبتدئين</option>
                  <option value="تأسيس اللغة العربية">تأسيس اللغة العربية</option>
                  <option value="تدريس العلوم الشرعية (فقه، عقيدة، حديث)">تدريس العلوم الشرعية (فقه، عقيدة، حديث)</option>
                  <option value="تأسيس وعي الطفل المسلم">تأسيس وعي الطفل المسلم</option>
                  <option value="المواد الدراسية المدرسية (مناهج)">المواد الدراسية المدرسية (مناهج)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>رقم الواتساب مع المفتاح الدولي *</span>
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="+966 5X XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8C76A] dir-ltr text-right"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">
                  ملاحظات أو مستوى الطالب الحالي (اختياري)
                </label>
                <textarea 
                  rows="2"
                  placeholder="مثال: يحفظ جزء عم، أو مبتدئ في الحروف..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8C76A] resize-none"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="btn-tartelah-gold w-full py-3.5 text-sm font-bold cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>تأكيد الحجز والتنسيق عبر واتساب</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-cairo font-black text-2xl text-white">
                تم تسجيل طلبك بنجاح!
              </h3>
              <p className="text-xs text-gray-300 font-tajawal">
                جاري توجيهك إلى واتساب أكاديمية المنذر لتأكيد الموعد المناسب.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a 
                href={`https://wa.me/201551669364?text=${encodeURIComponent('السلام عليكم، قمت بتسجيل طلب الحصة التجريبية في أكاديمية المنذر وأرغب في تأكيد الموعد.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>فتح محادثة واتساب الآن</span>
              </a>

              <button 
                onClick={onClose}
                className="btn-tartelah-outline w-full sm:w-auto py-3 px-6 text-xs cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
