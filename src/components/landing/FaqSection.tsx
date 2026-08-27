import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      q: "هل هذا الدليل مجرد كتاب إلكتروني أو ملف PDF؟",
      a: "إطلاقاً. Nux Growth AI Guide هو تطبيق ومنظومة عمل تفاعلية متكاملة. يحتوي على كتاب تفاعلي بـ 14 فصلاً تطبيقياً، ومصنع لبناء وتوليد الـ Prompts، ومكتبة قوالب تشغيلية (108 قوالب)، ومساحات عمل لـ 13 دوراً وظيفياً، واستوديو لسلاسل العمل، ومساحة تخزين محلية خاصة بك على جهازك.",
    },
    {
      q: "هل أحتاج لأي خبرة سابقة في البرمجة أو الذكاء الاصطناعي للاستفادة منه؟",
      a: "لا على الإطلاق. الدليل مصمم خصيصاً للموظفين وأصحاب الأعمال والمهنيين الذين يستخدمون الكمبيوتر أو الموبايل في عملهم اليومي. لا توجد أي برمجة أو APIs أو رياضيات معقدة، والتركيز بالكامل على المهام الواقعية كالإيميلات والتقارير وإكسل والاجتماعات.",
    },
    {
      q: "مع أي أدوات ذكاء اصطناعي يعمل هذا الدليل وقوالبه؟",
      a: "يعمل الدليل وقوالبه ومصنع الـ Prompt مع كافة نماذج الذكاء الاصطناعي الرائدة في السوق (مثل ChatGPT، Claude، Google Gemini، Microsoft Copilot، Perplexity، و NotebookLM). يركز الدليل على المنهجية الهندسية الشاملة التي تجعل طلبك فعالاً ومفهوماً لدى أي نموذج.",
    },
    {
      q: "هل بياناتي أو أسرار عملي يتم مشاركتها أو تخزينها على أي خوادم خارجية؟",
      a: "نهائياً. المنظومة مبنية بمعمارية عميل خالصة (100% Client-Side). كل ما تكتبه أو تخصصه أو تحفظه من طلبات ومسودات يتم تخزينه محلياً على متصفح جهازك فقط عبر LocalStorage، مع توفير خاصية تصدير واستيراد بياناتك محلياً كملف JSON.",
    },
    {
      q: "كيف يضمن الدليل عدم ارتكاب أخطاء أو هلوسات أثناء العمل مع الـ AI؟",
      a: "المنظومة قائمة على ركيزة أمان صارمة: «Generate with AI. Verify before using». يتضمن الدليل فصلاً كاملاً عن إدارة المخاطر وتدقيق الهلوسات (الفصل 10)، بالإضافة إلى «فئة 18» المخصصة في مكتبة القوالب لاختبار افتراضات النماذج وفحص مخرجاتها قبل إرسالها لمديرك أو عملائك.",
    },
    {
      q: "كيف يتم تفعيل الباقة والحصول على الدليل كهدية؟",
      a: "الحصول على العرض يتم بخطوات بسيطة عبر التواصل المباشر. اضغط على زر «تواصل معنا»، وسيتحدث معك فريقنا لتوضيح كافة تفاصيل الباقة وإتمام الإجراءات معك وتفعيل وصولك المباشر لمنظومة Nux Growth AI Guide كاملة كهدية متضمنة.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-background relative" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-black">
            الأسئلة الشائعة
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            كل ما تحتاج معرفته <br />
            <span className="text-primary">عن الدليل والباقة والتواصل</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            إجابات واضحة ومباشرة مبنية على الحقائق الفعلية للمنظومة التفاعلية.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-card border-2 rounded-3xl transition-all overflow-hidden ${
                  isOpen ? "border-primary shadow-sm" : "border-border hover:border-primary/40"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 font-black text-foreground text-base sm:text-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-3xl"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="size-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-muted-foreground transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium border-t border-border/50 animate-in fade-in duration-200">
                    <p className="pt-2">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
