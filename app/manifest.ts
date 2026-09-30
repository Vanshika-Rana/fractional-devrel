import type { MetadataRoute } from "next";
import { SHORT_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME}, fractional DevRel`,
    short_name: SITE_NAME,
    description: SHORT_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#f6f3ec",
    theme_color: "#ffe14a",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
