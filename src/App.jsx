//import React from 'react'

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
//import HorizontalScroll from "./Components/Motion/HorizontalScroll";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Navbar/Profile/Profile";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";

const App = () => {
  return (
    <div style={{ overflow: "scroll" }}>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
