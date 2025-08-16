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
