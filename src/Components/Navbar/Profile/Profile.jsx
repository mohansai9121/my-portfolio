//import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../../assets/profile.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img
        src={profile}
        alt="Mohan Sai"
        title="Mohan Sai"
        height="300px"
        width="300px"
        style={{ borderRadius: "100%" }}
      />
      <h1>
        <span className="name">I am Mohan Sai,</span> from Guntur
      </h1>
      <h2>Front-end Developer</h2>
      <h3>Working on React</h3>
      <div className="profile-respond">
        <div className="connect">
          <AnchorLink offset={50} href="#contact" className="anchor">
            Connect with me
          </AnchorLink>
        </div>
        <div className="resume">
          <a
            href="https://drive.google.com/file/d/18lRxzKMozE56pYQOi2Eapy-emXc6jfjB/view?usp=sharing"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
