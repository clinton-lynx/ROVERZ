import React from "react";
import Mainheader from "../mainheader/Mainheader";
import Items from "../items/Items"
import './index.scss'
// import Photo from '../destination/images/banaer.png'
import FirstImg from '../destination/images/images.jpeg'
// import SecondImg from '../destination/images/download11.jpg'
// import ThirdImg from '../destination/images/download.png'
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
                                <h3 className="rating-number">4.95</h3>
                                <svg class="UctUV d H0" viewBox="0 0 128 24" width="68" height="12" aria-label=""><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z" transform="translate(104 0)"></path></svg>
                            </span>
                            <span>.</span>

                            <span className="rating-logo-text-container">
                                <h4>Location</h4>
                                <span>.</span>
                                <h3>Saint-Laurent-des-Hommes.Aquitaine.France</h3>
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
        </>
    )
}

export default Destination