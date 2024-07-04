//import React from 'react'
import profile from "../../assets/profile2.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <h1>About Me</h1>
      </div>
      <br></br>
      <div className="about-details">
        <div>
          <img
            src={profile}
            alt="Mohan Sai"
            title="Mohan Sai"
            className="image"
            width={310}
            height={370}
          />
        </div>
        <div>
          <div className="bio">
            <p>Aspiring front-end developer</p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <h3>HTML & CSS</h3>
              <hr width="70%" />
            </div>
            <div className="about-skill">
              <h3>JavaScript</h3>
              <hr width="60%" />
            </div>
            <div className="about-skill">
              <h3>Python</h3>
              <hr width="70%" />
            </div>
          </div>
          <br></br>
          <div className="experience">
            <div>
              <h2>1.5+</h2>
              <p style={{ fontSize: "20px" }}>Years experience in Python</p>
            </div>
            <hr />
            <div>
              <h2>8+</h2>
              <p style={{ fontSize: "20px" }}>Basic projects in React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
