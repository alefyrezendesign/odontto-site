import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details key={item.question} className="faq-item group" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 text-left">
            <h3 className="text-base sm:text-lg font-bold text-navy group-hover:text-navy-soft transition-colors">
              {item.question}
            </h3>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-offwhite text-aqua-strong transition-all duration-200 group-open:rotate-180 group-open:bg-aqua-light group-hover:bg-aqua-light/80 shadow-2xs">
              <ChevronDown size={19} aria-hidden="true" />
            </span>
          </summary>
          <div className="border-t border-border/70 px-5 sm:px-6 py-5 text-secondary">
            <p className="text-sm sm:text-base leading-7 text-secondary">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
