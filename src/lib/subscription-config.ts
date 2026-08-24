/**
 * Nux Growth AI Guide — Commercial Subscription & Contact Configuration
 * 
 * IMPORTANT COMMERCIAL MODEL:
 * 1. The 18-Month Subscription is the PRIMARY OFFER.
 * 2. The Nux Growth AI Guide is the INCLUDED BONUS / GIFT with that subscription.
 * 3. There is NO online checkout or payment processing on this page.
 * 4. Purchasing happens through conversation: Discover → Understand → See Guide → Want Offer → Contact Us → Complete via Conversation.
 * 5. Primary CTA: "تواصل معنا" or "اعرف تفاصيل الاشتراك".
 * 
 * All provider details, contact destination, and terms are isolated in this file.
 */

export interface CampaignConfig {
  /** Name of the primary subscription product/service */
  subscriptionName: string;
  /** Name of the organization / provider offering the subscription */
  providerName: string;
  /** Duration of the primary subscription in months */
  durationMonths: number;
  /** Configurable contact destination (e.g. WhatsApp link, email, contact form, or Calendly) */
  contactUrl: string;
  /** Verified list of core subscription features & benefits */
  subscriptionBenefits: string[];
  /** Terms of service URL */
  termsUrl: string;
  /** Privacy policy URL */
  privacyUrl: string;
}

export const CAMPAIGN_CONFIG: CampaignConfig = {
  subscriptionName: "[اسم الخدمة أو الباقة الأساسية]",
  providerName: "[اسم مزود الخدمة]",
  durationMonths: 18,
  contactUrl: "", // Configurable contact destination: will be set later (e.g. https://wa.me/... or contact page)
  subscriptionBenefits: [
    "[مزايا وخدمات الاشتراك الأساسي الممتد لمدة 18 شهراً]",
    "[وصول مستمر وتحديثات دورية طوال فترة سريان الاشتراك]",
    "[دعم فني وتطوير دوري للمنظومة والخدمات المقدمة]",
  ],
  termsUrl: "#terms",
  privacyUrl: "#privacy",
};

/**
 * Returns the effective contact URL or falls back to scrolling to the on-page contact section.
 */
export const getContactUrl = (config: CampaignConfig = CAMPAIGN_CONFIG): string => {
  if (config.contactUrl && config.contactUrl.trim() !== "" && !config.contactUrl.includes("[")) {
    return config.contactUrl;
  }
  return "#contact";
};

export const SUBSCRIPTION_CONFIG = CAMPAIGN_CONFIG;

/**
 * Verified Bonus Specifications — 100% verified against the main guide codebase
 */
export const GUIDE_BONUS_SPECS = {
  bonusName: "Nux Growth AI Guide",
  badge: "هدية ومكافأة حصرية متضمنة",
  includedWith: "اشتراك الـ 18 شهراً",
  deliverableType: "دليل ميداني وتطبيق تفاعلي ومنظومة متكاملة لهندسة الـ Prompt",
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
      title: "12 سيناريو يومي مع مقارنة قبل/بعد",
      desc: "حلول عملية لأبرز معضلات العمل اليومي توضح الطريقة القديمة مقابل طريقة الذكاء الاصطناعي.",
    },
    {
      title: "مصنع الـ Prompt التفاعلي (Prompt Builder)",
      desc: "توليد فوري لـ 4 صيغ منضبطة (سريع، قياسي، مفصل، خبير) وفق معمارية AIDA ثمانية الطبقات.",
    },
    {
      title: "استوديو سلاسل العمل (Workflow Studio)",
      desc: "تفكيك المشاريع المعقدة إلى مراحل تسلسلية متتابعة مع نقاط تدقيق ومراجعة بشرية.",
    },
    {
      title: "مكتبة شخصية محلية 100% (Client-Side)",
      desc: "حفظ وتخصيص واسترجاع كامل لطلباتك وقوالبك على جهازك دون خوادم وسيطة مع دعم التصدير JSON.",
    },
    {
      title: "مركز الأدوات والمراجع السريعة (Toolkit)",
      desc: "ورقة غش مكتبية قابلة للطباعة (Cheat Sheet)، قاموس مصطلحات، وخارطة طريق تطبيقية لأربعة أسابيع.",
    },
  ],
};
