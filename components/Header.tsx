"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

// Transparent header: a dark-to-clear gradient over the hero, turning into a
// solid frosted bar once you scroll past it so the links stay readable over
// the white sections further down.
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const filled = solid || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter] duration-300 ${
        filled ? "bg-basin/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* gradient sits behind the bar while it's transparent */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/75 via-black/35 to-transparent transition-opacity duration-300 ${
          filled ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="relative flex h-20 w-full items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Lightning Ridge Excavation home" className="shrink-0">
          <Image src="/logo-light.png" alt="Lightning Ridge Excavation" width={360} height={173} priority className="h-14 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b-2 px-3 py-3 font-display text-lg font-semibold uppercase tracking-[0.06em] transition-colors ${
                isActive(item.href) ? "border-ridge-light text-white" : "border-transparent text-white/85 hover:text-white"
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
          className="flex h-12 w-12 items-center justify-center text-white md:hidden"
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
        <nav id="mobile-nav" aria-label="Mobile" className="relative border-t border-white/10 md:hidden">
          <div className="flex flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`py-3 font-display text-2xl font-semibold uppercase ${isActive(item.href) ? "text-ridge-light" : "text-white"}`}
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
