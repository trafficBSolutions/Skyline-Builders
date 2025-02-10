import React from 'react'
import Header from '../components/headers/headerHome'
import '../css/home.css'
import '../css/header.css'
import '../css/footer.css'
import HomePhotoGallery from '../components/skyline photos/homegallery'
import images from '../utils/skyImages'
const Home = () => {
    return (
        <div>
            <Header/>
            <main>
            <div className="skyline-main">
                <video className="skyline-video" autoPlay loop muted playsInline>
                    <source src={images["../assets/Skyline Photos/skyline.mp4"].default} type="video/mp4"></source>
                </video>
                <div className="skyline-description">
            <h1 className="skyline-main-h1">SKYLINE BUILDERS, LLC</h1>
            <p className="skyline-statement">
            Expert excavation, pipe lining, foundations, framing, and 
            roofing—building the State of Georgia from the ground up.
            </p>
            <a href="/about-us" className="home-services">About Us</a>
            </div>
            </div>
            <section className="sky-photo-gallery">
            <div className="container-photos">
            <div className="gallery-container">
              <HomePhotoGallery /> {/* Render the photo gallery here */}
            </div>
          </div>
            </section>
            <section className="why-choose-us">
                
  <h1>Why Choose Us?</h1>
  <img className="choose-logo"src={images["../assets/logos/Skyline Builders Regular Black Background.svg"].default}/>
  <p className="skyline-builders-description">At Skyline Builders, LLC, we specialize in excavation, foundations, framing, 
    and roofing—building Georgia from the ground up with quality craftsmanship and trusted expertise.</p>

  <ul>
    <li>Experienced Professionals</li>
    <li>Quality Craftsmanship</li>
    <li>Transparent Pricing</li>
    <li>Locally Owned & Operated</li>
  </ul>
</section>

            <section className="services">
  <h1 className="service-title">What We Do</h1>
  <div className="services-grid">
    <div className="service-card">
      <h2>Excavation</h2>
      <img src={images["../assets/Skyline Photos/excavator.jpg"].default} alt="Excavation Work" />
      <p>We dig and prepare the land for strong foundations.</p>
    </div>
    <div className="service-card">
      <h2>Pipe Lining</h2>
      <img src={images["../assets/Skyline Photos/skyline 10.jpg"].default} alt="Pipe Lining" />
      <p>Efficient underground pipe lining solutions for durability.</p>
    </div>
    <div className="service-card">
      <h2>Foundations</h2>
      <img src={images["../assets/Skyline Photos/foundations.jpg"].default} alt="Foundations" />
      <p>We build solid foundations that stand the test of time.</p>
    </div>
    <div className="service-card">
      <h2>Framing</h2>
      <img src={images["../assets/Skyline Photos/framing.jpg"].default} alt="Framing" />
      <p>Precision framing for residential and commercial structures.</p>
    </div>
    <div className="service-card">
      <h2>Roofing</h2>
      <img src={images["../assets/Skyline Photos/roofing.jpg"].default} alt="Roofing" />
      <p>Reliable roofing installations and repairs for all needs.</p>
    </div>
  </div>
</section>
<section className="estimate-section">
    <h1 className="estimate-h1">Book A Free Consulation With Us</h1>
  <div className="service-description">
    <div className="service-process">
      <div className="process-step">
        <h1>Contacting To Consult</h1>
      </div>
      <div className="process-step">
        <h1>Your Estimate Received</h1>
      </div>
      <div className="process-step">
        <h1>Your Project Finished</h1>
      </div>
    </div>
  </div>
  <a href="/estimate" className="service-booking">Get An Estimate</a>
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
                    <a href="mailto: patelterry75@gmail.com" className="footer-email"><b  className="footer-b">Email:</b> patelterry75@gmail.com</a>
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
export default Home;
