import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";

const Root = () => {
    return (
        <div className="poppins">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;