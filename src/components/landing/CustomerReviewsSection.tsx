import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Sparkles, X } from "lucide-react";

const reviews = [
  "https://i.ibb.co/0VyKZT3h/IMG-20260908-WA0024.jpg",
  "https://i.ibb.co/8gfPFtVF/IMG-20260908-WA0023.jpg",
  "https://i.ibb.co/RkqCps19/IMG-20260908-WA0022.jpg",
  "https://i.ibb.co/ffSLzzw/IMG-20260908-WA0012.jpg",
  "https://i.ibb.co/wNVHTGcY/IMG-20260908-WA0010.jpg",
  "https://i.ibb.co/9m9xn0Ww/IMG-20260908-WA0019.jpg",
  "https://i.ibb.co/bjnTVpNc/IMG-20260908-WA0015.jpg",
  "https://i.ibb.co/KxSHJ28y/IMG-20260908-WA0021.jpg",
  "https://i.ibb.co/xKvRZtX9/IMG-20260908-WA0014.jpg",
  "https://i.ibb.co/MkX1yNwk/IMG-20260908-WA0009.jpg",
  "https://i.ibb.co/8gpKpMYr/IMG-20260908-WA0020.jpg",
  "https://i.ibb.co/qYgxj8VG/IMG-20260908-WA0016.jpg",
  "https://i.ibb.co/8DyphpfL/IMG-20260908-WA0013.jpg",
  "https://i.ibb.co/Y4W16Qk3/IMG-20260908-WA0017.jpg",
  "https://i.ibb.co/3ytFKWDy/IMG-20260908-WA0018.jpg",
  "https://i.ibb.co/W45KKmZt/IMG-20260908-WA0011.jpg",
  "https://i.ibb.co/ZRQG5NGH/IMG-20260908-WA0008.jpg",
  "https://i.ibb.co/7Jw5vQGN/IMG-20260908-WA0004.jpg",
  "https://i.ibb.co/CpNfS6gz/IMG-20260908-WA0001.jpg",
  "https://i.ibb.co/1JJdy8xq/IMG-20260908-WA0007.jpg",
  "https://i.ibb.co/Kpj81jsR/IMG-20260908-WA0003.jpg",
  "https://i.ibb.co/jvQ3814j/IMG-20260908-WA0000.jpg",
  "https://i.ibb.co/tpSJFCxr/IMG-20260908-WA0002.jpg",
  "https://i.ibb.co/gZKy4qD6/IMG-20260908-WA0005.jpg",
  "https://i.ibb.co/DPYZhDy3/IMG-20260806-WA0001.jpg",
  "https://i.ibb.co/0y8PsWH9/IMG-20260908-WA0006.jpg",
];

export function CustomerReviewsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeViewer = () => setSelectedIndex(null);
  const showPrevious = () =>
    setSelectedIndex((current) => (current === null ? null : (current - 1 + reviews.length) % reviews.length));
  const showNext = () =>
    setSelectedIndex((current) => (current === null ? null : (current + 1) % reviews.length));

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showNext();
      if (event.key === "ArrowRight") showPrevious();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section
      id="customer-reviews"
      className="relative isolate overflow-hidden border-y border-border/70 bg-forest py-20 text-primary-foreground sm:py-24"
      aria-labelledby="customer-reviews-title"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -right-32 top-0 size-96 rounded-full bg-emerald/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-mint/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold tracking-wide text-mint backdrop-blur">
            <Sparkles className="size-4" />
            Customer Proof · 26 تجربة حقيقية
          </div>

          <h2
            id="customer-reviews-title"
            className="max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            مش مجرد كلام — شوف الناس وهي بتقول: «اتفعّل»
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/70 sm:text-lg">
            لقطات حقيقية من رحلة التفعيل والتأكد من اشتراك Google AI Pro. كل لقطة هنا دليل اجتماعي مستقل — اضغط على أي تجربة وشوفها كاملة.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-mint/15 bg-primary-foreground/5 px-5 py-4 backdrop-blur sm:mt-12">
          <Quote className="size-5 shrink-0 text-mint" />
          <p className="text-sm font-medium leading-7 text-primary-foreground/85 sm:text-base">
            الدليل الأقوى مش الوعود — الدليل هو النتيجة اللي العميل شافها بنفسه.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {reviews.map((review, index) => (
            <button
              key={review}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.35rem] border border-primary-foreground/10 bg-primary-foreground/5 text-start shadow-lg backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-mint/35 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
              aria-label={`فتح تجربة العميل ${index + 1} بحجم أكبر`}
            >
              <div className="relative overflow-hidden bg-primary-foreground/5 p-2">
                <img
                  src={review}
                  alt={`تجربة عميل ${index + 1}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer"
                  className="h-auto w-full rounded-xl object-contain transition duration-700 group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent px-4 pb-3 pt-12 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-xs font-medium text-background">اضغط للتكبير</span>
                  <span className="font-mono text-[10px] text-background/70">{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-primary-foreground/45">
          اسحب لتصفح التجارب · اضغط للتكبير · استخدم الأسهم داخل العرض الكامل
        </p>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-3 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`تجربة العميل ${selectedIndex + 1} بحجم أكبر`}
          onClick={closeViewer}
        >
          <button
            type="button"
            onClick={closeViewer}
            className="absolute right-4 top-4 z-20 inline-flex size-11 items-center justify-center rounded-full border border-background/15 bg-background/10 text-background backdrop-blur transition hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            aria-label="إغلاق"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute right-3 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-background/15 bg-background/10 text-background backdrop-blur transition hover:bg-background/20 sm:inline-flex"
            aria-label="التجربة السابقة"
          >
            <ChevronRight className="size-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute left-3 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-background/15 bg-background/10 text-background backdrop-blur transition hover:bg-background/20 sm:inline-flex"
            aria-label="التجربة التالية"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div
            className="relative flex max-h-[94vh] max-w-5xl items-center justify-center rounded-2xl border border-background/10 bg-background p-1.5 shadow-2xl sm:p-2"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={reviews[selectedIndex]}
              alt={`تجربة عميل ${selectedIndex + 1} بحجم أكبر`}
              referrerPolicy="no-referrer"
              className="max-h-[91vh] max-w-[92vw] rounded-xl object-contain"
            />
            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground/75 px-3 py-1 text-[11px] font-medium text-background backdrop-blur">
              {selectedIndex + 1} / {reviews.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
