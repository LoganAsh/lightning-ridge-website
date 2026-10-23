"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Layered parallax hero, based on Osmo's parallax component from 21st.dev.
// Layers 1-2: the template's mountain photos. Layer 3: the trackhoe on its
// dirt pile (sits in the fade to black). Layer 4: the see-through title on top.
const MOUNTAINS_BACK =
  "https://cdn.21st.dev/assets/mirror/a4/a43f4eae3459c461345ee676f12d6e1ddca65e8a5279a5af00d475b17ff83aea.webp";
const MOUNTAINS_FRONT =
  "https://cdn.21st.dev/assets/mirror/50/50ca6a0d36d2780bfcb469d6db7eaec0be7e0d2961ba69a63d2a1473b040338d.webp";

const LAYERS = [
  { layer: "1", yPercent: 70 },
  { layer: "2", yPercent: 55 },
  { layer: "3", yPercent: 40 }, // title
  { layer: "4", yPercent: 10 }, // trackhoe
];

export function ParallaxHero({ children }: { children?: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    // Scoped to this hero so cleanup never touches other ScrollTriggers.
    const ctx = gsap.context(() => {
      const trigger = root.querySelector("[data-parallax-layers]");
      if (!trigger) return;
      const tl = gsap.timeline({
        scrollTrigger: { trigger, start: "0% 0%", end: "100% 0%", scrub: 0 },
      });
      LAYERS.forEach(({ layer, yPercent }) => {
        tl.to(`[data-parallax-layer="${layer}"]`, { yPercent, ease: "none" }, 0);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax" ref={rootRef}>
      <section className="parallax__header" aria-labelledby="hero-title">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow" />
          <div data-parallax-layers className="parallax__layers">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MOUNTAINS_BACK} data-parallax-layer="1" alt="" className="parallax__layer-img" loading="eager" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MOUNTAINS_FRONT} data-parallax-layer="2" alt="" className="parallax__layer-img" loading="eager" />
            <div data-parallax-layer="4" className="parallax__layer-hoe">
              <div className="hoe">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/hero/trackhoe.webp" alt="" width={2203} height={818} />
              </div>
            </div>
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h1 id="hero-title" className="parallax__title">
                Lightning Ridge<small>Excavation</small>
              </h1>
            </div>
          </div>
          <div className="parallax__fade" />
        </div>
      </section>
      {children && <section className="parallax__content">{children}</section>}
    </div>
  );
}
