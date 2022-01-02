import React from "react"
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(){
    return <>
          <nav className="sideNav">
            <h2 className="logo">Mahmood.Qaisi</h2>
            <br></br><br></br><br></br>
            <ul className="menu">
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </>
}
export default Nav;