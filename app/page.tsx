import Link from "next/link";
import { ParallaxHero } from "@/components/ParallaxHero";
import { CtaBand, PhotoSlot } from "@/components/Blocks";
import { ServiceIcon } from "@/components/Icons";
import { services } from "@/lib/services";

const steps = [
  { title: "Review and bid", text: "We go through your civil drawings, run quantities and send a clear, itemized bid." },
  { title: "Plan and coordinate", text: "Schedule, submittals and RFIs handled up front with your team and the city." },
  { title: "Mobilize and build", text: "Our crew and equipment on site, working to plan with regular updates." },
  { title: "Hand off", text: "Inspections passed, site clean and ready for the next trade." },
];

export default function Home() {
  return (
    <>
      <ParallaxHero />

      <section className="bg-basin text-white">
        <div className="wrap pb-24 pt-8">
          <p className="max-w-4xl font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold uppercase leading-tight">
            Excavation, site wet utilities, earthwork, grading and concrete prep for general contractors, developers
            and builders across multiple Utah counties.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-28">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker">What we do</p>
              <h2 className="h2">Everything below<br />finished grade</h2>
            </div>
            <Link href="/services" className="py-3 font-display text-lg font-bold uppercase tracking-[0.08em] text-ridge hover:text-ridge-dark">
              All services
            </Link>
          </div>
          <ul className="grid gap-x-16 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.id} className="border-t border-line">
                <Link href={`/services#${s.id}`} className="group flex gap-6 py-8">
                  <span className="text-ridge"><ServiceIcon name={s.icon} /></span>
                  <span>
                    <span className="block font-display text-3xl font-bold uppercase group-hover:text-ridge">{s.name}</span>
                    <span className="mt-2 block leading-relaxed text-rock">{s.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-snow">
        <div className="wrap py-28">
          <p className="kicker">How we work</p>
          <h2 className="h2 mb-14">From plan set to pad</h2>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-4 border-ridge pt-6">
                <span className="block font-display text-6xl font-bold leading-none text-[#B3BFCE]">{i + 1}</span>
                <h3 className="mb-3 mt-3 text-2xl">{step.title}</h3>
                <p className="leading-relaxed text-rock">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap grid items-center gap-16 py-28 lg:grid-cols-2">
          <PhotoSlot label="Job site photo" />
          <div>
            <p className="kicker">About Lightning Ridge</p>
            <h2 className="h2 mb-6">Local crew,<br />Wasatch tough</h2>
            <p className="mb-4 text-lg leading-relaxed text-rock">
              Lightning Ridge Excavation is a civil construction company based in the Salt Lake area, working for
              general contractors, developers and builders across multiple Utah counties.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-rock">
              [A line about the company’s story, founding year or what sets the crew apart.]
            </p>
            <Link href="/about" className="btn-ghost-dark">Meet the company</Link>
          </div>
        </div>
      </section>

      <CtaBand title="Have plans? Send them over." text="We’ll review your drawings and get you a bid." />
    </>
  );
}
