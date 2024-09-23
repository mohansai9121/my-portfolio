//import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../../assets/profile.jpg";
import "./Profile.css";
import Reactlogo from "./Reactlogo";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const Profile = () => {
  return (
    <div className="profile">
      <div className="logos">
        <div className="logo">
          <Canvas>
            <Stage environment="city" intensity={1}>
              <Reactlogo />
            </Stage>
            <OrbitControls autoRotate autoRotateSpeed={7} enableZoom={false} />
          </Canvas>
        </div>
        <img
          src={profile}
          alt="Mohan Sai"
          title="Mohan Sai"
          style={{ borderRadius: "100%" }}
          className="mainProfile"
        />
        <div className="logo">
          <Canvas>
            <Stage environment="city" intensity={1}>
              <Reactlogo />
            </Stage>
            <OrbitControls autoRotate autoRotateSpeed={7} enableZoom={false} />
          </Canvas>
        </div>
      </div>
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
            href="https://drive.google.com/file/d/1frapC9SB3kBtB6Xj3HsDJnp7rvjTMRkc/view?usp=sharing"
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
