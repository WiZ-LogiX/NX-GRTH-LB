import { Check, X, Sparkles, BookOpen, FlaskConical, GitCompare, Wand2, BookmarkCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function WhatIsGuideSection() {
  const notList = [
    "ليس ملف PDF جامداً تقرأ صفحاته ثم تتركه في مجلد التنزيلات.",
    "ليس مجرد ملف برومبتات عشوائية منسوخة بدون سياق أو تدقيق.",
    "ليس دورة تدريبية مسجلة تستهلك ساعاتك في نظريات أكاديمية.",
    "ليس روبوت دردشة آلياً يدعي الاستغناء عن الحكم البشري.",
  ];

  const isList = [
    "منظومة تفاعلية وتطبيق عملي يرافقك على الشاشة أثناء إنجاز مهامك.",
    "مصنع Prompt تشغيلي يبني 4 صيغ منضبطة ويفحص جودة طلبك فوراً.",
    "مكتبة مجهزة بـ 108 قوالب مهنية و 13 مساحة عمل متخصصة للأدوار.",
    "مساحة شخصية خاصة تحفظ قوالبك ومسوداتك محلياً 100% على متصفحك.",
  ];

  const actions = [
    {
      icon: BookOpen,
      step: "01",
      en: "READ",
      title: "اقرأ وافهم",
      desc: "استوعب منطق عمل النماذج وإرشادات الصياغة باللغة العربية الطبيعية.",
    },
    {
      icon: FlaskConical,
      step: "02",
      en: "TRY",
      title: "جرّب في المعمل",
      desc: "صحح نماذج طلبات حقيقية واختبر نبرة وقيود المخرجات داخل كل فصل.",
    },
    {
      icon: GitCompare,
      step: "03",
      en: "COMPARE",
      title: "قارن النتيجة",
      desc: "شاهد الفرق الملموس بين الطريقة التقليدية العشوائية وطريقة الـ AI المنضبطة.",
    },
    {
      icon: Wand2,
      step: "04",
      en: "BUILD",
      title: "ابنِ طلبك",
      desc: "استخدم معمارية AIDA لتوليد 4 صيغ مخصصة لمهامك بدقة متناهية.",
    },
    {
      icon: BookmarkCheck,
      step: "05",
      en: "SAVE",
      title: "احفظ واسترجع",
      desc: "خزّن قوالبك المفضلة محلياً على جهازك واسترجعها فوراً باختصار سريع.",
    },
  ];

  return (
    <section id="ecosystem" className="py-20 sm:py-28 bg-secondary/20 border-b border-border relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-black">
            التعريف بالمنظومة والتمايز
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            ما هو <span className="text-primary">Nux Growth AI Guide</span>؟ <br />
            <span className="text-foreground">ولماذا يختلف تماماً عن أي كتاب عادي؟</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            تم تصميم هذا الدليل ليكون **أداة عمل تنفيذية حية** تفتحها إلى جانب مهامك اليومية، 
            وليس محتوى تقرأه لمرة واحدة وتنساه.
          </p>
        </div>

        {/* Not vs. Is Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* What it is NOT */}
          <div className="bg-card border-2 border-rose-200/80 dark:border-rose-900/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-rose-800 dark:text-rose-400 text-sm font-black pb-2 border-b border-rose-100 dark:border-rose-900/30">
              <span className="size-6 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs">
                ✕
              </span>
              <span>ما ليس عليه الدليل:</span>
            </div>
            <div className="space-y-3 pt-1">
              {notList.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground font-medium">
                  <X size={16} className="text-rose-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What it ACTUALLY IS */}
          <div className="bg-forest text-primary-foreground rounded-3xl p-6 sm:p-8 space-y-4 shadow-md border-2 border-primary">
            <div className="flex items-center gap-2 text-mint text-sm font-black pb-2 border-b border-white/15">
              <span className="size-6 rounded-full bg-mint text-forest flex items-center justify-center text-xs">
                ✓
              </span>
              <span>ما يقدمه لك عملياً:</span>
            </div>
            <div className="space-y-3 pt-1">
              {isList.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100 font-medium">
                  <Check size={16} className="text-mint mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 5 Product Verbs Pathway */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-foreground">
              سلوك المنظومة: خمس خطوات تطبيقية داخل واجهة واحدة
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              تتحرك بسلاسة من استيعاب المفهوم إلى التطبيق الفوري وبناء مكتبتك الخاصة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {actions.map((act) => {
              const Icon = act.icon;
              return (
                <div
                  key={act.step}
                  className="bg-card border-2 border-border rounded-3xl p-5 space-y-3 editorial-card-hover flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                        {act.step} · {act.en}
                      </span>
                      <Icon size={18} className="text-primary" />
                    </div>

                    <h4 className="text-base font-black text-foreground">
                      {act.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
