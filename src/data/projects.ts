export type User = {
    id: string;
    name: string;
    avatar: string;
  };
  
  export type Project = {
    id: string;
    name: string;
    description: string;
    tags: string[];
    status: "Premium" | "Verified";
    user: User;
    skills: string[];
    language: string[];
  };
  
  export const PROJECTS_DATA: Project[] = [
    {
      id: "1",
      name: "E-commerce Website",
      description:
        "We are seeking a talented UI/UX designer to create a visually appealing and user-friendly web app design for a Telegram-based platform. The ideal candidate will have experience in designing intuitive interfaces and a strong understanding of Telegram's functionalities. The project will involve creating wireframes, mockups, and a final design that aligns with our brand identity and enhances user experience.",
      tags: ["Development & IT", "E-commerce"],
      status: "Verified",
      user: {
        id: "u1",
        name: "Alice Smith",
        avatar: "/avatar-1.jpg",
      },
      skills: ["React", "Node.js", "MongoDB"],
      language: ["English", "Spanish"],
    },
    {
      id: "2",
      name: "Mobile App Design",
      description: "Create a modern and user-friendly mobile app design.",
      tags: ["Design", "Mobile"],
      status: "Premium",
      user: {
        id: "u2",
        name: "Bob Johnson",
        avatar: "/avatar-1.jpg",
      },
      skills: ["Figma", "Sketch"],
      language: ["English"],
    },
    {
      id: "3",
      name: "Social Media Campaign",
      description:
        "Plan and execute a comprehensive social media campaign for a new product.",
      tags: ["Marketing", "Social Media"],
      status: "Verified",
      user: {
        id: "u3",
        name: "Carol Williams",
        avatar: "/avatar-1.jpg",
      },
      skills: ["Content Creation", "SEO", "Analytics"],
      language: ["English", "French"],
    },
    {
      id: "4",
      name: "Data Analysis Dashboard",
      description:
        "Develop an interactive dashboard for data analysis and visualization.",
      tags: ["Development & IT", "Data Analysis"],
      status: "Premium",
      user: {
        id: "u4",
        name: "David Brown",
        avatar: "/avatar-1.jpg",
      },
      skills: ["Python", "Tableau", "SQL"],
      language: ["English", "German"],
    },
    {
      id: "5",
      name: "Corporate Website Redesign",
      description:
        "Redesign the corporate website to improve user experience and branding.",
      tags: ["Design", "Web"],
      status: "Verified",
      user: {
        id: "u5",
        name: "Eve Davis",
        avatar: "/avatar-1.jpg",
      },
      skills: ["Adobe XD", "HTML", "CSS"],
      language: ["English"],
    },
    {
      id: "6",
      name: "AI Chatbot Development",
      description: "Develop an AI-powered chatbot for customer support.",
      tags: ["Development & IT", "AI"],
      status: "Premium",
      user: {
        id: "u6",
        name: "Frank Miller",
        avatar: "/avatar-1.jpg",
      },
      skills: ["Python", "NLP", "TensorFlow"],
      language: ["English", "Japanese"],
    },
  ];