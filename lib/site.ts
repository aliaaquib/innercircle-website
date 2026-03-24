export const siteConfig = {
  name: "InnerCircle",
  description: "Get referrals that actually work with AI-assisted outreach, resume tools, and job discovery.",
  appUrl:
    process.env.NEXT_PUBLIC_INNERCIRCLE_APP_URL ||
    process.env.NEXT_PUBLIC_MAIN_APP_URL ||
    "http://localhost:3000"
};

export function resolveAppUrl(path: string) {
  const normalizedBase = siteConfig.appUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

export const featureHighlights = [
  {
    title: "Smart matching",
    description: "Surface the three best people to reach out to based on the role, company, and your goals."
  },
  {
    title: "AI email generation",
    description: "Generate warm outreach drafts that sound researched, personal, and easy to send."
  },
  {
    title: "Resume tools",
    description: "Tighten your resume before applying with practical edits, missing keyword guidance, and fit signals."
  },
  {
    title: "Job discovery",
    description: "Track high-signal openings and move from finding roles to making the right introductions."
  }
] as const;

export const detailedFeatures = [
  {
    title: "Job dashboard",
    body: "Track promising roles, compare openings, and keep your search focused on the opportunities worth effort."
  },
  {
    title: "Outreach system",
    body: "InnerCircle identifies the strongest contacts, explains why they matter, and prepares personalized outreach."
  },
  {
    title: "Resume tools",
    body: "From quick tailoring to deeper improvement suggestions, the resume toolkit helps you show up sharper."
  },
  {
    title: "AI assistant",
    body: "Use an always-on assistant for guidance across applications, networking strategy, and messaging decisions."
  }
] as const;

export const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Explore the workflow and test the product fit.",
    features: ["Mock profile setup", "Limited demo referrals", "Basic AI draft preview"]
  },
  {
    name: "Pro",
    price: "$24",
    description: "For active job seekers who want stronger weekly momentum.",
    features: ["Unlimited target matching", "AI outreach generation", "Resume tailoring tools"]
  },
  {
    name: "Teams",
    price: "$79",
    description: "For coaches, communities, and group programs.",
    features: ["Shared playbooks", "Priority support", "Multi-user workspace access"]
  }
] as const;

export const socialProof = [
  {
    quote: "InnerCircle gave me a cleaner target list than I could build myself and helped me send better first emails.",
    name: "Maya R.",
    role: "Product candidate"
  },
  {
    quote: "The outreach flow removed a lot of guesswork. I knew who to message and what to say.",
    name: "James T.",
    role: "Software engineer"
  },
  {
    quote: "It feels like having a networking strategist and resume coach in one place.",
    name: "Sofia L.",
    role: "MBA applicant"
  },
  {
    quote: "I stopped wasting time on random outreach and started messaging people who actually made sense for the role.",
    name: "Daniel C.",
    role: "Growth candidate"
  },
  {
    quote: "The drafts were short, natural, and easy to personalize. That alone saved me hours each week.",
    name: "Elena M.",
    role: "Operations manager"
  },
  {
    quote: "What I liked most was the workflow. Jobs, people, and messaging finally felt connected.",
    name: "Aaron P.",
    role: "Software engineer"
  }
] as const;
