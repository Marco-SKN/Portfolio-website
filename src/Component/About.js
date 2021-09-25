import { useEffect } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import myPicture from "../Image/Full moon.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <LoremIpsum
            p={1}
            avgWordsPerSentence={12}
            avgSentencesPerParagraph={7}
          />
        </div>
        <img src={myPicture} alt="" data-aos="fade-left" />
      </div>
    </section>
  );
};

export default About;
