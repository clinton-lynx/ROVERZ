import React from "react";
import './index.scss'


const Searchbar = () => {

    return (
        <div className="parent-search-bar-container">
            <form className="sub-parent-search-bar-container">
                <div className="sub-parent-search-bar-container">
                    <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#000"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>

                    <input type="text" className="input-search-container" />
                </div>

               
            </form>
        </div>
    )
}

export default Searchbar