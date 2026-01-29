import periodicTableImg from "../assets/projects/periodic-table.png";
import cssExperimentsImg from "../assets/projects/css-ui.png";
import popcornImg from "../assets/projects/popcorn.png";
import docAppImg from "../assets/projects/DocApp.png";
import jobBoardImg from "../assets/projects/job-board.png";
import foodOrderImg from "../assets/projects/Food-order-app.png";
import secretSantaImg from "../assets/projects/gifterly.png";
import todoListImg from "../assets/projects/todo-list.png";


const projects = [
    {
        id: 1,
        title: "Popcorn Movie App",
        description:
            "A modern React + Vite frontend project showcasing a clean UI layout, reusable components, and responsive design patterns.",
        techStack: ["React", "Vite", "JavaScript", "Tailwind CSS"],
        liveLink: "https://niwani.github.io/popcorn/",
        githubLink: "https://github.com/Niwani/popcorn",
        image: popcornImg,
    },
    {
        id: 2,
        title: "Doc-App Dashboard",
        description:
            "A responsive React dashboard with sidebar navigation, calendar view, profile and settings pages, and visual report cards.",
        techStack: ["React", "React Router", "JavaScript", "CSS"],
        liveLink: "https://niwani.github.io/Doc-App/",
        githubLink: "https://github.com/Niwani/Doc-App",
        image: docAppImg,
    },
    {
        id: 3,
        title: "Job Board Web App",
        description:
            "A responsive job board application that allows users to browse job listings, view role details, and navigate through a clean interface.",
        techStack: ["React", "JavaScript", "CSS"],
        liveLink: "",
        githubLink: "https://github.com/Niwani/Job_Board",
        image: jobBoardImg,
    },
    {
        id: 4,
        title: "Food Order App",
        description:
            "A responsive food ordering application where users can browse meals, add items to cart, and manage orders.",
        techStack: ["React", "Vite", "JavaScript", "CSS"],
        liveLink: "",
        githubLink: "https://github.com/Niwani/Food-Order-App-reactjs-",
        image: foodOrderImg,
    },
    {
        id: 5,
        title: "CSS UI Experiments",
        description:
            "A collection of CSS-only UI components and layout experiments focused on spacing, responsiveness, and visual hierarchy.",
        techStack: ["HTML", "CSS"],
        liveLink: "",
        githubLink: "https://github.com/Niwani/css-ui-experiments",
        image: cssExperimentsImg,
    },
    {
        id: 6,
        title: "Secret Santa App",
        description:
            "A simple Secret Santa grouping app built for a small family, ensuring each participant is randomly assigned another member.",
        techStack: ["JavaScript", "Vite"],
        liveLink: "https://niwani.github.io/secret-santa/",
        githubLink: "https://github.com/Niwani/secret-santa",
        image: secretSantaImg,
    },
    {
        id: 7,
        title: "To-Do List App",
        description:
            "A simple task management app that allows users to add, complete, and remove tasks while practicing clean React state handling.",
        techStack: ["JavaScript", "HTML", "CSS"],
        liveLink: "https://niwani.github.io/To-Do-List-App/",
        githubLink: "https://github.com/Niwani/To-Do-List-App",
        image: todoListImg,
    },
    {
        id: 8,
        title: "Interactive Periodic Table",
        description:
            "An HTML and CSS project that visually represents chemical elements arranged by groups and periods, focusing on layout structure, semantic markup, and clean styling.",
        techStack: ["HTML", "CSS"],
        image: periodicTableImg,
        liveLink: "https://niwani.github.io/The-Periodic-Table/",
        githubLink: "https://github.com/Niwani/The-Periodic-Table",
    }
];

export default projects;
