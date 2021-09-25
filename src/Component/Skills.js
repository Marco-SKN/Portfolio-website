import React from "react";
import Skill_Row from "./Skill_Row";
import { Controller } from "react-scrollmagic";

const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <Controller>
        <div className="skills-container">
          <Skill_Row name="CSS" num={6} />
          <Skill_Row name="HTML" num={7} />
          <Skill_Row name="Java" num={5} />
          <Skill_Row name="Javascript" num={6} />
          <Skill_Row name="NodeJs" num={5} />
          <Skill_Row name="ReactJs" num={5} />
        </div>
      </Controller>
    </section>
  );
};

export default Skills;
