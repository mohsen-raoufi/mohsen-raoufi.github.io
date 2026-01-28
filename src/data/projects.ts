export const TAGS = {
    ROBOTICS: {
        name: "Robotics",
        class: "bg-[#f58c00]/20 text-[#f58c00]",
        icon: "lucide:bot",
    },
    AI: {
        name: "AI & ML",
        class: "bg-[#8b5cf6]/20 text-[#8b5cf6]",
        icon: "simple-icons:openai",
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
};

export const PROJECTS = [
    {
        slug: "lars-augmented-reality",
        title: "<LARS>: Light Augmented Reality System",
        description:
            "<code style='color: #F9D779'>&lt;LARS&gt;</code> is a <text style='color: #4cb7feff'>standalone</text> framework engineered to provide a seamless interaction between physical collectives and virtual environments. As an end-to-end pipeline, it integrates high-speed <text style='color: #4cb7feff'>detection</text>, real-time <text style='color: #4cb7feff'>tracking</text>, and dynamic <text style='color: #4cb7feff'>projection</text> into a single, cohesive architecture. Built on a robust <b>Model-View-Controller (MVC)</b> pattern, the system enables researchers to bypass complex hardware setups and jump straight into experimentation. The core of <code style='color: #F9D779'>&lt;LARS&gt;</code> lies in its marker-free tracking engine.",
        link: "https://mohsen-raoufi.github.io/LARS/",
        linkText: "View Framework",
        paper: "https://www.mdpi.com/2076-3417/13/18/10492",
        github: "https://github.com/mohsen-raoufi/LARS",
        image: "/projects/LARS.png",
        tags: [TAGS.ROBOTICS, TAGS.CPP, TAGS.PYTHON, TAGS.CUDA, TAGS.VISION, TAGS.End_to_end_system_design, TAGS.Qt, TAGS.OPENCV, TAGS.COLLECTIVE, TAGS.AUGMENTED_REALITY, TAGS.HUMAN_ROBOT_INTERACTION, TAGS.DATA_ANALYSIS],
    },
    {
        slug: "heterogeneous-opinion-dynamics",
        title: "Heterogeneous Collective Opinion Dynamics",
        description:
            "This collaborative project introduces a <text style='color: #4cb7feff'><b>Bayesian framework</b></text> for <text style='color: #F9D779'><b>opinion dynamics</b></text>, moving beyond deterministic models to formally <text style='color: #4cb7feff'><b>model uncertainty</b></text> within <text style='color: #4cb7feff'><b>social networks</b></text>. By treating opinions as probability distributions rather than fixed points, we explore how agents update their beliefs when faced with noisy or conflicting information. The research investigates how <text style='color: #4cb7feff'><b>heterogeneity</b></text> in network topology (centrality) and quality of information (certainty) changes the dynamics collective consensus. In this work we combined network science with probabilistic inference to provide a mathematical foundation for understanding how opinion dynamics evolves in complex, decentralized systems, offering key insights for both social modeling and the design of resilient multi-agent AI.",
        // link: "https://github.com/mohsen-raoufi/Heterogeneous-Opinion-Dynamics-with-Uncertainty",
        linkText: "View Collaboration",
        github: "https://github.com/mohsen-raoufi/Heterogeneous-Opinion-Dynamics-with-Uncertainty",
        paper: "https://www.nature.com/articles/s41598-024-78856-8",
        image: "/projects/HetOpDy.png",
        tags: [TAGS.COLLECTIVE, TAGS.MODELLING, TAGS.PYTHON, TAGS.AI, TAGS.BAYESIAN, TAGS.PROBABILISTIC_MODELING, TAGS.NETWORK_SCIENCE, TAGS.MULTI_AGENT_SYSTEMS, TAGS.COMPLEX_SYSTEMS, TAGS.DATA_ANALYSIS],
    },
    {
        slug: "messengers-echo-chambers",
        title: "Emergence and Breaking of Echo Chambers in Social Systems",
        description:
            "This research studies the challenge of echo chambers in networked systems, where homophily—the tendency to interact only with like-minded peers—prevents consensus and drives polarization. Using agent-based simulations and complex systems analysis, I modeled how these clusters emerge and explored a novel strategy to break them: 'Messengers', by utilizing a Dichotomous Markov Process. This work provides a scalable modeling and simulation framework for understanding social dynamics and multi-agent systems.",
        // link: "https://github.com/mohsen-raoufi/messengers",
        github: "https://github.com/mohsen-raoufi/messengers",
        paper: "https://www.nature.com/articles/s41598-024-78856-8",
        image: "/projects/MSG.png",
        tags: [TAGS.COLLECTIVE, TAGS.MODELLING, TAGS.PYTHON, TAGS.AI, TAGS.AGENT_BASED_MODELING, TAGS.PROBABILISTIC_MODELING, TAGS.NETWORK_SCIENCE, TAGS.MULTI_AGENT_SYSTEMS, TAGS.COMPLEX_SYSTEMS, TAGS.DATA_ANALYSIS],
    },
    // {
    //     slug: "kilobots-individuality",
    //     title: "Individuality in Kilobots",
    //     description:
    //         "Simulator of Kilobots with heterogeneous heading biases in ARGoS. Studies the impact of individual robot differences (hardware variations) on the collective behavior of the swarm.",
    //     link: "https://github.com/mohsen-raoufi/Kilobots-Individuality-ALife-23",
    //     github: "https://github.com/mohsen-raoufi/Kilobots-Individuality-ALife-23",
    //     image: "/projects/svgl.webp",
    //     tags: [TAGS.ROBOTICS, TAGS.CPP],
    // },
    // {
    //     slug: "kn2c-ssl-robot-team",
    //     title: "KN2C SSL Robot Team",
    //     description:
    //         "Small-Size Soccer (SSL) robotic team for Robocup competitions. Developed software and control systems for a team of autonomous soccer-playing robots.",
    //     link: "https://github.com/mohsen-raoufi/KN2C-SSL",
    //     github: "https://github.com/mohsen-raoufi/KN2C-SSL",
    //     image: "/projects/svgl.webp",
    //     tags: [TAGS.ROBOTICS, TAGS.CPP],
    // },
];
