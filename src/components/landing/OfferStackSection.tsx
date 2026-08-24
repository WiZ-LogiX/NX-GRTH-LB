import { Gift, Check, ShieldCheck, Sparkles, ArrowLeft, MessageCircle, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CAMPAIGN_CONFIG, GUIDE_BONUS_SPECS, getContactUrl } from "@/lib/subscription-config";

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
            اشتراك الـ 18 شهراً + <br />
            <span className="text-primary">دليل Nux Growth AI Guide كهدية</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            استثمار طويل المدى يمنحك الاستقرار في خدماتك الأساسية مع امتلاك أقوى منظومة عملية 
            لتوجيه وهندسة الذكاء الاصطناعي في بيئة عملك.
          </p>
        </div>

        {/* Dual Offer Architecture Container */}
        <div className="max-w-4xl mx-auto bg-card border-2 border-border rounded-4xl p-6 sm:p-10 lg:p-12 editorial-card-shadow relative overflow-hidden space-y-10">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-primary via-mint to-primary" />

          {/* Offer Header & Term Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-black text-primary uppercase">
                العرض الحصري الموحد
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                اشتراك لمدة {config.durationMonths} شهراً
              </h3>
            </div>

            <Badge variant="forest" className="text-xs px-4 py-2 font-black self-start sm:self-auto">
              تغطية شاملة لـ 18 شهراً
            </Badge>
          </div>

          {/* 2 Split Sections: Primary Offer & Bonus Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* 1. Primary Subscription Column */}
            <div className="space-y-4 bg-secondary/40 border border-border rounded-3xl p-6">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Clock className="text-primary size-5" />
                <span className="text-sm font-black text-foreground">
                  1. اشتراك الـ 18 شهراً (الخدمة الأساسية)
                </span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>وصول كامل ومستمر لكافة خدمات الاشتراك طوال الـ 18 شهراً.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>تحديثات مستمرة ودعم فني دوري طوال فترة سريان الاشتراك.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>استقرار في الخدمة دون الحاجة للتجديد الشهري المتكرر.</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-muted-foreground italic flex items-center gap-1.5">
                <Info size={13} className="shrink-0 text-primary" />
                <span>تكتمل تفاصيل الاشتراك عبر التواصل المباشر مع فريقنا.</span>
              </div>
            </div>

            {/* 2. Included Bonus Column */}
            <div className="space-y-4 bg-emerald-500/10 border-2 border-emerald-500/25 rounded-3xl p-6 text-emerald-950 dark:text-emerald-200">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-500/20">
                <Gift className="text-emerald-700 dark:text-emerald-400 size-5" />
                <span className="text-sm font-black text-emerald-900 dark:text-emerald-300">
                  2. 🎁 Nux Growth AI Guide (هدية متضمنة)
                </span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>14 فصلاً تطبيقياً تفاعلياً مع معامل شغل واختبارات.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>108 قوالب تشغيلية مقسمة على 18 فئة مع فئة 18 للتدقيق.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>13 مساحة عمل مخصصة للأدوار (91 طلباً مع دروع الخصوصية).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>مصنع الـ Prompt التفاعلي (4 صيغ) + استوديو سلاسل العمل.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                  <Check size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>مكتبة شخصية محلية 100% تحفظ كل شيء على متصفحك بأمان.</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-emerald-800 dark:text-emerald-400 font-bold">
                ✓ متضمنة بالكامل مع اشتراكك بدون أي رسوم إضافية.
              </div>
            </div>

          </div>

          {/* Conversational Contact Experience Block */}
          <div id="contact" className="pt-8 border-t border-border space-y-5 text-center">
            
            <div className="max-w-xl mx-auto space-y-2">
              <h4 className="text-lg sm:text-xl font-black text-foreground">
                حابب تعرف تفاصيل الاشتراك؟
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                تواصل معنا مباشرة وهنوضح لك كافة تفاصيل وبنود الاشتراك وكيفية تفعيل المنظومة واستلام دليلك الميداني فوراً.
              </p>
            </div>

            {/* Primary Strategic CTA Button */}
            <div className="flex flex-col items-center space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-16 px-12 rounded-2xl bg-primary text-primary-foreground font-black text-base sm:text-lg gap-3 shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <a href={contactUrl}>
                  <MessageCircle size={20} />
                  <span>تواصل معنا</span>
                </a>
              </Button>

              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-bold text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-primary" />
                  <span>تواصل مباشر للإجابة عن استفساراتك</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-primary" />
                  <span>تفعيل فوري للدليل مع الاشتراك</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
