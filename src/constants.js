// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import ibmLogo from './assets/company_logo/IBM.jpg';

// Education Section Logo's
import mduLogo from './assets/education_logo/mdu.jpg';
import bsebLogo from './assets/education_logo/bseb.jpg';

// Project Section Logo's
import projectLogo1 from './assets/work_logo/project1.png';
import projectLogo2 from './assets/work_logo/project2.png';
import projectLogo3 from './assets/work_logo/project3.png';
import projectLogo4 from './assets/work_logo/project4.png';
import projectLogo5 from './assets/work_logo/project5.png';

// Certificate Section Logo's
import certificate1 from './assets/certificate/IMG_20250917_213722.jpg';
import certificate2 from './assets/certificate/IMG_20250917_214152.jpg';
import certificate3 from './assets/certificate/Project completion cirtificate 1.jpg';
import certificate4 from './assets/certificate/Web Development certificate coding block.jpg';
import certificate5 from './assets/certificate/HTML CSS cirtificate.png';
import certificate6 from './assets/certificate/DSA USING C++ certificate.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ibmLogo,
      role: "Frontend Intern",
      company: "IBM",
      date: "June 2024 - August 2024",
      desc: "Contributed to the development and maintenance of web applications, utilizing HTML, CSS, and JavaScript. Collaborated with teams to implement user-friendly designs and improve application functionality, ensuring smooth user experiences.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: mduLogo,
      school: "Maharshi Dayanand University, Rohtak",
      date: "Aug 2023 - Aug 2027",
      grade: "%",
      desc: "I am currently a third-year B.Tech student in Computer Science and Engineering at St. Andrews Institute of Technology and Management, affiliated with Maharshi Dayanand University (MDU). With a strong passion for software development, I specialize in MERN stack, Java programming, and Data Structures & Algorithms (DSA). I am committed to applying my technical knowledge to solve real-world problems and continuously enhancing my skills through practical projects and collaborative learning.",
      degree: "Bachelor of Technology - B.Tech (CComputer Science and Engineering)",
    },
    {
      id: 1,
      img: bsebLogo,
      school: "Bihar School Examination Board, Bihar",
      date: "March 2021 - March 2023",
      grade: "65%",
      desc: "I completed my class 12 education from Bihar School Examination Board, Bihar, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
      degree: "CBSE(XII) - PCM with Biology",
    },
    {
      id: 2,
      img: bsebLogo,
      school: "Bihar School Examination Board, Bihar",
      date: "March 2020 - March 2021",
      grade: "66%",
      desc: "I completed my class 10 education from Bihar School Examination Board, Bihar",
      degree: "BESB(X)",
    },
  ];
  
export const certificates = [
  {
    id: 3,
    title: "Web Development",
    issuer: "Coding Blocks",
    date: "Mar 2024",
    img: certificate4,
  },
  {
    id: 2,
    title: "Project Completion",
    issuer: "St. Andrews Institute of Technology & Management",
    date: "Feb 2024",
    img: certificate3,
  },
  {
    id: 1,
    title: "Internship Certificate",
    issuer: "IBM",
    date: "Jan 2024",
    img: certificate1,
  },
  {
    id: 4,
    title: "HTML & CSS",
    issuer: "Coding Blocks",
    date: "Apr 2024",
    img: certificate5,
  },
  {
    id: 5,
    title: "DSA Using C++",
    issuer: "Coding Blocks",
    date: "May 2024",
    img: certificate6,
  },
  
  
  {
    id: 0,
    title: "Internship Certificate",
    issuer: "IBM",
    date: "Jan 2024",
    img: certificate2,
  },
];

  export const projects = [
    {
      id: 0,
      title: "Expense Tracker",
      description:
        "An Expense Tracker website helps users manage and monitor their finances by tracking income, expenses, and budgeting. It offers features like data visualization, reports, categorization, and financial goals to improve financial planning and enhance overall budget management.",
      image: projectLogo2,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "MongoDB"],
      github: "https://github.com/Maurya-Abhay/Expense-Tracker-Frontend",
      webapp: "https://expense-tracker-frontend-1-l7kn.onrender.com/",
    },
    {
      id: 1,
      title: "My First Portfolio",
      description:
        "Passionate Front-End Developer skilled in HTML, CSS, JavaScript, and React. Focused on creating interactive and user-friendly web applications. Constantly learning and building innovative solutions to improve user experience and showcasing projects to demonstrate skills and growth in the field.",
      image: projectLogo1,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Maurya-Abhay/My-Portfolio",
      webapp: "https://abhayprasad.netlify.app/",
    },
    {
      id: 2,
      title: "Quiz Website",
      description:
        "Developed an education platform providing coding quizzes, constantly learning and building innovative solutions to improve user experience. It enables users to practice and sharpen their coding skills with a variety of quizzes, challenges, and interactive features.",
      image: projectLogo4,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Maurya-Abhay/quizo.github.io",
      webapp: "https://apna-quizo.netlify.app/",
    },
  ];  