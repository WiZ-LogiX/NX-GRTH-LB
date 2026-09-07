import { useState } from "react";
import { X } from "lucide-react";

const reviews = [
  "review-01.jpg",
  "review-02.jpg",
  "review-03.jpg",
  "review-04.jpg",
  "review-05.jpg",
  "review-06.jpg",
  "review-07.jpg",
  "review-08.jpg",
  "review-09.jpg",
  "review-10.jpg",
];

export function CustomerReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<string | null>(null);

  return (
    <section
      id="customer-reviews"
      className="relative overflow-hidden border-y border-border/70 bg-secondary/40 py-20 sm:py-24"
      aria-labelledby="customer-reviews-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Customer Proof
          </p>
          <h2
            id="customer-reviews-title"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            مش مجرد كلام — شوف تجارب العملاء بنفسك
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            لقطات حقيقية من محادثات العملاء أثناء التفعيل والتأكد من اشتراك Google AI Pro.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <button
              key={review}
              type="button"
              onClick={() => setSelectedReview(review)}
              className="group overflow-hidden rounded-2xl border border-border bg-card text-start shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`عرض تجربة العميل ${index + 1} بحجم أكبر`}
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-foreground/5 p-3 sm:min-h-[300px]">
                <img
                  src={`/customer-reviews/${review}`}
                  alt={`تجربة عميل ${index + 1}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="max-h-[520px] w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-medium text-foreground">
                  تجربة عميل {index + 1}
                </span>
                <span className="text-xs text-muted-foreground">اضغط للتكبير</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedReview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="عرض تجربة العميل"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="relative flex max-h-[94vh] max-w-5xl items-center justify-center overflow-hidden rounded-2xl bg-card p-2 shadow-2xl sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-foreground/80 text-background shadow-lg transition hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="إغلاق"
            >
              <X className="size-5" />
            </button>
            <img
              src={`/customer-reviews/${selectedReview}`}
              alt="تجربة عميل بحجم أكبر"
              className="max-h-[90vh] max-w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
