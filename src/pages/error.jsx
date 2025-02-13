import React from 'react';
import Header from '../components/headers/headerError'
import images from '../utils/skyImages';
import '../css/error.css'
import '../css/header.css'
import '../css/footer.css'
const Error = () => {
    return (
        <div>
            <Header/>
            <div className="not-found-container">
            <img className="skyline-error-logo-img" src={images["../assets/logos/Skyline Builders Regular Black Background.svg"].default}/>
                <h1 className="NotFound">404 - NOT FOUND</h1>
                <p className="error-description">
                    The page you're looking for might've had its 
                    name changed, removed, or doesn't exist. Please go back to 
                    the home page: </p>
                    <a href="/" className="error-home-button">Back to Home Page</a>
            </div>
            <footer className="skyline-footer">
            <a className="footer-skyline-logo" href="/">
                <img className="skyline-footer-logo-img" src={images["../assets/logos/Skyline-Builders-White-Background.svg"].default}/>
                </a>
                <div className="site-footer__inner">
                <div className="main-office">
                    <h2 className="footer-office-h2">Home Office</h2>
                    <div className="address-office">
                       <p className="address-p">
                        763 HWY 53
                        CALHOUN, GA 30701  
                        </p>
                    </div>
                    <div className="footer-hours">
                        <p className="business-hours">
                            Mon-Fri: 8:00am-5:00pm EST
                            Sat-Sun: Closed
                        </p>
                    </div>
                </div>
                <div className="footer-navigation">
                    <h2 className="footer-nav-h2">Navigation</h2>
                    <ul className="footer-navigate">
                        <li>
                        <a href="/about-us"className="footer-nav-link">About Us</a>
                        </li>
                        <li>
                        <a href="/services"className="footer-nav-link">Estimates</a>
                        </li>
                        <li>
                        <a href="/contact-us"className="footer-nav-link">Contact Us</a>
                        </li>
                    </ul>
                    
                </div>
                <div className="connect-services">
                        <h2 className="footer-location-h2">Connect</h2>
                        <div className="footer-connect">
                        <a href="tel:+17068445753" className="footer-p"><b className="footer-b">Phone:</b> (706) 844-5753</a>
                    <a href="mailto: skylinebuilders101@outlook.com" className="footer-email"><b  className="footer-b">Email:</b> skylinebuilders101@outlook.com</a>
                    </div>
                    </div>
                    </div>

            </footer>
            <div className="footer-copyright">
      <p className="footer-copy-p">&copy; 2025 Traffic & Barrier Solutions, LLC/Skyline Builders, LLC - 
        Website MERN Stack Coded & Deployed by <a className="footer-face"href="https://www.facebook.com/will.rowell.779" target="_blank" rel="noopener noreferrer">William Rowell</a> - All Rights Reserved.</p>
    </div>
        </div>
    )
}
export default Error;
