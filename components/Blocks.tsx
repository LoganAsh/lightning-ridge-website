import Link from "next/link";
import { StaticRidges } from "@/components/Ridges";

export function PageHero({ kicker, title, intro }: { kicker: string; title: string; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-dusk text-white">
      <div className="wrap relative z-10 pb-44 pt-24">
        <p className="mb-4 text-lg font-semibold text-ridge-light">{kicker}</p>
        <h1 className="max-w-4xl text-[clamp(3rem,7vw,6rem)] leading-[0.92]">{title}</h1>
        <p className="mt-7 max-w-xl text-xl leading-relaxed text-mist">{intro}</p>
      </div>
      <StaticRidges className="absolute inset-x-0 bottom-0 h-40 w-full" />
    </section>
  );
}

export function CtaBand({ title, text, cta = "Request a bid" }: { title: string; text?: string; cta?: string }) {
  return (
    <section className="bg-ridge text-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-8 py-20">
        <div>
          <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none">{title}</h2>
          {text && <p className="mt-3 text-lg text-[#E4EDFF]">{text}</p>}
        </div>
        <Link href="/contact" className="btn-white">{cta}</Link>
      </div>
    </section>
  );
}

// Stand-in for a real photo. Swap for <Image src="/photos/..." /> once photos are in /public/photos.
export function PhotoSlot({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center bg-basin p-6 text-center text-[#8A96A8]">
      [{label}]
    </div>
  );
}
