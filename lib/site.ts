// Central content + image config. Swap any image URL here for the original files
// (e.g. "/images/hero.jpg" after dropping them into /public/images).
//
// Anything wrapped in `ph(...)` is placeholder copy waiting on the client — the
// pages render it with a visible "placeholder" style so it can't ship by accident.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Marks copy that still needs client input. Rendered by <Ph> as a dashed note. */
export type Placeholder = { placeholder: string };
export const ph = (placeholder: string): Placeholder => ({ placeholder });
export const isPh = (v: unknown): v is Placeholder =>
  typeof v === "object" && v !== null && "placeholder" in v;

export const images = {
  hero: u("1589829545856-d10d557cf95f", 2000),
  figBooks: u("1521587760476-6c12a4b040da", 400),
  secretarial: u("1450101499163-c8848c66ca85", 900),
  outsourced: u("1484788984921-03950022c9ef", 900),
  consultancy: u("1568992687947-868a62a9f521", 900),
  precedent: u("1481627834876-b7833e8f5570", 900),
  chambers: u("1505664194779-8beaceb93744", 900),
  ctaLibrary: u("1507842217343-583bb7270b66", 1800),
};

/* ── Routes ─────────────────────────────────────────────── */

export const routes = {
  home: "/",
  about: "/about",
  practice: "/practice-areas",
  lawyers: "/lawyers",
  careers: "/careers",
  contact: "/contact",
} as const;

export const navLeft = [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
  { label: "Practice Areas", href: routes.practice },
];
export const navRight = [
  { label: "Lawyers", href: routes.lawyers },
  { label: "Careers", href: routes.careers },
  { label: "Contact Us", href: routes.contact },
];

/* ── Contact ────────────────────────────────────────────── */

const WHATSAPP_NUMBER = "8801917506510";

export const contact = {
  phone: "+880 1917-506510",
  phoneHref: "tel:+8801917506510",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  email: "advrajaul@outlook.com",
  addressLines: ["Green City Regency, 2nd Floor", "26-27 Kakrail", "Dhaka-1000, Bangladesh"],
  map: "https://maps.google.com/?q=Green+City+Regency+Kakrail+Dhaka",
  hours: ph("Office hours (days and times)"),
};

/** WhatsApp click-to-chat link with a prefilled message. */
export const waLink = (message = "Hello Rajaul & Lawyers, I would like to discuss a legal matter.") =>
  `${contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailLink = (subject?: string) =>
  subject ? `mailto:${contact.email}?subject=${encodeURIComponent(subject)}` : `mailto:${contact.email}`;

/* ── Firm ───────────────────────────────────────────────── */

export const firm = {
  name: "Rajaul & Lawyers",
  descriptor: "Advocates & Tax Consultants",
  tagline: "Your Legal Partner for Every Step",
  intro:
    "RAJAUL & LAWYERS is a leading provider of professional services in Bangladesh split into three core competencies.",
  vision:
    "Our firm’s vision is to provide legal services to all businesses, institutions or persons, to offer practical solutions to our clients and to be universally recognized as a full service law firm.",
  mission:
    "We undertake to embrace our client’s needs and address them soundly by offering turn-around time, to enable them to make informed decisions. We have a reputation for providing exceptional legal services.",
  quote: "We are renowned for our commitment to excellence — a commitment our clients recognize and value.",
  reputation:
    "We have a reputation for providing exceptional legal services, and for our ability to find innovative solutions to the most complex of legal problems.",
  founded: ph("Year the firm was established"),
  history: ph("A short history of the firm — how and when it started, and key milestones"),
};

/** "Why clients choose us" — drawn from the vision / mission copy above. */
export const values = [
  {
    n: "01",
    title: "Prompt turn-around",
    body: "We address each client’s needs soundly and promptly, so decisions are made on time and with the facts.",
  },
  {
    n: "02",
    title: "Practical solutions",
    body: "Advice that works in practice — for businesses, institutions and individuals alike.",
  },
  {
    n: "03",
    title: "Commitment to excellence",
    body: "Innovative answers to the most complex of legal problems, with a standard our clients recognize and value.",
  },
];

/* ── Practice areas ─────────────────────────────────────── */

export type PracticeArea = {
  slug: string;
  title: string;
  /** One-line summary (featured areas only, so far). */
  summary?: string;
  featured?: boolean;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial",
    title: "Corporate and Commercial Law",
    summary:
      "From incorporation and compliance to mergers, acquisitions and the contracts that keep a business moving.",
    featured: true,
  },
  {
    slug: "property-conveyancing",
    title: "Property and Conveyancing Law",
    summary:
      "Acquisition, development, transfer and registration of property — and litigation when matters are disputed.",
    featured: true,
  },
  {
    slug: "taxation-audit",
    title: "Taxation and Audit Law",
    summary:
      "Income tax, VAT, customs and corporate tax — and representation before the Tax Tribunal and High Court.",
    featured: true,
  },
  { slug: "banking-finance", title: "Banking and Finance Law" },
  { slug: "civil-litigation", title: "Civil Litigation" },
  {
    slug: "constitutional-administrative",
    title: "Constitutional and Administrative Law",
    summary: "Writ petitions and judicial review before the High Court Division against unlawful state action.",
    featured: true,
  },
  {
    slug: "contracts",
    title: "Contracts Law",
    summary: "Drafting, vetting and negotiating agreements — and enforcing them when the other side does not perform.",
    featured: true,
  },
  { slug: "criminal", title: "Criminal Law" },
  { slug: "family", title: "Family Law" },
  {
    slug: "labour-employment",
    title: "Labour and Employment Law",
    summary: "Service rules, employment contracts, disputes and representation before the Labour Court.",
    featured: true,
  },
  { slug: "intellectual-property", title: "Intellectual Property Law" },
  { slug: "entertainment", title: "Entertainment Law" },
  { slug: "adr", title: "Alternative Dispute Resolution" },
  { slug: "consultancy", title: "Consultancy on Matters of Law" },
  { slug: "company-secretarial", title: "Company Secretarial Services" },
];

/** Two-digit number from the area's position in the list ("01" … "15"). */
export const areaNumber = (slug: string) =>
  String(practiceAreas.findIndex((a) => a.slug === slug) + 1).padStart(2, "0");

export const areaHref = (slug: string) => `${routes.practice}#${slug}`;

export const featuredAreas = practiceAreas
  .filter((a) => a.featured)
  .map((a) => ({ ...a, n: areaNumber(a.slug), body: a.summary! }));

/* ── Competencies / process ─────────────────────────────── */

export const competencies = [
  {
    title: "Corporate Secretarial Services",
    body: "Incorporation, statutory filings, returns and day-to-day legal compliance for companies.",
    img: images.secretarial,
  },
  {
    title: "Outsourced Professional Services",
    body: "Legal, tax and VAT expertise on call, so businesses can focus on running their operations.",
    img: images.outsourced,
  },
  {
    title: "Consultancy Solution Services",
    body: "Practical advice on matters of law, structuring and governance to support informed decisions.",
    img: images.consultancy,
  },
];

export const steps = [
  { n: "01", title: "Consult", body: "Tell us about your matter — at our chambers in Kakrail, by phone or on WhatsApp.", icon: "chat" },
  { n: "02", title: "Evaluate", body: "Each case is evaluated on its own merit, with a realistic view of the outcome from the start.", icon: "scale" },
  { n: "03", title: "Investigate", body: "Due diligence and investigation to locate the evidence and facts your matter needs.", icon: "search" },
  { n: "04", title: "Advise", body: "Practical advice with prompt turn-around time, so you can make informed decisions.", icon: "bulb" },
  { n: "05", title: "Resolve", body: "Representation in court and tribunal — or arbitration and mediation to avoid lengthy battles.", icon: "gavel" },
] as const;

/* ── Team ───────────────────────────────────────────────── */

/** Size of the team as stated by the firm; only some members are listed below so far. */
export const TEAM_SIZE = 11;

export type Member = {
  initials: string;
  name: string;
  alias?: string;
  role: string;
  quals: string;
  founder?: boolean;
};

export const team: Member[] = [
  {
    initials: "RI",
    name: "Md. Rajaul Islam",
    alias: "Masud",
    role: "Advocate & Tax Consultant",
    quals: "B.A · LL.B · ITP (NBR)",
    founder: true,
  },
  {
    initials: "SB",
    name: "Shazada Begum",
    alias: "Surma",
    role: "Advocate & Tax, VAT Adviser",
    quals: "B.Com (Hon’s) · M.Com (Accounting) · LL.B · ITP (NBR) · PGD-Tax Management",
  },
  {
    initials: "FU",
    name: "Fatema Begum Urmi",
    role: "Advocate & Tax, VAT Adviser",
    quals: "BSS · MSS · LL.B · ITP (NBR) · PGD-Tax Management",
  },
  {
    initials: "MK",
    name: "Mohsina Mahin Khan",
    role: "Advocate & Tax, VAT Adviser",
    quals: "B.A (Hon’s) · M.A (English) RU · LL.B · PGD-Tax Management",
  },
];

export const founder = team.find((m) => m.founder)!;

export const founderBio = ph("Founder biography — career, courts of practice, areas of focus (2–3 paragraphs)");

/* ── Stats (counted from the content above where possible) ─ */

export const stats = [
  { n: String(practiceAreas.length).padStart(2, "0"), label: "Practice Areas" },
  { n: String(TEAM_SIZE).padStart(2, "0"), label: "Advocates & Advisers" },
  { n: "06", label: "Advocates at the Bar" },
  { n: String(competencies.length).padStart(2, "0"), label: "Core Competencies" },
];

/* ── Careers ────────────────────────────────────────────── */

export type Opening = {
  role: string;
  type: string;
  experience: string;
  summary: string;
};

/** Empty until the firm confirms openings — the Careers page shows an empty state. */
export const openings: Opening[] = [];

export const careerPerks = [
  { n: "01", title: ph("Why join — point 1"), body: ph("e.g. mentorship, court exposure, training") },
  { n: "02", title: ph("Why join — point 2"), body: ph("e.g. range of practice areas") },
  { n: "03", title: ph("Why join — point 3"), body: ph("e.g. culture, growth path") },
];

export const hiringSteps = [
  { n: "01", title: "Apply", body: "Send your CV and a short cover note by email or WhatsApp.", icon: "chat" },
  { n: "02", title: "Review", body: "We review every application against current and upcoming needs.", icon: "search" },
  { n: "03", title: "Interview", body: "Shortlisted candidates meet the team at our chambers in Kakrail.", icon: "scale" },
  { n: "04", title: "Offer", body: "Successful candidates receive an offer and a start date.", icon: "bulb" },
] as const;
