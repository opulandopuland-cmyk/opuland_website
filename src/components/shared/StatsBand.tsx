import StatCard from "@/components/card/StatCard";
import type { Stat } from "@/data/stats";
import { cn } from "@/lib/utils";

type StatsBandProps = {
  stats: Stat[];
  className?: string;
};

const StatsBand = ({ stats, className }: StatsBandProps) => {
  return (
    <section className={cn("bg-primary py-8 md:py-12", className)}>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
        {stats.map((stat) => (
          <StatCard key={stat.id} value={stat.value} labelKey={stat.labelKey} />
        ))}
      </div>
    </section>
  );
};

export default StatsBand;
