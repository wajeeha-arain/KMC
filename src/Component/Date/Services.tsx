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



import { FileText, Handshake, GraduationCap, Building2 } from "lucide-react";

export interface Feature {
  title: string;
  icon: React.ElementType; // Lucide icons ka type
}

export interface StartingFiveData {
  heading: string;
  subHeading: string;
  description: string;
  offer: string;
  features: Feature[];
  buttonText: string;
  image: string;
}

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
    { title: "5 Custom Hires, Recruited Just For You", icon: FileText },
    {
      title: "Day-To-Day Support From A Fractional KMC Team Manager",
      icon: Handshake,
    },
    {
      title: "Cultural Training And Onboarding Done Right",
      icon: GraduationCap,
    },
    {
      title: "All-Inclusive Setup: Office, HR, IT, Payroll, And Admin",
      icon: Building2,
    },
  ],
};



  export const images = [
    "/image/Rectangle 84.png",
    "/image/Rectangle 85.png",
    "/image/Rectangle 86.png",
    "/image/Rectangle 87(1).png",
  ];