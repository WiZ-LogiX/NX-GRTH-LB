import { useState, useEffect } from "react";
import { MessageCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getContactUrl } from "@/lib/subscription-config";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const contactUrl = getContactUrl();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 450px)
      setVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl md:hidden animate-in slide-in-from-bottom duration-300"
      dir="rtl"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col text-right">
          <span className="text-[11px] font-mono font-bold text-primary flex items-center gap-1">
            <Gift size={12} />
            <span>عرض 18 شهراً + الدليل هدية</span>
          </span>
          <span className="text-xs font-black text-foreground">
            تواصل معنا لمعرفة التفاصيل
          </span>
        </div>

        <Button
          asChild
          size="sm"
          className="h-11 px-5 rounded-xl bg-primary text-primary-foreground font-black text-xs gap-1.5 shadow-md shrink-0"
        >
          <a href={contactUrl}>
            <MessageCircle size={14} />
            <span>تواصل معنا</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
