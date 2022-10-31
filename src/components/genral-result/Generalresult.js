import React from "react";
import './index.scss'
import Mainheader from '../mainheader/Mainheader'
import Result from "../result/Result";
import Footer from "../Footer/Footer";
import Items from "../items/Items";
import Coffee from '../Coffee/Coffee';
import Ads from "../ads/Ads";
const Generalresult = () =>{
    return(
        <div className="general-result-container">
            <div className="sub-general-result-container">
                 <Mainheader />
                 <Items />
                 <Result />
                 <Ads />
                 <Footer />
                 <Coffee />
            </div>
        </div>
    )
}

export default Generalresult