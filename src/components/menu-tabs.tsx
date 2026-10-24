"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";

import { buttonCream, buttonMustard, focusRing } from "@/components/styles";
import { cn } from "@/lib/cn";

export type MenuTabItem = {
  id: string;
  name: string;
  description: string;
  badge: string;
  duration: string;
  includes: string[];
  isNew: boolean;
  signature: boolean;
  prices: { label: string; price: string }[];
  price: string;
  photo: { src: string; alt: string; width: number; height: number } | null;
};

export type MenuTabCategory = {
  id: string;
  name: string;
  description: string;
  photo: { src: string; alt: string; width: number; height: number } | null;
  items: MenuTabItem[];
};

export function MenuTabs({
  categories,
  tel,
  phoneDisplay,
  extraPhones = [],
  menuNote,
}: {
  categories: MenuTabCategory[];
  tel?: string | null;
  phoneDisplay?: string;
  extraPhones?: { label: string; href: string }[];
  menuNote?: string;
}) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const reduce = useReducedMotion();
  const baseId = useId();
  const current = categories.find((category) => category.id === active) ?? categories[0];
  if (!current) return null;

  return (
    <div>
      {categories.length > 1 && (
        <div
          role="tablist"
          aria-label="Wash and detail categories"
          className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {categories.map((category) => {
            const selected = category.id === current.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${category.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                onClick={() => setActive(category.id)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full border-[3px] border-ink px-5 py-2.5 font-display text-sm uppercase tracking-wide transition hover:-translate-y-0.5",
                  selected
                    ? "bg-brand text-paper shadow-[0_4px_0_0_var(--fs-ink)]"
                    : "bg-paper text-ink hover:bg-mustard",
                  focusRing,
                )}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      )}

      <div
        role={categories.length > 1 ? "tabpanel" : undefined}
        id={`${baseId}-panel`}
        aria-labelledby={categories.length > 1 ? `${baseId}-tab-${current.id}` : undefined}
        className="mt-8 rounded-3xl border-[3px] border-ink bg-paper p-6 shadow-[8px_8px_0_0_var(--fs-ink)] sm:p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            {...(reduce ? {} : { exit: { opacity: 0, y: -12 } })}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <div className={cn("grid gap-8", current.photo && "lg:grid-cols-[1fr_17rem]")}>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-3xl uppercase text-brand sm:text-4xl">{current.name}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-cream px-3 py-1 font-display text-xs uppercase tracking-wider text-ink">
                    <Sparkles className="size-3.5 fill-mustard text-ink" aria-hidden="true" />
                    Hand Washed &amp; Detailed
                  </span>
                </div>
                {current.description && <p className="mt-2 max-w-2xl text-ink/75">{current.description}</p>}

                {current.items.length > 0 && (
                  <ul
                    className={cn(
                      "mt-6 grid gap-5",
                      current.photo ? "md:grid-cols-2" : "md:grid-cols-2",
                    )}
                  >
                    {current.items.map((item, idx) => {
                      const badgeLabel = item.badge || (item.signature ? "Popular" : "");
                      return (
                        <motion.li
                          key={item.id}
                          whileHover={reduce ? undefined : { y: -4, rotate: idx % 2 === 0 ? -0.6 : 0.6 }}
                          transition={{ type: "spring", stiffness: 320, damping: 18 }}
                          className={cn(
                            "flex flex-col justify-between rounded-2xl border-[3px] border-ink p-5 shadow-[5px_5px_0_0_var(--fs-ink)] transition-colors",
                            item.signature ? "bg-cream/65" : "bg-paper",
                          )}
                        >
                          <div>
                            {item.photo && (
                              <div className="mb-3.5 overflow-hidden rounded-xl border-2 border-ink bg-cream">
                                <Image
                                  src={item.photo.src}
                                  alt={item.photo.alt}
                                  width={item.photo.width}
                                  height={item.photo.height}
                                  sizes="(min-width: 768px) 280px, 90vw"
                                  className="aspect-[16/10] h-auto w-full object-cover"
                                />
                              </div>
                            )}

                            <div className="flex flex-wrap items-start justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-display text-xl uppercase leading-tight tracking-wide text-ink">
                                  {item.name}
                                </span>
                                {badgeLabel && (
                                  <span className="inline-flex items-center gap-1 rounded-full border-2 border-ink bg-mustard px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-ink">
                                    <Sparkles className="size-3 fill-brand text-ink" aria-hidden="true" />
                                    {badgeLabel}
                                  </span>
                                )}
                                {item.isNew && (
                                  <span className="rounded-full border-2 border-ink bg-teal px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-ink">
                                    New
                                  </span>
                                )}
                              </div>

                              {item.prices.length === 0 && item.price && (
                                <span className="rounded-full border-2 border-ink bg-brand px-3 py-0.5 font-display text-lg text-paper">
                                  {item.price}
                                </span>
                              )}
                            </div>

                            {item.prices.length > 0 && (
                              <div className="mt-2.5 flex flex-wrap gap-2">
                                {item.prices.map((size) => (
                                  <span
                                    key={size.label}
                                    className="inline-flex items-baseline gap-1.5 rounded-full border-2 border-ink bg-paper px-3 py-0.5 text-sm"
                                  >
                                    <span className="font-semibold text-ink/75">{size.label}:</span>
                                    <span className="font-display text-base text-brand">{size.price}</span>
                                  </span>
                                ))}
                              </div>
                            )}

                            {item.description && (
                              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/80">{item.description}</p>
                            )}

                            {item.includes.length > 0 && (
                              <ul className="mt-3 space-y-1.5 border-t-2 border-dashed border-ink/15 pt-3">
                                {item.includes.map((inc) => (
                                  <li key={inc} className="flex items-center gap-2 text-sm font-medium text-ink/85">
                                    <CheckCircle2 className="size-4 shrink-0 text-brand" aria-hidden="true" />
                                    <span>{inc}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          {item.duration && (
                            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-ink/60">
                              {item.duration}
                            </p>
                          )}
                        </motion.li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {current.photo && (
                <figure className="hidden rotate-2 self-start rounded-2xl border-[3px] border-ink bg-cream p-2 shadow-[6px_6px_0_0_var(--fs-ink)] lg:block">
                  <Image
                    src={current.photo.src}
                    alt={current.photo.alt}
                    width={current.photo.width}
                    height={current.photo.height}
                    sizes="272px"
                    className="h-auto w-full rounded-xl object-cover"
                  />
                </figure>
              )}
            </div>

            {menuNote && (
              <p className="mt-6 rounded-2xl border-2 border-dashed border-ink/25 bg-cream/60 px-4 py-3 text-sm font-semibold text-ink/85">
                {menuNote}
              </p>
            )}

            {tel && phoneDisplay && (
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border-[3px] border-ink bg-ink px-5 py-4 text-paper">
                <p className="text-sm font-semibold sm:text-base">
                  Driving a sedan, SUV, or truck? Pull up to 10934 Lem Turner Rd or call for a quote and bay availability.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={tel} className={buttonMustard}>
                    <Phone className="size-4" aria-hidden="true" />
                    Call {phoneDisplay}
                  </a>
                  {extraPhones.map((line) => (
                    <a key={line.href} href={line.href} className={buttonCream}>
                      <Phone className="size-4 text-brand" aria-hidden="true" />
                      {line.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
