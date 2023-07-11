import './Navbar.css';
import { NavbarData } from "./NavbarData";


function Navbar(){
    return(
        <nav className="NavbarItems">
            <h1 id="navbar-h1">
                WELCOME
            </h1>
            <ul className="nav-menu">
                {NavbarData.map((item, index) => {
                    return(
                <li id="nav-menu-item" key={index}>
                    <a href={item.url} className={item.cName}>
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