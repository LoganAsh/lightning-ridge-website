import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/Blocks";
import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Portfolio" };

// Stand-in fills in the site palette, used until a project has a photo.
const fills = [
  "linear-gradient(135deg, #1F2D3F 0%, #132036 55%, #2E6FE6 140%)",
  "linear-gradient(135deg, #132036 0%, #1F55BC 120%)",
  "linear-gradient(135deg, #0E1621 0%, #1F2D3F 60%, #4A5566 130%)",
  "linear-gradient(135deg, #1F55BC 0%, #132036 90%)",
  "linear-gradient(135deg, #1F2D3F 0%, #0E1621 70%, #1F55BC 150%)",
];

const slides: SqueezeSlide[] = projects.map((p, i) => ({
  id: p.id,
  title: `${p.name}, ${p.location}.`,
  description: p.scope,
  image: p.image,
  imageAlt: p.imageAlt,
  background: fills[i % fills.length],
  overlay: (
    <span className="font-display text-xl font-bold uppercase tracking-[0.08em] text-white">{p.type}</span>
  ),
  action: "Request a similar bid",
  href: "/contact",
}));

export default function Portfolio() {
  return (
    <>
      <PageHero
        kicker="Portfolio"
        title="Ground we’ve moved"
        intro="A look at recent excavation, utility and grading work across the Salt Lake area."
      />

      <section className="bg-white">
        <div className="wrap py-24">
          <p className="kicker">Recent projects</p>
          <h2 className="h2 mb-10">Work from the field</h2>
          <SqueezeCarousel
            slides={slides}
            label="Recent projects"
            // Keeps the open panel narrower than the row on phones, so the slats still fit.
            height="min(340px, calc((100cqi - 120px) * 9 / 16))"
            radius={0}
            accent="#2E6FE6"
            accentForeground="#FFFFFF"
            style={{ fontFamily: 'Barlow, "Helvetica Neue", Arial, sans-serif' }}
          />
        </div>
      </section>

      <CtaBand title="Have a project like these?" text="Send the plans and we’ll put a bid together." />
    </>
  );
}
