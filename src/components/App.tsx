import About from "./About";
import Intro from "./Intro";

const App = () => {
  return (
    <div className="py-5 md:py-10 min-h-screen min-w-full bg-black text-white">
      <div className="max-w-[750px] mx-2.5 md:mx-auto">
        <Intro />
        <div className="h-5 md:h-10" />
        <About />
      </div>
    </div>
  );
};

export default App;
