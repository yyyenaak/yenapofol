import React from "react";
import logo from "../assets/logo.png";
import "./assets/js/main";

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <header className="header">
      <a href="#top" className="logo">
        <img
          src={logo}
          style={{ width: "auto", height: "2.5rem" }}
          alt="logo"
        />
      </a>
      <div
        className={`Header_navigation mobile_menu ${menuOpen ? "open" : ""}`}
        id="mobileMenu"
      >
        <a href="#about" className="navi_font">
          About
        </a>
        <a href="#skills" className="navi_font">
          Skills
        </a>
        <a href="#projects" className="navi_font">
          Projects
        </a>
      </div>
      <div className="hamburger" id="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
