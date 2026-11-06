"use client";

import { BarChart3, Building2, Landmark, TrendingDown, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
};

const metrics: Metric[] = [
  {
    value: 5,
    prefix: "R$ ",
    suffix: "M",
    label: "em impostos recuperados",
    icon: Landmark,
  },
  {
    value: 30,
    prefix: "Até ",
    suffix: "%",
    label: "de redução de impostos",
    icon: TrendingDown,
  },
  { value: 8, prefix: "R$ ", suffix: "M", label: "em economia gerada", icon: BarChart3 },
  { value: 100, prefix: "+", label: "empresas odontológicas atendidas", icon: Building2 },
];

function AnimatedMetric({ metric, active }: { metric: Metric; active: boolean }) {
  const [currentValue, setCurrentValue] = useState(0);
  const Icon = metric.icon;

  useEffect(() => {
    if (!active) return;

    const duration = 1400;
    const startedAt = performance.now();
    let frameId = 0;

    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCurrentValue(Math.round(metric.value * eased));

      if (progress < 1) frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [active, metric.value]);

  return (
    <div className="px-6 py-7 text-center sm:px-8 lg:px-9 lg:py-2">
      <div className="flex items-center justify-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-aqua">
          <Icon size={18} aria-hidden="true" />
        </span>
        <p className="text-[clamp(2rem,2.7vw,3rem)] font-medium leading-none tracking-[-0.055em] text-white">
          {metric.prefix}
          {currentValue}
          {metric.suffix}
        </p>
      </div>
      <p className="mx-auto mt-3 max-w-44 text-sm leading-5 text-white/65">{metric.label}</p>
    </div>
  );
}

export function ImpactStatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Resultados da Odontto"
      className="bg-white px-3 pb-5 sm:px-5 sm:pb-8"
    >
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[1.75rem] bg-navy px-2 py-5 sm:px-5 sm:py-6">
        <Image
          src="/images/faixa-dados.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 1600px"
          className="object-cover object-center"
        />
        <div className="relative z-10 grid divide-y divide-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {metrics.map((metric) => (
            <AnimatedMetric key={metric.label} metric={metric} active={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
