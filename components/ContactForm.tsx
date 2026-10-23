"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

// Opens the visitor's email app with the request filled in, so it works
// with no server. To receive submissions directly instead, point the form
// at a service like Formspree or a Next.js route handler.
const field = "w-full border border-[#B8C2CF] bg-white px-4 py-3.5 text-[1.0625rem] text-basin";
const label = "flex flex-col gap-2 text-[0.95rem] font-semibold";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened" | "no-email">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.bidEmail) {
      setStatus("no-email");
      return;
    }
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Project location: ${get("location")}`,
      `Service needed: ${get("service")}`,
      "",
      get("details"),
    ].join("\n");
    const subject = `Bid request${get("company") ? ` from ${get("company")}` : ""}`;
    window.location.href = `mailto:${site.bidEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  return (
    <form onSubmit={onSubmit} className="bg-snow p-6 sm:p-10">
      <h2 className="mb-8 text-[2.5rem] leading-none">Request a bid</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>Name<input name="name" required autoComplete="name" className={field} /></label>
        <label className={label}>Company<input name="company" autoComplete="organization" className={field} /></label>
        <label className={label}>Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
        <label className={label}>Phone<input name="phone" type="tel" autoComplete="tel" className={field} /></label>
        <label className={label}>Project location<input name="location" className={field} /></label>
        <label className={label}>
          Service needed
          <select name="service" className={field} defaultValue={services[0].name}>
            {services.map((s) => (<option key={s.id}>{s.name}</option>))}
            <option>Multiple / full site package</option>
          </select>
        </label>
      </div>
      <label className={`${label} mt-5`}>
        Project details
        <textarea name="details" rows={5} required className={`${field} resize-y`} />
      </label>
      <p className="mt-4 text-[0.95rem] text-rock">Have plans? Attach them to the email this opens.</p>
      <button type="submit" className="btn-primary mt-7">Send request</button>
      <p role="status" className="mt-4 min-h-[1.5em] text-[0.95rem]">
        {status === "opened" && "Your email app should open with the request filled in. Attach any plans and hit send."}
        {status === "no-email" && `The bid inbox isn’t set up yet. For now, please call ${site.phone}.`}
      </p>
    </form>
  );
}
