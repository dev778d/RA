// Site navigation
export const navigation = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Services data
export const services = [
  {
    id: "rag-systems",
    title: "RAG Systems",
    shortTitle: "RAG",
    description:
      "Custom Retrieval-Augmented Generation systems that connect your AI to your proprietary data, enabling accurate and contextual responses.",
    features: [
      "Custom knowledge base integration",
      "Semantic search optimization",
      "Multi-source data fusion",
      "Real-time data updates",
      "Enterprise-grade security",
    ],
    icon: "Database",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    shortTitle: "Agents",
    description:
      "Autonomous AI agents that can reason, plan, and execute complex multi-step tasks with minimal human intervention.",
    features: [
      "Multi-agent orchestration",
      "Tool use & API integration",
      "Decision-making workflows",
      "Self-improving systems",
      "Human-in-the-loop controls",
    ],
    icon: "Bot",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    shortTitle: "Full-Stack",
    description:
      "Modern web applications built with cutting-edge technologies, designed for scale, performance, and exceptional user experience.",
    features: [
      "Next.js & React applications",
      "Node.js & Python backends",
      "Cloud-native architecture",
      "Real-time features",
      "Mobile-responsive design",
    ],
    icon: "Code2",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    shortTitle: "Consulting",
    description:
      "Strategic guidance on AI implementation, architecture design, and roadmap planning to transform your business with intelligent systems.",
    features: [
      "AI strategy development",
      "Technology assessment",
      "Implementation roadmaps",
      "Team training & upskilling",
      "Ongoing technical advisory",
    ],
    icon: "Lightbulb",
    gradient: "from-amber-500 to-orange-600",
  },
];

// Projects/Case studies
export const projects = [
  {
    id: "enterprise-knowledge-base",
    title: "Enterprise Knowledge Base",
    client: "Fortune 500 Tech Company",
    category: "RAG Systems",
    description:
      "Built a comprehensive RAG system that processes 10M+ documents, enabling employees to find answers in seconds instead of hours.",
    image: "/projects/knowledge-base.jpg",
    tags: ["RAG", "LangChain", "Vector DB", "React"],
    stats: {
      improvement: "95%",
      metric: "faster information retrieval",
    },
    color: "#14B8A6",
  },
  {
    id: "autonomous-support-agent",
    title: "Autonomous Support Agent",
    client: "SaaS Startup",
    category: "Agentic AI",
    description:
      "Developed a multi-agent system that handles 80% of customer support tickets autonomously, escalating complex issues to humans.",
    image: "/projects/support-agent.jpg",
    tags: ["Multi-Agent", "GPT-4", "Slack Integration", "Node.js"],
    stats: {
      improvement: "80%",
      metric: "ticket resolution rate",
    },
    color: "#22D3EE",
  },
  {
    id: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    client: "Healthcare Provider",
    category: "Full-Stack",
    description:
      "Created a real-time analytics platform with AI-powered insights, helping clinicians make data-driven decisions faster.",
    image: "/projects/analytics-dashboard.jpg",
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    stats: {
      improvement: "3x",
      metric: "faster decision making",
    },
    color: "#10B981",
  },
  {
    id: "smart-document-processor",
    title: "Smart Document Processor",
    client: "Legal Firm",
    category: "RAG Systems",
    description:
      "Built an intelligent document analysis system that extracts key information from legal documents with 99% accuracy.",
    image: "/projects/document-processor.jpg",
    tags: ["OCR", "NLP", "RAG", "FastAPI"],
    stats: {
      improvement: "99%",
      metric: "extraction accuracy",
    },
    color: "#0EA5E9",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote:
      "RAGRATIVE transformed our customer support operations. Their AI agents handle complex queries that we thought only humans could manage.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow Inc.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: 2,
    quote:
      "The RAG system they built for us has become the backbone of our knowledge management. Our team productivity has increased dramatically.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "DataScale",
    avatar: "/avatars/michael.jpg",
  },
  {
    id: 3,
    quote:
      "Working with RAGRATIVE was a game-changer. They don't just build solutions; they truly understand the business problems we're solving.",
    author: "Emily Watson",
    role: "Product Director",
    company: "HealthTech Solutions",
    avatar: "/avatars/emily.jpg",
  },
];

// Client logos (placeholder)
export const clients = [
  { name: "TechCorp", logo: "/clients/techcorp.svg" },
  { name: "DataFlow", logo: "/clients/dataflow.svg" },
  { name: "CloudScale", logo: "/clients/cloudscale.svg" },
  { name: "AIVentures", logo: "/clients/aiventures.svg" },
  { name: "NeuralNet", logo: "/clients/neuralnet.svg" },
  { name: "SmartSystems", logo: "/clients/smartsystems.svg" },
];

// Team members
export const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "Former Google AI researcher with 10+ years in ML/AI systems.",
    image: "/team/alex.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Jordan Lee",
    role: "CTO",
    bio: "Ex-Amazon engineer, expert in distributed systems and LLMs.",
    image: "/team/jordan.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sam Rivera",
    role: "Head of Engineering",
    bio: "Full-stack wizard with a passion for building scalable AI products.",
    image: "/team/sam.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

// Company stats
export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10M+", label: "Documents Processed" },
  { value: "24/7", label: "AI Systems Running" },
];

// Social links
export const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/ragrative", icon: "Twitter" },
  { name: "LinkedIn", href: "https://linkedin.com/company/ragrative", icon: "Linkedin" },
  { name: "GitHub", href: "https://github.com/ragrative", icon: "Github" },
];

// Footer links
export const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "RAG Systems", href: "/services#rag" },
    { name: "Agentic AI", href: "/services#agents" },
    { name: "Full-Stack Dev", href: "/services#fullstack" },
    { name: "Consulting", href: "/services#consulting" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Case Studies", href: "/work" },
    { name: "Open Source", href: "/open-source" },
    { name: "Newsletter", href: "/newsletter" },
  ],
};
