import React from 'react'
import './index.scss'

const Result = () => {
    return (
        <div className="result-container">
            <div className="sub-result-container">
                <h1 className="main-header-destination">Destination for vacation</h1>

                <div className="location-main-wrapper">
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                </div>
            </div>
        </div>
    )
}

const Location = () => {
    return (
        <div className="location-card">
            <div className="main-location-card">
                <div className="main-card-overlay">
                    <h1 className="card-text">National Park NYC</h1>
                </div>
            </div>
        </div>
    )
}

export default Result
