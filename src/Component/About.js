import { useEffect } from "react";
import myPicture from "../Image/My picture.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const text = `I am a full stack web developer with knowledge in the MERN stack. I enjoy building beautiful responsive webpage in my free time with react. I value simple content structure, clean design patterns, and thoughtful interactions to build a good UI/UX.`;

  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <span>Hi, my name is Marco Su.</span>
          <p>{text}</p>
        </div>
        <img src={myPicture} alt="" data-aos="fade-left" />
      </div>
    </section>
  );
};

export default About;
