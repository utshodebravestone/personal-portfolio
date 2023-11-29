import { ReactNode } from "react";

const Tech = ({ thumbnail, name }: { thumbnail: ReactNode; name: string }) => {
  return (
    <div className="w-fit flex flex-col items-center justify-center gap-2.5">
      <div>{thumbnail}</div>
      <p className="text-xl md:text-2xl">{name}</p>
    </div>
  );
};

export default Tech;
