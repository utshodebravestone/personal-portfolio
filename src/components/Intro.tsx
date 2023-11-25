import { MdMail, MdCall, MdCalendarMonth, MdHome } from "react-icons/md";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

import utsho from "../assets/images/utsho.png";
import useToggle from "../hooks/useToggle";
import Info from "./Info";

const infos = [
  {
    icon: <MdMail size={25} />,
    label: "email",
    text: "utshodebravestone@gmail.com",
  },
  {
    icon: <MdCall size={25} />,
    label: "phone",
    text: "+8801301109766",
  },
  {
    icon: <MdCalendarMonth size={25} />,
    label: "date of birth",
    text: "09-07-2023",
  },
  {
    icon: <MdHome size={25} />,
    label: "location",
    text: "Kurigram, Bangladesh.",
  },
];

const Intro = () => {
  const [showInfo, toggleShowInfo] = useToggle(false);

  return (
    <div className="relative bg-neutral-900 max-w-[750px] mx-auto py-5 px-2.5 md:px-5 flex flex-col gap-2.5 rounded-xl border border-neutral-700">
      <button
        onClick={toggleShowInfo}
        className="absolute top-0 right-0 py-1 md:py-2 px-2 md:px-4 border border-neutral-700 rounded-bl-xl rounded-tr-xl text-[.65rem] md:text-xs hover:border-white hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-500"
      >
        {showInfo ? "Show Less" : "Show More"}
      </button>

      <div className="flex items-center">
        <div className="bg-neutral-800 h-20 w-20 md:h-28 md:w-28 rounded-full">
          <img
            src={utsho}
            alt="Utsho"
            className="h-full w-full rounded-full object-contain"
          />
        </div>

        <div className="ml-3 md:ml-7 flex flex-col justify-center gap-1">
          <h1 className="text-xl md:text-3xl font-medium">
            Utsho de Bravestone
          </h1>
          <p className="py-1 md:py-1.5 px-2 md:px-2.5 bg-neutral-800 text-[.65rem] md:text-xs font-light w-fit rounded-md">
            Web Developer
          </p>
        </div>
      </div>

      {showInfo && (
        <div className="flex flex-col gap-2.5">
          <div className="h-[.025rem] w-full bg-neutral-600" />
          <ul>
            {infos.map((info, i) => (
              <li key={i} className="w-full">
                <Info icon={info.icon} label={info.label} text={info.text} />
              </li>
            ))}
          </ul>
          <div className="h-[.025rem] w-full bg-neutral-600" />
          <ul className="w-full flex justify-center gap-2.5">
            <li>
              <a
                href="https://github.com/utshodebravestone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/utshodebravestone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/utshobravestone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={25} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Intro;
