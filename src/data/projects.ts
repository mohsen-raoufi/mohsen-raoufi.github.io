export const TAGS = {
    ROBOTICS: {
        name: "Robotics",
        class: "bg-[#f58c00]/20 text-[#f58c00]",
        icon: "lucide:bot",
    },
    AI: {
        name: "AI & ML",
        class: "bg-[#8b5cf6]/20 text-[#8b5cf6]",
        icon: "lucide:brain",
    },
    COLLECTIVE: {
        name: "Collective Systems",
        class: "bg-[#2ea68d]/20 text-[#2ea68d]",
        icon: "lucide:users",
    },
    MODELLING: {
        name: "Modelling & Sim",
        class: "bg-[#2ea68d]/20 text-[#2ea68d]",
        icon: "lucide:activity",
    },
    CPP: {
        name: "C++",
        class: "bg-[#00599C]/20 text-[#00599C]",
        icon: "simple-icons:cplusplus",
    },
    PYTHON: {
        name: "Python",
        class: "bg-[#3776AB]/20 text-[#3776AB]",
        icon: "simple-icons:python",
    },
    CUDA: {
        name: "CUDA",
        class: "bg-[#76B900]/20 text-[#76B900]",
        icon: "simple-icons:nvidia",
    },
    VISION: {
        name: "Computer Vision",
        class: "bg-[#f58c00]/20 text-[#f58c00]",
        icon: "lucide:eye",
    },
    End_to_end_system_design: {
        name: "End-to-End System Design",
        class: "bg-[#f58c00]/20 text-[#f58c00]",
        icon: "lucide:layers",
    },
    Qt: {
        name: "Qt",
        class: "bg-[#41CD52]/20 text-[#41CD52]",
        icon: "simple-icons:qt",
    },
    OPENCV: {
        name: "OpenCV",
        class: "bg-[#5C3EE8]/20 text-[#5C3EE8]",
        icon: "simple-icons:opencv",
    },
    AUGMENTED_REALITY: {
        name: "Augmented Reality",
        class: "bg-[#f58c00]/20 text-[#f58c00]",
        icon: "lucide:glasses",
    },
    HUMAN_ROBOT_INTERACTION: {
        name: "Human-Robot Interaction",
        class: "bg-[#f58c00]/20 text-[#f58c00]",
        icon: "lucide:hand-metal",
    },
    COMPLEX_SYSTEMS: {
        name: "Complex Systems",
        class: "bg-[#2ea68d]/20 text-[#2ea68d]",
        icon: "lucide:network",
    },
    BAYESIAN: {
        name: "Bayesian",
        class: "bg-[#8b5cf6]/20 text-[#8b5cf6]",
        icon: "lucide:git-graph",
    },
    PROBABILISTIC_MODELING: {
        name: "Probabilistic Modeling",
        class: "bg-[#8b5cf6]/20 text-[#8b5cf6]",
        icon: "lucide:dices",
    },
    NETWORK_SCIENCE: {
        name: "Network Science",
        class: "bg-[#2ea68d]/20 text-[#2ea68d]",
        icon: "lucide:share-2",
    },
    MULTI_AGENT_SYSTEMS: {
        name: "Multi-Agent Systems",
        class: "bg-[#2ea68d]/20 text-[#2ea68d]",
        icon: "lucide:boxes",
    },
    DATA_ANALYSIS: {
        name: "Data Analysis",
        class: "bg-[#8b5cf6]/20 text-[#8b5cf6]",
        icon: "lucide:bar-chart-3",
    },
    AGENT_BASED_MODELING: {
        name: "Agent-Based Modeling",
        class: "bg-[#2ea68d]/20 text-[#2ea68d]",
        icon: "lucide:bot",
    },
    SOFTWARE_DEVELOPMENT: {
        name: "Software Development",
        class: "bg-[#2ea68d]/20 text-[#2ea68d]",
        icon: "lucide:code",
    },
    REACT: {
        name: "React",
        class: "bg-[#61DAFB]/20 text-[#61DAFB]",
        icon: "simple-icons:react",
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "bg-[#3178C6]/20 text-[#3178C6]",
        icon: "simple-icons:typescript",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#38B2AC]/20 text-[#38B2AC]",
        icon: "simple-icons:tailwindcss",
    },
    NODEJS: {
        name: "Node.js",
        class: "bg-[#339933]/20 text-[#339933]",
        icon: "simple-icons:nodedotjs",
    },
    MONTE_CARLO: {
        name: "Monte Carlo Sim",
        class: "bg-[#F58C00]/20 text-[#F58C00]",
        icon: "lucide:dices",
    },
    GEOSPATIAL_ANALYSIS: {
        name: "Geospatial Analysis",
        class: "bg-[#2EA68D]/20 text-[#2EA68D]",
        icon: "lucide:map",
    },
    SYSTEM_ARCHITECTURE: {
        name: "System Architecture",
        class: "bg-[#8B5CF6]/20 text-[#8B5CF6]",
        icon: "lucide:layout-template",
    },
};

export const PROJECTS = [
    {
        title: "TrustMyETA",
        description:
            "A probabilistic framework for estimating arrival times in collective robotic systems. It provides confidence intervals and reliability metrics for ETA predictions.",
        link: "https://sites.google.com/view/mohsen-raoufi/projects?authuser=0",
        github: "https://github.com/mohsen-raoufi/TrustMyETA",
        image: "/projects/svgl.webp",
        tags: [TAGS.ROBOTICS, TAGS.PROBABILISTIC_MODELING, TAGS.PYTHON],
        richContent: {
            heroImage: "/projects/svgl.webp",
            features: [
                {
                    title: "Probabilistic Estimation",
                    description: "Goes beyond single-point estimates to provide full probability distributions for arrival times.",
                    icon: "lucide:activity",
                },
                {
                    title: "Confidence Metrics",
                    description: "Real-time confidence scores help downstream planners make safer decisions.",
                    icon: "lucide:shield-check",
                },
                {
                    title: "Scalable Architecture",
                    description: "Designed to handle collective systems with numerous agents efficiently.",
                    icon: "lucide:layers",
                },
            ],
            stats: [
                { label: "Accuracy Improvement", value: "25%" },
                { label: "Agents Supported", value: "50+" },
                { label: "Confidence Level", value: "95%" },
            ],
            gallery: [
                "/projects/svgl.webp",
                "/projects/svgl.webp",
                "/projects/svgl.webp",
            ],
            challenges: "Modeling the uncertainty in dynamic environments with interacting agents required a novel Bayesian approach...",
        },
    },
    {
        title: "LARS: Light Augmented Reality System",
        description:
            "An open-source system that creates a mixed reality environment by augmenting light to the real world to enhance collective robotic experiments. It enables complex interactions between physical robots and virtual agents or environments.",
        link: "https://github.com/mohsen-raoufi/LARS",
        github: "https://github.com/mohsen-raoufi/LARS",
        image: "/projects/svgl.webp",
        tags: [TAGS.ROBOTICS, TAGS.CPP, TAGS.PYTHON],
        richContent: {
            features: [
                {
                    title: "Augmented Reality",
                    description: "Projects virtual information directly onto the physical arena.",
                    icon: "lucide:glasses",
                },
                {
                    title: "Real-time Tracking",
                    description: "High-frequency tracking ensuring seamless interaction.",
                    icon: "lucide:scan-eye",
                },
            ],
        },
    },
    {
        title: "Heterogeneous Collective Opinion Dynamics",
        description:
            "Simulation of Collective Opinion Dynamics on heterogeneous networks and opinions with uncertainty. A collaboration with Vito Mengers, exploring how diversity in opinion and uncertainty affects collective consensus.",
        link: "https://github.com/mohsen-raoufi/Heterogeneous-Opinion-Dynamics-with-Uncertainty",
        github: "https://github.com/mohsen-raoufi/Heterogeneous-Opinion-Dynamics-with-Uncertainty",
        image: "/projects/svgl.webp",
        tags: [TAGS.COLLECTIVE, TAGS.MODELLING, TAGS.PYTHON],
    },
    {
        title: "Messengers: Breaking Echo Chambers",
        description:
            "Simulation of conformity in opinion dynamics with homophily in spatial collective systems. Investigates strategies to mitigate echo chambers and promote diverse information flow in social networks.",
        link: "https://github.com/mohsen-raoufi/messengers",
        github: "https://github.com/mohsen-raoufi/messengers",
        image: "/projects/svgl.webp",
        tags: [TAGS.COLLECTIVE, TAGS.MODELLING],
    },
    {
        title: "Individuality in Kilobots",
        description:
            "Simulator of Kilobots with heterogeneous heading biases in ARGoS. Studies the impact of individual robot differences (hardware variations) on the collective behavior of the swarm.",
        link: "https://github.com/mohsen-raoufi/Kilobots-Individuality-ALife-23",
        github: "https://github.com/mohsen-raoufi/Kilobots-Individuality-ALife-23",
        image: "/projects/svgl.webp",
        tags: [TAGS.ROBOTICS, TAGS.CPP],
    },
    {
        title: "KN2C SSL Robot Team",
        description:
            "Small-Size Soccer (SSL) robotic team for Robocup competitions. Developed software and control systems for a team of autonomous soccer-playing robots.",
        link: "https://github.com/mohsen-raoufi/KN2C-SSL",
        github: "https://github.com/mohsen-raoufi/KN2C-SSL",
        image: "/projects/svgl.webp",
        tags: [TAGS.ROBOTICS, TAGS.CPP],
    },
];
