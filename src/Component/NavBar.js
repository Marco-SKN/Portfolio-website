import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import logo from "../Image/MS.png";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [rocketOff1, setRocketOff1] = useState("");
  const [rocketOff2, setRocketOff2] = useState("");
  const [rocketOff3, setRocketOff3] = useState("");
  const [rocketOff4, setRocketOff4] = useState("");

  return (
    <div className="navigation">
      <img
        className="logo"
        src={logo}
        alt="logo"
        onClick={() => scroll.scrollToTop()}
      />

      <nav>
        <Link
          className="nav-link"
          to="about"
          spy={true}
          smooth="easeOutQuad"
          duration={1000}
          delay={500}
          onClick={() => setRocketOff1("rocketUp")}
          onAnimationEnd={() =>
            setTimeout(() => setRocketOff1("rocketDown"), 1500)
          }
        >
          <FontAwesomeIcon className={rocketOff1} icon={faRocket} />
          About
        </Link>
        <Link
          className="nav-link"
          to="skills"
          spy={false}
          smooth="easeOutQuad"
          duration={1000}
          delay={500}
          onClick={() => setRocketOff2("rocketUp")}
          onAnimationEnd={() =>
            setTimeout(() => setRocketOff2("rocketDown"), 1500)
          }
        >
          <FontAwesomeIcon className={rocketOff2} icon={faRocket} />
          Skills
        </Link>
        <Link
          className="nav-link"
          to="portfolio"
          spy={false}
          smooth="easeOutQuad"
          duration={1000}
          delay={500}
          onClick={() => setRocketOff3("rocketUp")}
          onAnimationEnd={() =>
            setTimeout(() => setRocketOff3("rocketDown"), 1500)
          }
        >
          <FontAwesomeIcon className={rocketOff3} icon={faRocket} />
          Portfolio
        </Link>
        <Link
          className="nav-link"
          to="contact"
          spy={false}
          smooth="easeOutQuad"
          duration={1000}
          delay={500}
          onClick={() => setRocketOff4("rocketUp")}
          onAnimationEnd={() =>
            setTimeout(() => setRocketOff4("rocketDown"), 1500)
          }
        >
          <FontAwesomeIcon className={rocketOff4} icon={faRocket} />
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
