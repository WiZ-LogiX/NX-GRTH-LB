/**
 * Meta Pixel (Facebook Pixel) Helper and Conversion Tracking Utility
 * 
 * To activate tracking:
 * 1. Set your Pixel ID in .env as VITE_META_PIXEL_ID=your_id
 *    OR directly replace DEFAULT_META_PIXEL_ID below.
 */

// Configured Meta Pixel ID
export const DEFAULT_META_PIXEL_ID = "2117525738836891";

/**
 * Retrieves the effective Meta Pixel ID from environment variables or default constant.
 */
export const getMetaPixelId = (): string => {
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env["VITE_META_PIXEL_ID"]) {
    return import.meta.env["VITE_META_PIXEL_ID"] as string;
  }
  return DEFAULT_META_PIXEL_ID;
};

declare global {
  interface Window {
    fbq?: (action: string, eventName: string, params?: Record<string, unknown>) => void;
    _fbq?: unknown;
  }
}

/**
 * Tracks standard PageView event.
 */
export const trackMetaPageView = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

/**
 * Tracks Lead event (e.g. user initiated contact for the 499 EGP offer).
 */
export const trackMetaLead = (params?: {
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: params?.content_name || "Google Pro 18-Month Subscription",
      value: params?.value ?? 499,
      currency: params?.currency || "EGP",
      ...params,
    });
  }
};

/**
 * Tracks Contact event (e.g. user clicked WhatsApp CTA).
 */
export const trackMetaContact = (params?: {
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact", {
      content_name: params?.content_name || "WhatsApp Contact",
      value: params?.value ?? 499,
      currency: params?.currency || "EGP",
      ...params,
    });
  }
};

/**
 * Tracks InitiateCheckout event (e.g. user clicked to start checkout/subscription via WhatsApp).
 */
export const trackMetaInitiateCheckout = (params?: {
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      content_name: params?.content_name || "Google Pro Bundle (18 Months)",
      value: params?.value ?? 499,
      currency: params?.currency || "EGP",
      ...params,
    });
  }
};

/**
 * Tracks any custom event.
 */
export const trackMetaCustom = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
};

/**
 * Universal handler to trigger standard Meta conversion events when clicking a conversion CTA.
 */
export const handleConversionClick = (source: string = "WhatsApp Button") => {
  trackMetaContact({ content_name: `WhatsApp CTA - ${source}` });
  trackMetaLead({ content_name: `Google Pro Inquiry - ${source}` });
  trackMetaInitiateCheckout({ content_name: `Google Pro 499 EGP - ${source}` });
};
