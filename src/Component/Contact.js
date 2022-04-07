import React from "react";
import linkedin from "../Image/linkedin.png";
import github from "../Image/github.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="footer">
        <div className="email">
          <p>Say Hello.</p>
          <a href="mailto:marco-su@outlook.com">marco-su@outlook.com</a>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/marco-su-9b5125170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" title="Linkedin" />
          </a>
          <a
            href="https://github.com/Marco-SKN/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" title="github" />
          </a>
        </div>
      </div>
      <p>&copy; 2022 MARCO SU</p>
    </div>
  );
};

export default Contact;
