// Shared ridgeline shapes, echoing the zig-zag "lightning" peak in the logo.
// viewBox is 1440 x 400; shapes sit on the bottom edge.
export const FAR_RIDGE =
  "M0 400V250L120 215 230 240 360 150 470 205 600 120 720 185 840 110 980 190 1100 135 1240 200 1340 160 1440 190V400Z";
export const MID_RIDGE =
  "M0 400V300L160 255 250 285 420 170 440 225 560 105 600 140 700 230 820 200 960 260 1080 190 1190 250 1320 210 1440 245V400Z";
export const FRONT_RIDGE =
  "M0 400V340L180 300 330 330 520 285 640 250 760 215 830 160 880 205 930 185 1060 280 1200 300 1320 320 1440 305V400Z";

export function StaticRidges({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 400" preserveAspectRatio="none" className={className}>
      <path d={FAR_RIDGE} fill="#1F3556" />
      <path d={MID_RIDGE} fill="#2E6FE6" />
      <path d={FRONT_RIDGE} fill="#0E1621" />
    </svg>
  );
}
