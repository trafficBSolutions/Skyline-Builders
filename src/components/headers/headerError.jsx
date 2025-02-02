import React, {useState} from 'react';
import images from '../../utils/skyImages';
function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <header className="sky-header">
            <div className="sky-mobile-nav-icon">
                <button className="skyline-header-button" onClick={toggleMenu}>
                    <ion-icon className="icon-mobile-nav" name="menu-outline">---</ion-icon>
                </button>
            </div>
            <nav className={`main-sky-nav ${isNavOpen ? 'active' : ''}`}>
                <a className="header-skyline-logo" href="/">
                <img className="skyline-logo-img" src={images["../assets/logos/Skyline-Builders-White-Background.svg"].default}/>
                </a>
                <ul className="main-nav-list">
                <li><a href="/about-us" className="main-nav-link">About Us</a></li>
                    <li><a href="/estimate" className="main-nav-link">Estimates</a></li>
                    <li><a href="/contact-us" className="main-nav-link">Contact Us</a></li>
                    <div className="social-icons">
      <a className="social-icon" href="https://www.facebook.com/tbssigns2022/" target="_blank" rel="noopener noreferrer">
        <img className="facebook-img" src={images["../assets/social media/facebook.png"].default} alt="Facebook" />
      </a>
      <a className="social-icon" href="https://www.tiktok.com/@tbsmaterialworx?_t=8lf08Hc9T35&_r=1" target="_blank" rel="noopener noreferrer">
        <img className="tiktok-img" src={images["../assets/social media/LinkedIn.png"].default} alt="TikTok" />
      </a>
      <a className="social-icon" href="https://www.instagram.com/tbsmaterialworx?igsh=YzV4b3doaTExcjN4&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <img className="insta-img" src={images["../assets/social media/instagram.png"].default} alt="Instagram" />
      </a>
    </div>
                    <a href="tel:+17068445753"className="contact-button">Call Skyline Builders</a>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
