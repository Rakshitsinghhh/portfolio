import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
    {
    id: "potter-xyz",
    title: "Potter-XYZ",
    description:
      "A decentralized, real-time betting game built on Solana. Each bet resets a countdown timer, and the last bettor wins the pot. Integrated with Jupiter for token swaps, Solana wallet adapter, and DAO-ready logic.",
    icon: "/skills/pot.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rakshitsinghhh/potter-xyz",
    url: "",
    tags: ["Solana", "Rust", "Anchor", "Web3", "DeFi", "GameFi"]
  },
  {
    id: "Wallation",
    title: "WALLATION",
    description:
      "A secure and user-friendly Web3 crypto wallet that supports seed phrase generation, real-time balance display, and fund transfers. Built with robust encryption and privacy mechanisms.",
    icon: "/skills/euro.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rakshitsinghhh/WALLATION",
    url: "",
    tags: ["Web3", "JavaScript", "react","typescript"]
  },
  {
    id: "chainport-wallet",
    title: "ChainPort",
    description:
      "A lightweight wallet adapter that improves transaction security. Fetch balances, sign messages, and send funds via trustless, Public-keyless communication.",
    icon: "/skills/chains.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rakshitsinghhh/chainport",
    url: "",
    tags: ["Web3", "JavaScript", "react","typescript"]

  },
  {
    id: "upi-sms-tracker",
    title: "FINTRACK",
    description:
      "An Android app that reads and filters SMS for UPI/bank transactions using Kotlin. Supports SBI, GPay, PhonePe, Paytm, and more.",
    icon: "/skills/speech_balloon.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rakshitsinghhh/PersonalFinanceTracker",
    url: "",
    tags: ["Android", "Kotlin", "UPI", "SMS", "Banking"]
  },
  {
    id: "medi-locker",
    title: "Medi Locker",
    description:
      "Secure platform to store, manage, and access medical records. Built using HTML, CSS, JS, Node.js, Express.js, and MySQL. Top 10 at JECRC Hackathon (250+ teams).",
    icon: "/skills/pill.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Team,
    githubUrl: "https://github.com/rakshitsinghhh/medilocker",
    url: "",
    tags: ["Node.js", "Express", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "websocket-chat-app",
    title: "WebSocket",
    description:
      "A real-time chat app using Node.js and WebSocket on the backend, and React with TypeScript on the frontend (Vite).",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rakshitsinghhh/websockets",
    url: "",
    tags: ["React", "Node.js", "WebSocket", "TypeScript"]
  },
  {
    id: "spl-token-creator",
    title: "SPL Token Creator",
    description:
      "A no-code dApp built with React to create custom SPL tokens on the Solana blockchain with just a few clicks.",
    icon: "/skills/rocket.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rakshitsinghhh/solanalaunchpad",
    url: "",
    tags: ["Solana", "React", "Web3", "SPL", "dApp"]
  },
  {
    id: "ethwallation",
    title: "Ethwallation",
    description:
      "A secure Ethereum wallet built using Python and MySQL. Includes wallet generation, transaction signing, and balance checks.",
    icon: "/skills/briefcase.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rakshitsinghhh/ethwallation",
    url: "",
    tags: ["solidity", "Web3" , "react" ,"TypeScript" , "foundry" , "forge"]
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    description:
      "A CLI-based restaurant order and billing system developed in Python using MySQL for data storage.",
    icon: "/skills/fries.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rakshitsinghhh/restaurantmanagment",
    url: "",
    tags: ["Python", "MySQL", "CLI"]
  }
];
export default projects;
