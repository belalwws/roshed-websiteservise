'use client';

import { useState } from 'react';
import { Star, Play, MessageCircle, Award, CheckCircle2, Volume2, Sparkles, ExternalLink } from 'lucide-react';

export default function FeedbackShowcase({ onOpenTrialModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const testimonials = [
    {
      id: 1,
      type: 'video',
      studentName: 'عمر فهد السبيعي',
      age: '9 سنوات',
      country: 'الرياض، السعودية 🇸🇦',
      track: 'تحفيظ القرآن الكريم وتجويده',
      rating: 5,
      headline: 'إتقان سورة النبأ بأحكام التجويد ومخارج الحروف الصحيحة',
      content: 'ما شاء الله تبارك الله، أسلوب المعلم شيخ متمكن وصبور جداً مع عمر. لاحظت فرقاً هائلاً في حبه للحفظ وتصحيح مخارج الحروف في ظرف شهرين فقط.',
      parentRole: 'ولي أمر الطالب (أبو عمر)',
      tag: 'تلاوة وإتقان',
      videoDuration: '1:45 دقيقة'
    },
    {
      id: 2,
      type: 'whatsapp',
      studentName: 'سارة عبد الله الشمري',
      age: '6 سنوات',
      country: 'الكويت 🇰🇼',
      track: 'تأسيس اللغة العربية والقاعدة النورانية',
      rating: 5,
      headline: 'تأسيس رائع في القراءة بالحركات والسكون بدون تعقيد',
      content: 'المعلمة قمة في اللطف والتربية! سارة أصبحت تنتظر موعد الحصة بفارغ الصبر. الألعاب والبطاقات التعليمية جعلت ابنتي تقرأ الكلمات القرآنية بسهولة.',
      parentRole: 'والدة الطالبة سارة',
      tag: 'تأسيس نور البيان'
    },
    {
      id: 3,
      type: 'video',
      studentName: 'عبد الرحمن خالد المنصوري',
      age: '12 سنة',
      country: 'أبوظبي، الإمارات 🇦🇪',
      track: 'كورس تجويد للمبتدئين + وعي الطفل المسلم',
      rating: 5,
      headline: 'فهم معاني الآيات وتطبيق السنن والآداب اليومية في البيت',
      content: 'الشيء الذي أبهرني في أكاديمية المنذر ليس مجرد الحفظ، بل اهتمامهم بوعي الطفل وأخلاقه وسلوكه. عبد الرحمن أصبح يحرص على أذكار الصباح والمساء بوعي حقيقي.',
      parentRole: 'د. خالد المنصوري',
      tag: 'سلوك وأخلاق',
      videoDuration: '2:15 دقيقة'
    },
    {
      id: 4,
      type: 'whatsapp',
      studentName: 'ياسين أحمد رضوان',
      age: '10 سنوات',
      country: 'القاهرة، مصر 🇪🇬',
      track: 'تحفيظ القرآن والعلوم الشرعية (فقه وسيرة)',
      rating: 5,
      headline: 'حفظ جزءين من القرآن مع فهم مبسط لأسباب النزول والسيرة',
      content: 'منهجية راقية جداً وتقارير شهرية مفصلة تصلني بعد كل أسبوعين. المتابعة المستمرة تجعلك مطمئناً على مستوى ابنك وأمانته بين أيدٍ أمينة ومخلصة.',
      parentRole: 'أ. أحمد رضوان',
      tag: 'تقارير دورية'
    },
    {
      id: 5,
      type: 'certificate',
      studentName: 'مريم فيصل القحطاني',
      age: '8 سنوات',
      country: 'الدمام، السعودية 🇸🇦',
      track: 'إتمام حفظ جزء عم والبدء في سورة تبارك',
      rating: 5,
      headline: 'شهادة تميز واجتياز اختبار التلاوة المتقنة بامتياز',
      content: 'نالت الطالبة مريم شهادة الإتقان بتفوق بعد اجتياز الاختبار الشفهي بحضور لجنة المشرفين الأكاديميين بالأكاديمية.',
      parentRole: 'إدارة الشؤون التعليمية',
      tag: 'شهادة تفوق'
    },
    {
      id: 6,
      type: 'whatsapp',
      studentName: 'حمزة وبراء طارق',
      age: '7 و 11 سنة',
      country: 'الدوحة، قطر 🇶🇦',
      track: 'حلقات فردية خاصة + مناهج مدرسية',
      rating: 5,
      headline: 'مرونة رائعة في المواعيد تناسب أوقات مدارس دول الخليج',
      content: 'الأكاديمية وفرت لنا جدولاً مريحاً جداً متوافقاً مع توقيت قطر، والمعلمون ملتزمون بالدقيقة، والحصة الفردية تعطي الطفل كامل التركيز والاستفادة.',
      parentRole: 'أم حمزة وبراء',
      tag: 'مواعيد مرنة'
    }
  ];

  const filtered = testimonials.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'videos') return item.type === 'video';
    if (activeTab === 'whatsapp') return item.type === 'whatsapp';
    if (activeTab === 'certificates') return item.type === 'certificate';
    return true;
  });

  return (
    <section id="testimonials" className="section section-dark islamic-pattern">
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge-tag">
            <Award size={16} />
            قصص نجاح موثقة ونماذج تفوق
          </div>
          <h2 className="section-title">
            تجارب <span className="text-gradient-gold">أولياء الأمور والطلاب</span> في رحاب أكاديمية المنذر
          </h2>
          <p className="section-subtitle">
            نعتز بثقة مئات الأسر في مصر ومختلف دول الخليج العربي الذين وجدوا في أكاديمية المنذر البيئة التربوية الآمنة لتعليم كتاب الله وعلومه.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: activeTab === 'all' ? '1.5px solid #cda84e' : '1px solid rgba(205, 168, 78, 0.25)',
              background: activeTab === 'all' ? 'var(--gold-gradient)' : 'rgba(12, 35, 51, 0.7)',
              color: activeTab === 'all' ? '#040e16' : '#f8fafc',
              fontWeight: 700,
              fontSize: '0.92rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            جميع التقييمات
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: activeTab === 'videos' ? '1.5px solid #cda84e' : '1px solid rgba(205, 168, 78, 0.25)',
              background: activeTab === 'videos' ? 'var(--gold-gradient)' : 'rgba(12, 35, 51, 0.7)',
              color: activeTab === 'videos' ? '#040e16' : '#f8fafc',
              fontWeight: 700,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
          >
            <Play size={15} />
            فيديوهات وتلاوات الطلاب
          </button>
          <button
            onClick={() => setActiveTab('whatsapp')}
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: activeTab === 'whatsapp' ? '1.5px solid #cda84e' : '1px solid rgba(205, 168, 78, 0.25)',
              background: activeTab === 'whatsapp' ? 'var(--gold-gradient)' : 'rgba(12, 35, 51, 0.7)',
              color: activeTab === 'whatsapp' ? '#040e16' : '#f8fafc',
              fontWeight: 700,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
          >
            <MessageCircle size={15} />
            رسائل وتقييمات أولياء الأمور
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: activeTab === 'certificates' ? '1.5px solid #cda84e' : '1px solid rgba(205, 168, 78, 0.25)',
              background: activeTab === 'certificates' ? 'var(--gold-gradient)' : 'rgba(12, 35, 51, 0.7)',
              color: activeTab === 'certificates' ? '#040e16' : '#f8fafc',
              fontWeight: 700,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
          >
            <Award size={15} />
            شهادات الإتقان والتفوق
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid-3" style={{ marginBottom: '45px' }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              className="glass-card-dark"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header with Type Badge & Rating */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: item.type === 'video' ? 'rgba(239, 68, 68, 0.15)' : item.type === 'certificate' ? 'rgba(205, 168, 78, 0.15)' : 'rgba(37, 211, 102, 0.15)',
                    color: item.type === 'video' ? '#f87171' : item.type === 'certificate' ? '#cda84e' : '#25d366',
                    border: `1px solid ${item.type === 'video' ? 'rgba(239, 68, 68, 0.3)' : item.type === 'certificate' ? 'rgba(205, 168, 78, 0.3)' : 'rgba(37, 211, 102, 0.3)'}`
                  }}>
                    {item.tag}
                  </span>

                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#cda84e" color="#cda84e" />
                    ))}
                  </div>
                </div>

                {/* Headline & Quote */}
                <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#f8fafc', marginBottom: '12px', lineHeight: 1.4 }}>
                  "{item.headline}"
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '22px' }}>
                  {item.content}
                </p>
              </div>

              {/* Student & Parent Info Footer */}
              <div style={{
                borderTop: '1px solid rgba(205, 168, 78, 0.15)',
                paddingTop: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 800, color: '#f8fafc', fontSize: '0.95rem' }}>
                    {item.studentName} ({item.age})
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#cda84e' }}>
                    {item.country} • {item.parentRole}
                  </div>
                </div>

                {item.type === 'video' && (
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(205, 168, 78, 0.15)',
                    border: '1px solid #cda84e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cda84e'
                  }}>
                    <Play size={16} fill="#cda84e" />
                  </div>
                )}
                {item.type === 'whatsapp' && (
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid #25d366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#25d366'
                  }}>
                    <MessageCircle size={18} />
                  </div>
                )}
                {item.type === 'certificate' && (
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(205, 168, 78, 0.15)',
                    border: '1px solid #cda84e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cda84e'
                  }}>
                    <Award size={18} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Drive Link Showcase Box */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(12, 35, 51, 0.9) 0%, rgba(7, 23, 34, 0.95) 100%)',
          border: '1.5px solid rgba(205, 168, 78, 0.35)',
          borderRadius: '20px',
          padding: '24px 30px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          boxShadow: 'var(--shadow-gold)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'var(--gold-gradient)',
              color: '#040e16',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Volume2 size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', marginBottom: '4px' }}>
                شاهد واستمع لنماذج حيّة من تلاوات طلابنا وأداء المعلمين
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
                مجلد موثق يضم تسجيلات فيديو حقيقية لطلاب الأكاديمية وشهادات التفوق
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://drive.google.com/drive/folders/1lTC0HorFLwjMZCN3ughKiZaP7MC3Kqv3?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <ExternalLink size={16} />
              فتح مجلد الفيديوهات والتسجيلات
            </a>
            <button
              onClick={onOpenTrialModal}
              className="btn-gold"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <Sparkles size={16} />
              احجز تجربة مجانية لطفلك
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
