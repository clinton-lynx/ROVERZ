import React from 'react'
import './index.scss'
// import { Link } from 'react-router-dom'
import Places from '../places/Places'
import FilterResults from '../FilterResults/FilterResults'
// import ratingSvg from '../result/images/star (1).svg'
// import { useEffect, useState } from "react";
// const imageUrl = "https://source.unsplash.com/600x600/?sig=32";



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
                <FilterResults />
                {/* <div className="location-main-wrapper">
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
                </div> */}

                <Places />
            </div>

        </div>
    )
}

// const Location = (props) => {
//     const [img, setImg] = useState();

//     const fetchImage = async () => {
//         const res = await fetch(imageUrl);
//         const imageBlob = await res.blob();
//         const imageObjectURL = URL.createObjectURL(imageBlob);
//         setImg(imageObjectURL);

        
//     };

//     useEffect(() => {
//         fetchImage();
//     }, []);
//     return (
//         <Link className="location-card" to="/destination">
//             <div className="main-location-card">
//                 <img src={img} alt="icons" />
//                 <div className="main-card-overlay">
//                     <h1 className="card-text">National Park NYC</h1>
//                 </div>
//             </div>

//             <div className="rating-location">
//                 <div className="svg-container">
//                     <img src={ratingSvg} alt='' />
//                     <img src={ratingSvg} alt='' />
//                     <img src={ratingSvg} alt='' />
//                     <img src={ratingSvg} alt='' />
//                 </div>
//                 <div className="rating-address">
//                     <h2 className='Address-title'> 59 Aquitaine.France</h2>
//                 </div>
//             </div>
//         </Link>

//     )
// }

export default Result
