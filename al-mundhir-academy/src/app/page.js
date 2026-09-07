'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrialModal from '../components/TrialModal';
import HeroSlider from '../components/HeroSlider';
import PricingCalculator from '../components/PricingCalculator';
import FeedbackShowcase from '../components/FeedbackShowcase';
import {
  BookOpen, Sparkles, ShieldCheck, HeartHandshake, Users, Award,
  Clock, CheckCircle2, Star, Send, HelpCircle, ChevronDown, ChevronUp,
  GraduationCap, Globe, Heart, Compass, Check, ArrowRight, MessageCircle,
  PhoneCall, BookmarkCheck
} from 'lucide-react';

export default function HomePage() {
  const [activeTrackTab, setActiveTrackTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  // Free Trial Inline Form State
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    ageGroup: 'أطفال (7-12 سنة)',
    track: 'تحفيظ القرآن الكريم وتجويده',
    country: 'السعودية 🇸🇦',
    whatsapp: '',
    levelNotes: ''
  });
  const [formSent, setFormSent] = useState(false);

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleInlineSubmit = (e) => {
    e.preventDefault();
    const msg = `✨ *طلب حجز حصة تجريبية مجانية (من الموقع) - أكاديمية المنذر* ✨%0A%0A` +
      `👤 *اسم الطالب:* ${formState.firstName} ${formState.lastName}%0A` +
      `🎂 *العمر:* ${formState.ageGroup}%0A` +
      `🌍 *الدولة:* ${formState.country}%0A` +
      `📖 *المسار المطلوب:* ${formState.track}%0A` +
      `📝 *مستوى الطالب والملاحظات:* ${formState.levelNotes || 'تحديد في جلسة التقييم'}%0A` +
      `📱 *رقم الواتساب:* ${formState.whatsapp}%0A%0A` +
      `🎯 *المرجو تأكيد موعد جلسة التقييم والحصة التجريبية المجانية.*`;

    window.open(`https://wa.me/201551669364?text=${msg}`, '_blank');
    setFormSent(true);
  };

  const tracks = [
    {
      id: 1,
      category: 'quran',
      title: 'تحفيظ القرآن الكريم وتجويده',
      subtitle: 'إتقان التلاوة وتصحيح المخارج والحفظ الراسخ',
      description: 'حلقات فردية متدرجة تبدأ من ضبط مخارج الحروف وأحكام التجويد العملية، مع خطة حفظ وتثبيت تناسب قدرات الطالب ومستواه مع المراجعة الدورية المستمرة.',
      features: ['تصحيح تلاوة وتجويد متقن', 'خطط حفظ ومراجعة مخصصة', 'معلمون ومعلمات مجازون', 'اختبارات دورية وشهادات إتقان'],
      age: 'جميع الأعمار (أطفال وكبار)',
      badge: 'المسار الأساسي ⭐'
    },
    {
      id: 2,
      category: 'quran',
      title: 'كورس تجويد للمبتدئين',
      subtitle: 'تعلم أحكام التجويد بأسلوب مبسط وممتع',
      description: 'دورة مخصصة للأطفال والمبتدئين لشرح قواعد التجويد الأساسية (النون الساكنة والتنوين، المدود، الميم الساكنة) بطريقة سهلة وتطبيق عملي مباشر على الآيات.',
      features: ['شرح مبسط وتطبيقي', 'بطاقات مرئية وأمثلة صوتية', 'تدريب عملي لكل حكم', 'مناسب للأطفال من سن 7 سنوات'],
      age: 'من 7 سنوات فما فوق',
      badge: 'تأسيس التجويد'
    },
    {
      id: 3,
      category: 'arabic',
      title: 'تأسيس اللغة العربية ونور البيان',
      subtitle: 'القاعدة النورانية والقراءة والكتابة من الصفر',
      description: 'منهجية متكاملة لتمكين الطفل من نطق الحروف العربية بالحركات والسكون والمدود، والتهجي السليم للكلمات والآيات القرآنية بأساليب محببة وتفاعلية.',
      features: ['تعليم الحروف وأشكالها وأصواتها', 'تدريب على التهجي القرآني', 'ألعاب وبطاقات تفاعلية', 'تأسيس قوي قبل المدرسة'],
      age: 'أطفال (4 - 9 سنوات)',
      badge: 'للأطفال والبراعم'
    },
    {
      id: 4,
      category: 'islamic',
      title: 'تدريس العلوم الشرعية الميسرة',
      subtitle: 'فقه، عقيدة صحيحة، سيرة نبوية، وأحاديث شريفة',
      description: 'غرس مبادئ ديننا الحنيف بأسلوب تربوي مبسط يناسب عقل الطفل والناشئ، ليتعلم كيفية الطهارة والصلاة وقصص الأنبياء وأخلاق الحبيب المصطفى ﷺ.',
      features: ['فقه العبادات الميسر (صلاة وطهارة)', 'عقيدة صافية وأركان الإيمان', 'سيرة نبوية عطرة وقصص قرآنية', 'حفظ وشرح الأحاديث النبوية'],
      age: 'من 8 سنوات فما فوق',
      badge: 'علوم شرعية'
    },
    {
      id: 5,
      category: 'islamic',
      title: 'تأسيس وعي الطفل المسلم',
      subtitle: 'بناء الهوية والآداب والأذكار والقيم الإسلامية',
      description: 'برنامج تربوي قيمي فريد يربط الطفل بهويته الإسلامية ويعلمه السنن والآداب اليومية وبر الوالدين وحسن الخلق، ليكون القرآن منهجاً حياً في سلوكه.',
      features: ['الأذكار والسنن اليومية العملية', 'تعزيز قيم الصدق والأمانة وبر الوالدين', 'بناء اعتزاز الطفل بهويته المسلمة', 'تطبيقات سلوكية يتابعها ولي الأمر'],
      age: 'أطفال ومراهقين (6 - 16 سنة)',
      badge: 'تربوي قيمي ⭐'
    },
    {
      id: 6,
      category: 'school',
      title: 'المواد والمناهج الدراسية المدرسية',
      subtitle: 'تقوية ومتابعة دراسية وتأسيس شامل للمناهج',
      description: 'حصص خصوصية فردية لمتابعة المواد الدراسية والمناهج المدرسية لمصر ودول الخليج العربي، مع شرح ميسر وحل الواجبات ومراجعة الامتحانات باستمرار.',
      features: ['متابعة مناهج مصر ودول الخليج', 'تأسيس دراسي ومراجعات دورية', 'شرح ميسر وحل الواجبات', 'مرونة كاملة في المواعيد'],
      age: 'المراحل الابتدائية والإعدادية',
      badge: 'تأسيس ومتابعة'
    }
  ];

  const filteredTracks = tracks.filter(t => {
    if (activeTrackTab === 'all') return true;
    return t.category === activeTrackTab;
  });

  const whyUsPoints = [
    {
      icon: <Users size={28} />,
      title: 'تعليم فردي خاص 1-on-1',
      desc: 'يحصل الطالب على كامل وقت المعلم وتركيزه في حلقة خاصة تراعي سرعته واستيعابه دون تشتيت.'
    },
    {
      icon: <BookOpen size={28} />,
      title: 'تحفيظ متقن وتصحيح التلاوة',
      desc: 'تركيز دقيق على ضبط مخارج الحروف وأحكام التجويد العملية لتلاوة قرآنية صحيحة ومرتلة.'
    },
    {
      icon: <GraduationCap size={28} />,
      title: 'معلمون ومعلمات متخصصون',
      desc: 'كادر تعليمي مؤهل أكاديمياً وتربوياً، مع توفر معلمات متخصصات لتعليم الإناث والأطفال الصغار.'
    },
    {
      icon: <Award size={28} />,
      title: 'متابعة مستمرة وتقارير دورية',
      desc: 'تقارير أداء دورية توثق تقدم الطالب ونقاط تميزه وخطة الحفظ للأسبوع والشهر القادم.'
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'تواصل دائم مع ولي الأمر',
      desc: 'شراكة حقيقية تضع الأسرة في قلب التجربة التعليمية لضمان استمرار التحفيز والإنجاز.'
    },
    {
      icon: <Clock size={28} />,
      title: 'مواعيد مرنة للخليج ومصر',
      desc: 'جداول متنوعة على مدار اليوم تناسب أوقات الدوام المدرسي وتوقيتات دول الخليج ومصر.'
    },
    {
      icon: <Globe size={28} />,
      title: 'تعليم أونلاين تفاعلي حديث',
      desc: 'بيئة تعليمية ممتعة تعتمد على الفصول الافتراضية الحديثة والألواح التفاعلية والبطاقات.'
    },
    {
      icon: <Heart size={28} />,
      title: 'أسلوب تربوي يحبب في القرآن',
      desc: 'تحفيز إيجابي وتشجيع مستمر يبني حب كتاب الله في وجدان الطفل دون إكراه أو ضغط نفسي.'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'طلب الحصة التجريبية',
      desc: 'املأ النموذج السريع أو تواصل معنا عبر الواتساب لتحديد موعد حصة التقييم المجانية.'
    },
    {
      num: '02',
      title: 'جلسة التقييم والتعارف',
      desc: 'جلسة خاصة 1-on-1 يتعرف فيها المعلم على الطالب ويحدد مستواه وخطة التعلم الأنسب له.'
    },
    {
      num: '03',
      title: 'اختيار الخطة والجدول',
      desc: 'تحديد الباقة الشهرية المناسبة والأوقات التي تلائم جدولكم الأسبوعي بكل مرونة.'
    },
    {
      num: '04',
      title: 'الانطلاق والمتابعة الشهرية',
      desc: 'بدء الحصص الفردية واستلام التقارير الدورية وشهادات الإتقان عند إتمام الأجزاء.'
    }
  ];

  const faqs = [
    {
      q: 'ما هي الفئات العمرية التي تقبلها أكاديمية المنذر؟',
      a: 'نستقبل جميع الفئات العمرية ابتداءً من سن 4 سنوات (للأطفال والبراعم في تأسيس اللغة العربية ونور البيان)، والأطفال من 7-12 سنة، والمراهقين من 13-17 سنة، بالإضافة إلى دورات وحلقات خاصة للبالغين والكبار.'
    },
    {
      q: 'هل الحصص تكون فردية خاصة أم في مجموعات؟',
      a: 'نعتمد في أكاديمية المنذر نظام الحصص الفردية الخاصة (1-on-1) كمنهج أساسي؛ لضمان حصول الطالب على كامل وقت المعلم واهتمامه ومراعاة الفروق الفردية في الحفظ والاستيعاب.'
    },
    {
      q: 'كيف تتم الحصة التجريبية المجانية؟',
      a: 'الحصة التجريبية مجانية تماماً بنسبة 100% وبدون أي التزام مالي. يقوم المعلم بالتعرف على الطالب، وتقييم مستواه في القراءة والتلاوة، ووضع خطة مقترحة تناسب قدراته.'
    },
    {
      q: 'هل توجد معلمات متخصصات للإناث والأطفال الصغار؟',
      a: 'نعم، يتوفر لدينا كادر متكامل من المعلمات المتخصصات والمجازات لتعليم الطالبات والإناث والأطفال في المراحل العمرية المبكرة بأسلوب تربوي لطيف ومحفز.'
    },
    {
      q: 'كيف يتابع ولي الأمر تقدم ومستوى ابنه؟',
      a: 'ترسل الأكاديمية تقارير دورية ومفصلة لولي الأمر عبر الواتساب توضح ما تم إنجازه، ومقدار الحفظ والمراجعة، ودرجات التجويد وملاحظات المعلم السلوكية والتربوية.'
    },
    {
      q: 'هل المواعيد مناسبة لتوقيت دول الخليج العربي؟',
      a: 'نعم بالتأكيد، تم تصميم جداولنا لتكون مرنة وممتدة طوال اليوم لتلائم توقيتات المملكة العربية السعودية، الإمارات، الكويت، قطر، عمان، والبحرين، بالإضافة إلى توقيت مصر.'
    },
    {
      q: 'ما هي وسائل الدفع المتاحة لتسديد الاشتراكات؟',
      a: 'نوفر وسائل دفع إلكترونية آمنة وسهلة تناسب جميع الدول، بما في ذلك التحويلات البنكية المباشرة في السعودية ودول الخليج، وبطاقات مدى وMastercard/Visa، وفودافون كاش وإنستاباي داخل مصر.'
    }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span className="top-bar-badge">عرض خاص</span>
          <span>
            🎁 احجز حصتك التجريبية المجانية الآن واكتشف منهجية أكاديمية المنذر التربوية | فصول فردية 1-on-1
          </span>
          <button
            onClick={() => setIsTrialModalOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#cda84e',
              fontWeight: 800,
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.85rem'
            }}
          >
            احجز الآن ←
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      {/* 1. Hero Visual Slider */}
      <HeroSlider onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      {/* 2. Key Stats Strip */}
      <section style={{
        backgroundColor: '#0c2333',
        borderBottom: '1px solid rgba(205, 168, 78, 0.25)',
        padding: '30px 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#cda84e' }}>+1,500</div>
              <div style={{ color: '#cbd5e1', fontSize: '0.92rem', fontWeight: 600 }}>طالب وطالبة في مصر والخليج</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff' }}>100%</div>
              <div style={{ color: '#cbd5e1', fontSize: '0.92rem', fontWeight: 600 }}>حلقات فردية خاصة 1-on-1</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#25a770' }}>98%</div>
              <div style={{ color: '#cbd5e1', fontSize: '0.92rem', fontWeight: 600 }}>نسبة رضا أولياء الأمور</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#cda84e' }}>+50</div>
              <div style={{ color: '#cbd5e1', fontSize: '0.92rem', fontWeight: 600 }}>معلماً ومعلمة مؤهلين تربوياً</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Educational Philosophy */}
      <section className="section islamic-pattern">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge-tag">
              <Compass size={16} />
              فلسفتنا التعليمية والتربوية
            </div>
            <h2 className="section-title">
              الطالب في أكاديمية المنذر <span className="text-gradient-gold">أمانة ومسؤولية</span>
            </h2>
            <p className="section-subtitle">
              لا نعامل الطالب كرقم في حلقة، بل نتعامل معه كـ أمانة نراعي فيها الفروق الفردية ونبني حبه لكتاب الله خطوة بخطوة.
            </p>
          </div>

          <div className="grid-4">
            {/* Pillar 1 */}
            <div className="luxury-card-light" style={{ padding: '30px 24px', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(205, 168, 78, 0.12)',
                border: '1.5px solid rgba(205, 168, 78, 0.3)',
                color: '#cda84e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px auto'
              }}>
                <ShieldCheck size={30} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', color: '#071722' }}>
                أمانة ورعاية فردية
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
                اهتمام حقيقي ومتابعة خاصة لكل طالب لمعرفة قدراته ونقاط قوته دون مقارنة مع غيره.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="luxury-card-light" style={{ padding: '30px 24px', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(205, 168, 78, 0.12)',
                border: '1.5px solid rgba(205, 168, 78, 0.3)',
                color: '#cda84e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px auto'
              }}>
                <BookOpen size={30} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', color: '#071722' }}>
                القرآن منهاج حياة
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
                لا نكتفي بالتحفيظ المجرد، بل نسعى لأن يفهمه الطالب بعقله ويعمل به في سلوكه وأخلاقه.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="luxury-card-light" style={{ padding: '30px 24px', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(205, 168, 78, 0.12)',
                border: '1.5px solid rgba(205, 168, 78, 0.3)',
                color: '#cda84e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px auto'
              }}>
                <Heart size={30} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', color: '#071722' }}>
                أسلوب تربوي محبب
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
                استخدام أساليب تعليمية تشجع الطالب على التقدم بثبات وحب دون ضغط أو ملل.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="luxury-card-light" style={{ padding: '30px 24px', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(205, 168, 78, 0.12)',
                border: '1.5px solid rgba(205, 168, 78, 0.3)',
                color: '#cda84e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px auto'
              }}>
                <HeartHandshake size={30} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', color: '#071722' }}>
                شراكة مع الأسرة
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
                تواصل مستمر مع ولي الأمر وإطلاعه على كل خطوة؛ لأن النجاح مسؤولية مشتركة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Academic Tracks & Programs */}
      <section id="programs" className="section section-dark islamic-pattern">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge-tag">
              <GraduationCap size={16} />
              المسارات الأكاديمية المتكاملة
            </div>
            <h2 className="section-title">
              برامج تعليمية متخصصة <span className="text-gradient-gold">لكل فئة ومستوى</span>
            </h2>
            <p className="section-subtitle">
              منهجية معتمدة تغطي تحفيظ القرآن الكريم وتجويده وتأسيس اللغة والعلوم الشرعية والمناهج المدرسية.
            </p>

            {/* Track Filter Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '30px'
            }}>
              {[
                { id: 'all', label: 'جميع المسارات' },
                { id: 'quran', label: 'القرآن الكريم والتجويد' },
                { id: 'arabic', label: 'تأسيس اللغة العربية' },
                { id: 'islamic', label: 'العلوم الشرعية والوعي' },
                { id: 'school', label: 'المناهج المدرسية' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTrackTab(tab.id)}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '999px',
                    border: activeTrackTab === tab.id ? '1.5px solid #cda84e' : '1px solid rgba(205, 168, 78, 0.25)',
                    background: activeTrackTab === tab.id ? 'var(--gold-gradient)' : 'rgba(12, 35, 51, 0.8)',
                    color: activeTrackTab === tab.id ? '#040e16' : '#f8fafc',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-3">
            {filteredTracks.map(track => (
              <div
                key={track.id}
                className="glass-card-dark"
                style={{
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '3px 12px',
                      borderRadius: '999px',
                      background: 'rgba(205, 168, 78, 0.15)',
                      color: '#cda84e',
                      border: '1px solid rgba(205, 168, 78, 0.3)'
                    }}>
                      {track.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      {track.age}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
                    {track.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: '#cda84e', marginBottom: '14px', fontWeight: 600 }}>
                    {track.subtitle}
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {track.description}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(205, 168, 78, 0.15)', paddingTop: '16px', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                      أبرز ما يشمله المسار:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
                      {track.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={16} color="#cda84e" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/201551669364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                  style={{ width: '100%', padding: '11px', fontSize: '0.92rem' }}
                >
                  <MessageCircle size={16} />
                  استفسر عن هذا المسار
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Al-Mundhir (8 Pillars) */}
      <section id="why-us" className="section islamic-pattern">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge-tag">
              <Star size={16} />
              معايير التميز والالتزام
            </div>
            <h2 className="section-title">
              لماذا يختار أولياء الأمور <span className="text-gradient-gold">أكاديمية المنذر؟</span>
            </h2>
            <p className="section-subtitle">
              «لا نريد للطالب أن يحفظ القرآن فحسب، بل نسعى لأن نجعل القرآن منهاجَ حياته؛ يحفظه في صدره، ويفهمه بعقله، ويعمل به في سلوكه وأخلاقه.»
            </p>
          </div>

          <div className="grid-4">
            {whyUsPoints.map((point, idx) => (
              <div
                key={idx}
                className="luxury-card-light"
                style={{ padding: '26px 20px', textAlign: 'right' }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(205, 168, 78, 0.12)',
                  border: '1.5px solid rgba(205, 168, 78, 0.3)',
                  color: '#cda84e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  {point.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px', color: '#071722' }}>
                  {point.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 4-Step Registration Journey */}
      <section className="section section-dark islamic-pattern">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge-tag">
              <BookmarkCheck size={16} />
              رحلة التعلم السلسة
            </div>
            <h2 className="section-title">
              كيف يبدأ <span className="text-gradient-gold">طالبنا رحلته في الأكاديمية؟</span>
            </h2>
            <p className="section-subtitle">
              4 خطوات سهلة ومباشرة تبدأ بحصة تقييم مجانية تماماً لتحديد المستوى والخطة المناسبة.
            </p>
          </div>

          <div className="grid-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card-dark"
                style={{ padding: '30px 22px', position: 'relative' }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(205, 168, 78, 0.25)',
                  fontFamily: 'var(--font-amiri)',
                  marginBottom: '10px'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pricing Calculator Section */}
      <PricingCalculator onOpenTrialModal={() => {
        const el = document.getElementById('book-trial-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 8. Verified Feedback & Video Showcase */}
      <FeedbackShowcase onOpenTrialModal={() => {
        const el = document.getElementById('book-trial-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 9. High-Converting Free Trial Booking Inline Form */}
      <section id="book-trial-section" className="section islamic-pattern" style={{ backgroundColor: '#071722', color: '#ffffff' }}>
        <div className="container">
          <div style={{
            maxWidth: '860px',
            margin: '0 auto',
            backgroundColor: '#0c2333',
            borderRadius: '28px',
            border: '2px solid rgba(205, 168, 78, 0.4)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), var(--shadow-gold)',
            padding: '45px 35px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div className="badge-tag" style={{ background: 'rgba(205, 168, 78, 0.15)' }}>
                <Sparkles size={16} />
                حصة تجريبية مجانية 100%
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '10px' }}>
                احجز حصة تقييم وتجربة لطفلك الآن
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '620px', margin: '0 auto' }}>
                املأ البيانات أدناه، وسيتم توجيهك فوراً لمحادثة واتساب مخصصة لتأكيد الموعد واختيار المعلم المناسب.
              </p>
            </div>

            {formSent ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '2px solid #25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  color: '#25d366'
                }}>
                  <CheckCircle2 size={45} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>
                  تم إرسال طلبك بنجاح!
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '24px' }}>
                  تم فتح محادثة الواتساب مع إدارة الأكاديمية لتأكيد موعد الحصة التجريبية.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="btn-gold"
                  style={{ padding: '12px 28px' }}
                >
                  إرسال طلب جديد
                </button>
              </div>
            ) : (
              <form onSubmit={handleInlineSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                  <div>
                    <label className="form-label">الاسم الأول للطالب *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="مثال: عبد الرحمن"
                      value={formState.firstName}
                      onChange={handleFormChange}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label className="form-label">اسم العائلة / ولي الأمر *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="مثال: القحطاني"
                      value={formState.lastName}
                      onChange={handleFormChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                  <div>
                    <label className="form-label">الفئة العمرية *</label>
                    <select
                      name="ageGroup"
                      value={formState.ageGroup}
                      onChange={handleFormChange}
                      className="form-control"
                    >
                      <option value="أطفال (4-6 سنوات)">أطفال (4-6 سنوات)</option>
                      <option value="أطفال (7-12 سنة)">أطفال (7-12 سنة)</option>
                      <option value="مراهقين (13-17 سنة)">مراهقين (13-17 سنة)</option>
                      <option value="بالغين (18+ سنة)">بالغين (18+ سنة)</option>
                      <option value="جميع الأعمار / عائلي">حلقة عائلية</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">دولة الإقامة *</label>
                    <select
                      name="country"
                      value={formState.country}
                      onChange={handleFormChange}
                      className="form-control"
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                  <div>
                    <label className="form-label">المسار التعليمي المطلوب *</label>
                    <select
                      name="track"
                      value={formState.track}
                      onChange={handleFormChange}
                      className="form-control"
                    >
                      <option value="تحفيظ القرآن الكريم وتجويده">تحفيظ القرآن الكريم وتجويده</option>
                      <option value="كورس تجويد للمبتدئين">كورس تجويد للمبتدئين</option>
                      <option value="تأسيس اللغة العربية (نور البيان)">تأسيس اللغة العربية (نور البيان)</option>
                      <option value="تدريس العلوم الشرعية (فقه، عقيدة، حديث)">تدريس العلوم الشرعية (فقه، عقيدة، حديث)</option>
                      <option value="تأسيس وعي الطفل المسلم">تأسيس وعي الطفل المسلم</option>
                      <option value="المواد الدراسية والمناهج المدرسية">المواد الدراسية والمناهج المدرسية</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">رقم الواتساب للتواصل وتأكيد الموعد *</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder="مثال: +966500000000 أو 01000000000"
                      value={formState.whatsapp}
                      onChange={handleFormChange}
                      className="form-control"
                      style={{ direction: 'ltr', textAlign: 'right' }}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label">مستوى الطالب الحالي وملاحظات ولي الأمر</label>
                  <textarea
                    name="levelNotes"
                    rows="3"
                    placeholder="اكتب هنا ما يحفظه الطالب حالياً أو أي متطلبات خاصة بالجدول..."
                    value={formState.levelNotes}
                    onChange={handleFormChange}
                    className="form-control"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{ width: '100%', padding: '15px', fontSize: '1.1rem', borderRadius: '16px' }}
                >
                  <Send size={20} />
                  تأكيد حجز الحصة التجريبية عبر الواتساب (01551669364)
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section className="section islamic-pattern">
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge-tag">
              <HelpCircle size={16} />
              إجابات شافية
            </div>
            <h2 className="section-title">
              الأسئلة <span className="text-gradient-gold">الشائعة والمكررة</span>
            </h2>
            <p className="section-subtitle">
              كل ما يهمك معرفته حول آلية التدريس، الفصول الفردية، وتفاصيل المتابعة في أكاديمية المنذر.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="luxury-card-light"
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: isOpen ? '1.5px solid #cda84e' : '1px solid rgba(205, 168, 78, 0.2)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'right',
                      fontFamily: 'var(--font-cairo)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: isOpen ? '#cda84e' : '#071722'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: '#cda84e', display: 'flex', alignItems: 'center' }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px 24px',
                      color: '#475569',
                      fontSize: '0.95rem',
                      lineHeight: 1.8,
                      borderTop: '1px solid #f1f5f9'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Final CTA Banner */}
      <section style={{
        backgroundColor: '#071722',
        borderTop: '2px solid rgba(205, 168, 78, 0.3)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '999px',
            background: 'rgba(205, 168, 78, 0.15)',
            border: '1px solid rgba(205, 168, 78, 0.35)',
            color: '#cda84e',
            fontSize: '0.9rem',
            fontWeight: 800,
            marginBottom: '16px'
          }}>
            <Sparkles size={16} />
            ابدأ رحلة طفلك مع كتاب الله اليوم
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#ffffff', marginBottom: '16px' }}>
            «خيركم من تعلّم القرآن وعلّمه»
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 30px auto', lineHeight: 1.8 }}>
            احجز حصة تجريبية مجانية الآن وتعرف على معلم طفلك ومنهجية أكاديمية المنذر التربوية الراقية.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={() => setIsTrialModalOpen(true)}
              className="btn-gold"
              style={{ padding: '14px 34px', fontSize: '1.05rem' }}
            >
              <Sparkles size={18} />
              احجز حصة تجريبية مجانية الآن
            </button>
            <a
              href="https://wa.me/201551669364"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '14px 30px', fontSize: '1.05rem' }}
            >
              <MessageCircle size={18} />
              محادثة مباشرة عبر واتساب (01551669364)
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <Footer onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      {/* Floating WhatsApp Quick Button */}
      <a
        href="https://wa.me/201551669364?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%AD%D8%AC%D8%B2%20%D8%AD%D8%B5%D8%A9%20%D8%AA%D8%AC%D8%B1%D9%8A%D8%A8%D9%8A%D8%A9%20%D9%84%D8%AF%D9%89%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D8%B0%D8%B1"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="محادثة واتساب سريعة"
      >
        <MessageCircle size={32} />
      </a>

      {/* Global Trial Booking Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </>
  );
}
