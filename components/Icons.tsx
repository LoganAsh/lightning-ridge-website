import type { IconName } from "@/lib/services";

const paths: Record<IconName, React.ReactNode> = {
  excavation: (<><path d="M3 20h18" /><path d="M5 20l3-8h8l3 8" /><path d="M10 12V6l4-2" /></>),
  utilities: (<><path d="M2 9h8v6H2" /><path d="M10 12h12" /><path d="M16 12v6" /><circle cx="16" cy="20" r="1.5" /><path d="M6 9V5" /></>),
  earthwork: (<><path d="M2 18l5-6 4 3 5-7 6 10" /><path d="M2 21h20" /></>),
  grading: (<><path d="M3 16h18" /><path d="M3 12l18 2" /><path d="M6 20v-4" /><path d="M12 20v-4" /><path d="M18 20v-4" /></>),
  concrete: (<><rect x="3" y="13" width="18" height="6" /><path d="M3 16h18" /><path d="M7 13V9" /><path d="M17 13V9" /></>),
};

export function ServiceIcon({ name, className = "h-10 w-10" }: { name: IconName; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}
