import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowLeft, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAMPAIGN_CONFIG, getContactUrl } from "@/lib/subscription-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contactUrl = getContactUrl();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "المشكلة والحل", href: "#problem" },
    { label: "المنظومة", href: "#ecosystem" },
    { label: "الميزات الميدانية", href: "#features" },
    { label: "تجربة حية", href: "#interactive-demo" },
    { label: "لمن هذا الدليل؟", href: "#audience" },
    { label: "العرض والمكافأة", href: "#offer" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Bonus Pill */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="flex size-9 rounded-xl bg-primary text-primary-foreground font-black items-center justify-center text-base shadow-sm transition-transform group-hover:scale-105">
              N
            </span>
            <div className="flex flex-col text-right">
              <span className="text-sm font-black tracking-tight text-foreground flex items-center gap-1.5">
                NUX GROWTH
                <span className="text-primary font-mono text-xs">AI GUIDE</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-bold">
                الدليل والمنظومة الميدانية
              </span>
            </div>
          </a>

          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[11px] font-black mr-2">
            <Gift size={13} className="text-emerald-600 dark:text-emerald-400" />
            <span>هدية متضمنة مع اشتراك 18 شهراً</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-bold text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-md px-1 py-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="h-10 px-5 rounded-xl bg-primary text-primary-foreground font-black text-xs gap-2 shadow-sm hover:shadow-md transition-all"
          >
            <a href={contactUrl}>
              <MessageCircle size={14} />
              <span>تواصل معنا</span>
            </a>
          </Button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-foreground hover:bg-secondary transition-colors"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-background/98 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-black w-full justify-center">
            <Gift size={14} />
            <span>هدية حصرية متضمنة مع اشتراك 18 شهراً</span>
          </div>
          <nav className="flex flex-col space-y-3 pt-2 text-right">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-foreground py-2 border-b border-border/50 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="w-full h-11 font-black text-xs rounded-xl mt-4">
            <a href={contactUrl} onClick={() => setMobileMenuOpen(false)}>
              تواصل معنا لمعرفة تفاصيل الاشتراك
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
