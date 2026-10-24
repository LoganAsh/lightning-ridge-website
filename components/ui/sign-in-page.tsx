"use client";

// Adapted from "Sign In Page" on 21st.dev.
// Changes from the original: Next.js instead of react-router, the stock image
// swapped for a Pexels photo of pipe work in a trench, LRE fonts and colors,
// labels tied to their inputs, and the sign-up / Google / GitHub options
// removed (employees get accounts from the office). Sign-in is not wired up
// yet: submitting shows a notice instead.
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { site } from "@/lib/site";

const field =
  "w-full border border-[#B8C2CF] bg-white px-4 py-3.5 text-[1.0625rem] text-basin outline-none transition-shadow focus:border-ridge focus:ring-2 focus:ring-ridge/30";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to the auth provider once it's chosen.
    setNotice("Sign-in isn’t live yet. Check back soon.");
  };

  return (
    <div className="flex min-h-[100svh] flex-col bg-white pt-20 lg:flex-row">
      {/* Left panel: photo */}
      <div className="relative min-h-[260px] overflow-hidden bg-dusk lg:min-h-0 lg:flex-1">
        <Image
          src="https://images.pexels.com/photos/27354191/pexels-photo-27354191.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Worker joining pipe in an open utility trench"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
        {/* keeps the heading readable over the photo */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-basin/85 via-basin/30 to-basin/10" />
        <div className="relative z-10 p-8 sm:p-12">
          <p className="mb-3 text-lg font-semibold text-ridge-light">Lightning Ridge Excavation</p>
          <p className="max-w-md font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[0.92] text-white">Crew portal</p>
          <p className="mt-4 hidden max-w-sm text-lg leading-relaxed text-mist lg:block">
            Schedules, job files and paperwork for the Lightning Ridge team.
          </p>
        </div>
      </div>

      {/* Right panel: form */}
      <div className="flex flex-1 items-center justify-center bg-white">
        <div className="w-full max-w-md px-5 py-12 sm:p-10">
          <div className="mb-8">
            <h1 className="mb-3 text-[2.75rem] leading-none text-basin">Welcome back</h1>
            <p className="text-rock">
              Need an account? Ask the office
              {site.phoneHref ? (
                <> at <a href={site.phoneHref} className="font-semibold text-ridge hover:text-ridge-dark">{site.phone}</a></>
              ) : null}
              .
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="portal-email" className="mb-2 block text-[0.95rem] font-semibold text-basin">
                Email address
              </label>
              <input
                id="portal-email"
                type="email"
                name="email"
                autoComplete="username"
                value={formData.email}
                onChange={handleInputChange}
                className={field}
                required
              />
            </div>

            <div>
              <label htmlFor="portal-password" className="mb-2 block text-[0.95rem] font-semibold text-basin">
                Password
              </label>
              <div className="relative">
                <input
                  id="portal-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`${field} pr-14`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-rock hover:text-basin"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-2 text-[0.95rem] text-rock">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 accent-ridge"
                />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => setNotice("Password resets aren’t live yet. Ask the office for help.")}
                className="py-2 text-[0.95rem] font-semibold text-ridge hover:text-ridge-dark"
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign in
            </button>

            <p role="status" className="min-h-[1.5em] text-[0.95rem] text-rock">
              {notice}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
