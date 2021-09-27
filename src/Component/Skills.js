import React from "react";
import SkillRow from "./SkillRow";
import { Controller } from "react-scrollmagic";

const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <Controller>
        <div className="skills-container">
          <SkillRow name="CSS" num={6.5} />
          <SkillRow name="HTML" num={7} />
          <SkillRow name="Java" num={5} />
          <SkillRow name="Javascript" num={7} />
          <SkillRow name="NodeJs" num={6} />
          <SkillRow name="ReactJs" num={6} />
        </div>
      </Controller>
    </section>
  );
};

export default Skills;
