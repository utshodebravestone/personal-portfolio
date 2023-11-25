import { ReactNode } from "react";

const Skill = ({
  icon,
  label,
  text,
}: {
  icon: ReactNode;
  label: string;
  text: string;
}) => {
  return (
    <div className="w-full p-2.5 md:p-5 mx-1 md:mx-2.5 flex items-center gap-2 md:gap-5 border-t border-neutral-700 rounded-xl shadow-md shadow-neutral-800">
      <div className="rounded-md">{icon}</div>
      <div>
        <p className="font-semibold text-base md:text-xl">{label}</p>
        <p className="mt-2 font-light text-xs md:text-base">{text}</p>
      </div>
    </div>
  );
};

export default Skill;
