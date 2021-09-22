import React, {useContext} from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function NavBar () {
    const {toggleTheme, darkMode} = useContext(ThemeContext)

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" exact className="navbar-brand">Home</NavLink>
                
                {darkMode ? 
                (<button onClick={toggleTheme}>Light Mode</button>)
                :
                (<button onClick={toggleTheme}>Dark Mode</button>)
                }
        
            </div>
        </nav>
    )
}
