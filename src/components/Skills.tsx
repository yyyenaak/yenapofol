import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="component" id="skills">
      <div className="mainzone">
        <div className="main_title">
          <h1>Skills</h1>
        </div>
        <div className="skillzone">
          <div className="skill_back">
            <h2>Familier</h2>
            <p>HTML, CSS, SCSS, React, Git, Figma</p>
          </div>
          <div className="skill_back">
            <h2>Tried</h2>
            <p>Java, MySQL, PHP</p>
          </div>
          <div className="skill_back">
            <h2>Languages</h2>
            <p>JavaScript, TypeScript, Python</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
