import React from "react";
import './index.scss'
import { useEffect, useState } from "react";
const imageUrl = "https://source.unsplash.com/600x600/?sig=32";

const FilterResults = () => {
    return (
        <div className="Parent-main-filter-result-container">
            <div className="Sub-parent-main-filter-result-container">
                <div className="Side-filter-bar">
                    <div className="filtered-header-text">
                        <h3 className="filter-by">Filter by:</h3>
                    </div>

                    <div className="First-filter-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Popular filter</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Hotels</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">5 stars</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">11</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Resorts</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">14</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Swimming Pool</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">The Curve</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">66</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Villas</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">36</h3>
                            </div>
                        </div>


                    </div>


                    <div className="middle-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Sustainability</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Travel Sustainable properties</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>
                        <div className="Filters"> </div>
                    </div>

                    <div className="First-filter-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Popular filter</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Hotels</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">5 stars</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">11</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Resorts</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">14</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Swimming Pool</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">The Curve</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">66</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Villas</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">36</h3>
                            </div>
                        </div>

                    </div>
                    <div className="First-filter-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Popular filter</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Hotels</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">5 stars</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">11</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Resorts</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">14</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Swimming Pool</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">The Curve</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">66</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Villas</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">36</h3>
                            </div>
                        </div>

                    </div>

                    <div className="middle-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Sustainability</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Travel Sustainable properties</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>
                        <div className="Filters"> </div>
                    </div>

                    <div className="First-filter-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Popular filter</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Hotels</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">5 stars</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">11</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Resorts</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">14</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Swimming Pool</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">The Curve</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">66</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Villas</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">36</h3>
                            </div>
                        </div>

                    </div>
                    <div className="First-filter-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Popular filter</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Hotels</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">5 stars</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">11</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Resorts</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">14</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Swimming Pool</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">The Curve</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">66</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Villas</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">36</h3>
                            </div>
                        </div>

                    </div>
                    <div className="middle-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Sustainability</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Travel Sustainable properties</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>
                        <div className="Filters"> </div>
                    </div>
                </div>
                <div className="Filtered-result">
                    <div>
                        <h1>477 Results for you</h1>
                    </div>
                    <FilterLocation className="Diff-box" />
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />
                </div>
            </div>
        </div>
    )
}


const FilterLocation = (prop) => {

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
        <div className="Location-card">
            <div className="Image-general-container">
                <div className="Image-container">
                    <img src={img} alt="icons" />
                </div>

                <div className="Image-container-overlay">
                    <div className="like-container">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb UmNoP"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="Location-general-info-container">
                <div className="Location-inner-container">
                    <div className="Location-name-rating">
                        <h2 className="Location-Name">One World Hotel</h2>
                        <div className="Rating-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>

                        </div>


                        <div>
                            <svg viewBox="0 0 128 128" width="1.3em" height="1.3em" fill="#ffeb02"><path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z"></path></svg>
                        </div>
                    </div>

                    <div className="address-location">
                        <p className="address-on-map">Bandar Utama, Petaling Jaya</p>
                        <p className="Distance">5.5 km from center</p>
                        <a href="" className="Map-text">Show on map</a>
                    </div>

                    <div className="about-location">
                        <p>Featuring direct access to 1 Utama Shopping Centre and Bandar Utama MRT station, One World Hotel offers elegant accommodation in Petaling Jaya</p>
                    </div>
                </div>

                <div className="review-price-container">
                    <div className="reviews-rating">
                        <div className="rating-text">
                            <h1>Fabulous</h1>
                            <p>2,678 reviews</p>
                        </div>
                        <div className="Main-rating">
                            <h2>8.7</h2>
                        </div>
                        
                    </div>

                    <h2>Location 9.3</h2>

                    <button className="show-price-button">Show prices</button>

                </div>
            </div>
        </div>
    )
};



export default FilterResults