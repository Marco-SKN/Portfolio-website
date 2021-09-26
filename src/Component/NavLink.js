import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ navName, hideNav }) => {
  const [rocketOff, setRocketOff] = useState("");
  function handleClick() {
    setRocketOff("rocketUp");
    setTimeout(() => hideNav(), 1000);
  }

  return (
    <Link
      className="nav-link"
      to={navName.toLowerCase()}
      spy={true}
      smooth="easeOutQuad"
      duration={1000}
      delay={500}
      offset={-50}
      onClick={() => handleClick()}
      onAnimationEnd={() => setTimeout(() => setRocketOff("rocketDown"), 1500)}
    >
      <FontAwesomeIcon className={rocketOff} icon={faRocket} />
      {navName}
    </Link>
  );
};

export default NavLink;
