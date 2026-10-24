import { site } from "@/content";
import { marqueeServices } from "@/lib/menu";

/** Vibrant suds-blue ticker under the hero with car-wash services & shine highlights. */
export function Marquee() {
  const words = marqueeServices(site);
  if (words.length === 0) return null;
  const row = [...words, ...words];

  return (
    <div aria-hidden="true" className="overflow-hidden border-b-[3px] border-ink bg-brand py-3.5 text-paper">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {row.map((word, index) => (
              <li
                key={`${copy}-${index}`}
                className="flex items-center whitespace-nowrap font-display text-xl uppercase tracking-wide sm:text-2xl"
              >
                <span className="px-6">{word}</span>
                <span className="text-mustard">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
