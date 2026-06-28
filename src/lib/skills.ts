export type Skill = { name: string; icon: string; category: SkillCategory };

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Styling"
  | "Backend"
  | "Databases"
  | "AI & APIs"
  | "Tools"
  | "Core Subjects";

const dev = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;
const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

export const SKILLS: Skill[] = [
  { category: "Languages", name: "C", icon: dev("c") },
  { category: "Languages", name: "C++", icon: dev("cplusplus") },
  { category: "Languages", name: "JavaScript", icon: dev("javascript") },
  { category: "Languages", name: "Python", icon: dev("python") },

  { category: "Frontend", name: "React", icon: dev("react") },
  { category: "Frontend", name: "Next.js", icon: dev("nextjs") },
  { category: "Frontend", name: "HTML5", icon: dev("html5") },
  { category: "Frontend", name: "CSS3", icon: dev("css3") },

  { category: "Styling", name: "Tailwind CSS", icon: dev("tailwindcss") },
  { category: "Styling", name: "Bootstrap", icon: dev("bootstrap") },

  { category: "Backend", name: "Node.js", icon: dev("nodejs") },
  { category: "Backend", name: "Express.js", icon: dev("express") },
  { category: "Backend", name: "Flask", icon: si("flask") },

  { category: "Databases", name: "MongoDB", icon: dev("mongodb") },
  { category: "Databases", name: "PostgreSQL", icon: dev("postgresql") },

  { category: "AI & APIs", name: "Gemini API", icon: si("googlegemini") },
  { category: "AI & APIs", name: "JWT Auth", icon: si("jsonwebtokens") },
  { category: "AI & APIs", name: "Google OAuth", icon: si("google") },
  { category: "AI & APIs", name: "REST APIs", icon: si("postman") },

  { category: "Tools", name: "Git", icon: dev("git") },
  { category: "Tools", name: "GitHub", icon: dev("github") },
  { category: "Tools", name: "VS Code", icon: dev("vscode") },
  { category: "Tools", name: "Vercel", icon: si("vercel") },
  { category: "Tools", name: "Render", icon: si("render") },
  { category: "Tools", name: "Postman", icon: si("postman") },

  { category: "Core Subjects", name: "DSA", icon: si("leetcode") },
  { category: "Core Subjects", name: "OOPs", icon: dev("cplusplus") },
  { category: "Core Subjects", name: "DBMS", icon: si("databricks") },
  { category: "Core Subjects", name: "Operating Systems", icon: dev("linux") },
  { category: "Core Subjects", name: "Computer Networks", icon: si("wireshark") },
];

export const CATEGORIES: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Styling",
  "Backend",
  "Databases",
  "AI & APIs",
  "Tools",
  "Core Subjects",
];
