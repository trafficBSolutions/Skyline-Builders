import React from 'react'
import Header from '../components/headers/headerAbout'
import '../css/about.css'
import '../css/header.css'
import '../css/footer.css'
import images from '../utils/skyImages'
const About = () => {
    return (
        <div>
            <Header/>
            <main className="about-main">
                <section className="about-intro">
                    <h1>About Skyline Builders & Trucking, LLC</h1>
                    <p>
                    Skyline Builders, LLC is committed to delivering exceptional construction services 
                        throughout Georgia. From site preparation to the finishing touches, we specialize 
                        in excavation, pipe lining, foundations, framing, and roofing—ensuring every 
                        structure is built to last. Our experienced team takes pride in precision, safety, 
                        and top-tier craftsmanship. Whether you're planning a new construction project 
                        or need professional repair and reinforcement, we are here to provide reliable, 
                        high-quality solutions that stand the test of time.
                    </p>
                    <a href="/estimate" className="estimate-btn">Get a Free Estimate</a>
                </section>

                <section className="about-services">
                    <h2>Our Services</h2>
                    <div className="services-about-grid">
                        <div className="service-about-card">
                            <img src={images["../assets/Skyline Photos/excavator.jpg"].default} alt="Excavation" />
                            <h3>Excavation</h3>
                        </div>
                        <div className="service-about-card">
                            <img src={images["../assets/Skyline Photos/skyline 10.jpg"].default} alt="Pipe Lining" />
                            <h3>Pipe Lining</h3>
                        </div>
                        <div className="service-about-card">
                            <img src={images["../assets/Skyline Photos/foundations.jpg"].default} alt="Foundations" />
                            <h3>Foundations</h3>
                        </div>
                        <div className="service-about-card">
                            <img src={images["../assets/Skyline Photos/framing.jpg"].default} alt="Framing" />
                            <h3>Framing</h3>
                        </div>
                        <div className="service-about-card">
                            <img src={images["../assets/Skyline Photos/roofing.jpg"].default} alt="Roofing" />
                            <h3>Roofing</h3>
                        </div>
                    </div>
                </section>
                <section className="social-media-section">
                    <div className="social-div">
                        <h1 className="social-h1">
                            Connect with us
                        </h1>
                    </div>
                    <div className="social-icon-div">
      <a className="social-about-icon" href="https://www.facebook.com/profile.php?id=61573143419482" target="_blank" rel="noopener noreferrer">
        <img className="facebook-about-img" src={images["../assets/social media/facebook.png"].default} alt="Facebook" />
      </a>
      <a className="social-about-icon" href="https://www.linkedin.com/company/skyline-builder-llc/about" target="_blank" rel="noopener noreferrer">
        <img className="tiktok-about-img" src={images["../assets/social media/LinkedIn.png"].default} alt="TikTok" />
      </a>
      <a className="social-about-icon" href="https://www.instagram.com/skylinebuilders101" target="_blank" rel="noopener noreferrer">
        <img className="insta-about-img" src={images["../assets/social media/instagram.png"].default} alt="Instagram" />
      </a>
                    </div>
                </section>
            </main>
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
                        <a href=""className="footer-nav-link-view">About Us</a>
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
      <p className="footer-copy-p">&copy; 2025 Traffic & Barrier Solutions, LLC/Skyline Builders & Trucking, LLC - 
        Website MERN Stack Coded & Deployed by <a className="footer-face"href="https://www.facebook.com/will.rowell.779" target="_blank" rel="noopener noreferrer">William Rowell</a> - All Rights Reserved.</p>
    </div>
        </div>
    )
}
export default About;
