import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import "./assets/css/Modal.css";
import topbtn from "./assets/top.svg";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projectlist from "./components/Projectlist";
import "./assets/js/main";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const topButton = document.querySelector(".top") as HTMLElement;
      if (topButton) {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="body">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <main>
        <section id="top">
          <div className="main_top">
            <div className="top_twins">
              <div className="main_textzone">
                <div className="sub_text2">Yena, Jo</div>
                <div className="main_text">조예나</div>
                <div className="sub_text">
                  창의적인 아이디어로 기획을 이끌며,
                  <br />그 아이디어를 손끝에서 현실로 구현할 줄 아는
                  개발자입니다. <br />
                  저에 대해 알고싶다면&nbsp;
                  <span className="highlight-text">'HeLLo!'</span> 버튼을
                  눌러주세요!
                </div>
              </div>
            </div>
            <div className="click_me">
              <div className="sub_text4">Click Me !</div>
              <button
                className="underbtn"
                onClick={() => (window.location.href = "#about")}
              >
                <span>Hello!</span>
              </button>
            </div>
          </div>
        </section>

        <hr style={{ width: "90%", color: "#1F334B" }} />

        <About />

        <Skills />

        <Projectlist />
      </main>

      {/* Top 버튼 */}
      <a className="top" href="#top" title="top">
        <img className="top_btn" src={topbtn} alt="Top" />
      </a>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Yena Jo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
