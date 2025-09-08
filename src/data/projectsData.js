import portfolioImage from '../assets/images/project/Portfolio.png';
import farmerImage from '../assets/images/project/Farmer.png';
import iimmImage from '../assets/images/project/IIMM.png';
import goalImage from '../assets/images/project/Goal.png';
import todoImage from '../assets/images/project/todo.jpg';

const projectsData = [
  {
    id: 1,
    image: portfolioImage,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing web and software development projects and skills.',
    viewLink: 'https://devilucifer.netlify.app/',
    codeLink: 'https://github.com/akash9569/Portfolio',
  },
  {
    id: 2,
    image: farmerImage,
    title: 'Farmer Merchant Integration',
    description: 'A platform to connect farmers and merchants to facilitate the exchange of goods and services.',
    viewLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    image: iimmImage,
    title: 'IIMM Ayodhya Clone',
    description: 'A responsive front-end clone of IIMM Ayodhya built with React.js and Bootstrap.',
    viewLink: 'https://iimm.netlify.app/',
    codeLink: 'https://github.com/akash9569/IIMM-Ayodhya-Clone',
  },
  {
    id: 4,
    image: goalImage,
    title: 'Goal Tracker',
    description: 'A React.js goal tracker to efficiently manage goals, deadlines, and sub-tasks with progress tracking.',
    viewLink: 'https://milesto.netlify.app/',
    codeLink: 'https://github.com/akash9569/Goal-Tracker-App',
  },
  {
    id: 5,
    image: todoImage,
    title: 'Professional Todo App',
    description: 'A feature-rich task manager built with Flutter to organize your day and boost productivity.',
    viewLink: '#',
    codeLink: 'https://github.com/akash9569/todo-app',
  },
];

export default projectsData;