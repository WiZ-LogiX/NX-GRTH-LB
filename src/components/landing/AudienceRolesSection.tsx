import { useState } from "react";
import { Headset, Clock, Cog, Users, UserCheck, TrendingUp, Megaphone, Briefcase, CheckCircle2, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AUDIENCE_ROLES } from "@/lib/landing-content";

export function AudienceRolesSection() {
  const [activeRole, setActiveRole] = useState(AUDIENCE_ROLES[0]?.id || "cs");

  const iconMap: Record<string, any> = {
    Headset,
    Clock,
    Cog,
    Users,
    UserCheck,
    TrendingUp,
    Megaphone,
    Briefcase,
  };

  return (
    <section id="audience" className="py-20 sm:py-28 bg-secondary/30 border-b border-border relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-black">
            لمن هذا الدليل؟
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            مصمم خصيصاً لمشاكل العمل الحقيقية.. <br />
            <span className="text-primary">أياً كان تخصصك أو دورك</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            يحتوي الدليل على 13 مساحة عمل متخصصة توفر طلبات وإرشادات خصوصية محددة لكل مهنة، 
            دون تنظير أكاديمي أو تعقيد تقني.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCE_ROLES.map((role) => {
            const Icon = iconMap[role.icon] ?? Briefcase;
            const isSelected = activeRole === role.id;

            return (
              <div
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`bg-card border-2 rounded-3xl p-6 space-y-4 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-primary shadow-lg bg-card scale-[1.02]"
                    : "border-border hover:border-primary/40 hover:bg-secondary/40 shadow-xs"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`size-11 rounded-2xl flex items-center justify-center font-black ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                      7 طلبات مجهزة
                    </span>
                  </div>

                  <h3 className="text-base font-black text-foreground leading-snug">
                    {role.role}
                  </h3>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs space-y-1">
                      <span className="font-black text-rose-700 dark:text-rose-400 block text-[11px]">
                        المعضلة الشائعة:
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {role.pain}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border space-y-1 text-xs">
                  <span className="font-black text-primary block text-[11px]">
                    حل الدليل:
                  </span>
                  <p className="text-foreground/90 font-medium leading-relaxed">
                    {role.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center text-xs font-bold text-muted-foreground">
          <span>بالإضافة إلى أدوار متخصصة لـ: إدارة المشاريع (PM/BA)، التوظيف، والسكرتارية التنفيذية.</span>
        </div>

      </div>
    </section>
  );
}
