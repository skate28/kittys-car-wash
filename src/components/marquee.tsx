import { CartoonBubbleSvg } from "@/components/suds-bubbles";
import { site } from "@/content";
import { marqueeServices } from "@/lib/menu";

/** Vibrant suds-blue ticker under the hero with car-wash services, soap bubbles & shine highlights. */
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
                {index % 2 === 0 ? (
                  <CartoonBubbleSvg size={26} tint={index % 4 === 0 ? "aqua" : "mustard"} className="mx-1 shrink-0" />
                ) : (
                  <span className="text-mustard">✦</span>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
