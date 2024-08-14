//import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef, useState } from "react";
import underline from "../../assets/underline.webp";
import menubar from "../../assets/menubar.png";
import close from "../../assets/close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home1");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar" id="home">
      <img
        src={logo}
        alt="Portfolio"
        title="Portfolio Logo"
        className="portfolioImage"
      />
      <img
        onClick={openMenu}
        src={menubar}
        alt="menu"
        height={60}
        width={70}
        className="navMobileOpen"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          onClick={closeMenu}
          src={close}
          alt="close"
          height={40}
          style={{ backgroundColor: "white" }}
          width={40}
          className="navMobileClose"
        />
        <li className="navmenu-component" onClick={() => setMenu("home1")}>
          <AnchorLink href="#home" className="anchor">
            Home
          </AnchorLink>
          {menu === "home1" ? (
            <img src={underline} alt="" width="auto" height={15} />
          ) : (
            <></>
          )}
        </li>
        <li className="navmenu-component" onClick={() => setMenu("about1")}>
          <AnchorLink href="#about" offset={50} className="anchor">
            About me
          </AnchorLink>
          {menu === "about1" ? (
            <img src={underline} alt="" width="auto" height={15} />
          ) : (
            <></>
          )}
        </li>
        <li className="navmenu-component" onClick={() => setMenu("works1")}>
          <AnchorLink href="#works" offset={50} className="anchor">
            My works
          </AnchorLink>
          {menu === "works1" ? (
            <img src={underline} alt="" width="auto" height={15} />
          ) : (
            <></>
          )}
        </li>
        <li className="navmenu-component" onClick={() => setMenu("contact1")}>
          <AnchorLink href="#contact" offset={50} className="anchor">
            Contact
          </AnchorLink>
          {menu === "contact1" ? (
            <img src={underline} alt="" width="auto" height={15} />
          ) : (
            <></>
          )}
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
