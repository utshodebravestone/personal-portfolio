import {
  TbApi,
  TbAppWindow,
  TbBrandCss3,
  TbBrandDjango,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandPython,
  TbBrandReact,
  TbBrandRust,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVue,
  TbBug,
  TbServer,
} from "react-icons/tb";

import Skill from "./Skill";
import Tech from "./Tech";

const skills = [
  {
    icon: <TbAppWindow size={65} />,
    label: "Web Design",
    text: "Designing Most Modern and Performant Frontend",
  },
  {
    icon: <TbServer size={65} />,
    label: "Web Development",
    text: "Building High Quality, SEO Friendly Websites",
  },
  {
    icon: <TbApi size={65} />,
    label: "API Development",
    text: "Designing Industry standard API",
  },
  {
    icon: <TbBug size={65} />,
    label: "Debugging",
    text: "Hunting for Bugs in Codebase",
  },
];

const techs = [
  { thumbnail: <TbBrandReact size={65} />, name: "React" },
  { thumbnail: <TbBrandVue size={65} />, name: "Vue" },
  { thumbnail: <TbBrandDjango size={65} />, name: "Django" },
  { thumbnail: <TbBrandTailwind size={65} />, name: "Tailwind" },
  { thumbnail: <TbBrandTypescript size={65} />, name: "TypeScript" },
  { thumbnail: <TbBrandJavascript size={65} />, name: "JavaScript" },
  { thumbnail: <TbBrandRust size={65} />, name: "Rust" },
  { thumbnail: <TbBrandPython size={65} />, name: "Python" },
  { thumbnail: <TbBrandCss3 size={65} />, name: "CSS" },
  { thumbnail: <TbBrandHtml5 size={65} />, name: "HTML" },
];

const About = () => {
  return (
    <section className="bg-neutral-900 w-full py-5 px-2.5 md:px-5 flex flex-col gap-2.5 md:gap-5 rounded-xl border border-neutral-700">
      <h1 className="font-bold text-2xl md:text-4xl">About Me</h1>
      <div className="h-1 md:h-1.5 w-8 md:w-10 bg-yellow-400 rounded-xl" />
      <p className="font-extralight text-xs md:text-base">
        I'm a Fullstack Web Developer from Kurigram, Bangladesh, working in web
        development and computer programming in general. I enjoy turning complex
        problems into simple, beautiful and intuitive designs.
      </p>
      <p className="mt-2.5 font-extralight text-xs md:text-base">
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way.
      </p>

      <ul className="mt-2.5 md:mt-5 flex flex-col gap-3 md:gap-5">
        <h1 className="text-xl md:text-[1.75rem] font-semibold">
          What I'm Doing
        </h1>
        {skills.map((skill, i) => (
          <li key={i}>
            <Skill {...skill} />
          </li>
        ))}
      </ul>

      <div className="mt-2.5 md:mt-5 flex flex-col gap-3 md:gap-5">
        <h1 className="text-xl md:text-[1.75rem] font-semibold">
          What I'm Using
        </h1>
        <ul className="mx-1 md:mx-2.5 w-full py-2.5 md:py-5 px-5 md:px-10 flex gap-14 overflow-x-scroll border-t border-neutral-700 rounded-lg shadow-md shadow-neutral-800">
          {techs.map((tech, i) => (
            <li key={i}>
              <Tech {...tech} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
