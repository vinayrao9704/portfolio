import React from 'react'
import {  Link, Navlink  } from 'react-router';

import '../styles/navbar.css'
const Navbar = () => {
    return (
        <div className="navbar__container">

           <ul className="navbar__list">
               <li className="list__item"><a href="#profile">Profile</a></li>
               <li className="list__item"> <a href="#exp">Experiences</a></li>
               <li className="list__item"> <a href="#abilities">Abilities</a></li>
               <li className="list__item"><a href="#projects">Projects</a></li>
               <li className="list__item"><a href="#contact">Contact</a></li>
           </ul>


        

        </div>
    )
}

export default Navbar
