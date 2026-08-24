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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap",
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
