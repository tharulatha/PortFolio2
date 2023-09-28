import { Link } from "react-scroll"

const Header = () => {
    return (
        <nav className="navbar">
            <div className="profilerName">
              <span>Tharulatha</span>
            </div>
            <div className="navbar-headers">
               <Link >About</Link>
               <Link >Experience</Link>
                <Link >Projects</Link>
               <Link >Contact</Link>
            </div>
        </nav>
)
}

export default Header