import React from "react";
import linkedin from "../Image/linkedin.png";
import github from "../Image/github.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="email">
        <p>
          Say <span>Hello</span>.
        </p>
        <a href="mailto:marco-su@outlook.com">marco-su@outlook.com</a>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/marco-su-9b5125170/">
          <img src={linkedin} alt="linkedin" title="Linkedin" />
        </a>
        <a href="https://github.com/Marco-SKN/">
          <img src={github} alt="github" title="github" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
