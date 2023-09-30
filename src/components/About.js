import React from "react";
import profile from "../asset/profile.jpg";
import experience from '../asset/experience.png';
import user from "../asset/education.png";
const About = () => {
  return (
    <section id="about">
      <span className="aboutHead">About Me</span>
      <div className="aboutMe">
        <div className="profileContainer">
          <img src={profile} alt="profile" className="profileImage" />
        </div>
        <div className="aboutMeContainer">
          <div className="ExpEduc">
          <div className="educationContainer">
            <img src={user} alt="education" className="education" />
            <span>Education</span>
            <br />
            <span>Bca. Bachelors Degree</span>
          </div>
          <div className="educationContainer">
            <img src={experience} alt="experience" className="experience" />
            <span>Experience</span>
            <br />
            <span>Fresher</span>
          </div>
         </div>
          <p className="aboutMePara">
            I take pride in playing attention to the smallest details and making
            sure that my work is pixel perfect. I am excited to bring my skills
            and experience to help businesses achieve their goals and create a
            strong online presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
