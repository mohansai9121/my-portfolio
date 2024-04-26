//import React from 'react'

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Navbar/Profile/Profile";
import Works from "./Components/Works/Works";

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
