import { Sparkles, Gift, ArrowLeft, Eye, Play, BookOpen, Layers, Edit3, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CAMPAIGN_CONFIG, getContactUrl } from "@/lib/subscription-config";

export function HeroSection() {
  const contactUrl = getContactUrl();

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden editorial-hero-glow" dir="rtl">
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Commercial Hierarchy Announcement Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border-2 border-emerald-500/25 text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm font-black shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="flex size-5 rounded-full bg-emerald-600 text-white items-center justify-center text-[10px]">
              🎁
            </span>
            <span>هدية متضمنة مع اشتراك الـ 18 شهراً</span>
          </div>

          {/* Core Transformative Value Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground leading-[1.16]">
            أنت تعرف ما تريده من الـ AI.. <br className="hidden sm:inline" />
            <span className="text-primary">تعلم كيف تطلبه وتقوده باحترافية</span>
          </h1>

          {/* Clear, Human, Non-Jargon Subheadline */}
          <p className="text-base sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            دليل ميداني ومنظومة تفاعلية متكاملة لموظفي المكاتب، قادة الفرق، وأصحاب الأعمال:
            انتقل من كتابة طلبات عشوائية تضيع وقتك إلى منهجية منضبطة تخرج لك مسودات دقيقة، 
            تقارير منسقة، وإيميلات واثقة من المحاولة الأولى — واحفظ كل ما تنجزه محلياً على جهازك.
          </p>

          {/* Primary & Secondary Dual CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 pt-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-black text-sm sm:text-base gap-3 shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <a href="#offer">
                <span>اعرف تفاصيل الاشتراك والمكافأة</span>
                <ArrowLeft size={18} />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-7 rounded-2xl border-2 border-border text-foreground font-black text-sm sm:text-base gap-2.5 hover:bg-secondary transition-all"
            >
              <a href="#interactive-demo">
                <Eye size={18} className="text-primary" />
                <span>شوف الـ Guide والتجربة الحية</span>
              </a>
            </Button>
          </div>

          {/* Quick Value Proof Micro-Bullets */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs font-bold text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-primary" />
              <span>14 فصلاً تطبيقياً تفاعلياً</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-primary" />
              <span>108 قوالب تشغيلية جاهزة</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-primary" />
              <span>13 مساحة عمل للأدوار الحقيقية</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-primary" />
              <span>أمان وحفظ محلي 100% على جهازك</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive UI Preview Mockup */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-card border-2 border-border p-4 sm:p-8 editorial-card-shadow overflow-hidden group">
            
            {/* Top Window Chrome Bar */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-rose-400" />
                <div className="size-3 rounded-full bg-amber-400" />
                <div className="size-3 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono font-bold text-muted-foreground mr-3">
                  nux-growth-ai-guide.app · المنظومة التفاعلية
                </span>
              </div>
              <Badge variant="mint" className="text-[11px] font-black py-0.5">
                مساحة العمل الميدانية
              </Badge>
            </div>

            {/* Simulated Ecosystem Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              
              {/* Left Column: Live Workbench Status */}
              <div className="md:col-span-4 space-y-3.5">
                <div className="bg-secondary/40 border border-border rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-foreground">
                    <BookOpen size={15} className="text-primary" />
                    <span>الفصل 04: أساسيات هندسة الطلب</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    إرشادات الصياغة باللغة العربية ومعايير النبرة الطبيعية دون ركاكة.
                  </p>
                </div>

                <div className="bg-secondary/40 border border-border rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-foreground">
                    <Layers size={15} className="text-primary" />
                    <span>مكتبة القوالب التشغيلية</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    نماذج جاهزة للمراسلات والتقارير وفئة مخصصة لفحص واختبار المخرجات.
                  </p>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-emerald-900 dark:text-emerald-300">
                    <ShieldCheck size={15} className="text-emerald-600" />
                    <span>بيئة العمل الخاصة</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 dark:text-emerald-400 leading-relaxed font-medium">
                    تخزين محلي 100% على متصفحك دون إرسال مسوداتك لأي خوادم خارجية.
                  </p>
                </div>
              </div>

              {/* Right Column: Live AIDA Builder Snapshot */}
              <div className="md:col-span-8 bg-forest text-primary-foreground rounded-2xl p-5 sm:p-6 space-y-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center gap-2">
                    <Edit3 size={16} className="text-mint" />
                    <span className="text-xs font-black text-white">
                      مصنع الـ Prompt · معمارية AIDA ثمانية الطبقات
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-white/10 text-mint px-2 py-0.5 rounded-md border border-white/10">
                    4 صيغ فورية
                  </span>
                </div>

                {/* Layer Badges Row */}
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                  {["ROLE", "GOAL", "CONTEXT", "TASK", "CONSTRAINTS", "OUTPUT FORMAT"].map((layer) => (
                    <span
                      key={layer}
                      className="px-2 py-0.5 rounded-md bg-white/10 text-emerald-200 border border-white/10"
                    >
                      {layer}
                    </span>
                  ))}
                </div>

                {/* Code Snippet Box */}
                <div className="bg-black/30 rounded-xl p-3.5 border border-white/10 font-mono text-[11px] leading-relaxed text-emerald-100/90 text-right space-y-1.5">
                  <p className="text-mint font-bold"># مثال: تحويل طلب عشوائي لطلب تنفيذي منضبط</p>
                  <p><span className="text-emerald-400">Role:</span> خبير تواصل مهني وإدارة مشاريع</p>
                  <p><span className="text-emerald-400">Goal:</span> صياغة رسالة اعتذار رسمية تحافظ على ثقة العميل</p>
                  <p><span className="text-emerald-400">Context:</span> تأخر تسليم التقرير الدوري 48 ساعة لخلل في خوادم البيانات</p>
                  <p><span className="text-emerald-400">Constraints:</span> بدون لوم دفاعي، نبرة مسؤولة، تحديد موعد مؤكد</p>
                  <p><span className="text-emerald-400">Output:</span> بريد مهني موجز من 4 أجزاء وخطوة متابعة واضحة</p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-emerald-200/80 pt-1">
                  <span>القاعدة الذهبية: ولد بالذكاء الاصطناعي.. وراجع قبل الاستخدام</span>
                  <a href="#interactive-demo" className="text-mint font-bold underline underline-offset-4 hover:text-white transition-colors">
                    جرّب بنفسك الآن ←
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
