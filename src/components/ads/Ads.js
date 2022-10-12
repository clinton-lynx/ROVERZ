import React from "react";
import './index.scss'

const Ads = () => {
    return (


        <div className="parent-ads-container">
            <div className="ads-title">
                <h1>Brooi</h1>
            </div>
            <div className="sub-parent-ads-container">
                <div className="ads-overlay">
                    <div className="inner-text">
                        <h1 className="main-text">Celebrate Latinx Heritage Month</h1>
                        <h3 className="mini-text">Travel ideas, tips, and stories from our community</h3>

                        <button id="main-btn">see more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads