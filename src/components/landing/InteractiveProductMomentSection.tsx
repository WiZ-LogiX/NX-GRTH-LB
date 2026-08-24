import { useState } from "react";
import { Sparkles, Copy, Check, Dna, Edit3, ArrowLeft, ShieldCheck, CheckCircle2, Sliders, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LIVE_PRESETS } from "@/lib/landing-content";
import { toast } from "sonner";

export function InteractiveProductMomentSection() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [activeVariant, setActiveVariant] = useState<"quick" | "standard" | "detailed" | "expert">("standard");
  const [copied, setCopied] = useState(false);

  const currentPreset = LIVE_PRESETS[activePresetIndex]!;

  const handleCopy = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("تم نسخ الـ Prompt بنجاح!");
    }
  };

  const getVariantText = () => {
    if (activeVariant === "quick") {
      return `الدور: ${currentPreset.layers.role}
المهمة: ${currentPreset.layers.task}
المخرج: ${currentPreset.layers.outputFormat}`;
    }
    if (activeVariant === "detailed") {
      return `${currentPreset.structuredPrompt}

تعليمات إضافية للجودة:
- ركز على النقاط القابلة للتنفيذ المباشر.
- إذا كانت هناك بيانات ناقصة، اطلبها فوراً ولا تخمن.
- اكتب باللغة العربية الطبيعية وتجنب الأسلوب المترجم حرفياً.`;
    }
    if (activeVariant === "expert") {
      return `[SYSTEM INSTRUCTION / EXPERT MODE]
Role & Persona: ${currentPreset.layers.role}
Target Goal: ${currentPreset.layers.goal}
Context Constraints: ${currentPreset.layers.context}
Direct Task: ${currentPreset.layers.task}
Strict Boundaries: ${currentPreset.layers.constraints}
Output Schema: ${currentPreset.layers.outputFormat}

Verification Loop (Category 18):
1. افحص الافتراضات قبل البدء.
2. وضح أسباب أي اقتراح مبني على التقدير.
3. قدم النتيجة بصيغة جاهزة للاستخدام النهائي.`;
    }
    // Default: standard
    return currentPreset.structuredPrompt;
  };

  return (
    <section id="interactive-demo" className="py-20 sm:py-32 bg-background relative overflow-hidden" dir="rtl">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black">
            <Sparkles size={14} />
            <span>لحظة الكشف: الدليل يعمل كأداة وتطبيق حي</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            شاهد الفرق بنفسك: <br />
            <span className="text-primary">من طلب عشوائي إلى Prompt منضبط بـ AIDA</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            جرّب التبديل بين السيناريوهات المهنية الحقيقية وشاهد كيف تقوم معمارية AIDA 
            بتحويل السطر العشوائي إلى طلب تنفيذي مكتمل الأركان.
          </p>
        </div>

        {/* The 5-Step Experience Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-4xl mx-auto mb-10 text-center text-xs font-black text-muted-foreground">
          <div className="bg-secondary/60 p-3 rounded-2xl border border-border">
            1. اقرأ (Read) 📖
          </div>
          <div className="bg-secondary/60 p-3 rounded-2xl border border-border">
            2. جرّب (Try) 🧪
          </div>
          <div className="bg-primary/10 text-primary p-3 rounded-2xl border border-primary/30">
            3. قارن (Compare) ⚖️
          </div>
          <div className="bg-secondary/60 p-3 rounded-2xl border border-border">
            4. ابنِ (Build) ⚡
          </div>
          <div className="bg-secondary/60 p-3 rounded-2xl border border-border col-span-2 sm:col-span-1">
            5. احفظ (Save) 💾
          </div>
        </div>

        {/* Main Interactive Demo Container */}
        <div className="bg-card border-2 border-border rounded-3xl p-6 sm:p-10 editorial-card-shadow relative overflow-hidden max-w-6xl mx-auto space-y-8">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-primary via-mint to-primary" />

          {/* Scenario Tabs Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-black text-primary uppercase tracking-wider block">
                اختر سيناريو لتجربته:
              </span>
              <p className="text-sm font-bold text-foreground">
                {currentPreset.scenario}
              </p>
            </div>

            {/* Scenario Buttons */}
            <div className="flex flex-wrap gap-2">
              {LIVE_PRESETS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePresetIndex(idx);
                    setCopied(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activePresetIndex === idx
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {p.tabLabel}
                </button>
              ))}
            </div>
          </div>

          {/* 2 Columns: Before vs. After */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Before Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4 bg-rose-500/5 border-2 border-rose-500/20 rounded-3xl p-6">
              <div className="flex items-center justify-between border-b border-rose-500/10 pb-3">
                <span className="text-xs font-black text-rose-700 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-xl">
                  قبل: الطلب العشوائي غير المنضبط
                </span>
                <span className="text-[10px] text-muted-foreground font-mono font-bold">
                  مخرجات غير مضمونة ❌
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-muted-foreground">ما يكتبه أغلب الناس في الشات:</p>
                <div className="bg-card p-4 rounded-2xl border border-rose-200/80 dark:border-rose-900/30 text-sm font-black text-foreground/90 leading-relaxed">
                  "{currentPreset.rawPrompt}"
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-black text-rose-700 dark:text-rose-400 block">
                  عيوب هذا الطلب:
                </span>
                <div className="space-y-1.5 text-xs text-muted-foreground font-medium">
                  <p>• يفتقر لتحديد الدور والجمهور المستهدف.</p>
                  <p>• بدون سياق واضح، مما يجبر الـ AI على التخمين.</p>
                  <p>• بدون قيود، فيعطي إجابات عامة ومترجمة بشكل ركيك.</p>
                </div>
              </div>
            </div>

            {/* After Column (7 cols) */}
            <div className="lg:col-span-7 bg-forest text-primary-foreground rounded-3xl p-6 sm:p-7 shadow-inner space-y-5">
              
              {/* Header & Variant Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-mint font-mono tracking-wider">
                    بعد: مهيكل بمعمارية AIDA
                  </span>
                  <span className="text-[10px] font-mono text-emerald-200 bg-white/10 px-2 py-0.5 rounded">
                    4 صيغ
                  </span>
                </div>

                {/* 4 Variants Pill Switcher */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-[11px] font-bold">
                  {(["quick", "standard", "detailed", "expert"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setActiveVariant(v)}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeVariant === v
                          ? "bg-mint text-forest font-black"
                          : "text-emerald-200/80 hover:text-white"
                      }`}
                    >
                      {v === "quick" && "سريع"}
                      {v === "standard" && "قياسي"}
                      {v === "detailed" && "مفصل"}
                      {v === "expert" && "خبير"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Structured Code Output Preview */}
              <div className="relative">
                <pre className="bg-black/35 rounded-2xl p-4 sm:p-5 font-mono text-xs leading-relaxed text-emerald-100 whitespace-pre-wrap selection:bg-emerald-500 selection:text-white max-h-64 overflow-y-auto border border-white/10">
                  {getVariantText()}
                </pre>

                {/* Floating Copy Button */}
                <div className="absolute top-3 left-3">
                  <Button
                    size="sm"
                    onClick={() => handleCopy(getVariantText())}
                    className="h-8 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs gap-1.5 border border-white/20"
                  >
                    {copied ? <Check size={13} className="text-mint" /> : <Copy size={13} />}
                    <span>{copied ? "تم النسخ!" : "نسخ الـ Prompt"}</span>
                  </Button>
                </div>
              </div>

              {/* Prompt DNA & Value Gains */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-mono font-black text-mint uppercase tracking-wider block">
                  لماذا تخرج هذه النتيجة مثالية؟
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-emerald-100/90 font-medium">
                  {currentPreset.whyBetter.map((w, idx) => (
                    <div key={idx} className="bg-white/5 p-2 rounded-xl border border-white/5 flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-mint shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" />
              <span>مبني بالكامل ليعمل مع ChatGPT و Claude و Gemini و Copilot</span>
            </div>

            <Button
              asChild
              className="h-10 px-6 rounded-xl bg-primary text-primary-foreground font-black text-xs gap-2"
            >
              <a href="#offer">
                <span>احصل على المنظومة الكاملة الآن</span>
                <ArrowLeft size={14} />
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
