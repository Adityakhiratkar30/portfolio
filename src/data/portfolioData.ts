export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI & Operations Research" | "Web3 & Distributed Systems" | "Full-Stack Application";
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; context: string }[];
}

export interface EducationItem {
  institution: string;
  shortName: string;
  degree: string;
  specialization: string;
  period: string;
  status: string;
  location: string;
  coursework: string[];
}

export const personalData = {
  name: "Aditya Khiratkar",
  role: "Full-Stack Software Engineer",
  tagline: "Computer Science undergraduate specializing in algorithmic optimization, distributed systems, and modern frontend architecture.",
  institution: "Symbiosis Institute of Technology (SIT)",
  degree: "B.Tech in Computer Science and Engineering",
  year: "3rd Year (Class of 2026)",
  location: "India",
  avatarUrl: "/aditya-khiratkar.jpg",
  summary:
    "Engineering robust digital systems at the intersection of algorithmic vehicle routing, blockchain-backed settlement engines, and high-performance web applications. Driven by clean architectural design, measurable performance, and real-world utility.",
  socials: {
    github: "https://github.com/Sparsh566",
    linkedin: "https://linkedin.com",
    email: "adityakhiratkar@gmail.com",
    resumeUrl: "#",
  },
  stats: [
    { label: "Academic Standing", value: "3rd Year CS" },
    { label: "Primary Focus", value: "Systems & Web" },
    { label: "Core Algorithms", value: "CVRPTW & Heuristics" },
    { label: "Architectures", value: "On-Chain / Off-Chain" },
  ],
};

export const projectsData: Project[] = [
  {
    id: "routeopt",
    title: "RouteOpt",
    subtitle: "Commercial Fleet Route Optimization & AI Dispatch Simulator",
    category: "AI & Operations Research",
    problem:
      "Indian urban freight operations face heavy congestion, stringent municipal peak-hour no-entry bans (MMRDA/PMC), 2.5m flyover clearance limits, and volatile transit delays, leading to severe penalties and inefficient deliveries.",
    solution:
      "Built a multi-vehicle CVRPTW solver using Google OR-Tools with greedy heuristic fallbacks. Features an interactive dispatch canvas, real-time polyline transit simulation, and Groq-powered LLM reasoning for unexpected road disruptions.",
    highlights: [
      "Solves Capacitated Vehicle Routing with Time Windows (CVRPTW) for mixed fleets (1,200kg Tata Ace vs 4,500kg Tata 407).",
      "Encodes municipal traffic regulations: morning (08:00–11:30) & evening (17:00–21:30) heavy vehicle bans and bridge gross weight caps.",
      "Integrates Groq LLM (gpt-oss-120b) to generate real-time 3-sentence operational guidance during breakdowns and weather delays.",
      "Interactive Leaflet dispatch map visualizing route polylines with 1x, 2x, and 4x vehicle transit simulations.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Google OR-Tools",
      "Groq AI",
      "Leaflet.js",
      "OSRM",
      "TypeScript",
    ],
    metrics: [
      { label: "Fleet Classes", value: "LCV + HCV" },
      { label: "Solver Paradigm", value: "OR-Tools CVRPTW" },
      { label: "Municipal Rules", value: "MMRDA & PMC" },
      { label: "Disruption Engine", value: "Groq LLM" },
    ],
    githubUrl: "https://github.com/Sparsh566/RouteOpt",
    featured: true,
  },
  {
    id: "tenderblock",
    title: "TenderBlock",
    subtitle: "Decentralized Tendering & Trustless Procurement Platform",
    category: "Web3 & Distributed Systems",
    problem:
      "Public and corporate tendering processes suffer from opaque bidding, manual tampering, bid retraction disputes, and slow document verification cycles.",
    solution:
      "Engineered an on-chain procurement system deployed on Flow blockchain. Combines Cadence smart contracts for immutable tender creation, competitive bidding, and settlement with an off-chain indexer backend for sub-second query performance.",
    highlights: [
      "Blockchain-first lifecycle: automated smart contract execution for tender publication, encrypted bidding, and lowest-bid settlement.",
      "Hybrid read-model architecture: synchronizes on-chain Cadence transactions into an indexed MySQL database for instant filtering and pagination.",
      "Decentralized file persistence: tender specifications and audit manifests stored via IPFS and Web3.Storage.",
      "Wallet-native authentication via Flow Client Library (FCL) paired with secure JWT session handling.",
    ],
    technologies: [
      "Flow Blockchain",
      "Cadence",
      "React 18",
      "Node.js",
      "Express",
      "MySQL",
      "IPFS",
      "Flow FCL",
    ],
    metrics: [
      { label: "Consensus Layer", value: "Flow Blockchain" },
      { label: "Read Architecture", value: "Sub-second MySQL Sync" },
      { label: "Document Storage", value: "IPFS / Web3.Storage" },
      { label: "Auth Model", value: "Flow FCL + JWT" },
    ],
    githubUrl: "https://github.com/Sparsh566/TenderBlock",
    featured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages utilized for system logic, algorithms, and web infrastructure.",
    skills: [
      { name: "TypeScript / JavaScript", context: "Full-stack apps, async architectures, and type-safe APIs" },
      { name: "Python", context: "Algorithm modeling, FastAPI services, and AI integrations" },
      { name: "C++", context: "Data structures, algorithmic complexity, and systems programming" },
      { name: "SQL", context: "Relational schema design, transactions, and indexing in MySQL/PostgreSQL" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Modern component architectures, state synchronizations, and responsive layouts.",
    skills: [
      { name: "React / Next.js", context: "App Router, server/client boundaries, and component modularity" },
      { name: "Tailwind CSS", context: "Design token systems, responsive layouts, and utility styling" },
      { name: "Interactive Visualizations", context: "Leaflet maps, transit polylines, and UI state animations" },
      { name: "State & Data Fetching", context: "SWR, React Context, and optimistic UI updates" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "API servers, asynchronous pipelines, and database management.",
    skills: [
      { name: "FastAPI / Node.js & Express", context: "RESTful endpoints, middleware, and request validation" },
      { name: "MySQL & Database Indexing", context: "Read-model syncs, query optimization, and relational constraints" },
      { name: "Operations Research", context: "Google OR-Tools, CVRPTW heuristic solvers, and constraint programming" },
      { name: "Distributed Storage", context: "IPFS, content-addressed storage, and Web3.Storage integration" },
    ],
  },
  {
    title: "Developer Workflows & Tools",
    description: "Tooling for automated workflows, version control, and production builds.",
    skills: [
      { name: "Git & GitHub", context: "Branching strategies, code reviews, and project management" },
      { name: "Docker & Linux", context: "Containerization, environment isolation, and shell scripting" },
      { name: "Vercel & Cloud Deploy", context: "Serverless functions, production pipelines, and CI/CD" },
      { name: "Smart Contract Tooling", context: "Flow CLI, Cadence testing, and wallet integration" },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    institution: "Symbiosis Institute of Technology",
    shortName: "SIT",
    degree: "Bachelor of Technology",
    specialization: "Computer Science and Engineering",
    period: "2023 — 2026",
    status: "Currently enrolled (3rd Year)",
    location: "Pune / Nagpur, India",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems & Systems Programming",
      "Computer Networks",
      "Object-Oriented Software Design",
      "Web Technologies & Distributed Systems",
    ],
  },
];
