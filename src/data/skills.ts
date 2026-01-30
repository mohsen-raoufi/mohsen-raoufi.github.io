export interface SkillCategory {
    title: string;
    skills: {
        name: string;
        icon?: string;
        color: string;
    }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [

    {
        title: "Engineering & Dynamical Systems",
        skills: [
            { name: "Matlab & Simulink", icon: "https://skillicons.dev/icons?i=matlab", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "State Estimation", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Sensor Fusion", color: "text-[#097C87] border-[#097C87]" },
            { name: "Model-Based Design", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Robotic Systems Integration", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Gazebo", icon: "/icons/Gazebo.svg", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Webots", icon: "/icons/webots.png", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "Embedded Systems", icon: "arduino", color: "text-[#097C87] border-[#097C87]" },
        ],
    },

    {
        title: "Systems Programming & Interactive Tools",
        skills: [
            { name: "Python", icon: "python", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "C++", icon: "c++", color: "text-[#097C87] border-[#097C87]" },
            { name: "Julia", icon: "julia", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "CUDA", icon: "nvidia", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Qt", icon: "qt", color: "text-[#097C87] border-[#097C87]" },
            { name: "Interactive Dashboards", icon: "https://skillicons.dev/icons?i=dashboard", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "D3.js & Observable", icon: "https://skillicons.dev/icons?i=d3", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "JavaScript", icon: "javascript", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "React", icon: "react", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Vite", icon: "vite", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Recharts", color: "text-[#FCA47C] border-[#FCA47C]" },
        ],
    },

    {
        title: "Data, Modeling & Scientific Computing",
        skills: [
            { name: "Data Analysis & EDA", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Statistical Modeling", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "SQL & BigQuery", icon: "https://skillicons.dev/icons?i=mysql", color: "text-[#097C87] border-[#097C87]" },
            { name: "Agent-Based Modeling", color: "text-[#FCA47C] border-[#FCA47C]" },
        ],
    },


    {
        title: "AI, Learning & Optimization",
        skills: [
            { name: "Bayesian Methods & Probabilistic Models", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Reinforcement Learning", color: "text-[#097C87] border-[#097C87]" },
            { name: "Artificial Neural Networks (ANN)", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "Graph Neural Networks (GNN)", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Optimization Algorithms", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Monte Carlo Simulation", color: "text-[#A1CCA6] border-[#A1CCA6]" },
        ],
    },

    {
        title: "Agentic AI (Learning ...)",
        skills: [
            { name: "LangChain / LLM Orchestration", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Retrieval-Augmented Generation (RAG)", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Model Context Protocol (MCP)", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "n8n (Workflow & Automation)", color: "text-[#F9D779] border-[#F9D779]" },
        ],
    },



    {
        title: "DevOps, Infrastructure & Tooling",
        skills: [
            { name: "Docker", icon: "docker", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "CI/CD & GitHub Actions", icon: "githubactions", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Git & Version Control", icon: "git", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "HIL/SIL", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "Node.js (Fastify)", icon: "nodejs", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Zod", color: "text-[#097C87] border-[#097C87]" },
        ],
    },

    {
        title: "System-Level Perspectives & Concepts",
        skills: [
            { name: "Collective Intelligence", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Multi-Agent Systems", color: "text-[#097C87] border-[#097C87]" },
            { name: "Control Theory", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Network Science", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Complexity Science", color: "text-[#F9D779] border-[#F9D779]" },
        ],
    },

];