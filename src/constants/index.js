import {
  data_science,
  backend,
  frontend,
  ui_ux,
  python,
  CashYear,
  SIFF
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Python Developer ",
    icon: python,
  },
  {
    title: "Data Analyst",
    icon: data_science,
  },
  {title: "UI/UX Designer",
  icon: ui_ux,}
];



const experiences = [
  {
    title: "Junior Developer",
    company_name: "CashYear",
    icon: CashYear,
    iconBg: "#383E56",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Python Developer Intern",
    company_name: "SIFF",
    icon: SIFF,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2022",
    points: [
      "Developing and maintaining web applications using Python, MongoDB, Docker and other related technologies.",
      "Performed Sentiment Analysis on Tweets for a given Hashtag",
      "Developed ML backed FastAPI application",
    ],
  },
  
];


const projects = [
  {
    name: "ML backed application using FastAPI",
    description:
      "Docker, MongoDB, Python, FastAPI",
  }, 
  {
    name: "Sentiment Analysis of tweets for given hashtag",
    description:
     "Python, MongoDB"
  },

  {
    name: " Designed a Website's UI",
    description:
     "ReactJS, FlaskAPI, Figma" },
];

export { services, experiences, projects };
