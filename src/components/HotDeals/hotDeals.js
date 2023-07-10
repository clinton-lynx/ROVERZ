import React from 'react';
import './index.scss'
import { useEffect, useState } from "react";
const imageUrl = "https://source.unsplash.com/600x600/?sig=32";

const HotDeals = () => {

    const [imageOne, setimageOne] = useState();

    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setimageOne(imageObjectURL);
    };


    useEffect(() => {
        fetchImage();
    }, []);

    return (

        <div className='hot-deals-general-container'>
            <div className="inner-wrapper-container">
                <div className="hot-deals-inner-container">
                    <div className="image-location">
                        <div className="image-container">
                            <div className="inner-image-wrapper">
                                <img src={imageOne} alt="" />
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
                                    <h3 className='col-eight'>5950 reviews</h3>
                                    <p className='slash-divide'>|</p>
                                    <h3 className='col-eight'>5 Stars</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="price-location">
                        <div className="price-inner-container">
                            <div className="price-vip">
                                <h3 className="col-five">Roverz</h3>
                                <div className="vip-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><path fill="#0068ef" d="M40 20c0 11.045-8.954 20-20 20C8.955 40 0 31.045 0 20 0 8.954 8.955 0 20 0c11.046 0 20 8.954 20 20"></path><path fill="#FFF100" d="M32.78 15.195c2.576 2.03 2.786 5.38 1.49 7.613-1.273 2.19-3.695 3.352-6.166 2.905-.534-.097-1.038-.366-1.554-.562-.095-.036-.181-.1-.318-.178v4.278c0 .331-.006.337-.343.337-.758 0-1.516-.008-2.274.004-.245.005-.318-.081-.317-.321.004-4.892.004-9.785 0-14.677 0-.224.067-.302.301-.312.844-.034 1.56.22 2.112.892.52-.455 1.072-.821 1.717-1.002 1.951-.547 3.75-.24 5.353 1.023zm-19.083-.911c.847.01 1.693.003 2.539.005.32 0 .375.087.244.386-1.492 3.393-2.986 6.782-4.475 10.176-.246.563-.694.77-1.266.767-.575-.002-1.005-.223-1.252-.788-1.48-3.387-2.973-6.769-4.462-10.152-.137-.311-.085-.389.261-.39.68 0 1.358.008 2.037-.002.512-.008.839.222 1.042.69.728 1.68 1.469 3.354 2.205 5.03.053.12.11.237.181.392.333-.752.65-1.467.965-2.183a839.898 839.898 0 001.608-3.677c.075-.172.17-.258.373-.254zm6.692 0c.239-.003.327.074.327.318-.005 3.51-.005 7.018-.001 10.527.001.23-.084.309-.31.307-.767-.01-1.534-.004-2.301-.005-.332 0-.344-.012-.344-.34V14.643c0-.351.003-.354.355-.354.758-.002 1.516.006 2.274-.005zm8.687 2.563a3.007 3.007 0 00-3.008 3.01 3.002 3.002 0 003 3.015 2.99 2.99 0 003.029-3.007 2.996 2.996 0 00-3.02-3.018z"></path><path d="M0 0h40v40H0z"></path></g></svg>
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
                                    <h3 className="col-seven">/night</h3>
                                </div>
                            </div>
                        </div>

                        <div className="arrow-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" color="primary.base" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 gHvJpT ChevronRight__SvgChevronRight-sc-ec4b4o-0 ktEMtW"><path d="M8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6L8 16.6z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="warning-container">
                <div className="warining-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" color="text.dark" class="Svg-sc-12lgb6u-0 jLvSKm Warning__SvgWarning-sc-ig7abd-0 cJOJpD"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 11h-2V7h2v6zm0 4h-2v-2h2v2z"></path></svg>
                </div>

                <div className="waring-txt">
                    <span className="warning-main-header">COVID-19</span>
                    <span className="waring-sub-text">restrictions may impact leisure travel. Check local advisories before booking.</span>
                </div>
            </div>
        </div>
    )
}

export default HotDeals