import { MessageSquareWarning, RefreshCw, ShieldAlert, ArrowDown, HelpCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProblemSection() {
  const problems = [
    {
      icon: MessageSquareWarning,
      tag: "فجوة التعبير والصياغة",
      title: "أنت تعرف ما تريده بالضبط.. لكن الطلب يخرج ناقصاً",
      description:
        "تفتح أداة الذكاء الاصطناعي وفي ذهنك نتيجة معينة، فتكتب سطراً أو سطرين مختصرين. يفهم النموذج كلامك بالمعنى العام، فيعطيك إجابة أكاديمية طويلة وباردة لا تصلح للاستخدام في عملك.",
      quote: '«كتبت له: اكتب إيميل اعتذار لعميل.. فطلعلي رد غريب ومليء بعبارات منمقة لا تناسب طبيعة شركتنا.»',
    },
    {
      icon: RefreshCw,
      tag: "إرهاق محاولات التصحيح",
      title: "تضيع 20 دقيقة في تعديل الرد بدلاً من توفير الوقت",
      description:
        "بدلاً من أن ينجز الـ AI المهمة في دقيقة، تدخل في دوامة من الرسائل التصحيحية: «لا مش كده»، «قصّر شوية»، «خلي النبرة أحسن».. لتكتشف في النهاية أنك استهلكت وقتاً أطول مما لو كتبتها بنفسك.",
      quote: '«كنت فاكر إني هوفر وقت، لقيت نفسي بقضي نص ساعة بعدل في المخرجات وبمسح كلام مش مظبوط.»',
    },
    {
      icon: ShieldAlert,
      tag: "مخاطر الخصوصية والهلوسة",
      title: "التردد في مشاركة بيانات العمل والخوف من الخطأ",
      description:
        "تخاف أن ترفع أرقاماً أو أسماء حقيقية فتخترق خصوصية شركتك، وتخشى في نفس الوقت أن يهلوس النموذج بأرقام أو معلومات مخترعة ترسلها لمديرك أو عميلك دون أن تلاحظ.",
      quote: '«الرد كان شكله احترافي وواثق جداً، لكن الأرقام اللي جواه كانت متألفة وغير مطابقة للجدول الحقيقي.»',
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-secondary/30 border-y border-border relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-black">
            المعضلة اليومية الحقيقية
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            الفجوة ليست في قدرة الـ AI.. <br />
            <span className="text-primary">الفجوة في لغة التواصل بينكما</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            أغلب الذين جربوا الذكاء الاصطناعي لمرة واحدة أصيبوا بالإحباط وقالوا: 
            «ما الفائدة إذن؟». المشكلة لم تكن في الأداة، بل في أن أحداً لم يمنحهم طريقة منضبطة للطلب والمراجعة.
          </p>
        </div>

        {/* 3 Real Workplace Friction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.tag}
                className="bg-card border-2 border-border rounded-3xl p-6 sm:p-8 space-y-5 editorial-card-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-muted-foreground bg-secondary px-2.5 py-1 rounded-lg">
                      {prob.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-foreground leading-snug">
                    {prob.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/70">
                  <p className="text-xs font-bold text-foreground/80 italic bg-secondary/50 p-3.5 rounded-2xl border border-border/40 leading-relaxed">
                    {prob.quote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Reassuring Core Insight Box */}
        <div className="mt-14 max-w-3xl mx-auto bg-card border-2 border-primary/25 rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-sm">
          <span className="text-xs font-black text-primary uppercase tracking-widest block font-mono">
            الخلاصة الإيجابية
          </span>
          <p className="text-base sm:text-xl font-black text-foreground leading-relaxed">
            «أنت لست بحاجة لدراسة الهندسة أو حفظ مصطلحات معقدة. كل ما تحتاجه هو إطار عملي بسيط 
            يرتب أفكارك ويحدد سياقك ويضع قيوداً تمنع النموذج من التخمين.»
          </p>
          <div className="pt-2 flex items-center justify-center gap-1.5 text-xs font-bold text-muted-foreground">
            <span>وهنا يأتي دور التحول المنهجي الذي يقدمه دليل Nux Growth</span>
            <ArrowDown size={14} className="text-primary animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}
