// Central content + image config. Swap any image URL here for the original files
// (e.g. "/images/hero.jpg" after dropping them into /public/images).

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

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

export const contact = {
  phone: "+880 1917-506510",
  phoneHref: "tel:+8801917506510",
  whatsapp: "https://wa.me/8801917506510",
  email: "advrajaul@outlook.com",
  addressLines: ["Green City Regency, 2nd Floor", "26-27 Kakrail", "Dhaka-1000, Bangladesh"],
  map: "https://maps.google.com/?q=Green+City+Regency+Kakrail+Dhaka",
};

export const navLeft = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
];
export const navRight = [
  { label: "Lawyers", href: "#team" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

export const practiceAreas = [
  "Corporate and Commercial Law",
  "Property and Conveyancing Law",
  "Taxation and Audit Law",
  "Banking and Finance Law",
  "Civil Litigation",
  "Constitutional and Administrative Law",
  "Contracts Law",
  "Criminal Law",
  "Family Law",
  "Labour and Employment Law",
  "Intellectual Property Law",
  "Entertainment Law",
  "Alternative Dispute Resolution",
  "Consultancy on Matters of Law",
  "Company Secretarial Services",
];

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

export const featuredAreas = [
  {
    n: "01",
    title: "Corporate and Commercial Law",
    body: "From incorporation and compliance to mergers, acquisitions and the contracts that keep a business moving.",
  },
  {
    n: "02",
    title: "Property and Conveyancing Law",
    body: "Acquisition, development, transfer and registration of property — and litigation when matters are disputed.",
  },
  {
    n: "03",
    title: "Taxation and Audit Law",
    body: "Income tax, VAT, customs and corporate tax — and representation before the Tax Tribunal and High Court.",
  },
  {
    n: "06",
    title: "Constitutional and Administrative Law",
    body: "Writ petitions and judicial review before the High Court Division against unlawful state action.",
  },
  {
    n: "07",
    title: "Contracts Law",
    body: "Drafting, vetting and negotiating agreements — and enforcing them when the other side does not perform.",
  },
  {
    n: "10",
    title: "Labour and Employment Law",
    body: "Service rules, employment contracts, disputes and representation before the Labour Court.",
  },
];

export const stats = [
  { n: "15", label: "Practice Areas" },
  { n: "11", label: "Advocates & Advisers" },
  { n: "06", label: "Advocates at the Bar" },
  { n: "03", label: "Core Competencies" },
];

export const steps = [
  { n: "01", title: "Consult", body: "Tell us about your matter — at our chambers in Kakrail, by phone or on WhatsApp.", icon: "chat" },
  { n: "02", title: "Evaluate", body: "Each case is evaluated on its own merit, with a realistic view of the outcome from the start.", icon: "scale" },
  { n: "03", title: "Investigate", body: "Due diligence and investigation to locate the evidence and facts your matter needs.", icon: "search" },
  { n: "04", title: "Advise", body: "Practical advice with prompt turn-around time, so you can make informed decisions.", icon: "bulb" },
  { n: "05", title: "Resolve", body: "Representation in court and tribunal — or arbitration and mediation to avoid lengthy battles.", icon: "gavel" },
] as const;

export const team = [
  {
    initials: "RI",
    name: "Md. Rajaul Islam",
    alias: "Masud",
    role: "Advocate & Tax Consultant",
    quals: "B.A · LL.B · ITP (NBR)",
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
