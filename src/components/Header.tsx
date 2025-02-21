import React, { useRef, useEffect } from "react";
import logo from "../assets/logo.png";

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  // 바깥 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        toggleMenu(); // 메뉴 닫기
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen, toggleMenu]);

  return (
    <header className="header">
      <a href="#top" className="logo">
        <img
          src={logo}
          style={{ width: "auto", height: "2.5rem" }}
          alt="logo"
        />
      </a>

      {/* 햄버거 버튼 */}
      <div
        ref={hamburgerRef}
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* 모바일 메뉴 */}
      <nav
        ref={menuRef}
        className={`Header_navigation mobile_menu ${menuOpen ? "open" : ""}`}
      >
        <a href="#about" className="navi_font" onClick={toggleMenu}>
          About
        </a>
        <a href="#skills" className="navi_font" onClick={toggleMenu}>
          Skills
        </a>
        <a href="#projects" className="navi_font" onClick={toggleMenu}>
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;
