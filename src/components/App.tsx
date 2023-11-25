import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./About";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <div className="pt-5 md:pt-10 min-h-screen min-w-full bg-black text-white">
        <div className="max-w-[750px] mx-2.5 md:mx-auto">
          <Intro />
          <div className="h-5 md:h-10" />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<About />} />
          </Routes>
          <div className="h-5" />
          <Navigation />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
