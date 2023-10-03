import React from "react";
import './index.scss'


const Banner = () => {
  

    return (
        <div className="banner-parent-container">
            <div className="sub-banner-parent-container">

                <div className="banner-overlay">
                    <div className="banner-text-container">
                        {/* <h1 className="banner-header-text animate-charcter">Roverz Services</h1> */}
                        <svg height="100" stroke="#fff" stroke-width="2" class="text-line" ><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">Roverz Services</text></svg>

                        {/* <svg height="100" stroke="#fff" stroke-width="2" class="text-line  diff-text-line" ><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">Don't know there but you can get there</text></svg> */}
                        <h3 className="more-info-header-text">Find your desired place easier and faster</h3>
                      

                        {/* <button>Read More</button> */}
                    </div>


                    {/* <div className="banner-image-container">
                        <img src='./banaer.png' alt="" />
                    </div> */}
                </div>



            </div>
        </div>
    )
}

export default Banner