import React from 'react';
import './index.scss'

const hotDeals = () => {

    return (

        <div className='hot-deals-general-container'>
            <div className="inner-wrapper-container">
                <div className="hot-deals-inner-container">
                    <div className="image-location">
                        <div className="image-container">
                            <div className="inner-image-wrapper">
                                <img src="" alt="" />
                            </div>
                            <div className="inner-image-hot-deal-overlay"></div>
                        </div>
                        <div className="hot-deal-text-container">
                            <p className="col-one">You might also like this deal</p>
                            <h2 className='col-two'>Taj Dubai</h2>
                            <h3 className="col-three">Dubai Mall - Downtown - Rececourse</h3>
                            <div className="rating-review-star">
                                <div className="rating-box">
                                    <h2 className="col-four">8.8</h2>
                                </div>

                                <div className="review-star">
                                    <h3>5950 reviews</h3>
                                    <p>|</p>
                                    <h3>5 Stars</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="price-location">
                        <div className="price-inner-container">
                            <div className="price-vip">
                                <h3 className="col-five">Roverz</h3>
                                <div className="vip-container">
                                    <h3 className="col-six">vip</h3>
                                </div>
                            </div>
                            <div className="price-number-per-nigt">
                                <span className="price-container">
                                    <sup>
                                        <span>$</span>
                                    </sup>
                                    109
                                </span>
                                <div>
                                    <h3 className="col-seven">night</h3>
                                </div>
                            </div>
                        </div>

                        <div className="arrow-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" color="primary.base" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 gHvJpT ChevronRight__SvgChevronRight-sc-ec4b4o-0 ktEMtW"><path d="M8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6L8 16.6z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hotDeals