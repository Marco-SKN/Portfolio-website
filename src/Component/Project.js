import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ image, link }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project" data-aos="zoom-in">
      <img src={image} alt="" />
      <div className="launch">
        <a href={link}>Launch</a>
        <span>HTML, CSS</span>
      </div>
    </div>
  );
};

export default Project;
