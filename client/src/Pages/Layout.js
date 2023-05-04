import { Outlet } from "react-router-dom";
import Navbar from "../Features/Navbar/Navbar";


function Layout(){
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
}

export default Layout;