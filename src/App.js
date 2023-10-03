import Header from "./components/Header"
import './App.css';
import Profile from "./components/Profile";
import About from "./components/About";
import Experienced from "./components/Experienced";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
    return (
        <div>
            <Header /> 
            <Profile />
            <About />  
            <Experienced />
            <Projects />
            <Contact />
            <Footer />
    </div>
)
}

export default App