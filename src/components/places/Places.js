import React from "react";
import './index.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import HotplaceImg from '../places/images/image33.jpg'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const imageUrl = "https://source.unsplash.com/600x600/?sig=32";



const Places = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
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
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                    <Link to="/destination" className="place-card-container">
                        <Maincards />
                    </Link>
                </Slider>
            </div>
        </div>
    )
}


const Maincards = () => {
    const [img, setImg] = useState();

    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage();
    }, []);
    return (
        <div className="mainCards">
            <div className="general-mainCard">
                <div className="first-mainCard">
                    <div className="Image-mainCard">
                        <img src={img} alt="icons" />

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

                    <div className="Inner-text-container">
                    <div className="Rating-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>


                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                            </div>
                        <Link to="/destination" className="card-header-text">Lekki Conversion from <h3 className="priceFig"> $139</h3> per adult</Link>

                        <p className="location-col">3,406 kilometers from Ikoyi</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Places