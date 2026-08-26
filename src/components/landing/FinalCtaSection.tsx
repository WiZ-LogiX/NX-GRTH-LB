import { Sparkles, MessageCircle, ShieldCheck, Gift, CheckCircle2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAMPAIGN_CONFIG, getContactUrl } from "@/lib/subscription-config";

export function FinalCtaSection() {
  const config = CAMPAIGN_CONFIG;
  const contactUrl = getContactUrl();

  return (
    <section id="final-cta" className="py-20 sm:py-32 bg-forest text-primary-foreground relative overflow-hidden" dir="rtl">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,oklch(0.42_0.13_155/0.25),transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Transformative Quote Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-mint text-xs font-black border border-white/15">
          <Sparkles size={14} />
          <span>{config.slogan}</span>
        </div>

        {/* Big Resonating Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.18]">
          كل ما تحتاجه من Google.. <br className="hidden sm:inline" />
          <span className="text-mint font-serif italic">في اشتراك واحد لمدة 18 شهراً</span>
        </h2>

        {/* Subheadline Reassurance */}
        <p className="text-base sm:text-xl text-emerald-100/90 font-medium max-w-3xl mx-auto leading-relaxed">
          احصل على أدوات الذكاء الاصطناعي والسحابة الـ 9 (Gemini Pro، Antigravity، Nano Banana، Flow، Deep Research، و 5TB) 
          مع <strong>دليل Nux Growth الميداني</strong> كهدية مجانية مرافقة لتطوير مهاراتك اليومية.
        </p>

        {/* Price & Dual Stack Summary Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-3 bg-black/40 border border-white/15 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white shadow-inner">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">●</span>
              <span>اشتراك Google Pro (18 شهراً)</span>
            </div>
            <span className="text-white/40">+</span>
            <div className="flex items-center gap-1.5 text-mint">
              <span>🎁 دليل Nux Growth هدية</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-mint/15 border border-mint/30 px-5 py-3 rounded-2xl text-white font-mono text-sm font-bold">
            <span className="line-through text-emerald-300 text-xs">{config.originalPrice}</span>
            <span className="text-mint text-base font-black">{config.totalPrice}</span>
            <span className="text-[11px] text-emerald-200">(لفترة محدودة)</span>
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
              <span>تواصل معنا للاشتراك بـ {config.totalPrice}</span>
            </a>
          </Button>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-bold text-emerald-200/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-mint" />
              <span>أمان وخصوصية متقدمة من Google</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gift size={14} className="text-mint" />
              <span>تفعيل فوري للأدوات والدليل الهدية</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
