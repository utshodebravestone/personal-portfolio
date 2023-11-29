import { TbApi, TbAppWindow, TbBug, TbServer } from "react-icons/tb";

import Skill from "./Skill";

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
    </section>
  );
};

export default About;
