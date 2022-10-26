import React from "react";
import './index.scss'

const Ads = () => {
    return (


        <div className="parent-ads-container">
            <div className="ads-title">
                <h1 className="Ads-header">Brooi</h1>
            </div>
            <div className="sub-parent-ads-container">
                <div className="ads-overlay">
                    <div className="inner-text">
                        <h1 className="main-text">Find your next place to Live.</h1>
                        <h3 className="mini-text">Making real estate accessible, reliable and efficient.</h3>

                        <button id="main-btn">see more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads