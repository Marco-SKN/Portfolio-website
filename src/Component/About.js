import { useEffect } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import myPicture from "../Image/Full moon.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const text = `I am a full stack web developer with knowledge in the MERN stack. I have just started my journey in web development after graduation last year and enjoy building beautiful responsive webpage in my free time to experiment with different new designs. I value simple content structure, clean design patterns, and thoughtful interactions to build a good UI/UX.`;

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
