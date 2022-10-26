import React from "react";
import './index.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotplaceImg from '../places/images/image33.jpg'




const Places = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="parent-places-container">
            <div className="location-header-container">
                <h1 className="top-location-container">Top locations for you</h1>
                <p className="book-text">Book these experiences for a close-up look at Lagos.</p>
            </div>
            <div className="main-slider-container">
                <Slider {...settings}>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                    <div className="place-card-container">
                        <Maincards />
                    </div>
                </Slider>
            </div>
        </div>
    )
}


const Maincards = () => {
    return (
        <div className="mainCards">
            <div className="general-mainCard">
                <div className="first-mainCard">
                    <div className="Image-mainCard">
                        <img src={HotplaceImg} alt="" />

                        <div className="overlay-mainCard">
                            <div className="like-card diff-like-card">
                                <div className="like-main-card">
                                    <svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb UmNoP"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-container">
                    <h1 className="card-header-text">Lekki Conversion</h1>
                    <div className="rating-container">
                        <svg class="UctUV d H0" viewBox="0 0 128 24" width="68" height="12" aria-label=""><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z" transform="translate(104 0)"></path></svg>
                    </div>
                    <h3 className="price-card-text">from $139 per adult</h3>
                </div>
            </div>
        </div>
    )
}

export default Places