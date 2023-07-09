import React from "react";
import './index.scss';

const Pagination = () => {
    return (
        <div className="general-pagination-container">
            <nav className="inner-page-container">
                <button className="previous-icon">
                    <svg data-v-ee52b5d6="" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="previous-icon" ><g data-v-ee52b5d6="" fill="none"><path data-v-ee52b5d6="" d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                </button>

                <button className="current-page-button">
                    1
                </button>

                <a href="" className="page-number">2</a>
                <a href="" className="page-number">3</a>
                <a href="" className="page-number">4</a>
                <a href="" className="page-number">5</a>
                <span className="ellipses-dot">...</span>
                <a href="" className="page-number">15</a>

                <svg data-v-ee52b5d6="" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="next-icon"><g data-v-ee52b5d6="" fill="none"><path data-v-ee52b5d6="" d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
            </nav>
            <div className="number-counting">
                <p>Showing 1 - 25</p>
            </div>
        </div>
    )
}

export default Pagination