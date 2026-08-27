import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const META_PIXEL_ID = "1945614042783862";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Nux Growth AI Guide | الدليل الميداني والمنظومة التفاعلية لهندسة الـ Prompt",
      },
      {
        name: "description",
        content:
          "تعلم كيف تقود الذكاء الاصطناعي في صلب عملك اليومي: 14 فصلاً تطبيقياً، 108 قوالب، 13 دوراً وظيفياً، ومصنع تفاعلي لبناء الـ Prompts المنضبطة. هدية مع اشتراك الـ 18 شهراً.",
      },
      { name: "application-name", content: "Nux Growth AI Guide" },
      { name: "apple-mobile-web-app-title", content: "Nux Growth AI Guide" },
      { name: "theme-color", content: "#0a2517" },
      { name: "msapplication-TileColor", content: "#0a2517" },
      {
        property: "og:title",
        content: "Nux Growth AI Guide | الدليل الميداني للذكاء الاصطناعي",
      },
      {
        property: "og:description",
        content:
          "منظومة عملية متكاملة لموظفي المكاتب وأصحاب الأعمال لقيادة الذكاء الاصطناعي بثقة وأمان.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nux Growth AI Guide" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Nux Growth AI Guide — المنظومة التفاعلية" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nux Growth AI Guide | الدليل الميداني للذكاء الاصطناعي" },
      {
        name: "twitter:description",
        content:
          "منظومة عملية متكاملة لموظفي المكاتب وأصحاب الأعمال لقيادة الذكاء الاصطناعي بثقة وأمان.",
      },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        children: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
          {children}
        </div>
        <Toaster position="bottom-center" dir="rtl" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
