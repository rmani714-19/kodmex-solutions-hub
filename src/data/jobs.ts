export interface Job {
  id: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  employmentType: string;
  projectExposure: string[];
  skills: string[];
  description: string;
  responsibilities: string[];
  niceToHave: string[];
  whatWeOffer: string[];
  status: "open" | "closed";
}

export const jobs: Job[] = [
  {
    id: "senior-react-developer",
    title: "Senior React Developer",
    department: "Engineering",
    experience: "4-7 years",
    location: "Remote / India",
    employmentType: "Full-time",
    projectExposure: ["E-commerce", "Web Applications", "Store Applications"],
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "REST APIs"],
    description: "Join our engineering team to build high-end e-commerce platforms and enterprise web applications. You'll work on production-grade applications used by real businesses.",
    responsibilities: [
      "Develop and maintain scalable React applications for e-commerce and enterprise clients",
      "Collaborate with designers to implement pixel-perfect, responsive UIs",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and contribute to team best practices",
      "Optimize application performance and user experience"
    ],
    niceToHave: ["Next.js", "GraphQL", "AWS", "CI/CD experience"],
    whatWeOffer: [
      "Work on real production applications with business impact",
      "Competitive salary and growth opportunities",
      "Flexible remote work options",
      "Learning and development budget",
      "Collaborative and ownership-driven culture"
    ],
    status: "open"
  },
  {
    id: "android-developer",
    title: "Android Developer",
    department: "Mobile",
    experience: "2-5 years",
    location: "Remote / India",
    employmentType: "Full-time",
    projectExposure: ["Android Applications", "E-commerce", "Store Applications"],
    skills: ["Kotlin", "Java", "Android SDK", "MVVM", "REST APIs"],
    description: "Build high-quality Android applications for our retail and e-commerce clients. You'll create mobile experiences that drive real business results.",
    responsibilities: [
      "Develop and maintain Android applications for retail and e-commerce clients",
      "Implement clean architecture patterns (MVVM, Clean Architecture)",
      "Integrate with backend APIs and third-party services",
      "Ensure app performance, quality, and responsiveness",
      "Collaborate with cross-functional teams on product delivery"
    ],
    niceToHave: ["Jetpack Compose", "Firebase", "Flutter", "CI/CD"],
    whatWeOffer: [
      "Real-world mobile app development experience",
      "Exposure to diverse project types",
      "Competitive compensation",
      "Career growth path",
      "Supportive team environment"
    ],
    status: "open"
  },
  {
    id: "java-backend-developer",
    title: "Java Backend Developer",
    department: "Engineering",
    experience: "3-6 years",
    location: "Remote / India",
    employmentType: "Full-time",
    projectExposure: ["E-commerce", "Web Applications", "Enterprise Software"],
    skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Microservices"],
    description: "Design and build scalable backend systems for our e-commerce and enterprise clients. You'll work on systems that handle real business transactions.",
    responsibilities: [
      "Design and implement RESTful APIs and microservices",
      "Build scalable backend systems for e-commerce platforms",
      "Optimize database queries and system performance",
      "Implement security best practices and data protection",
      "Collaborate with frontend teams on API design"
    ],
    niceToHave: ["AWS", "Docker", "Kubernetes", "Redis", "Kafka"],
    whatWeOffer: [
      "Work on enterprise-grade systems",
      "Cloud infrastructure exposure",
      "Continuous learning opportunities",
      "Flexible work environment",
      "Performance-based growth"
    ],
    status: "open"
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    experience: "2-4 years",
    location: "Remote / India",
    employmentType: "Full-time",
    projectExposure: ["E-commerce", "Web Applications", "Android Applications", "Store Applications"],
    skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
    description: "Create beautiful, user-centric designs for our e-commerce and enterprise applications. Your designs will directly impact how businesses serve their customers.",
    responsibilities: [
      "Design intuitive user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Develop and maintain design systems",
      "Collaborate closely with developers on implementation"
    ],
    niceToHave: ["Motion design", "HTML/CSS knowledge", "Webflow", "Illustration"],
    whatWeOffer: [
      "Diverse project portfolio",
      "Direct client interaction",
      "Creative freedom",
      "Professional development",
      "Collaborative design culture"
    ],
    status: "open"
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    experience: "3-5 years",
    location: "Remote / India",
    employmentType: "Full-time",
    projectExposure: ["E-commerce", "Web Applications", "Store Applications", "Enterprise Software"],
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    description: "Build end-to-end solutions for our clients across the full technology stack. You'll have the opportunity to shape products from database to user interface.",
    responsibilities: [
      "Develop full-stack features for e-commerce and enterprise applications",
      "Design and implement database schemas and APIs",
      "Build responsive and performant frontend interfaces",
      "Deploy and maintain applications on cloud infrastructure",
      "Mentor junior developers and contribute to technical decisions"
    ],
    niceToHave: ["Docker", "GraphQL", "Redis", "Terraform"],
    whatWeOffer: [
      "End-to-end development experience",
      "Technical leadership opportunities",
      "Work on diverse projects",
      "Competitive package",
      "Growth-focused environment"
    ],
    status: "open"
  }
];
