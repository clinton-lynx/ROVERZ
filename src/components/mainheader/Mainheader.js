import React from "react";
import Logo from "../logo/Logo"
import Searchbar from "../searchbar/Searchbar";
import './index.scss'

const Mainheader = () => {
    return(
        <div className="parent-header-container">
            <div className="sub-parent-container">
                 <Logo />
                 <Searchbar />
                 <Logo />
            </div>

           
        </div>
    )
}

export default Mainheader