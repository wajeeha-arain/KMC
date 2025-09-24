






export interface ServicePoint {
  text: string;
  color: "black" | "orange";
}

export interface Service {
  img: string;
  alt: string;
  title: string;
  points: ServicePoint[];
}

export const services: Service[] = [
  {
    img: "/image/kmc.png",
    alt: "Talent That Fits",
    title: "Talent That Fits",
    points: [
      { text: "Rapid hiring with cultural and skills fit", color: "black" },
      { text: "Roles designed for your team—not off the shelf", color: "orange" },
    ],
  },
  {
    img: "/image/lmc1.png",
    alt: "Payroll and HR",
    title: "Payroll And HR",
    points: [
      { text: "End-to-end employee management", color: "orange" },
      { text: "Philippine HR compliance, holidays, and benefits", color: "black" },
    ],
  },
  {
    img: "/image/lmc3.png",
    alt: "Legal and Compliance",
    title: "Legal And Compliance",
    points: [
      { text: "Full legal coverage and tax compliance", color: "black" },
      { text: "Contracts that protect you", color: "orange" },
    ],
  },
];

export const services2: Service[] = [
  {
    img: "/image/lmc4.png",
    alt: "Workspaces That Work",
    title: "Workspaces That Work",
    points: [
      { text: "30+ top-tier offices across the Philippines", color: "orange" },
      { text: "Fast internet, secure systems, full IT support", color: "black" },
      { text: "Flexible setups for hybrid, in-office, or dedicated team", color: "orange" },
    ],
  },
  {
    img: "/image/lmc5.png",
    alt: "CASA by KMC",
    title: "CASA By KMC (Optional Housing)",
    points: [
      { text: "Fully furnished apartments close to work", color: "black" },
      { text: "Attracts top talent and boosts retention", color: "orange" },
    ],
  },
];



type Feature = {
  title: string;
  image: string; // ✅ ab icon ke bajaye image use karo
};

type StartingFiveData = {
  heading: string;
  subHeading: string;
  description: string;
  offer: string;
  buttonText: string;
  image: string;
  features: Feature[];
};

// data file (services.ts ya jis me aapka data hai)
export const startingFiveData: StartingFiveData = {
  heading: "The Starting Five:",
  subHeading: "Launch Your Team With No Setup Fees",
  description:
    "Ready to scale without the stress? Our Starting Five gives you a fully managed offshore team of five—recruited, onboarded, and supported by KMC.",
  offer:
    "FOR A LIMITED TIME, WE’RE WAIVING ALL SETUP FEES ON YOUR FIRST FIVE HIRES.",
  buttonText: "Claim Your Starting Five Offer",
  image: "/image/startingfive.png",
  features: [
  { title: "5 Custom Hires, Recruited Just For You", image: "/image/Frame(11).png" },
  {
    title: "Day-To-Day Support From A Fractional KMC Team Manager",
    image: "/image/Frame(6).png",
  },
  {
    title: "Cultural Training And Onboarding Done Right",
    image: "/image/Frame(7).png",
  },
  {
    title: "All-Inclusive Setup: Office, HR, IT, Payroll, And Admin",
    image: "/image/Frame(8).png",
  },
],
}


  export const images = [
    "/image/Rectangle 84.png",
    "/image/Rectangle 85.png",
    "/image/Rectangle 86.png",
    "/image/Rectangle 87(1).png",
  ];


//partnerSolutionsData.ts
export interface PartnerCard {
  id: number;
  img: string;
  title: string;
  desc: string;
  points: string[];
  dark?: boolean;
}

export const partnerSolutionsData: PartnerCard[] = [
  {
    id: 1,
    img: "/image/Frame(12).png",
    title: "Talent Acquisition",
    desc: "Top 1% talent, rigorously screened and hired for you, not placed.",
    points: [
      "30–45 day hiring timeline",
      "Technical assessments + cultural fit evaluation",
      "Proven success across IT, CX, Finance, and more",
    ],
    dark: true,
  },
  {
    id: 2,
    img: "/image/user-search.png",
    title: "HR & Payroll",
    desc: "We handle the contracts, compliance, and monthly payroll—accurate, on time, and by the book.",
    points: [
      "Fully managed payroll and benefits",
      "HRBP support and Sprout HRS integration",
    ],
  },
  {
    id: 3,
    img: "/image/scales-01.png",
    title: "Legal & Compliance",
    desc: "You stay clean. We carry the legal burden and navigate labor laws for you in the Philippines, Vietnam, Mexico, and Colombia.",
    points: [
      "ISO 27001, ISO 9001, and B Corp certified",
      "Full Philippine Labor Code compliance",
      "Data privacy (DPA, GDPR) and tax management",
    ],
  },
  {
    id: 4,
    img: "/image/scales-01.png",
    title: "Office Space & IT Infrastructure",
    desc: "We run the largest flexible office network in the Philippines—enterprise internet, ISO 27001 security, and actual places your team wants to work.",
    points: [
      "30+ premium facilities across PH, VN, MX, CO",
      "24/7 IT support, VPN access, asset management",
      "Wellness amenities: massage chairs, fitness rooms",
    ],
  },
  {
    id: 5,
    img: "/image/Frame(14).png",
    title: "CASA by KMC (Employee Housing)",
    desc: "Yes, we even house your team. Fully furnished, safe, stylish. Because people do better work when they're not stuck in traffic or four roommates deep.",
    points: [
      "Strategically located near offices",
      "Professionally managed and move-in ready",
      "Enhances talent mobility and retention",
    ],
  },
];




  // types.ts
// src/Component/Date/Services.ts

export interface Circle {
  src: string;
  top: string;
  left: string;
}

export interface PricingData {
  heading: string;
  description: string;
  buttons: {
    text: string;
    variant: "primary" | "secondary";
  }[];
  bgImage: string;
  circles: Circle[];
}

export const pricingData: PricingData = {
  heading: "Spoiler",
  description:
    "You dont need an entity, local lawyers, or a call center middleman. Just us.",
  buttons: [
    { text: "Get Pricing", variant: "primary" },
    { text: "What's Included", variant: "secondary" },
  ],
  bgImage: "/image/Background Image.png",
  circles: [
    { src: "/image/Ellipse 34.png", top: "8%", left: "18%" },
    { src: "/image/Ellipse 38.png", top: "48%", left: "12%" },
    { src: "/image/Ellipse 40.png", top: "74%", left: "30%" },
    { src: "/image/Ellipse 39.png", top: "26%", left: "50%" },
    { src: "/image/Ellipse 35.png", top: "5%", left: "75%" },
    { src: "/image/Ellipse 37.png", top: "38%", left: "80%" },
    { src: "/image/Ellipse 36.png", top: "65%", left: "56%" },
  ],
};
// src/Component/Date/partnerSolutionsData.ts

export interface PartnerCard1 {
  id: number;
  icons: string;
  title: string;
  desc: string;
  painPoint: string[];
  solution: string[];
  dark?: boolean;
}

export const PartnerCards: PartnerCard1[] = [
  {
    id: 1,
    icons: "/image/Documentation featured icon(1).png",
    title: "SaaS & Engineering",
    desc: "Full-stack, DevOps, QA, Product, you name it",
    painPoint: ["Talent shortage", "High development costs", "Scaling challenges"],
    solution: ["Elite dev teams", "70% cost reduction", "Rapid scaling"],
    dark: true,
  },
  {
    id: 2,
    icons: "/image/Documentation featured icon.png",
    title: "Cybersecurity",
    desc: "SOC analysts, compliance, and red-team specialists",
    painPoint: ["Skills gap", "Compliance complexity", "24/7 monitoring needs"],
    solution: ["Certified experts", "Compliance support", "Round-the-clock coverage"],
  },
  {
    id: 3,
    icons: "/image/Documentation featured icon(3).png",
    title: "Fintech",
    desc: "CPAs, analysts, underwriters, auditors",
    painPoint: ["Regulatory complexity", "Risk management", "Customer trust"],
    solution: ["Regulatory expertise", "Risk mitigation", "Trusted operations"],
  },
  {
    id: 4,
    icons: "/image/Documentation featured icon(4).png",
    title: "Healthcare Support",
    desc: "Claims processors, patient advocates, insurance pros",
    painPoint: ["HIPAA compliance", "Patient data security", "Specialized knowledge"],
    solution: ["HIPAA expertise", "Secure infrastructure", "Healthcare specialists"],
  },
  {
    id: 5,
    icons: "/image/Documentation featured icon(5).png",
    title: "Sales & Marketing",
    desc: "SDRs, content, growth marketers, designers",
    painPoint: ["Campaign costs", "Creative talent", "Performance tracking"],
    solution: ["Cost-effective campaigns", "Creative expertise", "Analytics mastery"],
  },
];
