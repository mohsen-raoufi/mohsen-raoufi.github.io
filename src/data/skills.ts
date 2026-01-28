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
        title: "AI & Machine Learning",
        skills: [
            { name: "PyTorch", icon: "pytorch", color: "text-[#FCA47C] border-[#FCA47C]" },
            // { name: "TensorFlow", icon: "tensorflow", color: "text-[#FCA47C] border-[#FCA47C]" }, 
            { name: "Machine Learning on Graphs", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Reinforcement Learning", color: "text-[#097C87] border-[#097C87]" },
            { name: "Bayesian Methods", color: "text-[#A1CCA6] border-[#A1CCA6]" },
        ],
    },
    {
        title: "Control & Estimation",
        skills: [
            { name: "State Estimation (KF, EKF, PF)", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Nonlinear Control", color: "text-[#097C87] border-[#097C87]" },
            { name: "Optimization (GA, PSO, ACO)", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "Matlab & Simulink", icon: "https://skillicons.dev/icons?i=matlab", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Model-Based Design", color: "text-[#A1CCA6] border-[#A1CCA6]" },
        ],
    },
    {
        title: "Languages & High-Performance",
        skills: [
            { name: "Python", icon: "python", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "C++", icon: "c++", color: "text-[#097C87] border-[#097C87]" },
            { name: "CUDA", icon: "nvidia", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Julia", icon: "julia", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "TypeScript", icon: "typescript", color: "text-[#23CED9] border-[#23CED9]" },
        ],
    },
    {
        title: "Robotics & Vision",
        skills: [
            { name: "ROS/ROS2", icon: "ros", color: "text-[#097C87] border-[#097C87]" },
            { name: "OpenCV", icon: "opencv", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Gazebo", icon: "/icons/Gazebo.svg", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Webots", icon: "/icons/webots.png", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "Embedded Systems", icon: "arduino", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Sensor Fusion", color: "text-[#097C87] border-[#097C87]" },
        ],
    },
    {
        title: "Full-Cycle & DevOps",
        skills: [
            { name: "Docker", icon: "docker", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Git", icon: "git", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "CI/CD", icon: "githubactions", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "SIL/HIL Testing", color: "text-[#F9D779] border-[#F9D779]" },
            { name: "Linux", icon: "linux", color: "text-[#F9D779] border-[#F9D779]" },
        ],
    },
    {
        title: "Concepts",
        skills: [
            { name: "Collective Intelligence", color: "text-[#23CED9] border-[#23CED9]" },
            { name: "Multi-Agent Systems", color: "text-[#097C87] border-[#097C87]" },
            { name: "Control Theory", color: "text-[#FCA47C] border-[#FCA47C]" },
            { name: "Network Science", color: "text-[#A1CCA6] border-[#A1CCA6]" },
            { name: "Complexity Science", color: "text-[#F9D779] border-[#F9D779]" },
        ],
    },
];
