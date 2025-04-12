//import React from 'react'
import profile from "../../assets/profile3.png";
import { motion } from "motion/react";
import "./About.css";
import { useState } from "react";
import Education from "./Education/Education";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="about" id="about">
      <div>
        <h1>About Me</h1>
      </div>
      <br></br>
      <div className="about-details">
        <motion.div
          className="card"
          onClick={() => setFlipped(!flipped)}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-face card-front">
            <img src={profile} alt="Profile image" className="secondImage" />
          </div>
          <div className="card-face card-back">
            <div className="profile-back">
              <br /><br/>
              <h3>Front-end Developer</h3>
              <br/><br/><br/>
              <p style={{width:"85%"}}>
                I&apos;m a frontend developer with a passion for building sleek,
                interactive web experiences. I specialize in React and love
                crafting clean, maintainable code. Currently focused on bringing
                thoughtful UI/UX to life with performance in mind.
              </p>
            </div>
          </div>
        </motion.div>
        <div>
          <Education/>
        </div>
      </div>
    </div>
  );
};

export default About;
