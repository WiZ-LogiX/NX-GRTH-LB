import { BookOpen, Layout, Users, Activity, Edit3, FolderLock, CheckCircle2, ShieldCheck, Sparkles, Layers, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FEATURE_DEEP_DIVES } from "@/lib/landing-content";

export function FeatureDeepDivesSection() {
  const iconMap: Record<string, any> = {
    "interactive-guide": BookOpen,
    "template-library": Layout,
    "role-workspaces": Users,
    "prompt-builder": Edit3,
    "workflow-studio": Activity,
    "local-workspace": FolderLock,
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-secondary/30 border-y border-border relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-black">
            التشريح الميداني للميزات
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            الميزات الفعلية التي ستستخدمها <br />
            <span className="text-primary">في كل يوم عمل</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            تم بناء كل مكون في هذا الدليل لحل معضلة عمل حقيقية: من كتابة الإيميلات وتلخيص التقارير 
            وحسابات Excel إلى سلاسل العمل وحماية خصوصية بيانات شركتك.
          </p>
        </div>

        {/* 6 Visually Distinct Feature Blocks */}
        <div className="space-y-16 lg:space-y-24">
          {FEATURE_DEEP_DIVES.map((feat, idx) => {
            const Icon = iconMap[feat.id] ?? BookOpen;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={feat.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                
                {/* Text Content Column (7 cols) */}
                <div className={`space-y-6 ${isReversed ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"}`}>
                  
                  <div className="flex items-center gap-3">
                    <span className="size-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-black text-xs">
                      {feat.num}
                    </span>
                    <Badge variant="mint" className="text-xs font-black">
                      {feat.tag}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-snug">
                    {feat.title}
                  </h3>

                  {/* 3 Structured Framework Points */}
                  <div className="space-y-4 pt-1">
                    <div className="bg-card border border-border p-4 rounded-2xl space-y-1">
                      <span className="text-xs font-black text-primary uppercase font-mono block">
                        ماذا يقدم لك؟ (WHAT IT DOES)
                      </span>
                      <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                        {feat.whatItDoes}
                      </p>
                    </div>

                    <div className="bg-card border border-border p-4 rounded-2xl space-y-1">
                      <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase font-mono block">
                        لماذا يهمك في عملك؟ (WHY IT MATTERS)
                      </span>
                      <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                        {feat.whyItMatters}
                      </p>
                    </div>

                    <div className="bg-card border border-border p-4 rounded-2xl space-y-1">
                      <span className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase font-mono block">
                        كيف تجربه عملياً؟ (HOW IT FEELS)
                      </span>
                      <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                        {feat.howExperienced}
                      </p>
                    </div>
                  </div>

                  {/* Feature Sub-Bullets */}
                  <div className="space-y-2 pt-2">
                    {feat.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Visual UI Box Column (5 cols) */}
                <div className={`space-y-4 ${isReversed ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"}`}>
                  <div className="bg-card border-2 border-border rounded-3xl p-6 sm:p-8 editorial-card-shadow space-y-4 relative overflow-hidden">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <span className="text-xs font-black text-foreground">
                          {feat.tag}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                        ميزة مؤكدة
                      </span>
                    </div>

                    {/* Specific Simulated UI per Feature */}
                    <div className="bg-secondary/40 rounded-2xl p-4 border border-border/80 space-y-2.5 font-mono text-xs leading-relaxed">
                      {feat.id === "interactive-guide" && (
                        <>
                          <div className="text-[11px] font-black text-primary flex items-center justify-between">
                            <span>الفصل 04: أساسيات هندسة الطلب</span>
                            <span className="text-emerald-700">مكتمل 80%</span>
                          </div>
                          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-4/5 rounded-full" />
                          </div>
                          <p className="text-muted-foreground text-[11px] pt-1">
                            🧪 معمل الشغل: تصحيح 3 نماذج طلبات ضعيفة
                          </p>
                          <p className="text-muted-foreground text-[11px]">
                            🧠 Mini Quiz: اختبار فهم قيود الإخراج
                          </p>
                        </>
                      )}

                      {feat.id === "template-library" && (
                        <>
                          <div className="text-[11px] font-black text-primary flex items-center justify-between">
                            <span>فئة 02: الإيميلات والمراسلات</span>
                            <span className="text-muted-foreground">6 قوالب</span>
                          </div>
                          <div className="bg-card p-2.5 rounded-xl border border-border text-[11px] space-y-1">
                            <span className="font-bold text-foreground block">قالب اعتذار وتحديد موعد جديد:</span>
                            <p className="text-muted-foreground">
                              "اكتب إيميل لـ [الجمهور] بخصوص [الموضوع] بنبرة [النبرة] مع تحديد موعد [الموعد].."
                            </p>
                          </div>
                        </>
                      )}

                      {feat.id === "role-workspaces" && (
                        <>
                          <div className="text-[11px] font-black text-primary flex items-center justify-between">
                            <span>مساحة عمل: الـ WFM والعمليات</span>
                            <span className="text-emerald-700">درع الخصوصية نشط</span>
                          </div>
                          <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl text-[11px] text-emerald-900 dark:text-emerald-300 space-y-1">
                            <span className="font-bold block">⚠️ تنبيه خصوصية أرقام الأداء:</span>
                            <p>امسح الأرقام الحقيقية المباشرة، استخدم نسب التغير والبيانات المموهة فقط.</p>
                          </div>
                        </>
                      )}

                      {feat.id === "prompt-builder" && (
                        <>
                          <div className="text-[11px] font-black text-primary flex items-center justify-between">
                            <span>توليد الصيغ الأربعة:</span>
                            <span className="text-mint bg-forest px-2 py-0.5 rounded text-[10px]">AIDA جاهز</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[10px] text-center font-bold">
                            <div className="bg-primary/10 text-primary p-2 rounded-xl border border-primary/20">سريع (Quick)</div>
                            <div className="bg-forest text-mint p-2 rounded-xl border border-primary">قياسي (Standard)</div>
                            <div className="bg-secondary text-foreground p-2 rounded-xl border">مفصل (Detailed)</div>
                            <div className="bg-secondary text-foreground p-2 rounded-xl border">خبير (Expert)</div>
                          </div>
                        </>
                      )}

                      {feat.id === "workflow-studio" && (
                        <>
                          <div className="text-[11px] font-black text-primary flex items-center justify-between">
                            <span>سلسلة إعداد تقرير تنفيذي</span>
                            <span className="text-muted-foreground">4 خطوات</span>
                          </div>
                          <div className="space-y-1 text-[11px]">
                            <p className="text-emerald-700">1. استخراج الأرقام الأساسية ✓</p>
                            <p className="text-emerald-700">2. تحليل أسباب الانحرافات ✓</p>
                            <p className="text-primary font-bold">3. هيكلة النتائج والتوصيات (نشط)</p>
                            <p className="text-muted-foreground">4. الصياغة التنفيذية النهائية</p>
                          </div>
                        </>
                      )}

                      {feat.id === "local-workspace" && (
                        <>
                          <div className="text-[11px] font-black text-primary flex items-center justify-between">
                            <span>مكتبتي الشخصية (Local Storage)</span>
                            <span className="text-emerald-700">0 سيرفرات وسيطة</span>
                          </div>
                          <div className="bg-card p-2.5 rounded-xl border border-border text-[11px] space-y-1">
                            <p>📁 14 طلباً محفوظاً</p>
                            <p>⭐ 8 قوالب في المفضلة</p>
                            <p>📥 تصدير ملف النسخة الاحتياطية JSON</p>
                          </div>
                        </>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
