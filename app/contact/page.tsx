import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1 font-semibold text-ridge">{label}</p>
      <div className="text-xl leading-relaxed">{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact us"
        title="Let’s break ground"
        intro="Tell us about your project or send plans for a bid, and we’ll get back to you."
      />
      <section className="bg-white">
        <div className="wrap grid items-start gap-16 py-24 lg:grid-cols-[3fr_2fr]">
          <ContactForm />
          <aside className="flex flex-col gap-8">
            <Detail label="Phone">{site.phoneHref ? <a href={site.phoneHref} className="hover:text-ridge">{site.phone}</a> : site.phone}</Detail>
            <Detail label="Email">{site.email}</Detail>
            <Detail label="Office">{site.street}<br />{site.cityLine}</Detail>
            <Detail label="Hours">{site.hours}</Detail>
            <div className="bg-basin p-7 text-white">
              <p className="font-display text-2xl font-bold uppercase">Serving the Salt Lake area</p>
              <p className="mt-2 text-mist">And projects across multiple Utah counties.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
