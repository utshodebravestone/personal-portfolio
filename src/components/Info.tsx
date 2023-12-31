import { ReactNode } from "react";

const Info = ({
  icon,
  label,
  text,
}: {
  icon: ReactNode;
  label: string;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-2.5 py-1">
      <div className="bg-neutral-800 p-2 md:p-3 rounded-md">{icon}</div>
      <div className="text-sm">
        <p className="uppercase font-light">{label}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Info;
