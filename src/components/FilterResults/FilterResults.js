import React from "react";
import './index.scss'
import { useEffect, useState } from "react";
import ShowModalPrice from '../ShowPriceModal/ShowPriceModal'
import ShowPriceModal from "../ShowPriceModal/ShowPriceModal";
import { Link } from 'react-router-dom'
import Pagination from "../Pagination/Pagination"
const imageUrl = "https://source.unsplash.com/600x600/?sig=32";

const FilterResults = () => {



    //Get current posts


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
                            <h3 className="filter-by-popular">Popular rating</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">1 Star</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">2 stars</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">11</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">3 stars</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">14</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">4 stars</div>
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
                                <h3 className="Number-available-text">66</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Unrated</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">36</h3>
                            </div>
                        </div>

                    </div>
                    <div className="First-filter-section">
                        <div className="first-section-header">
                            <h3 className="filter-by-popular">Distance from location</h3>
                        </div>
                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Less than 1km</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Less than 2km</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">11</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Less than 3km</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">14</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Less than 4km</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">194</h3>
                            </div>
                        </div>

                        <div className="Filters">
                            <div className="Checkbox-text-container">
                                <div><input type="checkbox" className="Larger" /></div>
                                <div className="filter-option-text">Less than 5km</div>
                            </div>

                            <div className="Number-available">
                                <h3 className="Number-available-text">66</h3>
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
                </div>
                <div className="Filtered-result">
                    <div className="filter-result-number-layout">
                        <h1>477 Results for you</h1>

                        <div className="grid-stack-layout">
                            <h2>Sort: Newest</h2>
                            <div className="grid-stack">
                                <button className="stack-view"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16"> <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" /> <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" /> </svg></button>
                                <button className="grid-view">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16"> <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" /> </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="selected-side-bar-options">
                        <div className="inner-side-bar-options">
                            <button>Sort by: Our top picks <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path></svg></button>

                            <button>
                                Villas
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path></svg>
                            </button>

                            <button>
                                Free wifi 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path></svg>
                            </button>

                            <button>
                                5 stars
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path></svg>
                            </button>

                            <button>
                                3 stars
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path></svg>
                            </button>

                            <button>
                                <span>Less than 1 km</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path></svg></span>
                            </button>

                            <button>
                               <span>Hotels</span>
                                <span> (8)</span>
                            </button>


                        </div>
                    </div>
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />
                    <FilterLocation />

                    <div className="pagination-container">
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}


const FilterLocation = (prop) => {
    const [isOpen, setIsOpen] = useState(false);
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

        <div className="Location-card Diff-box">
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
                        <Link to="/destination"><a href="" className="Map-text">Show on map</a></Link>
                    </div>

                    <div className="about-location">
                        <p>Located 500 metres from Sunway Pyramid, Sun Inns Hotel Lagoon near Sunway Lagoon Theme Park offers basic accommodation in Bandar Sunway.</p>
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

                    <h2 className="loct-text-dol">+Free Wifi 10</h2>

                    <button className="show-price-button" onClick={() => setIsOpen(true)}>Show prices</button>
                    {isOpen && <ShowPriceModal setIsOpen={setIsOpen} />}

                </div>
            </div>
        </div>
    )
};



export default FilterResults