import { FaEye, FaGithub } from "react-icons/fa";

const Project = ({
  liveLink,
  gitLink,
  thumbnail,
  label,
  text,
}: {
  liveLink: string;
  gitLink: string;
  thumbnail: string;
  label: string;
  text: string;
}) => {
  return (
    <div className="relative w-full mx-2.5 md:mx-0 px-2.5 py-2.5 flex flex-col gap-2.5 border-t border-neutral-700 rounded-xl shadow-md shadow-neutral-800 group">
      <img src={thumbnail} alt="thumbnail" className="rounded-md" />
      <div className="absolute top-0 left-0 w-full h-full p-10 flex justify-center items-end gap-2.5 backdrop-blur-sm text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <a
          href={liveLink}
          target="_black"
          className="hidden group-hover:block p-3 bg-neutral-700 cursor-pointer rounded-xl hover:scale-105 transition-all duration-300"
        >
          <FaEye size={25} />
        </a>
        <a
          href={gitLink}
          target="_black"
          className="hidden group-hover:block p-3 bg-neutral-700 cursor-pointer rounded-xl hover:scale-105 transition-all duration-300"
        >
          <FaGithub size={25} />
        </a>
      </div>
      <div>
        <p className="font-semibold text-base md:text-xl">{label}</p>
        <p className="font-light text-xs md:text-base">{text}</p>
      </div>
    </div>
  );
};

export default Project;
