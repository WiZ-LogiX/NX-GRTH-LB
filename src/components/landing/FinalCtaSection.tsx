import { Sparkles, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getContactUrl } from "@/lib/subscription-config";

export function FinalCtaSection() {
  const contactUrl = getContactUrl();

  return (
    <section id="final-cta" className="py-20 sm:py-32 bg-forest text-primary-foreground relative overflow-hidden" dir="rtl">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,oklch(0.42_0.13_155/0.25),transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Transformative Quote Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-mint text-xs font-black border border-white/15">
          <Sparkles size={14} />
          <span>ابدأ قيادة الـ AI في عملك اليوم</span>
        </div>

        {/* Big Resonating Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.18]">
          أنت لا تحتاج أن تصبح خبيراً في الـ AI.. <br className="hidden sm:inline" />
          <span className="text-mint">أنت تحتاج فقط طريقة أفضل للعمل معه.</span>
        </h2>

        {/* Subheadline Reassurance */}
        <p className="text-base sm:text-xl text-emerald-100/90 font-medium max-w-3xl mx-auto leading-relaxed">
          تواصل معنا لمعرفة تفاصيل اشتراك الـ 18 شهراً واستلام منظومة Nux Growth AI Guide كاملة 
          كهدية مرافقة لتطوير مهاراتك وإنتاجية فريقك اليومية.
        </p>

        {/* Dual Stack Summary Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-black/30 border border-white/15 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white shadow-inner">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">●</span>
            <span>اشتراك لمدة 18 شهراً</span>
          </div>
          <span className="text-white/40">+</span>
          <div className="flex items-center gap-1.5 text-mint">
            <span>🎁 Nux Growth AI Guide التفاعلي (هدية متضمنة)</span>
          </div>
        </div>

        {/* Primary High-Impact CTA */}
        <div className="pt-4 flex flex-col items-center space-y-4">
          <Button
            asChild
            size="lg"
            className="h-16 px-12 rounded-2xl bg-mint text-forest font-black text-base sm:text-lg gap-3 hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-black/40"
          >
            <a href={contactUrl}>
              <MessageCircle size={20} />
              <span>تواصل معنا</span>
            </a>
          </Button>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-bold text-emerald-200/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-mint" />
              <span>خصوصية محلية 100%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-mint" />
              <span>وصول فوري لكافة الأدوات والقوالب</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
