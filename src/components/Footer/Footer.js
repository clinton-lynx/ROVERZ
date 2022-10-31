import React from "react";
import './index.scss';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="parent-footer-container">
            <div className="sub-parent-footer-container">
                <div className="footer-list-items">
                    <ul className="first-footer-list-item">
                        <h3 className="ul-header">Company</h3>
                        <Link  to='/'><a href="https://staging.brooi.com/">Home</a></Link>
                        <li><a href="https://staging.brooi.com/">About Us</a></li>
                        <li><a href="https://staging.brooi.com/">Contact Us</a> </li>
                        <li><a href="https://staging.brooi.com/">FAQs</a></li>
                    </ul>

                    <ul className="second-footer-list-item">
                        <h3 className="ul-header">Explore</h3>
                        <Link to='/result'><a href="https://staging.brooi.com/">Amenities</a></Link>
                        <Link to='/result'><a href="https://staging.brooi.com/">Hotels</a></Link>
                        <Link to='/result'><a href="https://staging.brooi.com/">Resturrants</a></Link>
                        <Link to='/result'><a href="https://staging.brooi.com/">Malls</a></Link>
                        <Link to='/result'><a href="https://staging.brooi.com/">Event Places</a></Link>
                        <Link to='/result'><a href="https://staging.brooi.com/">Cinemas</a></Link>
                    </ul>

                    <ul className="third-footer-list-item">
                        <h3 className="ul-header">Quick Links</h3>
                        <li><a href="https://staging.brooi.com/">Terms of Use</a></li>
                        <li><a href="https://staging.brooi.com/">Privacy Policy</a></li>
                        <li><a href="https://staging.brooi.com/">Support</a></li>
                        {/* <li><a href="https://staging.brooi.com/">Home</a></li> */}
                    </ul>
                </div>

                <div className="footer-email-container">
                    <div className="sub-footer-email-container">
                        <h3 className="ul-header">Newsletter</h3>

                        <div className="inputmain-wrapper">
                            <div className="inputmain"></div>
                            <div className="subscribemain">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer