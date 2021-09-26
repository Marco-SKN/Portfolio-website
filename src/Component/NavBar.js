import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../Image/MS.png";
import { animateScroll as scroll } from "react-scroll";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [ulTop, setUlTop] = useState("-100vh");
  function openNav() {
    setOpen((current) => !current);
    !open ? setUlTop("6rem") : setUlTop("-100vh");
  }
  return (
    <>
      <div className="navigation">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => scroll.scrollToTop()}
        />
        <div
          className="nav_button"
          onClick={() => {
            openNav();
          }}
        >
          {open ? (
            <FontAwesomeIcon icon={faTimes} id="close" />
          ) : (
            <FontAwesomeIcon icon={faBars} id="open" />
          )}
        </div>
        <nav>
          <NavLink navName="About" hideNav={() => {}} />
          <NavLink navName="Skills" hideNav={() => {}} />
          <NavLink navName="Portfolio" hideNav={() => {}} />
          <NavLink navName="Contact" hideNav={() => {}} />
        </nav>
      </div>
      <Hamburger
        ulTop={ulTop}
        hideNav={() => {
          openNav();
        }}
      />
    </>
  );
};

export default NavBar;
