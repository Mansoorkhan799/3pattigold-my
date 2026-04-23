export type AccordionItem = { q: string; a: React.ReactNode };

export default function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
      {items.map((it, i) => (
        <details key={i} className="group">
          <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold [&::-webkit-details-marker]:hidden flex items-center justify-between">
            <span>{it.q}</span>
            <span className="ml-4 text-amber-500 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="prose prose-neutral max-w-none px-5 pb-5 text-[15px] leading-relaxed">
            {it.a}
          </div>
        </details>
      ))}
    </div>
  );
}
