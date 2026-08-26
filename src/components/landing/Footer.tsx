import { ShieldCheck, Gift } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/lib/subscription-config";

export function Footer() {
  const config = CAMPAIGN_CONFIG;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 sm:py-16 text-xs text-muted-foreground" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Brand & Disclaimer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="flex size-9 rounded-xl bg-primary text-primary-foreground font-black items-center justify-center text-sm">
              N
            </span>
            <div className="flex flex-col text-right">
              <span className="font-black text-foreground text-sm flex items-center gap-1.5">
                NUX GROWTH
                <span className="text-primary font-mono text-xs">GOOGLE PRO</span>
              </span>
              <span className="text-[11px] font-bold">
                {config.tagline} · لمدة {config.durationMonths} شهراً
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
            <a href={config.termsUrl} className="hover:text-foreground transition-colors">
              الشروط والأحكام
            </a>
            <a href={config.privacyUrl} className="hover:text-foreground transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#offer" className="hover:text-primary transition-colors text-primary font-black">
              تفاصيل باقة العرض
            </a>
          </div>
        </div>

        {/* Slogan & Operational Disclosures */}
        <div className="space-y-3 text-[11px] leading-relaxed text-muted-foreground/80 max-w-4xl">
          <p className="font-black text-foreground text-xs">
            ✦ {config.slogan} ✦
          </p>
          <p>
            <strong>تفاصيل باقة الاشتراك:</strong> باقة Google Pro تشمل الوصول لأحدث موديلات Gemini Pro، أداة Antigravity، Nano Banana، Google Flow، Deep Research، Gemini Notebook، ومساحة تخزين سحابية 5TB مع إمكانية مشاركة المميزات مع 5 أفراد لمدة 18 شهراً.
          </p>
          <p>
            <strong>الهدية المرفقة والخصوصية:</strong> دليل Nux Growth AI Guide هو أداة ومنظومة تفاعلية مستقلة تعمل محلياً على متصفحك (100% Client-Side) لحفظ خصوصية مسوداتك وأعمالك، وتهدف لتمكينك من استخراج أعلى عائد إنتاجي من أدوات الذكاء الاصطناعي.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold border-t border-border/50">
          <span>© {currentYear} Nux Growth. جميع الحقوق محفوظة.</span>
          <span className="text-muted-foreground/70">Google Pro لمدة 18 شهراً + دليل Nux Growth هدية مجانية</span>
        </div>

      </div>
    </footer>
  );
}
