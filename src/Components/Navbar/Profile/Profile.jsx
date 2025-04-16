//import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../../assets/profile.jpg";
import "./Profile.css";
//import Reactlogo from "./Reactlogo";
import { motion } from "motion/react";
//import { Canvas } from "@react-three/fiber";
//import { OrbitControls, Stage } from "@react-three/drei";

const Profile = () => {
  return (
    <div className="profile">
      <div className="logos">
        <motion.img
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={profile}
          alt="Mohan Sai"
          title="Mohan Sai"
          style={{ borderRadius: "100%" }}
          className="mainProfile"
        />
      </div>
      <h1>
        <span className="name">I am Mohan Sai,</span> from Guntur
      </h1>
      <h2>Front-end Developer</h2>
      <h3>
        Crafting user-centric web experiences with clean code and modern design
      </h3>
      <div className="profile-respond">
        <div className="connect">
          <AnchorLink offset={50} href="#contact" className="anchor">
            Connect with me
          </AnchorLink>
        </div>
        <div className="resume">
          <a
            href="https://drive.google.com/file/d/18gLBUr1UkX_8npStj494b30XPujuYgF9/view?usp=drive_link"
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
