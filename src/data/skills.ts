export interface SkillCategory {
    title: string;
    skills: {
        name: string;
        icon?: string; // Optional icon class or path
        color: string; // Tailwind class or hex for border/text
    }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Languages & Backend",
        skills: [
            { name: "C++", icon: "cplusplus", color: "text-blue-500 border-blue-500" },
            { name: "Python", icon: "python", color: "text-yellow-500 border-yellow-500" },
            { name: "Julia", icon: "julia", color: "text-purple-500 border-purple-500" },
            { name: "Matlab", icon: "https://skillicons.dev/icons?i=matlab", color: "text-orange-500 border-orange-500" },
            { name: "Go", icon: "go", color: "text-cyan-500 border-cyan-500" },
        ],
    },
    {
        title: "Robotics & AI",
        skills: [
            { name: "ROS/ROS2", icon: "ros", color: "text-indigo-400 border-indigo-400" },
            { name: "Gazebo", icon: "/icons/gazebo.svg", color: "text-orange-400 border-orange-400" },
            { name: "OpenCV", icon: "opencv", color: "text-green-500 border-green-500" },
            { name: "TensorFlow", icon: "tensorflow", color: "text-orange-500 border-orange-500" },
            { name: "PyTorch", icon: "pytorch", color: "text-red-500 border-red-500" },
        ],
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Docker", icon: "docker", color: "text-blue-400 border-blue-400" },
            { name: "Git", icon: "git", color: "text-red-400 border-red-400" },
            { name: "Linux", icon: "linux", color: "text-yellow-400 border-yellow-400" },
            { name: "CI/CD", icon: "githubactions", color: "text-gray-400 border-gray-400" },
        ],
    },
    {
        title: "Concepts",
        skills: [
            // These are abstract concepts, so no direct icons. We can keep them text-only or find generic icons.
            { name: "Collective Intelligence", color: "text-teal-400 border-teal-400" },
            { name: "Multi-Agent Systems", color: "text-pink-400 border-pink-400" },
            { name: "Control Theory", color: "text-blue-300 border-blue-300" },
            { name: "Network Science", color: "text-green-300 border-green-300" },
        ],
    },
];
