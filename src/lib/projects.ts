export interface Project {
  id: string;
  title: string;
  role: string;
  category: string;
  status: string;
  featured?: boolean;
  description: string;
  highlights: string[];
  tech: string[];
  badge: string;
  link?: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "viuumi-admin",
    title: "Viuumi Administration Dashboard",
    role: "Frontend Engineer",
    category: "Enterprise Web App / Frontend Architecture",
    status: "Active / Current",
    featured: true,
    badge: "Current Project",
    description:
      "Enterprise administration dashboard built for scale, deep operational visibility, and seamless system governance. Engineered with a hardened frontend architecture, real-time analytics, and role-based security.",
    highlights: [
      "Dynamic data-dense dashboards with real-time state synchronization",
      "Role-Based Access Control (RBAC) and least-privilege UI rendering",
      "End-to-end type safety, resilient error boundaries, and defensive API validation",
      "Optimized Core Web Vitals and fluid responsive micro-interactions",
    ],
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "REST APIs", "RBAC"],
    link: "https://github.com/layefaa",
  },
  {
    id: "flutter-multiplatform-app",
    title: "Multi-Platform Cross-Device Application",
    role: "Lead Mobile & Frontend Engineer",
    category: "Cross-Platform / Mobile Engineering",
    status: "Recently Shipped",
    featured: true,
    badge: "Recent Build",
    description:
      "Cross-platform client application engineered for major platforms (iOS, Android, and Web) with a unified Flutter architecture. Built with 60/120fps fluid UI, offline-first synchronization, and hardened local cryptographic storage.",
    highlights: [
      "Single codebase deployed across major mobile (iOS, Android) and web ecosystems",
      "Native platform integration with biometric auth and hardware-accelerated animations",
      "State-driven reactive architecture with resilient offline-first caching",
    ],
    tech: ["Flutter", "Dart", "iOS", "Android", "Cross-Platform", "REST APIs"],
    link: "https://github.com/layefaa",
  },
  {
    id: "api-security-auditor",
    title: "API Security & Compliance Auditor",
    role: "Cybersecurity Specialist & Developer",
    category: "DevSecOps / API Security",
    status: "Active",
    featured: true,
    badge: "Security Tool",
    description:
      "Automated vulnerability scanner and compliance analyzer specifically targeting the OWASP API Security Top 10 and NIST CSF controls, validating token handling and endpoint integrity.",
    highlights: [
      "Automated inspection for Broken Object Level Authorization (BOLA/BFLA)",
      "JWT signature validation, expired token leakage, and rate-limiting fuzzing",
      "Actionable remediation reporting mapped to NIST CSF and ISO 27001 standards",
    ],
    tech: ["Python", "TypeScript", "Burp Suite API", "Docker", "NIST CSF"],
    link: "https://github.com/layefaa",
  },
  {
    id: "siem-threat-visualizer",
    title: "Cyber Threat Intelligence & SIEM Visualizer",
    role: "Frontend Engineer & SecOps",
    category: "SecOps / Threat Intelligence",
    status: "Completed",
    featured: true,
    badge: "Cyber Defense",
    description:
      "Tactical security telemetry visualizer ingesting Suricata network intrusion logs and Splunk query streams, illuminating live attack surfaces and anomalous traffic patterns.",
    highlights: [
      "Sub-second event rendering for high-volume network telemetry streams",
      "Alert correlation mapped against MITRE ATT&CK enterprise matrices",
      "Optimized dark-mode telemetry canvas designed for SOC analysts",
    ],
    tech: ["React", "Splunk", "Suricata", "D3.js", "Python", "TailwindCSS"],
    link: "https://github.com/layefaa",
  },
  {
    id: "zero-trust-vault",
    title: "Zero-Trust Client Access & Document Portal",
    role: "Full Stack Engineer",
    category: "Cloud Security / Fintech",
    status: "Completed",
    badge: "Cloud & Privacy",
    description:
      "Hardened client document vault engineered to satisfy PCI DSS and ISO 27001 data integrity standards, utilizing browser Web Crypto API for client-side encryption.",
    highlights: [
      "Client-side payload encryption prior to cloud persistence",
      "Cryptographically verified immutable audit trail for compliance",
      "MFA and zero-trust session validation across GCP cloud infrastructure",
    ],
    tech: ["Next.js", "Supabase", "Web Crypto API", "GCP", "ISO 27001"],
    link: "https://github.com/layefaa",
  },
];
