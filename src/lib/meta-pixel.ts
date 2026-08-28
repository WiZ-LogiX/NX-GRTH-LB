/**
 * Meta Pixel (Facebook Pixel) Helper and Conversion Tracking Utility
 *
 * To activate tracking:
 * 1. Set your Pixel ID in .env as VITE_META_PIXEL_ID=your_id
 *    OR directly replace DEFAULT_META_PIXEL_ID below.
 */

export const DEFAULT_META_PIXEL_ID = "1945614042783862";

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

export const trackMetaPageView = () => {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "PageView");
};

export const trackMetaLead = (params?: { content_name?: string; value?: number; currency?: string }) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: params?.content_name || "Google Pro 18-Month Subscription",
      value: params?.value ?? 299,
      currency: params?.currency || "EGP",
      ...params,
    });
  }
};

export const trackMetaContact = (params?: { content_name?: string; value?: number; currency?: string }) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact", {
      content_name: params?.content_name || "WhatsApp Contact",
      value: params?.value ?? 299,
      currency: params?.currency || "EGP",
      ...params,
    });
  }
};

export const trackMetaInitiateCheckout = (params?: { content_name?: string; value?: number; currency?: string }) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      content_name: params?.content_name || "Google Pro Bundle (18 Months)",
      value: params?.value ?? 299,
      currency: params?.currency || "EGP",
      ...params,
    });
  }
};

export const trackMetaCustom = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.fbq) window.fbq("trackCustom", eventName, params);
};

export const handleConversionClick = (source: string = "WhatsApp Button") => {
  trackMetaContact({ content_name: `WhatsApp CTA - ${source}` });
  trackMetaLead({ content_name: `Google Pro Inquiry - ${source}` });
  trackMetaInitiateCheckout({ content_name: `Google Pro 299 EGP - ${source}` });
};
