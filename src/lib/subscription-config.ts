/**
 * Nux Growth AI Guide — Commercial Subscription & Google Pro Bundle Configuration
 * Sourced directly from the official NUX GROWTH · Google Pro 18-Month Campaign Flyer.
 */

export interface GoogleProTool {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
  category: "ai" | "media" | "research" | "workspace" | "security";
  badge?: string;
}

export interface CampaignConfig {
  /** Name of the primary subscription product/service */
  subscriptionName: string;
  /** Subtitle / Tagline */
  tagline: string;
  /** Name of the organization / provider offering the subscription */
  providerName: string;
  /** Duration of the primary subscription in months */
  durationMonths: number;
  /** Current campaign offer price */
  totalPrice: string;
  /** Original price before discount */
  originalPrice: string;
  /** Currency */
  currency: string;
  /** WhatsApp contact phone number */
  whatsappPhone: string;
  /** Pre-filled WhatsApp message template */
  whatsappMessageTemplate: string;
  /** Slogan */
  slogan: string;
  /** Configurable contact destination */
  contactUrl: string;
  /** 9 Core Tools of Google Pro */
  googleProTools: GoogleProTool[];
  /** Terms of service URL */
  termsUrl: string;
  /** Privacy policy URL */
  privacyUrl: string;
}

const WHATSAPP_PHONE = "201096481396";
const WHATSAPP_MSG = "السلام عليكم، حابب استفيد من عرض Google Pro (18 شهر) بسعر 499 ج.م واستلم دليل Nux Growth كهدية مجانية.";

export const CAMPAIGN_CONFIG: CampaignConfig = {
  subscriptionName: "Google Pro",
  tagline: "كل ما تحتاجه من Google ... في باقة واحدة",
  providerName: "Google",
  durationMonths: 18,
  totalPrice: "499 ج.م",
  originalPrice: "799 ج.م",
  currency: "ج.م",
  whatsappPhone: WHATSAPP_PHONE,
  whatsappMessageTemplate: WHATSAPP_MSG,
  slogan: "حسابك الذكي في أدوات Google ... لنمو بلا حدود",
  contactUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
  googleProTools: [
    {
      id: "antigravity",
      title: "Antigravity",
      description: "تحويل الأفكار إلى مخططات ورسوم بيانية احترافية بثوانٍ.",
      iconName: "Antigravity",
      category: "ai",
    },
    {
      id: "nano-banana",
      title: "Nano Banana",
      subtitle: "لإنشاء الصور",
      description: "إنشاء صور مذهلة وواقعية بدقة عالية من خلال الذكاء الاصطناعي.",
      iconName: "NanoBanana",
      category: "media",
    },
    {
      id: "google-flow",
      title: "Google Flow",
      subtitle: "لصناعة الفيديو والمحتوى",
      description: "أداة متقدمة لإنشاء فيديوهات احترافية بسهولة وبجودة عالية.",
      iconName: "GoogleFlow",
      category: "media",
    },
    {
      id: "gemini-live",
      title: "Gemini Live",
      subtitle: "للتفاعل الصوتي الفوري",
      description: "حوار صوتي مباشر وتفكير تفاعلي فوري للعصف الذهني وحل المهام المعقدة.",
      iconName: "GeminiLive",
      category: "ai",
    },
    {
      id: "gemini-pro",
      title: "أحدث موديلات Gemini Pro",
      description: "أقوى أداء للذكاء الاصطناعي للإجابة، الكتابة، البرمجة والإبداع.",
      iconName: "GeminiPro",
      category: "ai",
    },
    {
      id: "advanced-security",
      title: "أمان وخصوصية متقدمة",
      description: "حماية بياناتك بأحدث تقنيات الأمان من Google وضمن خصوصيتك.",
      iconName: "Security",
      category: "security",
    },
    {
      id: "family-sharing",
      title: "مشاركة المميزات مع 5 أفراد",
      description: "شارك الباقة والمميزات مع العائلة أو فريقك واستمتعوا معاً.",
      iconName: "FamilySharing",
      category: "workspace",
    },
    {
      id: "gemini-notebook",
      title: "Gemini Notebook",
      subtitle: "مساعدك الدراسي",
      description: "مساعد ذكي للطلاب في تلخيص، تنظيم، وكتابة الملاحظات.",
      iconName: "GeminiNotebook",
      category: "ai",
    },
    {
      id: "storage-5tb",
      title: "مساحة تخزين 5TB",
      description: "تخزين سحابي آمن وكبير لكل ملفاتك وصورك ومشاريعك.",
      iconName: "Storage5TB",
      category: "workspace",
      badge: "5TB",
    },
  ],
  termsUrl: "#terms",
  privacyUrl: "#privacy",
};

/**
 * Returns the effective WhatsApp contact URL with pre-filled message template.
 */
export const getContactUrl = (config: CampaignConfig = CAMPAIGN_CONFIG): string => {
  if (config.contactUrl && config.contactUrl.trim() !== "") {
    return config.contactUrl;
  }
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
};

export const SUBSCRIPTION_CONFIG = CAMPAIGN_CONFIG;

/**
 * Verified Bonus Specifications — NUX GROWTH AI GUIDE
 */
export const GUIDE_BONUS_SPECS = {
  bonusName: "دليل Nux Growth للتعامل مع الذكاء الاصطناعي",
  badge: "هدية مجانية مع الباقة",
  includedWith: "باقة Google Pro لمدة 18 شهراً",
  deliverableType: "دليل عملي شامل يساعدك على فهم أدوات الذكاء الاصطناعي واستخدامها بذكاء لتحقيق أفضل النتائج.",
  fourPillars: [
    {
      title: "مناسب للمبتدئين والمحترفين",
      iconName: "Target",
    },
    {
      title: "استراتيجيات لزيادة الإنتاجية والنمو",
      iconName: "TrendingUp",
    },
    {
      title: "أمثلة عملية وتطبيقات واقعية",
      iconName: "Lightbulb",
    },
    {
      title: "شروحات مبسطة وخطوة بخطوة",
      iconName: "BookOpen",
    },
  ],
  verifiedFeatures: [
    {
      title: "14 فصلاً تطبيقياً تفاعلياً",
      desc: "منهجية متدرجة من أساسيات التفكير مع النماذج حتى بناء سلاسل العمل وإدارة مخاطر الهلوسة.",
    },
    {
      title: "108 قوالب تشغيلية في 18 فئة",
      desc: "تغطي الإيميلات، التقارير، إكسل، التحليل، خدمة العملاء، مع فئة 18 الحصرية لمراجعة المخرجات.",
    },
    {
      title: "13 مساحة عمل للأدوار الوظيفية (91 طلباً)",
      desc: "مخصصة لـ WFM، خدمة العملاء، HR، المالية، المبيعات، المشاريع، والعمليات مع دروع الخصوصية.",
    },
    {
      title: "مصنع الـ Prompt التفاعلي (4 صيغ منضبطة)",
      desc: "توليد فوري للطلبات وفق معمارية AIDA ثمانية الطبقات مع تشخيص الجودة الفوري.",
    },
    {
      title: "استوديو سلاسل العمل (Workflows Studio)",
      desc: "تفكيك المشاريع المعقدة إلى مراحل تسلسلية متتابعة مع نقاط تدقيق ومراجعة بشرية.",
    },
    {
      title: "مكتبة شخصية محلية 100% (Client-Side)",
      desc: "حفظ وتخصيص واسترجاع كامل لطلباتك وقوالبك على جهازك دون خوادم وسيطة.",
    },
  ],
};
