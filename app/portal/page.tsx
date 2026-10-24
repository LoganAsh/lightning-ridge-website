import type { Metadata } from "next";
import { LoginPage } from "@/components/ui/sign-in-page";

export const metadata: Metadata = {
  title: "Employee portal",
  // Internal page: keep it out of search results.
  robots: { index: false, follow: false },
};

export default function Portal() {
  return <LoginPage />;
}
