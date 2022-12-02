import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Places from '../places/Places'
// import LocationOne from '../result/images/caption.jpg'
// import LocationTwo from '../result/images/caption2.jpg'
// import LocationThree from '../result/images/caption3.jpg'
// import LocationFour from '../result/images/caption4.jpg'
// import LocationFive from '../result/images/caption5.jpg'
// import LocationSix from '../result/images/caption6.png'
// import LocationSeven from '../result/images/caption7.jpg'
// import LocationEight from '../result/images/caption8.jpg'
// import LocationNine from '../result/images/caption9.jpg'
// import LocationTen from '../result/images/caption10.jpg'
// import LocationEleven from '../result/images/caption11.jpg'
// import LocationTwelve from '../result/images/caption12.jpg'
import ratingSvg from '../result/images/star (1).svg'
import { useEffect, useState } from "react";
const imageUrl = "https://source.unsplash.com/600x600/?sig=32";



const Result = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const getUsers = async () => {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data)
    }
    getUsers()

    return (
        <div className="result-container">
            <div className="sub-result-container">
                <h1 className="main-header-destination">Find a destination for vacation</h1>

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

                <Places />
            </div>

        </div>
    )
}

const Location = (props) => {
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
        <Link className="location-card" to="/destination">
            <div className="main-location-card">
                <img src={img} alt="icons" />
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
