import Header from "./components/Header"
import './App.css';
import Profile from "./components/Profile";
import About from "./components/About";
import Experienced from "./components/Experienced";
const App = () => {
    return (
        <div>
            <Header /> 
            <Profile />
            <About />  
            <Experienced />
    </div>
)
}

export default App