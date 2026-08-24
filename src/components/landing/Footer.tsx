import { ShieldCheck, Gift } from "lucide-react";
import { SUBSCRIPTION_CONFIG } from "@/lib/subscription-config";

export function Footer() {
  const config = SUBSCRIPTION_CONFIG;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 sm:py-16 text-xs text-muted-foreground" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Brand & Disclaimer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="flex size-8 rounded-xl bg-primary text-primary-foreground font-black items-center justify-center text-sm">
              N
            </span>
            <div className="flex flex-col text-right">
              <span className="font-black text-foreground text-sm">
                NUX GROWTH AI GUIDE
              </span>
              <span className="text-[11px] font-bold">
                الدليل الميداني لهندسة وتطبيقات الـ Prompt
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
              تفاصيل العرض
            </a>
          </div>
        </div>

        {/* Operational & Safety Disclosures */}
        <div className="space-y-3 text-[11px] leading-relaxed text-muted-foreground/80 max-w-4xl">
          <p>
            <strong>إخلاء المسؤولية وقواعد الاستخدام:</strong> دليل Nux Growth AI Guide هو أداة ومنظومة إرشادية وتفاعلية تهدف لتطوير المهارات العملية في كتابة وتوجيه طلبات الذكاء الاصطناعي. النماذج اللغوية قد تولد افتراضات أو أخطاء، وتقع المسؤولية المهنية النهائية على المستخدم البشري في مراجعة وتدقيق كافة المخرجات قبل الاعتماد عليها في بيئة العمل.
          </p>
          <p>
            <strong>حماية الخصوصية:</strong> لا يقوم هذا التطبيق بجمع أو حفظ مسوداتك أو طلباتك على أي خوادم خارجية؛ جميع البيانات تحفظ محلياً على متصفح جهازك (LocalStorage) فقط.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold border-t border-border/50">
          <span>© {currentYear} Nux Growth AI Guide. جميع الحقوق محفوظة.</span>
          <span className="text-muted-foreground/70">مشمول كهدية ومكافأة مع اشتراك الـ 18 شهراً</span>
        </div>

      </div>
    </footer>
  );
}
