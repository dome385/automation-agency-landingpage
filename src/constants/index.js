import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  //notification2,
  //notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  //roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Ablauf",
    url: "#ablauf",
  },
 /*  {
    id: "1",
    title: "Dienstleistungen",
    url: "#pricing",
  }, */
  {
    id: "2",
    title: "Dienstleistungen",
    url: "#dienstleistungen",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
 /*  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  }, */
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Konversionsraten steigern",
  "Repetitive Fragen automatisieren",
  "24/7 Anlaufstelle",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "AI Sales Bot um Leads anzurufen",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "März 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  /*  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  }, */
  {
    id: "2",
    title: "Bildungs-AI-Chatbot",
    text: "Ein Bildungs-AI-Chatbot ist ein rund um die Uhr verfügbarer, intelligenter Lernassistent, der personalisierte Unterstützung und sofortige Antworten auf akademische Fragen bietet.",
    date: "Februar 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API Integration",
    text: "Ermöglichen Sie dem Chatbot den Zugriff auf externe Datenquelle um auf Dokumente zuzugreifen oder Automationen zu triggern.",
    date: "März 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Erfassen Sie Interessenten, um Leads effizient zu qualifizieren. So können Sie hochinteressante Leads identifizieren und auf deren Bedürfnisse eingehen, noch bevor sie Kontakt aufnehmen.";

export const collabContent = [
  {
    id: "0",
    title: "24/7 Lead-Qualifizierung",
  },
  {
    id: "1",
    title: "Anbindung an WhatsApp / Instagram / Telegram uvm. ",
  },
  {
    id: "2",
    title:
      "Erfassen Sie die Nachfrage von mehreren Touchpoints auf einer einzigen Plattform",
    text: "",
  },
  {
    id: "3",
    title: "DSGVO geschützt.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 50,
    height: 50,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 45,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "1. Entdeckung und Prüfung",
    text: "Wir tauchen tief in Ihr Unternehmen ein und identifizieren Bereiche, in denen KI-Chatbots und Automatisierungen einen Unterschied machen können.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "2. Strategie",
    text: "Aus unseren Erkenntnissen erstellen wir einen Plan. Dieser Plan stellt sicher, dass die Tools gut in Ihren Betrieb passen. Sie sind darauf ausgelegt, Ihre Aufgaben einfacher und effizienter zu gestalten.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "3. Implementierung und Optimierung",
    text: "Wir erwecken den Entwurf zum Leben, indem wir die KI-Chatbots und Automatisierungstools integrieren und sicherstellen, dass sie konsistent einen Mehrwert liefern. Diese Tools sind genau auf Ihre Bedürfnisse abgestimmt. Unser Ziel sind gleichbleibende Werte und reibungslose Abläufe.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
