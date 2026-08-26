import { Gift, ShieldCheck, Zap, ArrowLeft, Target, TrendingUp, Lightbulb, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAMPAIGN_CONFIG, GUIDE_BONUS_SPECS } from "@/lib/subscription-config";

export function BonusRevealSection() {
  const config = CAMPAIGN_CONFIG;

  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main High-Impact Bonus Reveal Box */}
        <div className="bg-forest text-primary-foreground rounded-4xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border-2 border-primary">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Core Bonus Messaging & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-mint text-xs font-black border border-white/15">
                <Gift size={14} />
                <span>هدية مجانية مع الاشتراك</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                ومع اشتراكك في Google Pro لمدة 18 شهراً.. <br />
                <span className="text-mint">دليل Nux Growth للذكاء الاصطناعي هيكون معاك كهدية.</span>
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium max-w-2xl">
                دليل عملي شامل يساعدك على فهم أدوات الذكاء الاصطناعي (مثل Gemini Pro و Antigravity و Flow و Deep Research) 
                واستخدامها بذكاء لتحقيق أفضل النتائج اليومية ومضاعفة إنتاجيتك من أول دقيقة.
              </p>

              {/* 4 Pillars Grid matching the flyer design */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                
                <div className="bg-white/10 border border-white/15 rounded-2xl p-3 text-center space-y-1.5">
                  <Target size={18} className="text-mint mx-auto" />
                  <span className="text-[11px] font-black text-white block leading-tight">
                    مناسب للمبتدئين والمحترفين
                  </span>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-3 text-center space-y-1.5">
                  <TrendingUp size={18} className="text-mint mx-auto" />
                  <span className="text-[11px] font-black text-white block leading-tight">
                    استراتيجيات لزيادة الإنتاجية والنمو
                  </span>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-3 text-center space-y-1.5">
                  <Lightbulb size={18} className="text-mint mx-auto" />
                  <span className="text-[11px] font-black text-white block leading-tight">
                    أمثلة عملية وتطبيقات واقعية
                  </span>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-3 text-center space-y-1.5">
                  <BookOpen size={18} className="text-mint mx-auto" />
                  <span className="text-[11px] font-black text-white block leading-tight">
                    شروحات مبسطة وخطوة بخطوة
                  </span>
                </div>

              </div>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-13 px-8 rounded-2xl bg-mint text-forest font-black text-sm hover:bg-white transition-all shadow-lg shadow-black/20"
                >
                  <a href="#offer">
                    <span>احصل على باقة Google Pro + الدليل هدية</span>
                    <ArrowLeft size={16} />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: Visual 3D Book & Gift Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center justify-center gap-4">
                
                {/* 3D Book Card Rendering */}
                <div className="w-40 sm:w-48 h-56 sm:h-64 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-black border-2 border-mint/40 p-5 flex flex-col justify-between shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-mint">NUX GROWTH</span>
                    <span className="size-3.5 rounded-full bg-mint shadow-sm" />
                  </div>
                  <div className="space-y-1.5 text-center">
                    <span className="text-[11px] text-emerald-300 font-bold block">دليل</span>
                    <h4 className="text-sm sm:text-base font-black text-white leading-tight">
                      Nux Growth <br />للتعامل مع الذكاء الاصطناعي
                    </h4>
                  </div>
                  <div className="text-[9px] text-emerald-400 font-mono text-center border-t border-white/15 pt-2">
                    14 فصلاً · 108 قوالب · AIDA
                  </div>
                </div>

                {/* Gift Box Icon Badge */}
                <div className="size-20 sm:size-24 rounded-3xl bg-mint text-forest flex items-center justify-center shadow-2xl font-black shrink-0">
                  <Gift size={44} />
                </div>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl px-5 py-2 text-center text-xs text-emerald-200/90 font-bold">
                ✓ مشمول بالكامل ومجاناً مع اشتراك الـ 18 شهراً
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
