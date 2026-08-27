import { Gift, Check, ShieldCheck, Sparkles, ArrowLeft, MessageCircle, Clock, Info, Cloud, Users, Orbit, Video, Image as ImageIcon, Search, BookOpen, Target, TrendingUp, Lightbulb, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CAMPAIGN_CONFIG, GUIDE_BONUS_SPECS, getContactUrl } from "@/lib/subscription-config";
import { handleConversionClick } from "@/lib/meta-pixel";

export function OfferStackSection() {
  const config = CAMPAIGN_CONFIG;
  const contactUrl = getContactUrl();

  return (
    <section id="offer" className="py-20 sm:py-32 bg-secondary/30 border-y border-border relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="mint" className="px-4 py-1 text-xs font-black">
            باقة العرض المتكاملة
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            اشتراك <span className="text-primary">Google Pro</span> لمدة 18 شهراً + <br />
            <span>دليل Nux Growth للذكاء الاصطناعي كهدية</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            استثمار متكامل يمنحك 9 أدوات متقدمة من Google في اشتراك واحد، مع امتلاك أقوى منظومة عملية 
            لتوجيه وهندسة الذكاء الاصطناعي في بيئة عملك ودراستك.
          </p>
        </div>

        {/* Dual Offer Architecture Container */}
        <div className="max-w-5xl mx-auto bg-card border-2 border-border rounded-4xl p-6 sm:p-10 lg:p-12 editorial-card-shadow relative overflow-hidden space-y-10">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-primary via-mint to-primary" />

          {/* Offer Header with Pricing Badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
            <div className="space-y-1">
              <span className="text-xs font-mono font-black text-primary uppercase">
                باقة العرض الحصري الموحد
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                Google Pro · اشتراك {config.durationMonths} شهراً
              </h3>
              <p className="text-xs text-muted-foreground font-bold">
                {config.tagline}
              </p>
            </div>

            {/* Prominent Price Box */}
            <div className="bg-forest text-primary-foreground p-4 sm:p-5 rounded-3xl border-2 border-primary shadow-lg flex items-center justify-between sm:justify-start gap-4 self-start md:self-auto min-w-[240px]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-300 line-through opacity-75">
                    {config.originalPrice}
                  </span>
                  <span className="text-[10px] font-mono font-black bg-mint text-forest px-2 py-0.5 rounded-full">
                    وفر 300 ج.م
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                    {config.totalPrice}
                  </span>
                  <span className="text-xs text-emerald-200 font-bold">
                    فقط
                  </span>
                </div>
                <span className="text-[10px] text-emerald-300/90 block font-medium">
                  دفعة واحدة تغطي 18 شهراً بالكامل
                </span>
              </div>

              <div className="size-10 rounded-2xl bg-white/10 text-mint flex items-center justify-center shrink-0">
                <Tag size={20} />
              </div>
            </div>
          </div>

          {/* 2 Split Sections: Primary Offer & Bonus Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* 1. Primary Google Pro Column */}
            <div className="space-y-4 bg-secondary/40 border border-border rounded-3xl p-6">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Sparkles className="text-primary size-5" />
                <span className="text-sm font-black text-foreground">
                  1. اشتراك Google Pro (الأدوات الـ 9 الأساسية)
                </span>
              </div>

              <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>أحدث موديلات Gemini Pro:</strong> أقوى أداء للإجابة، الكتابة، والبرمجة.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>أداة Antigravity:</strong> تحويل الأفكار لمخططات ورسوم بيانية بثوانٍ.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Nano Banana:</strong> إنشاء صور مذهلة وواقعية بالذكاء الاصطناعي.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Google Flow:</strong> صناعة وتوليد الفيديوهات والمحتوى باحترافية.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Gemini Live:</strong> حوار صوتي مباشر وتفكير تفاعلي فوري للعصف الذهني.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Gemini Notebook:</strong> مساعد دراسي ذكي للتلخيص وتنظيم الملاحظات.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>مساحة تخزين سحابية 5TB:</strong> سعة ضخمة وآمنة لكافة مشاريعك.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>مشاركة مع 5 أفراد:</strong> استخدام مشترك للعائلة أو فريق العمل.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>أمان وخصوصية متقدمة:</strong> حماية بأحدث تقنيات Google.</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-muted-foreground italic flex items-center gap-1.5 border-t border-border/50">
                <Info size={13} className="shrink-0 text-primary" />
                <span>تغطية شاملة مستمرة طوال فترة الـ 18 شهراً.</span>
              </div>
            </div>

            {/* 2. Included Bonus Column */}
            <div className="space-y-4 bg-emerald-500/10 border-2 border-emerald-500/25 rounded-3xl p-6 text-emerald-950 dark:text-emerald-200">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-500/20">
                <Gift className="text-emerald-700 dark:text-emerald-400 size-5" />
                <span className="text-sm font-black text-emerald-900 dark:text-emerald-300">
                  2. 🎁 دليل Nux Growth للذكاء الاصطناعي (هدية مجانية)
                </span>
              </div>

              <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-medium">
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>14 فصلاً تطبيقياً تفاعلياً:</strong> مع معامل شغل واختبارات قياس.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>108 قوالب تشغيلية في 18 فئة:</strong> مع فئة 18 الحصرية لتدقيق المخرجات.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>13 مساحة عمل مخصصة للأدوار:</strong> (91 طلباً متخصصاً مع دروع الخصوصية).</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>مصنع الـ Prompt التفاعلي (4 صيغ):</strong> وفق معمارية AIDA ثمانية الطبقات.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>استوديو سلاسل العمل (Workflows):</strong> لتفكيك المهام المركبة خطوة بخطوة.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>مكتبة شخصية محلية 100%:</strong> حفظ مشفر ومباشر على متصفحك.</span>
                </div>
              </div>

              {/* 4 Pillars Mini-Badges */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-emerald-500/20 text-[10px] font-bold">
                <div className="bg-emerald-500/15 p-2 rounded-xl border border-emerald-500/20 flex items-center gap-1.5">
                  <Target size={12} className="text-emerald-700 dark:text-emerald-400" />
                  <span>للمبتدئين والمحترفين</span>
                </div>
                <div className="bg-emerald-500/15 p-2 rounded-xl border border-emerald-500/20 flex items-center gap-1.5">
                  <TrendingUp size={12} className="text-emerald-700 dark:text-emerald-400" />
                  <span>زيادة الإنتاجية والنمو</span>
                </div>
                <div className="bg-emerald-500/15 p-2 rounded-xl border border-emerald-500/20 flex items-center gap-1.5">
                  <Lightbulb size={12} className="text-emerald-700 dark:text-emerald-400" />
                  <span>أمثلة وتطبيقات واقعية</span>
                </div>
                <div className="bg-emerald-500/15 p-2 rounded-xl border border-emerald-500/20 flex items-center gap-1.5">
                  <BookOpen size={12} className="text-emerald-700 dark:text-emerald-400" />
                  <span>شروحات خطوة بخطوة</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-emerald-800 dark:text-emerald-400 font-bold">
                ✓ مشمول بالكامل كهدية مجانية متضمنة مع باقة الاشتراك.
              </div>
            </div>

          </div>

          {/* Slogan Pill */}
          <div className="text-center pt-2">
            <span className="text-xs sm:text-sm font-black text-foreground">
              ✦ {config.slogan} ✦
            </span>
          </div>

          {/* Conversational Contact Experience Block */}
          <div id="contact" className="pt-6 border-t border-border space-y-6 text-center">
            
            {/* Price Highlight Banner */}
            <div className="max-w-md mx-auto bg-emerald-500/10 border-2 border-emerald-500/25 rounded-2xl p-4 text-center space-y-1">
              <span className="text-xs font-black text-primary uppercase font-mono block">
                السعر الخاص بالعرض
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-muted-foreground line-through font-bold">
                  {config.originalPrice}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-foreground font-mono">
                  {config.totalPrice}
                </span>
                <span className="text-xs font-bold text-primary">
                  (شاملة 18 شهراً بالكامل + الدليل هدية)
                </span>
              </div>
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <h4 className="text-lg sm:text-xl font-black text-foreground">
                حابب تشترك بسعر العرض ({config.totalPrice})؟
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                تواصل معنا مباشرة وهنوضح لك خطوات تفعيل باقة Google Pro الـ 9 أدوات واستلام دليلك الميداني فوراً.
              </p>
            </div>

            {/* Primary Strategic CTA Button */}
            <div className="flex flex-col items-center space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-16 px-12 rounded-2xl bg-primary text-primary-foreground font-black text-base sm:text-lg gap-3 shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <a 
                  href={contactUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleConversionClick("Offer Stack Section")}
                >
                  <MessageCircle size={20} />
                  <span>تواصل معنا للأشتراك ب499</span>
                </a>
              </Button>

              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-bold text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-primary" />
                  <span>تفعيل مباشر لخدمات Google Pro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Gift size={14} className="text-primary" />
                  <span>استلام فوري لدليل Nux Growth كهدية</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
