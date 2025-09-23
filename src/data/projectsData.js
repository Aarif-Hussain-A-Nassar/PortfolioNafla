import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import eight from "../assets/svg/projects/eight.svg";
import ten from "../assets/svg/projects/ten.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Portable Framework for Real-Time Water Quality Assessment",
    projectDesc:
      "A portable system for real-time water quality monitoring. Published at INCET 2023.",
    tags: ["IoT", "Analytics", "Jupyter NoteBook"],
    code: "", // No code repository
    demo: "https://ieeexplore.ieee.org/document/10170520",
    image: ten,
  },
  {
    id: 2,
    projectName: "iFlight – Airline Operations",
    projectDesc:
      "Designed REST APIs, optimized microservices, and ensured reliability for the iFlight platform.",
    tags: ["Spring Boot", "PostgreSQL", "Microservices", "Kubernetes"],
    code: "",
    demo: "",
    image: one,
  },
  {
    id: 3,
    projectName: "iTravel – Cruise Operations",
    projectDesc:
      "Developed full-stack features for reservations, POS, and loyalty modules, enhancing security and user experience.",
    tags: ["Spring Boot", "PostgreSQL", "AngularJS"],
    code: "",
    demo: "", 
    image: eight,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
