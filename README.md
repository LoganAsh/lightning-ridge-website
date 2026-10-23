# Lightning Ridge Excavation website

Next.js 14 (App Router) + Tailwind CSS, with a GSAP + Lenis parallax hero
adapted from Osmo's parallax scrolling component on 21st.dev.

## Run it

    npm install
    npm run dev        # http://localhost:3000

## Fill in before launch

Everything in [brackets] is a placeholder.

- `lib/site.ts` — phone, email, address, hours, counties, domain, and
  `bidEmail` (the address the contact form sends to). Until `bidEmail` is
  set, the form tells visitors to call instead.
- `app/page.tsx` and `app/about/page.tsx` — company story lines.
- Photos: drop images in `public/photos/` and replace each `<PhotoSlot />`
  with `<Image src="/photos/your-photo.jpg" ... />`.

## How the hero works

`components/ParallaxHero.tsx` has four layers. As you scroll, the far ridge
moves 70%, the blue ridge 55%, the title 40% and the front ridge (with the
excavator arm from the logo) 10%, so the title sinks behind the front ridge.
Lenis smooth scrolling lives in `components/SmoothScroll.tsx`. Both are
skipped for visitors with "reduce motion" turned on.

## Deploy

Push to GitHub and import the repo in Vercel (framework: Next.js, no
settings needed), or run `npx vercel` from this folder.
