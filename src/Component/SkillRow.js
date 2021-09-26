import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const SkillRow = ({ name, num }) => {
  const [width, setWidth] = useState("0%");
  const myStyle = {
    width: width,
  };
  const percent = num * 10;
  function triggerE() {
    setWidth(percent + "%");
    console.log(width);
  }

  function removeTrigger() {
    setWidth("0%");
    console.log(width);
  }

  return (
    <>
      <ScrollTrigger onEnter={() => triggerE()} onExit={() => removeTrigger()}>
        <div className="skillRow">
          <h4>{name}</h4>
          <div className="skillBar">
            <div className="skillFill" style={myStyle}>
              <b>{num}</b>
            </div>
          </div>
          10
        </div>
      </ScrollTrigger>
    </>
  );
};

export default SkillRow;
