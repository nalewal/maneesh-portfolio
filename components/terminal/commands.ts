import { portfolioData } from "@/data/portfolio";

export type CommandResult = {
    type : "text" | "list" | "link" | "exit" | "clear" | "error";
    content: string | string[] | {label: string; value:string } [];
}

export function handleCommand (input: string) : CommandResult {
    const cmd = input.trim().toLowerCase();

    switch (cmd) {
        case "help":
      return {
        type: "list",
        content: portfolioData.terminalCommands.map(
          (c) => `  ${c.command.padEnd(14)} → ${c.description}`
        ),
      };

    case "about":
      return {
        type: "text",
        content: portfolioData.about,
      };

    case "skills":
      return {
        type: "list",
        content: [
          `Languages   : ${portfolioData.skills.languages.join(", ")}`,
          `Frontend    : ${portfolioData.skills.frontend.join(", ")}`,
          `Backend     : ${portfolioData.skills.backend.join(", ")}`,
          `Database    : ${portfolioData.skills.database.join(", ")}`,
          `Tools       : ${portfolioData.skills.tools.join(", ")}`,
        ],
      };

    case "experience":
      return {
        type: "list",
        content: portfolioData.experience.flatMap((e) => [
          `🏢 ${e.company} — ${e.role}`,
          `   📅 ${e.duration} | 📍 ${e.location}`,
          ...e.points.map((p) => `   • ${p}`),
          "",
        ]),
      };

    case "projects":
      return {
        type: "list",
        content: [
          "── Industrial Projects ──",
          ...portfolioData.industrialProjects.flatMap((p) => [
            `🔧 ${p.name}`,
            `   ${p.description}`,
            `   Tech: ${p.tech.join(", ")}`,
            `   Link: ${p.link}`,
            "",
          ]),
          "── Personal Projects ──",
          ...portfolioData.personalProjects.flatMap((p) => [
            `💡 ${p.name}`,
            `   ${p.description}`,
            `   Tech: ${p.tech.join(", ")}`,
            `   Repo: ${p.link}`,
            p.live ? `   Live: ${p.live}` : "",
            "",
          ]),
        ],
      };

    case "education":
      return {
        type: "list",
        content: portfolioData.education.flatMap((e) => [
          `🎓 ${e.degree}`,
          `   ${e.institute} | ${e.year} | ${e.score}`,
          "",
        ]),
      };

    case "contact":
      return {
        type: "list",
        content: [
          `📧 Email   : ${portfolioData.personal.email}`,
          `📞 Phone   : ${portfolioData.personal.phone}`,
          `📅 DOB     : ${portfolioData.personal.dob}`,
          `📍 Address : ${portfolioData.personal.address}`,
        ],
      };

    case "social":
      return {
        type: "list",
        content: [
          `🔗 LinkedIn : ${portfolioData.personal.linkedin}`,
          `🐙 GitHub   : ${portfolioData.personal.github}`,
          `🧩 LeetCode : ${portfolioData.personal.leetcode}`,
        ],
      };

    case "resume":
      return {
        type: "link",
        content: portfolioData.personal.resumeUrl,
      };

    case "clear":
      return {
        type: "clear",
        content: "",
      };

    case "exit":
      return {
        type: "exit",
        content: "Closing terminal... Welcome to my portfolio! 👋",
      };

    default:
      return {
        type: "error",
        content: `Command not found: "${cmd}". Type 'help' to see available commands.`,
      };
    }
}
