import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-basin text-mist">
      <div className="wrap flex flex-wrap justify-between gap-12 py-16">
        <div className="max-w-sm">
          <Image src="/mark.svg" alt="Lightning Ridge Excavation" width={160} height={80} className="mb-5 h-auto w-36" />
          <p className="leading-relaxed">Excavation, site utilities and earthwork for the Salt Lake area and beyond.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-1 font-display text-lg font-bold uppercase tracking-[0.08em] text-white">Company</p>
          {nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="py-1 hover:text-white">{item.label}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-1 font-display text-lg font-bold uppercase tracking-[0.08em] text-white">Get in touch</p>
          <span className="py-1">{site.phone}</span>
          <span className="py-1">{site.email}</span>
          <span className="py-1">{site.street}, {site.cityLine}</span>
        </div>
      </div>
      <div className="wrap border-t border-shale py-8 text-sm text-[#8A96A8]">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
