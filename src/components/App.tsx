import Intro from "./Intro";

const App = () => {
  return (
    <div className="py-5 md:py-10 min-h-screen min-w-full bg-black text-white">
      <div className="max-w-[750px] mx-auto">
        <Intro />
      </div>
    </div>
  );
};

export default App;
