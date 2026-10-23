"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Lightning Ridge Excavation home" className="shrink-0">
          <Image src="/logo.png" alt="Lightning Ridge Excavation" width={360} height={173} priority className="h-14 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b-2 px-3 py-3 font-display text-lg font-semibold uppercase tracking-[0.06em] transition-colors ${
                isActive(item.href) ? "border-ridge text-ridge" : "border-transparent text-basin hover:text-ridge"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-4 min-h-[44px] px-5 text-base">
            Request a bid
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white md:hidden">
          <div className="wrap flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`py-3 font-display text-2xl font-semibold uppercase ${isActive(item.href) ? "text-ridge" : "text-basin"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary my-3">Request a bid</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
