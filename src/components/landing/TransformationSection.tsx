import { useState } from "react";
import { Lightbulb, Brain, Layers, Wand2, ShieldCheck, Bookmark, RotateCcw, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TRANSFORMATION_STEPS } from "@/lib/landing-content";

export function TransformationSection() {
  const [activeStep, setActiveStep] = useState(2); // Default to STRUCTURE

  const iconMap: Record<string, any> = {
    Lightbulb,
    Brain,
    Layers,
    Wand2,
    ShieldCheck,
    Bookmark,
    RotateCcw,
  };

  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="mint" className="px-3.5 py-1 text-xs font-black">
            التحول المنهجي الميداني
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            من السؤال العشوائي في صندوق الشات.. <br />
            <span className="text-primary">إلى منظومة عمل متكررة وموثوقة</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            الفرق بين من يرى الذكاء الاصطناعي مجرد «لعبة تسلية» ومن يحوله إلى «مضاعف إنتاجية» 
            هو المرور عبر 7 مراحل واضحة تحول الفكرة إلى مسودة قابلة للاستخدام وإعادة الاستثمار.
          </p>
        </div>

        {/* 7-Step Interactive Visual Flow */}
        <div className="space-y-8">
          
          {/* Step Bubbles Grid / Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {TRANSFORMATION_STEPS.map((step, idx) => {
              const Icon = iconMap[step.icon] ?? Sparkles;
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl text-right transition-all flex flex-col justify-between space-y-3 border-2 cursor-pointer ${
                    isActive
                      ? "bg-forest text-primary-foreground border-primary shadow-lg scale-[1.03]"
                      : "bg-card border-border hover:border-primary/40 text-foreground hover:bg-secondary/40"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-xs font-mono font-black size-7 rounded-lg flex items-center justify-center ${
                        isActive ? "bg-mint text-forest" : "bg-primary/10 text-primary"
                      }`}
                    >
                      {step.step}
                    </span>
                    <Icon size={16} className={isActive ? "text-mint" : "text-muted-foreground"} />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold block opacity-75">
                      {step.en}
                    </span>
                    <h4 className="text-sm font-black tracking-tight leading-snug">
                      {step.ar}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          {(() => {
            const current = TRANSFORMATION_STEPS[activeStep]!;
            const Icon = iconMap[current.icon] ?? Sparkles;

            return (
              <div className="bg-card border-2 border-border rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-primary via-mint to-primary" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-black text-primary uppercase">
                          المرحلة {current.step} · {current.en}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                          {current.ar}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                      {current.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline" className="text-xs font-bold bg-secondary">
                        مبني في صلب الدليل
                      </Badge>
                      <Badge variant="mint" className="text-xs font-bold">
                        تطبيق فوري
                      </Badge>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-secondary/60 rounded-2xl p-5 border border-border space-y-3 text-xs">
                    <span className="font-black text-foreground block text-sm">
                      ما الذي يتغير معك هنا؟
                    </span>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>تتوقف عن إعادة صياغة نفس الطلب من الصفر في كل مرة.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>تعرف متى تطلب بالعربي الطبيعي ومتى تحتاج للإنجليزي.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>تحمي أسرار عملك وتفحص الأرقام قبل الاعتماد عليها.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

        {/* Golden Safety Rule Banner */}
        <div className="mt-12 bg-forest text-primary-foreground rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-mint text-xs font-black">
              <ShieldCheck size={14} />
              <span>القاعدة الميدانية الحاكمة</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              «Generate with AI. Verify before using.»
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl">
              الذكاء الاصطناعي أداة لتوفير وقت البداية وإنتاج المسودات، وليس بديلاً عن حكمك وخبرتك المهنية.
            </p>
          </div>

          <div className="shrink-0">
            <Badge variant="mint" className="text-xs px-4 py-2 font-black shadow-xs">
              فئة 18 لتدقيق المخرجات
            </Badge>
          </div>
        </div>

      </div>
    </section>
  );
}
