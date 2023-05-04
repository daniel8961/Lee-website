import './Navbar.css';
import {Component} from "react";
import { NavbarData } from "./NavbarData";

function Navbar(){
    return(
        <nav className="NavbarItems">
            <h1>
                Daniel's <i className=" fab fa-table"></i>
            </h1>
            <ul className="nav-menu">
                {NavbarData.map((item, index) => {
                    return(
                <li key={index}>
                    <a href={item.url} className={item.cName}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className={item.icon}></i>
                        {item.title}
                    </a>
                    </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;