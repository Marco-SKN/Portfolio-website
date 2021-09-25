import React from "react";
import creative from "../Image/Creative Agency.jpg";
import s11 from "../Image/S11_pe.jpg";
import taskTracker from "../Image/Task tracker.jpg";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        <Project
          image={creative}
          link="https://marco-skn.github.io/Creative_Agency/"
        />
        <Project
          image={s11}
          link="https://marco-skn.github.io/S11-pe_reactJS/"
        />
        <Project
          image={taskTracker}
          link="https://marco-skn.github.io/self-task-tracker/"
        />
        <Project
          image={creative}
          link="https://marco-skn.github.io/Creative_Agency/"
        />
        <Project
          image={s11}
          link="https://marco-skn.github.io/S11-pe_reactJS/"
        />
        <Project
          image={taskTracker}
          link="https://marco-skn.github.io/self-task-tracker/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
