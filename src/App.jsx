import { BrowserRouter } from "react-router-dom";
import React from "react";
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  TextSphere,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0" style={{ background: 'linear-gradient(to left, #0095ff ,black 80% )' }}>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <TextSphere/>
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
