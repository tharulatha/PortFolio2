import { Link } from "react-scroll";
import menu from "../asset/menu-bar.png";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="profilerName">
        <span>Tharulatha</span>
      </div>
      <div className="navbar-headers">
        <Link
          activeClass="active"
          to="about"
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>
      <div className="mob-nav">
        <img
          src={menu}
          alt="menu"
          onClick={() => setShowMenu(!showMenu)}
          className="menubar"
        />
        <div
          className="mobile-navbar"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="about"
            offset={-120}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="experience"
            offset={-110}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="projects"
            offset={-110}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            offset={-200}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
