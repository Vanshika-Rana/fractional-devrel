// Swap TALK_HREF for a Cal.com link when booking is set up.
// Prices, the retainer line, and FAQ answers live here so the page is easy to update.

export const TALK_HREF = "mailto:ranavanshika172000@gmail.com?subject=Fractional%20DevRel";

export const EMAIL = "ranavanshika172000@gmail.com";

export const proof = [
  { value: "1000+", label: "developers served" },
  { value: "4K+", label: "community grown from zero" },
  { value: "40%", label: "less integration drop-off" },
  { value: "4+ years", label: "doing this work" },
] as const;

export const proofNote =
  "I'm an engineer first. I work inside your docs, your repo, and your community until developers ship something real.";

export const task = {
  name: "Pick a Task",
  lead: "Most people start here.",
  price: "$300-$1,800",
  meta: ["3 days to 2 weeks", "one deliverable at a time"],
  summary:
    "Hire me for one specific piece of work: a blog post, a demo video, a docs fix, whatever's actually needed right now. No need to commit to a bigger project just to get something shipped.",
  menuLabel: "Menu (starting prices, scoped on a quick call):",
  menu: [
    { item: "Blog post or technical tutorial", price: "$300-$600" },
    { item: "Demo or walkthrough video", price: "$400-$800" },
    { item: "Blog + video, same topic", price: "$700-$1,200" },
    { item: "Docs page or API reference section", price: "$400-$700" },
    { item: "White paper", price: "$900-$1,800" },
    { item: "Onboarding audit (one flow, reviewed + fix list)", price: "$600-$1,200" },
    { item: "Quickstart or onboarding rewrite, implemented", price: "$700-$1,400" },
  ],
  fit: "Best for teams who know exactly what they need (one blog, one video, one fix) and don't want to commit to a bigger project yet. Need more than one piece? That's the Docs and demo sprint, below.",
};

export const sprint = {
  name: "Docs and demo sprint",
  price: "$3,000-$6,000",
  time: "2-4 weeks",
  scope: "Fixed scope, usually 3 or 4 of these",
  summary:
    "The docs, demos, and writing that get a developer from the landing page to something they actually shipped.",
  deliverables: [
    "A quickstart and an API reference",
    "1-3 working sample apps, in Python, Node, or TypeScript",
    "Launch or tutorial writing",
    "Onboarding fixes, implemented, whether or not we started with a smaller piece first",
  ],
  fit: "Best for teams about to launch. I'll go through your docs, rework onboarding wherever it's confusing, and ship the working samples that make the product feel real the moment developers land on it.",
};

export const retainer = {
  name: "Fractional DevRel",
  price: "$4,000/month",
  time: "10-20 hours a week",
  note: "I take limited fractional clients at a time. If I'm full, I'll say so before we scope anything. A task or a sprint is the way in either way.",
  summary:
    "Fractional DevRel without a full-time hire: docs, demos, content, community, hackathon support, whatever's needed, on an ongoing basis.",
  deliverables: [
    "Regular technical writing (tutorials, docs updates, launch posts)",
    "Community and ambassador program support",
    "Conference, workshop, and hackathon prep, whenever it comes up",
    "Monthly reporting tied to the adoption metrics that matter to the client",
  ],
  fit: "Best if you're past the first launch and you need someone owning the developer relationship, without hiring full-time yet.",
};

export const process = [
  {
    name: "Discover",
    body: "We hop on a call. I ask a lot of questions about your product and the developers you want using it.",
  },
  {
    name: "Diagnose",
    body: "You get a written plan before I change anything. A task, a sprint, or fractional, the scope is clear first.",
  },
  {
    name: "Build",
    body: "Docs, demos, writing, or community work, shipped where you can see it coming together.",
  },
  {
    name: "Hand off",
    body: "You leave with numbers that matter to you, and a clear idea of what to keep doing after I'm gone.",
  },
] as const;

export const faqs = [
  {
    question: "How is a sprint different from fractional DevRel?",
    answer:
      "A sprint is a fixed piece of work with a start and an end. Fractional DevRel is monthly capacity for teams that need someone in the role every week, not a one-off project.",
  },
  {
    question: "How fast can you start?",
    answer:
      "A single task can usually start within a week. Sprints and fractional work depend on what I'm already in the middle of. I'll give you a real date on the call.",
  },
  {
    question: "Do you work with early-stage or pre-seed teams?",
    answer:
      "Yes. We usually start with one task, so both of us know where to focus before scoping anything bigger.",
  },
  {
    question: "Where are you based, and what hours do you keep?",
    answer:
      "I'm based in India and work remotely with teams wherever they are.",
  },
  {
    question: "How does billing work?",
    answer:
      "Invoices are in USD. Fixed-scope work is half to start and half when it's delivered. Fractional DevRel is billed monthly, at the start of the month.",
  },
] as const;

export const profiles = [
  { label: "van.codes", href: "https://van.codes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vanshikarana" },
  { label: "X", href: "https://x.com/aahiknsv" },
  { label: "GitHub", href: "https://github.com/Vanshika-Rana" },
] as const;
