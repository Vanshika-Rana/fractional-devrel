// One place for everything search engines and social cards read.
// Set NEXT_PUBLIC_SITE_URL in the host's env if the domain ever changes.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fractional.van.codes"
).replace(/\/$/, "");

export const SITE_NAME = "Vanshika Rana";

export const SITE_TITLE =
  "Fractional DevRel for Developer Tools | Vanshika Rana";

export const SITE_DESCRIPTION =
  "Fractional DevRel for developer-tool teams. Docs, demos, onboarding, and community, from one task to a monthly retainer.";

export const SHORT_DESCRIPTION =
  "I help developer-tool teams go from curious to shipped: docs, demos, onboarding, and the community that keeps people around.";

export const TWITTER_HANDLE = "@aahiknsv";

export const KEYWORDS = [
  "fractional DevRel",
  "developer relations consultant",
  "developer advocate for hire",
  "freelance developer relations",
  "technical writing",
  "API documentation",
  "developer onboarding",
  "developer community",
  "developer marketing",
  "DevRel for startups",
];
