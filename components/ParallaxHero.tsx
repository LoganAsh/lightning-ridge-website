"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAR_RIDGE, MID_RIDGE, FRONT_RIDGE } from "@/components/Ridges";

// Layered parallax hero, adapted from Osmo's parallax scrolling component.
// Layers further back travel further as you scroll, so the title sinks
// behind the front ridge where the excavator arm is digging.
const LAYERS = [
  { layer: "1", yPercent: 70 },
  { layer: "2", yPercent: 55 },
  { layer: "3", yPercent: 40 },
  { layer: "4", yPercent: 10 },
];

const ridgeSvg = "absolute bottom-0 left-1/2 h-auto w-full min-w-[960px] -translate-x-1/2";

export function ParallaxHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    // gsap.context scopes selectors to this hero and lets us revert only
    // what this component created, leaving other ScrollTriggers alone.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 80px", end: "bottom 80px", scrub: 0 },
      });
      LAYERS.forEach(({ layer, yPercent }) => {
        tl.to(`[data-parallax-layer="${layer}"]`, { yPercent, ease: "none" }, 0);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-labelledby="hero-title"
      className="relative h-[calc(100svh-5rem)] min-h-[620px] max-h-[1000px] overflow-hidden bg-dusk"
    >
      <div data-parallax-layer="1" className="pointer-events-none absolute inset-0">
        <svg aria-hidden="true" viewBox="0 0 1440 400" className={`${ridgeSvg} -translate-y-[18%]`}>
          <path d={FAR_RIDGE} fill="#1F3556" />
        </svg>
      </div>

      <div data-parallax-layer="2" className="pointer-events-none absolute inset-0">
        <svg aria-hidden="true" viewBox="0 0 1440 400" className={`${ridgeSvg} -translate-y-[6%]`}>
          <path d={MID_RIDGE} fill="#2E6FE6" />
        </svg>
      </div>

      <div data-parallax-layer="3" className="absolute inset-x-0 top-[8%] sm:top-[9%]">
        <div className="wrap text-center">
          <h1 id="hero-title" className="text-white">
            <span className="block text-[clamp(4rem,13vw,12rem)] leading-[0.82] tracking-[0.02em]">Lightning Ridge</span>
            <span className="mt-3 block text-[clamp(1.5rem,3.4vw,3rem)] tracking-[0.42em] text-ridge-light">Excavation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
            We move the ground your project stands on, across the Salt Lake area and beyond.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Request a bid</Link>
            <Link href="/services" className="btn-ghost-light">See our services</Link>
          </div>
        </div>
      </div>

      <div data-parallax-layer="4" className="pointer-events-none absolute inset-0">
        <svg aria-hidden="true" viewBox="0 0 1440 400" className={ridgeSvg} style={{ overflow: "visible" }}>
          <path d={FRONT_RIDGE} fill="#0E1621" />
          <image href="/arm.svg" x="792" y="86" width="68" height="148" />
        </svg>
        {/* extends the front ridge past the hero's bottom edge as it drifts down */}
        <div className="absolute inset-x-0 top-full h-[20%] bg-basin" />
      </div>
    </section>
  );
}
