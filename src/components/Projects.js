import React from "react";
import swiggy from '../asset/swiggy.png';
import todoList from '../asset/todolist.png';
import calculator from '../asset/calculator.png';

const Projects = () => {
    return (
        <section id="projects">
            <span className="projectHead">Projects</span>
            <div className="projectsContainer">
                <div className="project">
                    <img src={swiggy} alt="swiggy" className="projectImage" />
                    <span className="projectTitle" >Swiggy Clone</span>
                    <div className="links">
                        <button className="gitLink"><a href="https://github.com/tharulatha/swiggy__clone" target="blank">Git</a></button>
                    <button className="DemoLink"><a href="https://swiggy-clone-gold.vercel.app/" target="blank">Demo</a></button>
                    </div>
                </div>
                <div className="project">
                    <img src={todoList} alt="todolist" className="projectImage" />
                    <span className="projectTitle" >Todo List</span>
                    <div className="links">
                        <button className="gitLink"><a href="https://github.com/tharulatha/TodoList" target="blank">Git</a></button>
                    <button className="DemoLink"><a href="https://todo-list-inky-two.vercel.app/" target="blank">Demo</a></button>
                    </div>
                </div> <div className="project">
                    <img src={calculator} alt="calculator" className="projectImage" />
                    <span className="projectTitle" >Simple Calculator</span>
                    <div className="links">
                        <button className="gitLink"><a href="https://github.com/tharulatha/Calculator" target="blank">Git</a></button>
                    <button className="DemoLink"><a href="https://calculator-two-sooty.vercel.app/" target="blank">Demo</a></button>
                    </div>
                </div>
            </div>
            
    </section>
)
}

export default Projects