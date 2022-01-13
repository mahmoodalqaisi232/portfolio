import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../fonts/Slaztone.otf'



class Nav extends React.Component {
  
  showMenu(){
       var  myMenu = document.getElementById("hamburger-menu");
      myMenu.classList.toggle('change')
  }
  render() {
    return (
      <>
          <div id="hamburger-menu" className="show" onClick={this.showMenu}>
          <div className="hamburger-top"></div>
          <div className="hamburger-middle"></div>
          <div className="hamburger-bottom"></div>
          
          <nav className="sideNav">
          <h2 className="logo">Moe.Qaisi</h2>
          <ul className="menu">
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        </div>


      </>
    );
  }
}
export default Nav;