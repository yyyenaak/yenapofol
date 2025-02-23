import React from "react";
import skills from "../assets/skill.svg";
import html5 from "../assets/skill_svg/html5.svg";
import css3 from "../assets/skill_svg/css3.svg";
import scss from "../assets/skill_svg/scss.svg";
import react from "../assets/skill_svg/react.svg";
import git from "../assets/skill_svg/git.svg";
import figma from "../assets/skill_svg/figma.svg";
import java from "../assets/skill_svg/java.svg";
import mysql from "../assets/skill_svg/mysql.svg";
import php from "../assets/skill_svg/php.svg";
import js from "../assets/skill_svg/js.svg";
import tsx from "../assets/skill_svg/tsx.svg";
import python from "../assets/skill_svg/python.svg";
import "../assets/js/main";

const Skills: React.FC = () => {
  return (
    <section className="component" id="skills">
      <div className="mainzone">
        <div className="main_title">
          <img style={{ paddingRight: "1rem" }} src={skills} alt="Skills" />
          <h1>Skills</h1>
        </div>

        <div className="skillzone">
          {/** Familiar Skills **/}
          <div className="skill_back">
            <div className="skill_header"></div>
            <div className="sk_title">
              <h2>Familiar</h2>
            </div>
            <hr style={{ width: "100%", color: "#8a8a8a" }} />
            <div className="skill_box">
              <ul className="sk_detail">
                {[
                  {
                    src: html5,
                    alt: "HTML5",
                    name: "HTML",
                  },
                  { src: css3, alt: "CSS3", name: "CSS" },
                  { src: scss, alt: "SCSS", name: "SCSS" },
                  {
                    src: react,
                    alt: "React",
                    name: "React",
                  },
                  { src: git, alt: "Git", name: "Git" },
                  {
                    src: figma,
                    alt: "Figma",
                    name: "Figma",
                  },
                ].map((skill, index) => (
                  <li key={index}>
                    <div className="logobox">
                      <img src={skill.src} alt={skill.alt} />
                    </div>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/** Tried Skills **/}
          <div className="skill_back">
            <div className="skill_header"></div>
            <div className="sk_title">
              <h2>Tried</h2>
            </div>
            <hr style={{ width: "100%", color: "#8a8a8a" }} />
            <div className="skill_box">
              <ul className="sk_detail">
                {[
                  { src: java, alt: "Java", name: "Java" },
                  {
                    src: mysql,
                    alt: "MySQL",
                    name: "MySQL",
                  },
                  { src: php, alt: "PHP", name: "PHP" },
                ].map((skill, index) => (
                  <li key={index}>
                    <div className="logobox">
                      <img src={skill.src} alt={skill.alt} />
                    </div>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/** Language Skills **/}
          <div className="skill_back">
            <div className="skill_header"></div>
            <div className="sk_title">
              <h2>Language</h2>
            </div>
            <hr style={{ width: "100%", color: "#8a8a8a" }} />
            <div className="skill_box">
              <ul className="sk_detail">
                {[
                  {
                    src: js,
                    alt: "JavaScript",
                    name: "JavaScript",
                  },
                  {
                    src: tsx,
                    alt: "TypeScript",
                    name: "TypeScript",
                  },
                  {
                    src: python,
                    alt: "Python",
                    name: "Python",
                  },
                ].map((skill, index) => (
                  <li key={index}>
                    <div className="logobox">
                      <img src={skill.src} alt={skill.alt} />
                    </div>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
