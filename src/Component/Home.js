import React from "react";
import Logo from "./Logo";
import moon from "../Image/Full moon.svg";

const Home = () => {
  return (
    <div className="home" id="home">
      <Logo />
      <img className="moon" src={moon} alt=""></img>
      <h1>Lets start building something together..</h1>
    </div>
  );
};

export default Home;
