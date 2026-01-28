export const TAGS = {
    ROBOTICS: {
        name: "Robotics",
        class: "bg-[#FFDE21]/20 text-[#FFDE21]",
        icon: "lucide:bot",
    },
    AI: {
        name: "AI & ML",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:brain",
    },
    COLLECTIVE: {
        name: "Collective Systems",
        class: "bg-[#003159] text-white",
        icon: "lucide:users",
    },
    MODELLING: {
        name: "Modelling & Sim",
        class: "bg-[#339933]/20 text-[#6cc24a]",
        icon: "lucide:activity",
    },
    CPP: {
        name: "C++",
        class: "bg-[#5E97D0]/20 text-[#5E97D0]",
        icon: "lucide:code-2",
    },
    PYTHON: {
        name: "Python",
        class: "bg-[#FFD43B]/20 text-[#FFD43B]",
        icon: "lucide:code-2",
    },
};

export const PROJECTS = [
    {
        slug: "lars-augmented-reality",
        title: "LARS: Light Augmented Reality System",
        description:
            "An open-source system that creates a mixed reality environment by augmenting light to the real world to enhance collective robotic experiments. It enables complex interactions between physical robots and virtual agents or environments.",
        link: "https://github.com/mohsen-raoufi/LARS",
        github: "https://github.com/mohsen-raoufi/LARS",
        image: "/projects/svgl.webp",
        tags: [TAGS.ROBOTICS, TAGS.CPP, TAGS.PYTHON],
    },
    {
        slug: "heterogeneous-opinion-dynamics",
        title: "Heterogeneous Collective Opinion Dynamics",
        description:
            "Simulation of Collective Opinion Dynamics on heterogeneous networks and opinions with uncertainty. A collaboration with Vito Mengers, exploring how diversity in opinion and uncertainty affects collective consensus.",
        link: "https://github.com/mohsen-raoufi/Heterogeneous-Opinion-Dynamics-with-Uncertainty",
        github: "https://github.com/mohsen-raoufi/Heterogeneous-Opinion-Dynamics-with-Uncertainty",
        image: "/projects/svgl.webp",
        tags: [TAGS.COLLECTIVE, TAGS.MODELLING, TAGS.PYTHON],
    },
    {
        slug: "messengers-echo-chambers",
        title: "Messengers: Breaking Echo Chambers",
        description:
            "Simulation of conformity in opinion dynamics with homophily in spatial collective systems. Investigates strategies to mitigate echo chambers and promote diverse information flow in social networks.",
        link: "https://github.com/mohsen-raoufi/messengers",
        github: "https://github.com/mohsen-raoufi/messengers",
        image: "/projects/svgl.webp",
        tags: [TAGS.COLLECTIVE, TAGS.MODELLING],
    },
    {
        slug: "kilobots-individuality",
        title: "Individuality in Kilobots",
        description:
            "Simulator of Kilobots with heterogeneous heading biases in ARGoS. Studies the impact of individual robot differences (hardware variations) on the collective behavior of the swarm.",
        link: "https://github.com/mohsen-raoufi/Kilobots-Individuality-ALife-23",
        github: "https://github.com/mohsen-raoufi/Kilobots-Individuality-ALife-23",
        image: "/projects/svgl.webp",
        tags: [TAGS.ROBOTICS, TAGS.CPP],
    },
    {
        slug: "kn2c-ssl-robot-team",
        title: "KN2C SSL Robot Team",
        description:
            "Small-Size Soccer (SSL) robotic team for Robocup competitions. Developed software and control systems for a team of autonomous soccer-playing robots.",
        link: "https://github.com/mohsen-raoufi/KN2C-SSL",
        github: "https://github.com/mohsen-raoufi/KN2C-SSL",
        image: "/projects/svgl.webp",
        tags: [TAGS.ROBOTICS, TAGS.CPP],
    },
];
