import React from "react";
import './index.scss';
import { useEffect, useState } from "react";


const imageUrl = "https://source.unsplash.com/600x600/?sig=32";

const ImageModal = ({ setIsOpen }) => {

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
        <div className="modal-parent-container">
            <div className="modal-task-bar">
                <span class="caret-left" onClick={() => setIsOpen(false)}><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" class="caret-left-svg"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></svg></span>


                <div className="diff-icon-container">
                    <button className="icon-btn-1">
                        <svg name="shareIos" class="HotelIcon-sc-7gzcmw-0 SaveShareButtonGroup__ShareIcon-sc-vo9yt2-3 juOajA fGYjyb" viewBox="0 0 24 24" width="18" height="18" fill="currentcolor" data-unit-id="renderIcon"><path d="M 12 2 C 11.79525 2 11.590094 2.078375 11.433594 2.234375 L 9.0332031 4.6347656 C 8.8042031 4.8637656 8.7383281 5.2058594 8.8613281 5.5058594 C 8.9853281 5.8048594 9.2766094 6 9.5996094 6 L 11 6 L 11 17 A 1.0001 1.0001 0 1 0 13 17 L 13 6 L 14.400391 6 C 14.723391 6 15.014672 5.8048594 15.138672 5.5058594 C 15.179672 5.4068594 15.199219 5.3022188 15.199219 5.1992188 C 15.199219 4.9912187 15.119797 4.7887656 14.966797 4.6347656 L 12.566406 2.234375 C 12.409906 2.078375 12.20475 2 12 2 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 9 C 20 7.9069372 19.093063 7 18 7 L 17 7 A 1.0001 1.0001 0 1 0 17 9 L 18 9 L 18 20 L 6 20 L 6 9 L 7 9 A 1.0001 1.0001 0 1 0 7 7 L 6 7 z"></path></svg>

                        Share
                    </button>


                    <button className="icon-btn-0">
                        <svg viewBox="0 0 24 24" width="18px" height="18px" class="d Vb UmNoP" className="like-svg-icon"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path></svg>
                        save & track prices
                    </button>
                </div>
            </div>

            <div className="image-wrappper">
                <div className="image-display">
                    <div className="single-image"><img src={img} alt="icons" /></div>
                    <div className="double-image">
                        <div className="double-image-one">
                            <img src={img} alt="icons" />
                        </div>

                        <div className="double-image-two">
                            <img src={img} alt="icons" />
                        </div>
                    </div>
                    <div className="single-image"><img src={img} alt="icons" /></div>
                    <div className="double-image">
                        <div className="double-image-one">
                            <img src={img} alt="icons" />
                        </div>

                        <div className="double-image-two">
                            <img src={img} alt="icons" />
                        </div>
                    </div>
                    <div className="single-image"><img src={img} alt="icons" /></div>
                    <div className="double-image">
                        <div className="double-image-one">
                            <img src={img} alt="icons" />
                        </div>

                        <div className="double-image-two">
                            <img src={img} alt="icons" />
                        </div>

                    </div>
                    <div className="space"></div>
                </div>
            </div>


        </div>
    )
}

export default ImageModal