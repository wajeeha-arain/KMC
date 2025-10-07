

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


  export const image = [
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


// /Component/Data/CertifiedExcellenceData.ts

export const certifiedExcellenceCards = [
  {
    id: 1,
    img: "/image/Award Icon Container.png",
    title: "B-Corp Certified",
  },
  {
    id: 2,
    img: "/image/folder-star 1.png",
    title: "Great Place To Work",
  },
  {
    id: 3,
    img: "/image/medal-military 1.png",
    title: "Best Places To Work",
  },
  {
    id: 4,
    img: "/image/user-focus 1.png",
    title: "HR Asia Best Companies",
  },
];



// /Component/Data/LocationsData.ts

export const locations = [
  { name: "Metro Manila", image: "/image/Image.png" },
  { name: "Clark", image: "/image/Image(1).png" },
  { name: "Cebu", image: "/image/Image(2).png" },
];




// /Component/Data/SecurityData.ts

export const securityBoxes = [
  {
    title: "System Integration & Access Control",
    description:
      "Say 5 or any number, same data goes here or text you want in the box.",
    image: "/image/gear-six 1.png",
  },
  {
    title: "Mirrored Policies, Custom Environments",
    description:
      "Need your own VPN? Endpoint protection software? SOC2-style access controls? Consider it done. We replicate your environment right down to device-level controls.",
    image: "/image/flower-lotus 1.png",
  },
  {
    title: "ISO 27001 Certified Infrastructure",
    description:
      "You get a secure foundation—certified, audited, and designed to scale—plus the flexibility to layer your own controls on top.",
    image: "/image/bridge 1.png",
  },
  {
    title: "8 Gbps Internet with Dual ISPs & Backup Power",
    description:
      "Zero downtime, even during typhoons or outages. Your team stays online, protected, and productive.",
    image: "/image/globe-hemisphere-west 1.png",
  },
  {
    title: "Role-Based Access & Full Device Encryption",
    description:
      "No one touches your systems unless you say so. Every workstation we provide comes fully encrypted, locked down, and monitored.",
    image: "/image/lock-key 1.png",
  },
  {
    title: "Global Compliance, Local Execution",
    description:
      "From GDPR to the Philippine Data Privacy Act—we keep you compliant in every market we operate.",
    image: "/image/scales 1.png",
  },
];





// /Component/Data/TransformData.ts

export const leftimage = [
  "/image/Ellipse 34(1).png",
  "/image/Ellipse 37(1).png",
  "/image/Ellipse 39(1).png",
  "/image/Ellipse 36(2).png",
  "/image/Ellipse 40(1).png",
];

export const rightimage = [
  "/image/Ellipse 39(2).png",
  "/image/Ellipse 36(3).png",
  "/image/Ellipse 40(2).png",
  "/image/Ellipse 38(1).png",
  "/image/Ellipse 35(1).png",
];









const cardData = [
  {
    Image: "/image/Frame(19).png",
    title: "B Corp br Certified",
    text: "Proven commitment to governance, people, and planet",
  },
  {
    Image: "/image/Frame(20).png",
    title: "Great Place To Work",
    text: "Named one of the Best Workplaces in Asia",
  },
  {
    Image: "/image/Frame(21).png",
    title: "Best Place To Work",
    text: "Committed to Employee Satisfaction",
  },
  {
    Image: "/image/Frame(22).png",
    title: `HR Asia's "Best Companies to Work For in Asia”`,
    text: "Received the Sustainable Workplace Award",
  },
  {
    Image: "/image/Frame(23).png",
    title: "WELL Certified Offices",
    text: "Health-first, high-performance workplaces",
  },
];

export default cardData;





import React from "react";
import Image from "next/image";

export const sectionsData = [
  {
    id: 0,
    title: "Business Services",
    icon: (
      <Image
        src="/image/Frame(24).png"
        alt="Business Services"
        width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/image/Frame(30).png"
            alt="Admin"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Admin",
      },
      {
        icon: (
          <Image
            src="/image/Frame(31).png"
            alt="Operations"
          width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Operations",
      },
      {
        icon: (
          <Image
            src="/image/Frame(32).png"
            alt="Bookkeeping"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Bookkeeping",
      },
    ],
    bg: "bg-[#E9F1FF]",
    rounded: "rounded-[20px]",
  },
  {
    id: 1,
    title: "eCommerce and Retail",
    icon: (
      <Image
        src="/image/Frame(25).png"
        alt="eCommerce"
       width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/image/Frame(31).png"
            alt="Product Management"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Product Management",
      },
      {
        icon: (
          <Image
            src="/image/Frame(30).png"
            alt="Logistics"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Logistics",
      },
    ],
  },
  {
    id: 2,
    title: "Digital and Creative",
    icon: (
      <Image
        src="/image/Frame(26).png"
        alt="Digital and Creative"
        width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/image/Frame(31).png"
            alt="Design"
             width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Design",
      },
      {
        icon: (
          <Image
            src="/image/Frame(30).png"
            alt="Development"
             width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Development",
      },
    ],
  },
  {
    id: 3,
    title: "Accounting and Finance",
    icon: (
      <Image
        src="/image/Frame(27).png"
        alt="Accounting and Finance"
         width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/image/Frame(31).png"
            alt="Accounts Payable"
             width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Accounts Payable",
      },
      {
        icon: (
          <Image
            src="/image/Frame(30).png"
            alt="Payroll"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Payroll",
      },
    ],
  },
  {
    id: 4,
    title: "Sales and Support",
    icon: (
      <Image
        src="/image/Frame(28).png"
        alt="Sales and Support"
         width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/image/Frame(31).png"
            alt="Customer Service"
             width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Customer Service",
      },
      {
        icon: (
          <Image
            src="/image/Frame(30).png"
            alt="Tech Support"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Tech Support",
      },
    ],
  },
  {
    id: 5,
    title: "Health and Wellness (Non-Clinical)",
    icon: (
      <Image
        src="/image/Frame(29).png"
        alt="Health and Wellness"
         width={40}
            height={40}
        className="object-contain"
      />
    ),
    items: [
      {
        icon: (
          <Image
            src="/image/Frame(31).png"
            alt="Fitness Coaching"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Fitness Coaching",
      },
      {
        icon: (
          <Image
            src="/imagec/Frame(31).png"
            alt="Diet Planning"
            width={40}
            height={40}
            className="object-contain"
          />
        ),
        label: "Diet Planning",
      },
    ],
  },
];




export const businessData = [
  {
    img: "/image/Users Group Rounded.png",
    bg: "/image/Group 752.png",
    title: "86%",
    title1: " Employee Retention",
    text: "We keep good people around",
  },
  {
    img: "/image/data-2.png",
    bg: "/image/Group 752.png",
    title: "Zero",
    title1: " Outsourcing",
    text: "Every service is run by KMC",
  },
  {
    img: "/image/global.png",
    bg: "/image/Group 752.png",
    title: "6,000+",
    title1: " Employees",
    text: "Across 500+ global clients",
  },
  {
    img: "/image/calendar-tick.png",
    bg: "/image/Group 752.png",
    title: "Support",
    title1: " Hours",
    text: "That align with your workday",
  },
  {
    img: "/image/certificate-01.png",
    bg: "/image/Group 752.png",
    title: "Certificates",
    title1: " Approved",
    text: "ISO 27001, GDPR, and Philippine DPA compliant",
  },
];














export const whyKMCData = [
  {
    img: "/image/image(3).png",
    title: "86% Retention Rate",
    text: "Because culture beats churn every time.",
    dark: true,
  },
  {
    img: "/image/image(4).png",
    title: "Zero Outsourcing",
    text: "Every service is delivered by KMC—no hidden vendors, no fine print.",
    dark: false,
  },
  {
    img: "/image/image(5).png",
    title: "15 Years, 400+ Clients, 6,000+ Employees",
    text: "From startups to the world’s fastest-growing unicorns.",
    dark: false,
  },
  {
    img: "/image/image(6).png",
    title: "B Corp + ISO 27001 + ISO 9001 Certified",
    text: "Because security, sustainability, and doing things right actually matter.",
    dark: false,
  },
  {
    img: "/image/image(7).png",
    title: "Fast Time to Hire",
    text: "30–45 days from “let’s do this” to “your new team is up and running.”",
    dark: false,
  },
];



export const cards = [
    {
      title: "Great Place to Work Certified",
      subtitle: "(and proud of it)",
      bgColor: "bg-[#FFCE35]",
      image: "/image/Icon(2).png",
    },
    {
      title: "Career Growth & Leadership Tracks",
      subtitle: "",
      bgColor: "bg-[#FF7200]",
      image: "/image/Icon(3).png",
    },
    {
      title: "Well-Balanced Benefits",
      subtitle: "HMO, PTO, Housing, Flex Work",
      bgColor: "bg-[#001738] text-white",
      image: "/image/Icon(4).png",
    },
    {
      title: "Culture That Clicks",
      subtitle: "Ice Cream Fridays, Town Halls, Engagement Programs",
      bgColor: "bg-[#FF7200]",
      image: "/image/Icon(5).png",
    },
    {
      title: "HR Business Partners",
      subtitle: "for Every Client Team",
      bgColor: "bg-[#FFCE35]",
      image: "/image/Icon(6).png",
    },
  ];





export const faqs = [
  {
    question: "What is a full-stack Employer of Record (EOR)?",
    answer:
      "A full-stack Employer of Record (EOR) is a company that hires, manages, and supports your offshore employees on your behalf. KMC handles recruitment, HR, payroll, legal compliance, office space, and IT infrastructure—so you focus on results, not red tape.",
  },
  {
    question: "Do I need a legal entity to hire offshore through KMC?",
    answer:
      "No, you don’t. KMC, as your Employer of Record (EOR), allows you to hire globally without setting up a legal entity. We handle compliance and employment formalities.",
  },
  {
    question: "What types of roles can KMC help us hire?",
    answer:
      "KMC can help you hire a wide range of roles including developers, designers, customer support, finance teams, marketing professionals, and more.",
  },
  {
    question: "Where will our offshore team work?",
    answer:
      "Your offshore team can work from KMC's fully serviced offices across the Philippines or remotely, depending on your business needs.",
  },
  {
    question: "How long does it take to start working with KMC?",
    answer:
      "Onboarding can be done in as little as a few days once candidate selection is complete and documentation is submitted.",
  },
  {
    question: "How secure is KMC’s IT infrastructure?",
    answer:
      "KMC provides enterprise-grade security infrastructure, including secure networks, endpoint protection, and compliance with data privacy standards.",
  },
  {
    question: "How is KMC different from other EOR or outsourcing providers?",
    answer:
      "KMC offers a full-stack solution — office space, hiring, HR, payroll, IT, and compliance — making it a seamless end-to-end experience for clients.",
  },
];