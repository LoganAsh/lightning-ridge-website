export type IconName = "excavation" | "utilities" | "earthwork" | "grading" | "concrete";

export const services: {
  id: string;
  name: string;
  icon: IconName;
  summary: string;
  detail: string;
  scope: string[];
}[] = [
  {
    id: "excavation",
    name: "Excavation",
    icon: "excavation",
    summary: "Mass and structural excavation, basements, footings and over-excavation to spec.",
    detail:
      "Digging done to the drawings, from building pads to deep basements, with spoils managed and the hole ready for the next trade.",
    scope: ["Mass and structural excavation", "Basements and foundations", "Footings and over-excavation", "Backfill and compaction"],
  },
  {
    id: "utilities",
    name: "Site wet utilities",
    icon: "utilities",
    summary: "Water, sanitary sewer and storm drain installed, tested and ready for inspection.",
    detail:
      "Water, sewer and storm systems installed, bedded and tested, with the coordination that city and district inspections require.",
    scope: ["Culinary water and fire lines", "Sanitary sewer", "Storm drain and detention", "Service connections"],
  },
  {
    id: "earthwork",
    name: "Earthwork",
    icon: "earthwork",
    summary: "Cut and fill, import and export, compaction and site balancing.",
    detail:
      "Moving and placing material efficiently so the site balances, compacts and holds up to what gets built on it.",
    scope: ["Cut and fill", "Import and export", "Structural fill and compaction", "Site clearing and stripping"],
  },
  {
    id: "grading",
    name: "Grading",
    icon: "grading",
    summary: "Rough and finish grading to plan elevations, drainage and pad tolerances.",
    detail: "Shaping the site to plan elevations so water goes where it should and every pad sits at grade.",
    scope: ["Rough grading", "Finish grading", "Building and lot pads", "Drainage and swales"],
  },
  {
    id: "concrete-prep",
    name: "Concrete prep",
    icon: "concrete",
    summary: "Subgrade, base and fine grade so flatwork and foundations go in clean.",
    detail:
      "Subgrade and base work that gives flatwork, curb and foundations a solid, accurate surface to pour on.",
    scope: ["Subgrade preparation", "Road base placement", "Fine grading for flatwork", "Curb, gutter and sidewalk prep"],
  },
];
