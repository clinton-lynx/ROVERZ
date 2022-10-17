import React from "react";
import './index.scss'


const Banner = () =>{
    return(
        <div className="banner-parent-container">
            <div className="sub-banner-parent-container">
                <div className="banner-text-container">
                       <h1 className="banner-header-text">Roverz Services</h1>
                       <h1 className="what-we-do-banner-header-text">WHAT WE DO?</h1>
                       <p className="what-input-content">You dream it,  we build it. we turn innovative into differentiation by putting custom systems and skills Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, nam.</p>

                       <button>Read More</button>
                </div>

                <div className="banner-image-container">
                    <img src= './banaer.png' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner