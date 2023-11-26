import xwetter from "../assets/images/xwetter.png";
import blog from "../assets/images/blog-de-utsho.png";
import cvMaker from "../assets/images/cv-maker.png";
import tasks from "../assets/images/tasks.png";
import adminDashboard from "../assets/images/admin-dashboard.png";
import furiousCats from "../assets/images/furious-cats.png";

import Project from "./Project";

const projects = [
  {
    liveLink: "https://xwitter.onrender.com",
    gitLink: "https://github.com/utshodebravestone/xwitter",
    thumbnail: xwetter,
    label: "Xwitter",
    text: "Social Media Application",
  },
  {
    liveLink: "https://blog-de-utsho.vercel.app",
    gitLink: "https://github.com/utshodebravestone/blog-de-utsho",
    thumbnail: blog,
    label: "Blog de Utsho",
    text: "My Blog",
  },
  {
    liveLink: "https://cv-maker-by-utsho.vercel.app",
    gitLink: "https://github.com/utshodebravestone/cv-maker",
    thumbnail: cvMaker,
    label: "CV Maker",
    text: "CV Maker Web Application",
  },
  {
    liveLink: "https://tasks-by-utsho.vercel.app",
    gitLink: "https://github.com/utshodebravestone/tasks",
    thumbnail: tasks,
    label: "Tasks",
    text: "Web Application for Managing Tasks",
  },
  {
    liveLink: "https://utshodebravestone.github.io/odin-admin-dashboard",
    gitLink: "https://github.com/utshodebravestone/odin-admin-dashboard",
    thumbnail: adminDashboard,
    label: "Admin Dashboard",
    text: "Design for an Admin Dashboard",
  },
  {
    liveLink: "https://utshodebravestone.github.io/odin-landing-page",
    gitLink: "https://github.com/utshodebravestone/odin-landing-page",
    thumbnail: furiousCats,
    label: "Furious Cats",
    text: "Design for a Landing Page",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-neutral-900 w-full py-5 px-2.5 md:px-5 flex flex-col gap-2.5 md:gap-5 rounded-xl border border-neutral-700">
      <h1 className="font-bold text-2xl md:text-4xl">Portfolio</h1>
      <div className="h-1 md:h-1.5 w-8 md:w-10 bg-yellow-400 rounded-xl" />
      <p className="font-extralight text-xs md:text-base">
        These are some of the projects I've worked on.
      </p>

      <ul className="mt-2.5 md:mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
        {projects.map((project, i) => (
          <li key={i}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
