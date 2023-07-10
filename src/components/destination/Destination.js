import React from "react";
import Mainheader from "../mainheader/Mainheader";
import Items from "../items/Items"
import './index.scss'
import Ads from '../ads/Ads'
import Footer from '../Footer/Footer'
import Coffee from '../Coffee/Coffee'
import Places from "../places/Places";
import { useEffect, useState } from "react";
import HotDeals from "../HotDeals/hotDeals";
// import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
// import mapImage from '../destination/images/staticmap.jpg'




const imageUrl = "https://source.unsplash.com/600x600/?sig=32";
const Destination = () => {
    const [img, setImg] = useState();

    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    // const {} = useLoadScript({
    //     googleMapsApiKey: ''
    // })

    useEffect(() => {
        fetchImage();
    }, []);




    return (
        <>
            <Mainheader />
            <Items />
            <div className="photo-card-container">
                <div className="title-container">
                    <div className="image-rating-container">
                        <div className="title-rating-main-container">
                            <h1 className="title-text">Beachfront apartment. Best view in Lagos!</h1>
                            <div className="rating">
                                <span className="rating-logo-text">
                                    <h3 className="rating-number">4.95</h3>
                                    <div className="Rating-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                                    </div>



                                    <span className="rating-logo-text-container">
                                        <h4>Location</h4>
                                        <span>.</span>
                                        <h3 className="Address">Saint-Laurent-des-Hommes.Aquitaine.France</h3>
                                    </span>
                                </span>


                            </div>


                            <div className="share-like-container">
                                <div className="share-like-inner-container">
                                    <button>
                                        <svg name="shareIos" class="HotelIcon-sc-7gzcmw-0 SaveShareButtonGroup__ShareIcon-sc-vo9yt2-3 juOajA fGYjyb" viewBox="0 0 24 24" width="18" height="18" fill="currentcolor" data-unit-id="renderIcon"><path d="M 12 2 C 11.79525 2 11.590094 2.078375 11.433594 2.234375 L 9.0332031 4.6347656 C 8.8042031 4.8637656 8.7383281 5.2058594 8.8613281 5.5058594 C 8.9853281 5.8048594 9.2766094 6 9.5996094 6 L 11 6 L 11 17 A 1.0001 1.0001 0 1 0 13 17 L 13 6 L 14.400391 6 C 14.723391 6 15.014672 5.8048594 15.138672 5.5058594 C 15.179672 5.4068594 15.199219 5.3022188 15.199219 5.1992188 C 15.199219 4.9912187 15.119797 4.7887656 14.966797 4.6347656 L 12.566406 2.234375 C 12.409906 2.078375 12.20475 2 12 2 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 9 C 20 7.9069372 19.093063 7 18 7 L 17 7 A 1.0001 1.0001 0 1 0 17 9 L 18 9 L 18 20 L 6 20 L 6 9 L 7 9 A 1.0001 1.0001 0 1 0 7 7 L 6 7 z"></path></svg>

                                        Share
                                    </button>


                                    <button className="Diff-button">
                                        <svg viewBox="0 0 24 24" width="18px" height="18px" class="d Vb UmNoP" className="like-svg-icon"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path></svg>
                                        save & track prices
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="price-contact-container">
                            <div className="price-container">
                                <div className="dollar-symbol-container">
                                    <span className="dollar-sign">$</span>
                                    <span className="price-number">1,456</span>
                                </div>
                                <h2>Price per night</h2>
                            </div>

                            <div className="contact-number">
                                <div className="phone-icon-number-container">
                                    <div className="icon-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" color="primary.base" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 gHvJpT Phone__SvgPhone-sc-q5t8us-0 brELPL"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.5 0 1 .4 1 1V20c0 .5-.5 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"></path></svg>
                                    </div>
                                    <div className="number-container">
                                        <p className="number-text">Call for great rates</p>
                                        <p className="contact-num"> 1 (833) 657-0400</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                   

                    <div className="photo-wrapper-container">
                        <div className="image-first-side">
                            <div className="container-one">
                                <div className="inner-container-one">
                                    <img src={img} alt="icons" />
                                </div>
                            </div>
                            <div className="container-one">
                                <div className="inner-container-one">
                                    <img src={img} alt="icons" />
                                </div>
                            </div>
                            <div className="container-one">
                                <div className="inner-container-one">
                                    <img src={img} alt="icons" />
                                    <div className="container-one-overlay">
                                        <button className="container-one-button">
                                            <span className="camera-container"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16"> <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" /> <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /> </svg></span>
                                            <span className="see-all-photos">See all photos</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="container-one">
                                <div className="inner-container-one">
                                    <img src={img} alt="icons" />

                                </div>
                            </div>
                        </div>

                        <div className="image-second-side">
                            <div className="image-second-side-overlay">
                                <img src={img} alt="icons" />
                                <div className="container-one-overlay diff-cont-overlay">
                                    <button className="container-one-button diff-one-button">
                                        5/7
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Top-reason-general-container">
                        <div className="Top-reason-book">
                            <h2 className="top-reason-header">Top Reasons to Book</h2>

                            <div className="icon-reason-container">
                                <div className="icon-cont">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" color="secondary" class="Svg-sc-12lgb6u-0 hOuIer FreeCancellation__SvgFreeCancellation-sc-1t7ju56-0 ApXvv"><path d="M23 12h-3c0 4.4-3.6 8-8 8-1.6 0-3-.5-4.3-1.2l1.5-1.5c.8.5 1.8.7 2.8.7 3.3 0 6-2.7 6-6h-3l4-4 4 4zM6 12c0-3.3 2.7-6 6-6 1 0 2 .2 2.8.7l1.5-1.5C15 4.5 13.6 4 12 4c-4.4 0-8 3.6-8 8H1l4 4 4-4H6z"></path></svg>
                                </div>
                                <div className="reason-contain">
                                    <h3 className="reason-title">FULLY REFUNDABLE RATES</h3>
                                    <p className="reason-sub-title">Choose a room with a Refundable Rate for maximum flexibility </p>
                                </div>
                            </div>

                            <div className="icon-reason-container">
                                <div className="icon-cont">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" color="alert" class="Svg-sc-12lgb6u-0 zDJak Ribbon__SvgRibbon-sc-qn6qiu-0 fxqxlx"><path d="M11 17.5c.1 0 .1 0 .2-.1L9 22l-1.5-2-2.5.2 2.1-4.4h.1c.2.2.4.4.6.7.4.5.8 1 1.4 1.2.2.1.4.1.5.1.5 0 .9-.1 1.3-.3zm5.8-1.7c-.2.2-.4.4-.6.7-.4.5-.8 1-1.4 1.2-.6.2-1.2 0-1.8-.2-.1 0-.1 0-.2-.1L15 22l1.5-2 2.5.2-2.2-4.4zM20 9.4c0 .3-.3.7-.6 1.1-.2.3-.5.7-.6 1-.1.4-.1.8-.1 1.2 0 .5 0 .9-.2 1.2s-.6.4-1.1.6c-.4.1-.8.3-1.2.5-.3.2-.6.6-.8.9-.3.4-.6.7-.9.8-.3.1-.7 0-1.2-.2-.4-.1-.8-.2-1.3-.2-.4 0-.9.1-1.3.2-.5.1-.9.3-1.2.2-.3-.1-.6-.5-.9-.8-.3-.3-.5-.7-.8-.9s-.8-.4-1.2-.5c-.5-.2-.9-.3-1.1-.6s-.2-.7-.2-1.2c0-.4 0-.8-.1-1.2s-.4-.7-.6-1c-.3-.4-.6-.7-.6-1.1s.3-.7.6-1.1c.2-.3.4-.6.6-1 .1-.4.1-.9.1-1.3 0-.5 0-.9.2-1.2.2-.3.6-.4 1.1-.6.4 0 .8-.2 1.2-.4.3-.2.6-.6.8-.9.3-.4.6-.8.9-.9h.2c.3 0 .6.1.9.2.4.1.8.2 1.3.2.4 0 .9-.1 1.3-.2.5-.1.9-.3 1.2-.2s.6.5.9.8c.3.3.5.7.8.9.5.3.9.5 1.3.6.5.2.9.3 1.1.6.2.3.2.7.2 1.2 0 .4 0 .8.1 1.2.1.4.4.7.6 1 .3.4.6.8.6 1.1zm-3.5-1.8l-.9-.9-4.9 4.9-2.3-2.3-.9.9 3.2 3.2 5.8-5.8z"></path></svg>
                                </div>
                                <div className="reason-contain">
                                    <h3 className="reason-title">GUESTS LOVE IT</h3>
                                    <p className="reason-sub-title">Guests give this property an excellent rating of 8.7/10 </p>
                                </div>
                            </div>

                            <div className="icon-reason-container">
                                <div className="icon-cont">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" color="alert" class="Svg-sc-12lgb6u-0 zDJak Trophy__SvgTrophy-sc-qs1eyc-0 kgiFhp"><path d="M19.4 3h-2c-.8 0-1.8.9-1.8 1.8H8.4c0-.9-1-1.8-1.8-1.8H3v8.1c0 .9.9 1.8 1.8 1.8h2c.4 1.8 1.5 3.3 4.3 3.6v1.9c-2 .2-2.7 1.2-2.7 2.3v.3h7.2v-.3c0-1.2-.7-2.2-2.7-2.3v-1.9c2.8-.3 4-1.8 4.3-3.6h2c.9 0 1.8-.9 1.8-1.8V3h-1.6zM4.8 11.1V4.8h1.8v6.3H4.8zm14.4 0h-1.8V4.8h1.8v6.3z"></path></svg>
                                </div>
                                <div className="reason-contain">
                                    <h3 className="reason-title">TOP RATED LOCATION</h3>
                                    <p className="reason-sub-title">Guests rate the location 9.1/10</p>
                                </div>
                            </div>
                        </div>
                        <div className="guest-rating">
                            <div className="rating-header">
                                <div className="rating-single-number">
                                    <h2>8.7</h2>
                                </div>
                                <div className="guest-rating-text">
                                    <h2>Guest Rating</h2>
                                </div>
                            </div>

                            <div className="general-rating-for-guest">
                                <div className="single-rating">
                                    <div className="single-rating-inner-container">
                                        <h2 className="rating-title">CLEANINESS</h2>
                                        <div className="trophy-rating">
                                            <div className="trophy-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 bUvHvR Trophy__SvgTrophy-sc-qs1eyc-0 kgiFhp"><path d="M19.4 3h-2c-.8 0-1.8.9-1.8 1.8H8.4c0-.9-1-1.8-1.8-1.8H3v8.1c0 .9.9 1.8 1.8 1.8h2c.4 1.8 1.5 3.3 4.3 3.6v1.9c-2 .2-2.7 1.2-2.7 2.3v.3h7.2v-.3c0-1.2-.7-2.2-2.7-2.3v-1.9c2.8-.3 4-1.8 4.3-3.6h2c.9 0 1.8-.9 1.8-1.8V3h-1.6zM4.8 11.1V4.8h1.8v6.3H4.8zm14.4 0h-1.8V4.8h1.8v6.3z"></path></svg>
                                            </div>

                                            <div className="ratin-single-container">
                                                <h2>8.9</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating-bar-container">
                                        <div className="rating-level-container"></div>
                                    </div>
                                </div>

                                <div className="single-rating">
                                    <div className="single-rating-inner-container">
                                        <h2 className="rating-title">STAFF</h2>
                                        <div className="trophy-rating">
                                            <div className="trophy-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 bUvHvR Trophy__SvgTrophy-sc-qs1eyc-0 kgiFhp"><path d="M19.4 3h-2c-.8 0-1.8.9-1.8 1.8H8.4c0-.9-1-1.8-1.8-1.8H3v8.1c0 .9.9 1.8 1.8 1.8h2c.4 1.8 1.5 3.3 4.3 3.6v1.9c-2 .2-2.7 1.2-2.7 2.3v.3h7.2v-.3c0-1.2-.7-2.2-2.7-2.3v-1.9c2.8-.3 4-1.8 4.3-3.6h2c.9 0 1.8-.9 1.8-1.8V3h-1.6zM4.8 11.1V4.8h1.8v6.3H4.8zm14.4 0h-1.8V4.8h1.8v6.3z"></path></svg>
                                            </div>

                                            <div className="ratin-single-container">
                                                <h2>8.9</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating-bar-container">
                                        <div className="rating-level-container"></div>
                                    </div>
                                </div>

                                <div className="single-rating">
                                    <div className="single-rating-inner-container">
                                        <h2 className="rating-title">LOCATION</h2>
                                        <div className="trophy-rating">
                                            <div className="trophy-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 bUvHvR Trophy__SvgTrophy-sc-qs1eyc-0 kgiFhp"><path d="M19.4 3h-2c-.8 0-1.8.9-1.8 1.8H8.4c0-.9-1-1.8-1.8-1.8H3v8.1c0 .9.9 1.8 1.8 1.8h2c.4 1.8 1.5 3.3 4.3 3.6v1.9c-2 .2-2.7 1.2-2.7 2.3v.3h7.2v-.3c0-1.2-.7-2.2-2.7-2.3v-1.9c2.8-.3 4-1.8 4.3-3.6h2c.9 0 1.8-.9 1.8-1.8V3h-1.6zM4.8 11.1V4.8h1.8v6.3H4.8zm14.4 0h-1.8V4.8h1.8v6.3z"></path></svg>
                                            </div>

                                            <div className="ratin-single-container">
                                                <h2>8.9</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating-bar-container">
                                        <div className="rating-level-container"></div>
                                    </div>
                                </div>


                                <button className ="reviews-from-guests">
                                    <h2>Verified Previews from 2170 guests</h2>
                                </button>
                            </div>
                        </div>
                        <div className="top-amenities">
                            <h2 className="top-amenities-header">Top Amenities</h2>

                            <div className="general-amenities-container">
                                <div className="amenities">
                                    <div className="amenities-icon-container">
                                        <div className="main-icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 ligbEt Pool__SvgPool-sc-x7doro-0 feyfZs"><path d="M22 21c-1.1 0-1.7-.4-2.2-.6-.4-.2-.6-.4-1.1-.4-.6 0-.8.1-1.1.4-.5.3-1.1.6-2.2.6s-1.7-.4-2.2-.6c-.4-.3-.6-.4-1.2-.4s-.8.1-1.2.4c-.4.2-1 .6-2.1.6s-1.7-.4-2.2-.6c-.4-.3-.6-.4-1.2-.4s-.8.1-1.1.4c-.5.2-1.1.6-2.2.6v-2c.6 0 .8-.1 1.1-.4.5-.2 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.3.6.4 1.2.4s.8-.1 1.2-.4c.4-.2 1-.6 2.1-.6s1.7.4 2.2.6c.4.2.6.4 1.2.4s.8-.1 1.1-.4c.4-.3 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.2.6.4 1.1.4v2zm0-4.5c-1.1 0-1.7-.4-2.2-.6-.4-.2-.6-.4-1.1-.4-.6 0-.8.1-1.1.4-.5.3-1.1.6-2.2.6s-1.7-.4-2.2-.6c-.4-.2-.6-.4-1.1-.4-.6 0-.8.1-1.2.4-.4.3-1.1.6-2.2.6s-1.7-.4-2.2-.6c-.4-.2-.6-.4-1.2-.4s-.8.1-1.1.4c-.5.3-1.1.6-2.2.6v-2c.6 0 .8-.1 1.1-.4.5-.3 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.2.6.4 1.1.4.6 0 .8-.1 1.2-.4.5-.3 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.2.6.4 1.1.4.6 0 .8-.1 1.2-.4.4-.3 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.2.6.4 1.1.4v2zM8.7 12c-.6 0-.8-.1-1.2-.4-.2-.1-.4-.2-.7-.4L10 8 9 7C7.9 5.9 6.8 5.5 5 5.5V3c2.5 0 3.9.4 5.5 2l6.4 6.4c-.1.1-.3.2-.4.2-.4.3-.6.4-1.2.4s-.8-.1-1.2-.4c-.4-.2-1-.6-2.1-.6s-1.7.4-2.2.6c-.4.3-.6.4-1.1.4zm7.8-4C15.1 8 14 6.9 14 5.5S15.1 3 16.5 3 19 4.1 19 5.5 17.9 8 16.5 8z"></path></svg>
                                        </div>

                                        <h2>Swimming Pool</h2>
                                    </div>

                                    <div className="amenities-icon-container">
                                        <div className="main-icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 ligbEt Wifi__SvgWifi-sc-12pfcwg-0 cRKlDn"><path d="M2 9.1l1.8 1.8c4.5-4.5 11.8-4.5 16.4 0L22 9.1c-5.5-5.5-14.5-5.5-20 0zm7.3 7.2L12 19l2.7-2.7c-1.4-1.5-3.9-1.5-5.4 0zm-3.7-3.6l1.8 1.8c2.5-2.5 6.5-2.5 9.1 0l1.8-1.8c-3.5-3.5-9.1-3.5-12.7 0z"></path></svg>
                                        </div>

                                        <h2>Free Internet Access</h2>
                                    </div>


                                    <div className="amenities-icon-container">
                                        <div className="main-icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 ligbEt Parking__SvgParking-sc-i9x80m-0 cciCA"><path d="M12.5 3h-7v18h4v-6h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zm.2 8H9.5V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"></path></svg>
                                        </div>

                                        <h2>Free Parking</h2>
                                    </div>


                                    <div className="amenities-icon-container">
                                        <div className="main-icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 ligbEt Spa__SvgSpa-sc-161ri0c-0 gXcTYb"><path d="M15.5 9.6c-.2-2.8-1.3-5.5-3.4-7.6-2.2 2.1-3.4 4.9-3.6 7.6 1.3.7 2.5 1.6 3.5 2.7 1-1.1 2.2-2 3.5-2.7zM9 12.3c-.1-.1-.3-.2-.4-.3.1.1.2.2.4.3zm6.4-.3c-.1.1-.3.2-.4.3.1-.1.3-.2.4-.3zM12 15.4C9.8 12.2 6.2 10 2 10c0 5.3 3.4 9.8 8 11.5.6.2 1.3.4 2 .5.7-.1 1.3-.3 2-.5 4.7-1.7 8-6.2 8-11.5-4.2 0-7.9 2.2-10 5.4zM8.6 12c-1.1-.7-2.3-1.3-3.6-1.6 1.3.3 2.5.9 3.6 1.6zM19 10.4c-1.3.3-2.5.9-3.6 1.6 1.1-.7 2.3-1.3 3.6-1.6z"></path></svg>
                                        </div>

                                        <h2>Spa</h2>
                                    </div>

                                    <div className="amenities-icon-container">
                                        <div className="main-icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 ligbEt Fitness__SvgFitness-sc-13wvrmu-0 hvAXZc"><path d="M20.6 14.9l1.4-1.4-1.4-1.5-3.6 3.6L8.4 7 12 3.4 10.6 2 9.1 3.4 7.7 2 5.6 4.1 4.1 2.7 2.7 4.1l1.4 1.4L2 7.7l1.4 1.4L2 10.6 3.4 12 7 8.4l8.6 8.6-3.6 3.6 1.4 1.4 1.4-1.4 1.4 1.4 2.1-2.1 1.4 1.4 1.4-1.4-1.4-1.4 2.1-2.1-1.2-1.5z"></path></svg>
                                        </div>

                                        <h2>Fitness Center</h2>
                                    </div>


                                    <div className="amenities-icon-container">
                                        <div className="main-icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 ligbEt Smoking__SvgSmoking-sc-1ehn0rk-0 hAfVUu"><path d="M2 5.5l7 7H2v3h10l7 7 1.3-1.2-17-17L2 5.5zm18.5 7H22v3h-1.5v-3zm-2.5 0h1.5v3H18v-3zm.9-8.1c.6-.6 1-1.5 1-2.4h-1.5c0 1-.8 1.8-1.9 1.8v1.5c2.2 0 4 1.8 4 4.1v2.1H22V9.4c0-2.2-1.3-4.1-3.1-5zm-4.4 3.8H16c1.1 0 2 .7 2 2.1v1.2h1.5V9.9c0-1.8-1.6-3.2-3.5-3.2h-1.5c-1 0-1.9-1-1.9-2s.8-1.8 1.9-1.8V1.5c-1.9 0-3.4 1.5-3.4 3.3s1.5 3.4 3.4 3.4zm2.5 7.2v-2.9h-2.9l2.9 2.9z"></path></svg>
                                        </div>

                                        <h2>No Smoking Rooms/Facilities</h2>
                                    </div>


                                </div>

                                <button className="show-amenities">
                                    Show All Amenities
                                </button>
                            </div>
                        </div>
                    </div>

                    <HotDeals />
                </div>
            </div>


            <div className="map-properties">
                <div className="sub-map-properties">
                    <div className="properties">
                        <div className="properties-subsection">
                            <div className="section-one">
                                <h2 className="property-header">Lighthouse Resturrant hosted by Marina</h2>
                                <ul className="property-properties">
                                    <li><span>More than 100 guests</span></li>
                                    <li><span>.</span></li>
                                    <li><span>African food</span></li>
                                    <li><span>.</span></li>
                                    <li><span>Mexican fries</span></li>
                                    <li><span>.</span></li>
                                    <li><span>Chinese food</span></li>
                                </ul>
                            </div>
                            <div className="section-two">
                                <img src={img} alt="icons" />
                            </div>
                        </div>

                        <div className="rating-and-experience-container">
                            <div className="sub-section-rating-experience-container">
                                <div className="experience-host">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="Xsld"><path d="M14.998 1.032a2 2 0 0 0-.815.89l-3.606 7.766L1.951 10.8a2 2 0 0 0-1.728 2.24l.031.175A2 2 0 0 0 .87 14.27l6.36 5.726-1.716 8.608a2 2 0 0 0 1.57 2.352l.18.028a2 2 0 0 0 1.215-.259l7.519-4.358 7.52 4.358a2 2 0 0 0 2.734-.727l.084-.162a2 2 0 0 0 .147-1.232l-1.717-8.608 6.361-5.726a2 2 0 0 0 .148-2.825l-.125-.127a2 2 0 0 0-1.105-.518l-8.627-1.113-3.606-7.765a2 2 0 0 0-2.656-.971zm-3.07 10.499l4.07-8.766 4.07 8.766 9.72 1.252-7.206 6.489 1.938 9.723-8.523-4.94-8.522 4.94 1.939-9.723-7.207-6.489z"></path></svg>

                                    <div className="experience-text">
                                        <h2 className="exp-header">Experience host</h2>
                                        <p>Marina has 108 reviews for other places.</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="rating-and-experience-container">
                            <div className="sub-section-rating-experience-container">
                                <div className="experience-host">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="Xsld"><path d="m26.6667.33325c2.7614237 0 5 2.23857625 5 5 0 1.31252243-.5057306 2.50692514-1.3329579 3.39897419l-.0003421 12.60097581-.0046196.2168878c-.110409 2.5868723-2.1864153 4.6647895-4.7725007 4.7782333l-.2228797.0048789-5.37965-.0007-3.95365 4.5193-3.95535-4.5193-5.378.0007-.21689009-.0046196c-2.58889537-.1104942-4.66799759-2.1896227-4.77849041-4.7784926l-.0046195-.2168878v-14.6667h2v14.6667l.00509267.1762674c.08786657 1.5164377 1.30214832 2.7307694 2.81863397 2.8186397l.17627336.0050929h6.28715l3.04585 3.4813 3.04665-3.4813h6.287c1.597725 0 2.903664-1.2489704 2.9949075-2.8237326l.0050925-.1762674-.0001078-11.2844332c-.5212771.1842357-1.0822276.2844832-1.6665922.2844832-2.7614237 0-5-2.23857625-5-5 0-.58436456.1002475-1.14531506.2844832-1.66659223l-15.2844332-.00015777-.17627336.00509271c-1.51648565.0878672-2.7307674 1.30215727-2.81863397 2.81863493l-.00509267.17502236-2 .00025.00461952-.21588934c.11040804-2.58688927 2.18639693-4.66478903 4.77249926-4.77823185l.22288122-.00487881 16.6009758-.0002921c.8920491-.82722728 2.0864518-1.3329579 3.3989742-1.3329579zm-1.1919682 2.24613101-.1437145.0668777-.062205.03189443-.162945.09259813-.1458283.0949218-.1106469.0804555-.1289779.10407113-.155155.14203386-.1448697.1524757-.1136922.13620282-.045604.05953215c-.3733536.50015804-.5943933 1.1206686-.5943933 1.79280577 0 1.65685425 1.3431458 3 3 3 .6245598 0 1.2045431-.19085456 1.6848096-.51742339l.1728464-.12676345.1564144-.13238455.1843168-.1820638.1005471-.11384792.1530375-.19855208.0480886-.0701581.0627236-.0984415.0650185-.1119245.0607666-.11593066.1075518-.24322537c.0352657-.09045929.0662674-.18304718.0927593-.27751925l.0437598-.17664562.032631-.17718882c.014177-.09256085.0241236-.18651477.0296363-.2816582l.0050927-.17627279c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731l-.1762728-.00509269-.1782955.00521057-.1957301.01787825-.0769938.01058982-.1930831.03563199-.1709809.04274164-.0945661.0283372-.0929723.03124429-.0955519.03572841z"></path></svg>

                                    <div className="experience-text">
                                        <h2 className="exp-header">Great communication</h2>
                                        <p>90% of recent guests rated Marina 5-star in communication.</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="rating-and-experience-container">
                            <div className="sub-section-rating-experience-container">
                                <div className="experience-host">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="Xsld"><path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path></svg>
                                    <div className="experience-text">
                                        <h2 className="exp-header">Free cancellation for 48 hours.</h2>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="map-container">
                        <div className="inner-map-image">
                           
                        </div>
                        <div className="main-map-overlay">

                        </div>
                    </div>
                </div>
            </div>
            <Places />
            <Ads />
            <Footer />
            <Coffee />
        </>
    )
}

export default Destination