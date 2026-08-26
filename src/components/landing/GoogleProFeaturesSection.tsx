import { 
  Sparkles, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Cloud, 
  Search, 
  Video, 
  Image as ImageIcon, 
  Orbit, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Gift, 
  Check, 
  ArrowLeft,
  MessageCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CAMPAIGN_CONFIG, GUIDE_BONUS_SPECS, getContactUrl } from "@/lib/subscription-config";

export function GoogleProFeaturesSection() {
  const config = CAMPAIGN_CONFIG;
  const contactUrl = getContactUrl();

  const row1Tools = config.googleProTools.slice(0, 5); // Antigravity, Nano Banana, Google Flow, Deep Research, Gemini Pro
  const row2Tools = config.googleProTools.slice(5, 9); // Security, Family, Notebook, Storage 5TB

  return (
    <section id="google-pro" className="py-20 sm:py-32 bg-secondary/30 border-y border-border relative overflow-hidden" dir="rtl">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flyer Header Card Container */}
        <div className="bg-card border-2 border-border rounded-4xl p-6 sm:p-10 lg:p-14 editorial-card-shadow relative overflow-hidden space-y-12">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-primary via-mint to-primary" />

          {/* Top Brand & Header Section matching the flyer */}
          <div className="text-center max-w-3xl mx-auto space-y-5">
            
            {/* Butterfly / Leaf Brand Mark */}
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 100 80" className="w-12 h-10 fill-primary" aria-hidden="true">
                  <path d="M50 40 C45 25, 20 15, 10 30 C0 45, 15 65, 45 48 C48 46, 50 42, 50 40 Z" opacity="0.9" />
                  <path d="M50 40 C55 25, 80 15, 90 30 C100 45, 85 65, 55 48 C52 46, 50 42, 50 40 Z" opacity="0.9" />
                  <path d="M48 42 C40 50, 25 55, 20 70 C15 80, 35 85, 48 58 Z" opacity="0.75" />
                  <path d="M52 42 C60 50, 75 55, 80 70 C85 80, 65 85, 52 58 Z" opacity="0.75" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-foreground uppercase font-mono">
                NUX GROWTH
              </span>
            </div>

            {/* Google Pro Big Title */}
            <h2 className="text-5xl sm:text-7xl font-black text-foreground tracking-tight leading-none">
              Google <span className="text-primary font-serif italic">Pro</span>
            </h2>

            {/* Tagline Pill */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-500/10 border-2 border-emerald-500/25 text-emerald-950 dark:text-emerald-300 text-xs sm:text-sm font-black shadow-xs">
              <span>{config.tagline}</span>
            </div>

            {/* Duration Term with Star Accents */}
            <div className="flex items-center justify-center gap-3 text-lg sm:text-2xl font-black text-foreground pt-1">
              <span className="text-primary">✦</span>
              <span>لمدة {config.durationMonths} شهر</span>
              <span className="text-primary">✦</span>
            </div>

            {/* Section Sub-Title */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-widest pt-2">
              <span className="text-primary">✦</span>
              <span>مميزات الاشتراك</span>
              <span className="text-primary">✦</span>
            </div>
          </div>

          {/* 9 Feature Cards (5 on Row 1 + 4 on Row 2) */}
          <div className="space-y-6">
            
            {/* ROW 1: 5 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* 1. Antigravity */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
                    <Orbit size={28} className="text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-base font-black text-foreground">
                    Antigravity
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  تحويل الأفكار إلى مخططات ورسوم بيانية احترافية بثوانٍ.
                </p>
              </div>

              {/* 2. Nano Banana */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    <ImageIcon size={28} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-foreground">
                      Nano Banana
                    </h3>
                    <span className="text-[11px] font-bold text-primary block">
                      لإنشاء الصور
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  إنشاء صور مذهلة وواقعية بدقة عالية من خلال الذكاء الاصطناعي.
                </p>
              </div>

              {/* 3. Google Flow */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
                    <Video size={28} className="text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-foreground">
                      Google Flow
                    </h3>
                    <span className="text-[11px] font-bold text-primary block">
                      لصناعة الفيديو والمحتوى
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  أداة متقدمة لإنشاء فيديوهات احترافية بسهولة وبجودة عالية.
                </p>
              </div>

              {/* 4. Deep Research */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    <Search size={28} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-foreground">
                      Deep Research
                    </h3>
                    <span className="text-[11px] font-bold text-primary block">
                      للأبحاث والتقارير
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  أبحاث متعمقة وذكية تقارير احترافية بدقة وسرعة فائقة.
                </p>
              </div>

              {/* 5. Gemini Pro */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
                    <Sparkles size={28} className="text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-base font-black text-foreground">
                    أحدث موديلات Gemini Pro
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  أقوى أداء للذكاء الاصطناعي للإجابة، الكتابة، البرمجة والإبداع.
                </p>
              </div>

            </div>

            {/* ROW 2: 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* 6. Security */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    <ShieldCheck size={28} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-base font-black text-foreground">
                    أمان وخصوصية متقدمة
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  حماية بياناتك بأحدث تقنيات الأمان من Google وضمن خصوصيتك.
                </p>
              </div>

              {/* 7. Family Sharing */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
                    <Users size={28} className="text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-base font-black text-foreground">
                    مشاركة المميزات مع 5 أفراد
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  شارك اشتراكك مع العائلة أو فريقك واستمتعوا بالمميزات معاً.
                </p>
              </div>

              {/* 8. Gemini Notebook */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    <BookOpen size={28} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-foreground">
                      Gemini Notebook
                    </h3>
                    <span className="text-[11px] font-bold text-primary block">
                      مساعدك الدراسي
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  مساعد ذكي للطلاب في تلخيص، تنظيم، وكتابة الملاحظات.
                </p>
              </div>

              {/* 9. Storage 5TB */}
              <div className="bg-background/80 border-2 border-border/80 rounded-3xl p-5 text-center space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="space-y-3">
                  <div className="size-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 relative group-hover:scale-105 transition-transform">
                    <Cloud size={28} className="text-emerald-700 dark:text-emerald-400" />
                    <span className="absolute -bottom-1 bg-primary text-primary-foreground text-[9px] font-mono font-black px-1.5 py-0.2 rounded-full">
                      5TB
                    </span>
                  </div>
                  <h3 className="text-base font-black text-foreground">
                    مساحة تخزين 5TB
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  تخزين سحابي آمن وكبير لكل ملفاتك وصورك ومشاريعك.
                </p>
              </div>

            </div>

          </div>

          {/* Integrated Bonus Card matching lower flyer section */}
          <div className="bg-forest text-primary-foreground rounded-3xl p-6 sm:p-10 border-2 border-primary relative overflow-hidden shadow-xl space-y-8">
            <div className="absolute top-0 right-0 w-72 h-72 bg-mint/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual 3D Book Mockup & Gift */}
              <div className="lg:col-span-4 flex items-center justify-center gap-4 order-2 lg:order-1">
                {/* 3D Book Card Rendering */}
                <div className="w-36 sm:w-44 h-52 sm:h-60 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-black border-2 border-mint/40 p-4 flex flex-col justify-between shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold text-mint">NUX GROWTH</span>
                    <span className="size-3 rounded-full bg-mint" />
                  </div>
                  <div className="space-y-1 text-center">
                    <span className="text-[10px] text-emerald-300 font-bold block">دليل</span>
                    <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                      Nux Growth <br />للتعامل مع الذكاء الاصطناعي
                    </h4>
                  </div>
                  <div className="text-[8px] text-emerald-400 font-mono text-center border-t border-white/10 pt-1">
                    نسخة تفاعلية ميدانية
                  </div>
                </div>

                {/* Gift Box Icon Badge */}
                <div className="size-16 sm:size-20 rounded-2xl bg-mint text-forest flex items-center justify-center shadow-lg font-black shrink-0">
                  <Gift size={36} />
                </div>
              </div>

              {/* Right Column: Bonus Description & 4 Pillars */}
              <div className="lg:col-span-8 space-y-5 text-center lg:text-right order-1 lg:order-2">
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-mint text-xs font-black border border-white/15">
                  <Gift size={14} />
                  <span>هدية مجانية مع الاشتراك</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  دليل Nux Growth للتعامل مع الذكاء الاصطناعي
                </h3>

                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium max-w-2xl">
                  دليل عملي شامل يساعدك على فهم أدوات الذكاء الاصطناعي واستخدامها بذكاء لتحقيق أفضل النتائج.
                </p>

                {/* 4 Pillars Badges Grid */}
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

              </div>

            </div>

          </div>

          {/* Slogan Banner matching footer of flyer */}
          <div className="pt-2 text-center">
            <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-base font-black text-foreground">
              <span className="text-primary">✦</span>
              <span>{config.slogan}</span>
              <span className="text-primary">✦</span>
            </div>
          </div>

          {/* Contact Action Bar with Price */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs text-muted-foreground line-through font-bold">
                  {config.originalPrice}
                </span>
                <span className="text-lg sm:text-xl font-black text-foreground font-mono">
                  {config.totalPrice}
                </span>
                <Badge variant="mint" className="text-[10px] font-black">
                  وفر 300 ج.م
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground font-medium">
                تغطية شاملة لـ 18 شهراً للأدوات الـ 9 + دليل Nux Growth AI Guide هدية مجانية.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="h-13 px-8 rounded-2xl bg-primary text-primary-foreground font-black text-sm gap-2 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-[1.02] shrink-0"
            >
              <a href={contactUrl}>
                <MessageCircle size={16} />
                <span>تواصل معنا للاشتراك بـ {config.totalPrice}</span>
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
