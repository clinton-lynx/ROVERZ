import React from 'react';
import Mainheader from '../components/mainheader/Mainheader'
import Items from '../components/items/Items'
import Banner from '../components/banner/Banner'
import Places from '../components/places/Places'
import Result from '../components/result/Result'
import Ads from '../components/ads/Ads'
import Footer from '../components/Footer/Footer'
import Coffee from '../components/Coffee/Coffee';
const Setup = () => {
    return (
        <div>
            <Mainheader />
            <Items />
            <Banner />
            <Places />
            <Result />
            <Ads />
            <Footer />
            <Coffee />
        </div>
    )
}

export default Setup