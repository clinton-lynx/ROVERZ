import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import LocationOne from '../result/images/caption.jpg'
import LocationTwo from '../result/images/caption2.jpg'
import LocationThree from '../result/images/caption3.jpg'
import LocationFour from '../result/images/caption4.jpg'
import LocationFive from '../result/images/caption5.jpg'
import LocationSix from '../result/images/caption6.png'
import LocationSeven from '../result/images/caption7.jpg'
import LocationEight from '../result/images/caption8.jpg'
import LocationNine from '../result/images/caption9.jpg'
import LocationTen from '../result/images/caption10.jpg'
import LocationEleven from '../result/images/caption11.jpg'
import LocationTwelve from '../result/images/caption12.jpg'
import ratingSvg from '../result/images/star (1).svg'
const Result = () => {
    return (
        <div className="result-container">
            <div className="sub-result-container">
                <h1 className="main-header-destination">Find a destination for vacation</h1>

                <div className="location-main-wrapper">
                    <Location img={LocationOne}/>
                    <Location img={LocationTwo}/>
                    <Location img={LocationThree}/>
                    <Location img={LocationFour}/>
                    <Location img={LocationFive}/>
                    <Location img={LocationSix}/>
                    <Location img={LocationSeven}/>
                    <Location img={LocationEight}/>
                    <Location img={LocationNine}/>
                    <Location img={LocationTen}/>
                    <Location img={LocationEleven}/>
                    <Location img={LocationTwelve}/>
                </div>
            </div>

        </div>
    )
}

const Location = (props) => {
    return (
            <Link className="location-card" to="/destination">
                <div className="main-location-card">
                    <img src= {props.img} alt="" />
                    <div className="main-card-overlay">
                        <h1 className="card-text">National Park NYC</h1>
                    </div>
                </div>

                <div className="rating-location">
                    <div className="svg-container">
                        <img src={ratingSvg} alt='' />
                        <img src={ratingSvg} alt='' />
                        <img src={ratingSvg} alt='' />
                        <img src={ratingSvg} alt='' />
                    </div>
                    <div className="rating-address">
                        <h2 className='Address-title'> 59 Aquitaine.France</h2>
                    </div>
                </div>
            </Link>

    )
}

export default Result
