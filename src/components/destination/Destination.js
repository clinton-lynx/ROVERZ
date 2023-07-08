import React from "react";
import Mainheader from "../mainheader/Mainheader";
import Items from "../items/Items"
import './index.scss'
import Ads from '../ads/Ads'
import Footer from '../Footer/Footer'
import Coffee from '../Coffee/Coffee'
import Places from "../places/Places";
import { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapImage from '../destination/images/staticmap.jpg'



const imageUrl = "https://source.unsplash.com/600x600/?sig=32";
const Destination = () => {
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
                            <img src={mapImage} alt="" />
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