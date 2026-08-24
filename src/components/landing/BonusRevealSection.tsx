import { Gift, ShieldCheck, Zap, ArrowLeft, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BonusRevealSection() {
  const bonusReasons = [
    {
      icon: HeartHandshake,
      title: "استثمار مستقر طويل الأمد",
      desc: "اشتراك الـ 18 شهراً يمنحك استقراراً مستمراً في خدماتك الأساسية، بينما يمنحك الدليل المهارة العملية لاستخراج أقصى عائد يومي من هذا الاستثمار.",
    },
    {
      icon: Zap,
      title: "انطلاقة فورية دون تجارب محبطة",
      desc: "بدلاً من قضاء أشهر في المحاولة والخطأ وتعديل الردود العشوائية، تبدأ مباشرة بقوالب ومنهجية عمل مجربة ومجهزة لبيئات العمل العربية.",
    },
    {
      icon: ShieldCheck,
      title: "أمان وخصوصية تامة لبياناتك",
      desc: "منظومة مستقلة تعمل بالكامل على متصفح جهازك، تضمن حماية خصوصية شركتك وبياناتك المالية والتشغيلية بنسبة 100%.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main High-Impact Bonus Reveal Box */}
        <div className="bg-forest text-primary-foreground rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border-2 border-primary">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Core Bonus Messaging */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-mint text-xs font-black border border-white/15">
                <Gift size={14} />
                <span>المكافأة الحصرية المتضمنة مجاناً</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                ومع اشتراكك لمدة 18 شهراً.. <br />
                <span className="text-mint">دليل Nux Growth AI Guide هيكون معاك كهدية.</span>
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium max-w-2xl">
                الاشتراك يمنحك القوة التشغيلية للخدمة الأساسية، بينما يضمن لك الدليل امتلاك المنهجية 
                والقوالب الميدانية لتوجيه الذكاء الاصطناعي ومضاعفة إنتاجية عملك من اليوم الأول.
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-13 px-8 rounded-2xl bg-mint text-forest font-black text-sm hover:bg-white transition-all shadow-lg shadow-black/20"
                >
                  <a href="#offer">
                    <span>اعرف تفاصيل العرض والمكافأة</span>
                    <ArrowLeft size={16} />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: Strategic Bundle Values (Non-Duplicated) */}
            <div className="lg:col-span-5 space-y-4 bg-black/30 rounded-3xl p-6 sm:p-7 border border-white/15 text-xs">
              <span className="text-xs font-mono font-black text-mint uppercase tracking-wider block border-b border-white/10 pb-3">
                لماذا دمجنا الدليل مع اشتراك الـ 18 شهراً؟
              </span>

              <div className="space-y-4 pt-1">
                {bonusReasons.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 text-emerald-100">
                      <div className="size-8 rounded-lg bg-white/10 text-mint flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} />
                      </div>
                      <div className="space-y-1">
                        <span className="font-black text-white block text-sm">{item.title}</span>
                        <p className="text-[11px] text-emerald-200/80 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-200/90 font-mono">
                <span>الوصول للمنظومة</span>
                <span className="text-mint font-bold">مشمول بالكامل كهدية</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
