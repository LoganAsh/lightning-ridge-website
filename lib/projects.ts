// Projects shown on the Portfolio page.
// Anything in [brackets] is a placeholder: replace it with the real project.
// For photos, drop images in public/photos/ and set `image: "/photos/your-photo.jpg"`
// plus a short `imageAlt` describing the shot. Wide (16:9) photos crop best.
export type Project = {
  id: string;
  name: string;
  type: "Commercial" | "Residential" | "Industrial" | "Municipal";
  location: string;
  scope: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  { id: "project-1", name: "[Project name]", type: "Commercial", location: "[City], UT", scope: "[Scope: e.g. mass excavation, storm drain and building pad for a two-story retail center.]" },
  { id: "project-2", name: "[Project name]", type: "Residential", location: "[City], UT", scope: "[Scope: e.g. water, sewer and grading for a 40-lot subdivision.]" },
  { id: "project-3", name: "[Project name]", type: "Industrial", location: "[City], UT", scope: "[Scope: e.g. cut and fill, import and compaction for a warehouse yard.]" },
  { id: "project-4", name: "[Project name]", type: "Municipal", location: "[City], UT", scope: "[Scope: e.g. culinary water line replacement and service connections.]" },
  { id: "project-5", name: "[Project name]", type: "Commercial", location: "[City], UT", scope: "[Scope: e.g. basement excavation and underground detention for a school.]" },
];
