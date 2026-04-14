// data/portfolio.ts

export const portfolioData = {
  personal: {
    name: "Maneesh Kumar",
    title: "Software Developer",
    tagline: "Building robust software with deep technical knowledge.",
    email: "maneesh@email.com",         // ← replace
    phone: "+91 XXXXXXXXXX",            // ← replace
    dob: "DD Month YYYY",               // ← replace
    address: "Your City, India",        // ← replace
    linkedin: "https://linkedin.com/in/yourprofile",   // ← replace
    github: "https://github.com/yourusername",         // ← replace
    leetcode: "https://leetcode.com/yourusername",     // ← replace
    resumeUrl: "/resume.pdf",
  },

  about: `I am a passionate Software Developer with deep knowledge of software development principles, 
  design patterns, and modern tech stacks. I love building scalable, efficient, and user-friendly 
  applications that solve real-world problems.`,

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    tools: ["Git", "Docker", "AWS", "Linux", "VS Code"],
  },

  experience: [
    {
      company: "Company Name",
      role: "Software Developer",
      duration: "Jan 2023 – Present",
      location: "City, India",
      points: [
        "Developed and maintained scalable web applications.",
        "Collaborated with cross-functional teams to deliver features.",
        "Improved system performance by 30%.",
      ],
    },
    // Add more experiences here
  ],

  industrialProjects: [
    {
      name: "Project Name",
      description: "A brief description of the project and your role in it.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project",
    },
    // Add more
  ],

  personalProjects: [
    {
      name: "Project Name",
      description: "A personal project you built to solve a problem or learn something.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://github.com/yourusername/project",
      live: "https://yourproject.com",
    },
    // Add more
  ],

  education: [
    {
      degree: "B.Tech / BCA / MCA",          // ← replace
      institute: "Your College Name",         // ← replace
      year: "2019 – 2023",                    // ← replace
      score: "8.5 CGPA",                      // ← replace
    },
    {
      degree: "12th / Intermediate",
      institute: "Your School Name",
      year: "2019",
      score: "XX%",
    },
  ],

  terminalCommands: [
    { command: "help", description: "List all available commands" },
    { command: "about", description: "Know about Maneesh" },
    { command: "skills", description: "View my technical skills" },
    { command: "experience", description: "My work experience" },
    { command: "projects", description: "View my projects" },
    { command: "education", description: "My educational background" },
    { command: "contact", description: "Get my contact details" },
    { command: "resume", description: "Download my resume" },
    { command: "social", description: "View my social links" },
    { command: "clear", description: "Clear the terminal" },
    { command: "exit", description: "Close terminal & view portfolio" },
  ],
};