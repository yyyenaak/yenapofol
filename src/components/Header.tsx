import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/logo.png";

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 바깥 클릭 시 메뉴 닫기 (모바일에서만 적용)
  useEffect(() => {
    if (!isMobile) return; // 웹에서는 실행 안되게

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
  }, [menuOpen, toggleMenu, isMobile]);

  return (
    <header className="header">
      <a href="#top" className="logo">
        <img
          src={logo}
          style={{ width: "auto", height: "2.5rem" }}
          alt="logo"
        />
      </a>

      {/* 햄버거 버튼 (모바일에서만 표시) */}
      {isMobile && (
        <div
          ref={hamburgerRef}
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {/* 네비게이션 (웹에서는 항상 보이도록 변경) */}
      <nav
        ref={menuRef}
        className={`Header_navigation mobile_menu ${
          menuOpen || !isMobile ? "open" : ""
        }`}
      >
        <a
          href="#about"
          className="navi_font"
          onClick={isMobile ? toggleMenu : undefined}
        >
          About
        </a>
        <a
          href="#skills"
          className="navi_font"
          onClick={isMobile ? toggleMenu : undefined}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="navi_font"
          onClick={isMobile ? toggleMenu : undefined}
        >
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;
