import React from "react";
import Mainheader from "../mainheader/Mainheader";
import Items from "../items/Items"
import './index.scss'
import FirstImg from '../destination/images/images.jpeg'
import Ads from '../ads/Ads'
import Footer from '../Footer/Footer'
import Coffee from '../Coffee/Coffee'
const Destination = () => {
    return (
        <>
            <Mainheader />
            <Items />
            <div className="photo-card-container">
                <div className="title-container">
                    <div className="image-rating-container">
                        <h1 className="title-text">Beachfront apartment. Best view in Lagos!</h1>
                        <div className="rating">
                            <span className="rating-logo-text">
                               
                                <svg class="UctUV d H0" viewBox="0 0 128 24" width="68" height="12" aria-label=""><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z" transform="translate(104 0)"></path></svg>
                                <h3 className="rating-number">4.95</h3>
                            </span>
                            <span>.</span>

                            <span className="rating-logo-text-container">
                                <h4>Location</h4>
                                <span>.</span>
                                <h3 className="Address">Saint-Laurent-des-Hommes.Aquitaine.France</h3>
                            </span>


                        </div>
                    </div>

                    <div className="photo-wrapper-container">
                        <div className="image-first-side">
                            <div className="container-one">
                                <div className="inner-container-one">
                                    <img src={FirstImg} alt="" />
                                </div>
                            </div>
                            <div className="container-one">
                                <div className="inner-container-one">
                                    <img src={FirstImg} alt="" />
                                </div>
                            </div>
                            <div className="container-one">
                                <div className="inner-container-one">
                                    <img src={FirstImg} alt="" />
                                    <div className="container-one-overlay">
                                        <button className="container-one-button">
                                            <span className="camera-container"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16"> <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/> <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/> </svg></span>
                                            <span className="see-all-photos">See all photos</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="container-one">
                                <div className="inner-container-one">
                                    <img src={FirstImg} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="image-second-side">
                            <div className="image-second-side-overlay">
                                <img src={FirstImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Ads />
            <Footer />
            <Coffee />
        </>
    )
}

export default Destination