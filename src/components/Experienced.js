import React from "react";
import html from "../asset/html.png";
import css from "../asset/css.png";
import js from "../asset/javascript.png";
import react from "../asset/reactlogo.png";
const Experienced = () => {
  return (
    <section id="experience">
      <span className="experienceHead">Experience</span>
      <div className="experienceContainer">
        <div className="courseContainer">
          <span className="couseName">HTML</span>
          <img src={html} alt="html" className="couseLogo" />
        </div>
        <div className="courseContainer">
          <span className="couseName">CSS</span>
          <img src={css} alt="css" className="couseLogo" />
        </div>
        <div className="courseContainer">
          <span className="couseName">Javascript</span>
          <img src={js} alt="js" className="couseLogo" />
        </div>
        <div className="courseContainer">
          <span className="couseName">React</span>
          <img src={react} alt="react" className="couseLogo" />
        </div>
      </div>
    </section>
  );
};

export default Experienced;
