import React from "react";
import creative from "../Image/Creative Agency.jpg";
import s11 from "../Image/S11_pe.jpg";
import breakingBad from "../Image/Breaking bad.jpg";
import taskTracker from "../Image/Task tracker.jpg";
import ballonDor from "../Image/Ballon dOr.jpg";
import dadJoke from "../Image/Dad joke.jpg";
import randomizer from "../Image/Randomizer.JPG";
import xbox_ps from "../Image/xbox ps.jpg";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        <Project
          image={creative}
          link="https://marco-skn.github.io/Creative_Agency/"
          language="HTML, CSS, Javascript"
        />
        <Project
          image={s11}
          link="https://marco-skn.github.io/S11-pe_reactJS/"
          language="ReactJs"
        />
        <Project
          image={breakingBad}
          link="https://marco-skn.github.io/Breaking-Bad/"
          language="ReactJs"
        />
        <Project
          image={ballonDor}
          link="https://marco-skn.github.io/Ballon-dOr/"
          language="HTML, CSS, Javascript"
        />
        <Project
          image={taskTracker}
          link="https://marco-skn.github.io/self-task-tracker/"
          language="ReactJs"
        />
        <Project
          image={dadJoke}
          link="https://marco-skn.github.io/Dad-jokes/"
          language="HTML, CSS, Javascript"
        />
        <Project
          image={randomizer}
          link="https://marco-skn.github.io/Randomizer/"
          language="HTML, CSS, Javascript"
        />
        <Project
          image={xbox_ps}
          link="https://marco-skn.github.io/xbox-ps/"
          language="HTML, CSS, Javascript"
        />
      </div>
      <h3>
        View more projects on my{" "}
        <a href="https://github.com/Marco-SKN">github</a>
      </h3>
    </section>
  );
};

export default Portfolio;
