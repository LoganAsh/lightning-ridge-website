import type { Metadata } from "next";
import { CtaBand, PageHero, PhotoSlot } from "@/components/Blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About us" };

const values = [
  { title: "Safety first", text: "Trench safety, utility locates and clean, organized sites on every job." },
  { title: "On schedule", text: "We show up when we say we will, so the trades behind us can too." },
  { title: "Built to plan", text: "Elevations, slopes and utilities installed to the drawings and ready for inspection." },
  { title: "Straight talk", text: "Clear bids, quick answers and no surprises when conditions change." },
];

export default function About() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Built in the Salt Lake Valley"
        intro="A civil construction company focused on the work that has to be right before anything else can go up."
      />

      <section className="bg-white">
        <div className="wrap grid gap-12 py-28 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div>
            <p className="kicker">Our story</p>
            <h2 className="h2">The ground floor of every project</h2>
          </div>
          <div className="flex max-w-2xl flex-col gap-5 text-lg leading-[1.75] text-rock">
            <p>
              Lightning Ridge Excavation is a civil construction company based in the Salt Lake area of Utah. We
              handle excavation, site wet utilities, earthwork, grading and concrete prep for general contractors,
              developers and builders across multiple counties.
            </p>
            <p>[Company story: when and why Lightning Ridge was founded, who leads it, and the kinds of projects the crew is known for.]</p>
            <p>[What clients can expect: communication style, scheduling, how the team handles changes in the field.]</p>
          </div>
        </div>
      </section>

      <section className="bg-snow">
        <div className="wrap py-28">
          <p className="kicker">What we stand on</p>
          <h2 className="h2 mb-14">How we run our sites</h2>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="border-t border-[#CBD3DE] pt-6">
                <h3 className="mb-2 text-3xl">{v.title}</h3>
                <p className="max-w-md leading-relaxed text-rock">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap grid items-center gap-16 py-28 lg:grid-cols-2">
          <div>
            <p className="kicker">Service area</p>
            <h2 className="h2 mb-6">Working across the Wasatch Front</h2>
            <p className="mb-8 text-lg leading-relaxed text-rock">
              Based in the Salt Lake area, we take on projects in multiple counties across Utah.
            </p>
            <ul className="flex flex-wrap gap-3">
              {site.counties.map((c, i) => (
                <li key={i} className="border-2 border-basin px-4 py-2 font-display text-lg font-semibold uppercase tracking-[0.04em]">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <PhotoSlot label="Crew or equipment photo" />
        </div>
      </section>

      <CtaBand title="Let’s talk about your site" cta="Contact us" />
    </>
  );
}
