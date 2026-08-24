import { useState } from "react";
import { BookOpen, Compass, Wand2, Activity, Bookmark, RotateCcw, ArrowLeft, ArrowDown, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ECOSYSTEM_JOURNEY_STAGES } from "@/lib/landing-content";

export function ConnectedJourneySection() {
  const [activeStage, setActiveStage] = useState("build");

  const stageIcons: Record<string, any> = {
    learn: BookOpen,
    explore: Compass,
    build: Wand2,
    work: Activity,
    save: Bookmark,
    reuse: RotateCcw,
  };

  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="mint" className="px-3.5 py-1 text-xs font-black">
            رحلة العمل المتصلة
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            كيف تتكامل أدوات المنظومة <br />
            <span className="text-primary">في دورة عمل يومية واحدة؟</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            المنظومة ليست أدوات منفصلة، بل تجربة عمل مترابطة تأخذك من التعلم إلى التنفيذ والحفظ وإعادة الاستخدام.
          </p>
        </div>

        {/* Interactive Narrative Pathway */}
        <div className="space-y-8 max-w-5xl mx-auto">
          
          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {ECOSYSTEM_JOURNEY_STAGES.map((stg) => {
              const Icon = stageIcons[stg.key] ?? Wand2;
              const isActive = activeStage === stg.key;

              return (
                <button
                  key={stg.key}
                  onClick={() => setActiveStage(stg.key)}
                  className={`p-3.5 rounded-2xl text-right transition-all flex flex-col justify-between space-y-2 border-2 cursor-pointer ${
                    isActive
                      ? "bg-forest text-primary-foreground border-primary shadow-md scale-[1.02]"
                      : "bg-card border-border hover:border-primary/40 text-foreground hover:bg-secondary/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={16} className={isActive ? "text-mint" : "text-primary"} />
                    <span className="text-[9px] font-mono font-bold uppercase opacity-75">
                      {stg.key}
                    </span>
                  </div>
                  <span className="text-xs font-black block leading-tight">
                    {stg.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Spotlight */}
          {(() => {
            const current = ECOSYSTEM_JOURNEY_STAGES.find((s) => s.key === activeStage)!;
            const Icon = stageIcons[current.key] ?? Wand2;

            return (
              <div className="bg-card border-2 border-border rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Text Detail */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-black text-primary uppercase">
                          {current.label}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-bold text-muted-foreground">
                      {current.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                      {current.desc}
                    </p>

                    <div className="p-3.5 bg-secondary/50 rounded-2xl border border-border/60 text-xs font-bold text-primary flex items-center gap-2">
                      <CheckCircle2 size={16} className="shrink-0" />
                      <span>{current.highlight}</span>
                    </div>
                  </div>

                  {/* Right Interactive Mockup Snapshot */}
                  <div className="lg:col-span-5 bg-forest text-primary-foreground rounded-2xl p-6 shadow-inner space-y-4">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3">
                      <span className="text-xs font-black text-mint">
                        {current.label} · المعاينة التشغيلية
                      </span>
                      <span className="text-[10px] font-mono text-emerald-200 bg-white/10 px-2 py-0.5 rounded">
                        {current.stats}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-emerald-100/90 font-mono leading-relaxed bg-black/25 p-4 rounded-xl border border-white/10">
                      {current.key === "learn" && (
                        <>
                          <p className="text-mint font-bold">// الفصل 05: Prompts بالعربي</p>
                          <p>✓ معمل الشغل: صياغة ردود غير مترجمة</p>
                          <p>✓ اختبار مصغر: كشف الجمل الركيكة</p>
                          <p>✓ قائمة تحقق: شروط النبرة الطبيعية</p>
                        </>
                      )}
                      {current.key === "explore" && (
                        <>
                          <p className="text-mint font-bold">// مركز القوالب التشغيلية</p>
                          <p>📂 108 قوالب في 18 فئة مهنية</p>
                          <p>👤 13 مساحة عمل مخصصة للأدوار</p>
                          <p>⚡ 12 دراسة حالة يومية (قبل / بعد)</p>
                        </>
                      )}
                      {current.key === "build" && (
                        <>
                          <p className="text-mint font-bold">// مصنع الـ Prompt التفاعلي</p>
                          <p>1. حدد الدور والهدف والسياق</p>
                          <p>2. توليد فوري لـ 4 صيغ منضبطة</p>
                          <p>3. فحص الجودة وكشف النواقص</p>
                        </>
                      )}
                      {current.key === "work" && (
                        <>
                          <p className="text-mint font-bold">// استوديو سلاسل العمل</p>
                          <p>خطوة 1: استخراج الأرقام والوقائع</p>
                          <p>خطوة 2: تحليل الأسباب والانحرافات</p>
                          <p>خطوة 3: الترتيب $\rightarrow$ صياغة التقرير</p>
                        </>
                      )}
                      {current.key === "save" && (
                        <>
                          <p className="text-mint font-bold">// التخزين والأمان المحلي</p>
                          <p>🔒 100% Client-Side LocalStorage</p>
                          <p>📁 حفظ القوالب والمسودات المفضلة</p>
                          <p>📤 تصدير واستيراد بصيغة JSON</p>
                        </>
                      )}
                      {current.key === "reuse" && (
                        <>
                          <p className="text-mint font-bold">// البحث والاسترجاع الفوري</p>
                          <p>⌨️ اختصار موحد سريع (⌘/ أو Ctrl+/)</p>
                          <p>⚡ استرجاع أي قالب خلال ثانيتين</p>
                          <p>🎯 إعادة الاستخدام المتكرر كل أسبوع</p>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end pt-1">
                      <a href="#features" className="text-xs font-bold text-mint hover:text-white transition-colors underline underline-offset-4">
                        استكشف تفاصيل الميزات ←
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}
