'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

const SAMPLES = [
  {
    id: 1,
    title: 'تلاوة سورة الضحى بالأحكام المتقنة',
    reader: 'نموذج من حصص التجويد (مستوى أطفال 8 سنوات)',
    surah: 'سورة الضحى (الآيات 1-5)',
    verse: 'وَالضُّحَىٰ ۝ وَاللَّيْلِ إِذَا سَجَىٰ ۝ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ ۝ وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ ۝ وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ',
    ruleTip: 'تركيز على مخرج حرف الضاد المستطيل، وغُنّة الميم المشددة وترقيق اللامات.',
  },
  {
    id: 2,
    title: 'تطبيق أحكام النون الساكنة والتنوين (الإدغام)',
    reader: 'نموذج متقدم للفتيان',
    surah: 'سورة الإخلاص والمعوذتين',
    verse: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
    ruleTip: 'تطبيق القلقلة الوسطى في الدال، وإدغام النون في اللام بلا غنة في (وَلَمْ يَكُن لَّهُ).',
  },
];

export default function AudioRecitation() {
  const [activeSample, setActiveSample] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const sample = SAMPLES[activeSample];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 relative bg-gradient-to-b from-[#0D0E11] via-[#13151D] to-[#0D0E11]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-[#181B24] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Arch Background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Right: Info and Sample Selection */}
            <div className="w-full md:w-1/2 space-y-4 text-right">
              <div className="gold-badge">
                <Volume2 className="w-3.5 h-3.5" />
                <span>منهجية التلاوة والتصحيح الحي</span>
              </div>

              <h3 className="font-cairo font-extrabold text-2xl sm:text-3xl text-white">
                تعلّم القرآن <span className="gold-gradient-text">كما أُنزِل غضاً طرياً</span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                في أكاديمية المنذر نعتني بكل حركة، حرف، ومخرج صوتي من خلال التدريب الفردي المباشر ونطق الشيخ وتصحيح التلاوة خطوة بخطوة.
              </p>

              {/* Sample Switcher Tabs */}
              <div className="flex items-center gap-2 pt-2">
                {SAMPLES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSample(idx);
                      setIsPlaying(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeSample === idx
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    العينة {idx + 1}: {s.surah}
                  </button>
                ))}
              </div>

              {/* Tip */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>توجيه المعلم:</strong> {sample.ruleTip}</span>
              </div>
            </div>

            {/* Left: Quranic Player Card */}
            <div className="w-full md:w-1/2 bg-[#12141A] border border-white/10 rounded-2xl p-6 text-center space-y-5 shadow-inner">
              <div className="flex items-center justify-between text-xs text-amber-400/90 font-medium">
                <span>{sample.surah}</span>
                <span>{sample.reader}</span>
              </div>

              {/* Quran Verse Display */}
              <div className="p-4 rounded-xl bg-black/40 border border-amber-500/15">
                <p className="font-quran text-lg sm:text-xl text-amber-100/95 leading-loose">
                  {sample.verse}
                </p>
              </div>

              {/* Waveform Visualization Bars */}
              <div className="flex items-center justify-center gap-1.5 h-10 px-4">
                {[40, 65, 30, 85, 95, 45, 70, 100, 60, 80, 50, 90, 75, 40, 85, 60, 95, 30, 70].map((height, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      isPlaying 
                        ? 'bg-amber-400 animate-pulse' 
                        : 'bg-white/20'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.max(15, (height * (i % 2 === 0 ? 0.9 : 0.6)))}%` : '20%',
                      animationDelay: `${i * 80}ms`
                    }}
                  />
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 pt-1">
                <button
                  onClick={togglePlay}
                  className="btn-gold py-3 px-8 text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/30"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>إيقاف مؤقت للاستماع</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current mr-0.5" />
                      <span>استمع لنموذج التلاوة</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
