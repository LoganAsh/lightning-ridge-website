import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/Blocks";
import { ServiceIcon } from "@/components/Icons";
import { services } from "@/lib/services";

export const metadata: Metadata = { title: "Services" };

const projectTypes = [
  { title: "Commercial", text: "Retail, office, schools and institutional sites." },
  { title: "Residential", text: "Subdivisions, multifamily and custom homes." },
  { title: "Industrial", text: "Warehouse, yard and heavy-use pads." },
  { title: "Municipal", text: "Public utility and infrastructure work." },
];

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Site work, start to finish grade"
        intro="One crew for the dirt, the pipe and the prep, so your site moves without hand-off gaps."
      />

      <section className="bg-white">
        <div className="wrap py-20">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid scroll-mt-28 gap-8 py-14 lg:grid-cols-[auto_1fr_1fr] lg:gap-16 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <span className="text-ridge"><ServiceIcon name={s.icon} className="h-14 w-14" /></span>
              <div>
                <h2 className="mb-4 text-[2.75rem] leading-none">{s.name}</h2>
                <p className="max-w-xl text-lg leading-[1.7] text-rock">{s.detail}</p>
              </div>
              <ul className="flex flex-col gap-3 text-[1.0625rem]">
                {s.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-[0.55em] h-2 w-2 shrink-0 bg-ridge" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-snow">
        <div className="wrap py-28">
          <p className="kicker">Who we work with</p>
          <h2 className="h2 mb-12">Project types</h2>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((p) => (
              <div key={p.title} className="border-t border-[#CBD3DE] pt-6">
                <h3 className="mb-2 text-2xl">{p.title}</h3>
                <p className="leading-relaxed text-rock">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Need a number on your plans?" text="Send your drawings and scope, and we’ll put a bid together." />
    </>
  );
}
