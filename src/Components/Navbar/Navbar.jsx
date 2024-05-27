//import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="Portfolio"
        title="Portfolio Logo"
        height="100px"
        width="150px"
      />
      <ul className="nav-menu">
        <li className="navmenu-component">
          <AnchorLink href="#home" className="anchor">
            Home
          </AnchorLink>
        </li>
        <li className="navmenu-component">
          <AnchorLink href="#about" offset={50} className="anchor">
            About me
          </AnchorLink>
        </li>
        <li className="navmenu-component">
          <AnchorLink href="#works" offset={50} className="anchor">
            My works
          </AnchorLink>
        </li>
        <li className="navmenu-component">
          <AnchorLink href="#contact" offset={50} className="anchor">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
