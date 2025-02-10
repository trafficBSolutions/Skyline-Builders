import React, { useState }  from 'react';
import Header from '../components/headers/headerContact'
import images from '../utils/skyImages';
import axios from 'axios';
import '../css/contact.css'
import '../css/footer.css'
import '../css/header.css'
const Contact = () => {
    const [phone, setPhone] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [submissionErrorMessage, setSubmissionErrorMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
            first: '',
            last: '',
            email: '',
            phone: '',
            message: ''
          });
          const handlePhoneChange = (event) => {
            const input = event.target.value;
            const rawInput = input.replace(/\D/g, ''); // Remove non-digit characters
            const formatted = rawInput.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            
            setPhone(formatted);
            setFormData({ ...formData, phone: formatted });
          
            // Check if the input has 10 digits and clear the error if it does
            if (rawInput.length === 10) {
              setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
            } else {
              setErrors((prevErrors) => ({ ...prevErrors, phone: 'Please enter a valid 10-digit phone number.' }));
            }
          };
          const handleInputChange = (e) => {
            const { name, value } = e.target;
        
            // Update formData state correctly
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        
            // Clear the error for this field when a value is entered
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: value.trim() !== '' ? '' : prevErrors[name]
            }));
        };
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            setErrorMessage('');
            setSubmissionErrorMessage('');
            setSubmissionMessage('');
        
            const requiredFields = ['first', 'last', 'company', 'email', 'phone', 'message'];
            const newErrors = {};
        
            requiredFields.forEach(field => {
                if (!formData[field]) {
                    let fieldLabel = field.charAt(0).toUpperCase() + field.slice(1);
                    if (field === 'first') fieldLabel = 'First Name';
                    if (field === 'last') fieldLabel = 'Last Name';
                    if (field === 'company') fieldLabel = 'Company Name';
                    if (field === 'phone') fieldLabel = 'Phone Number';
                    newErrors[field] = `${fieldLabel} is required!`;
                }
            });
        
            if (Object.keys(newErrors).length > 0) {
                setErrorMessage('Required fields are missing.');
                setErrors(newErrors);
                return;
            }
        
            try {
                const response = await axios.post('/contact-us', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        
                console.log(response.data);
        
                setFormData({
                    first: '',
                    last: '',
                    company: '',
                    email: '',
                    phone: '',
                    message: ''
                });
        
                setErrors({});
                setPhone('');
                setSubmissionMessage('Your message has been received! We will be with you within 48 hours!');
            } catch (error) {
                console.error('Error submitting estimate:', error);
            }
        };
        return (
            <div>
                <Header/>
                <main className="contact-main">
                <div className="estimate-div">
                <h1 className="contact-top-h1">
                    Contact Skyline Builders, LLC
                </h1>
                <form className="estimate-form" onSubmit={handleSubmit}>
                <h1 className="estimate-form-h1">Please Fill Out the Form Below to Submit Your Message.</h1>
                <img className="choose-estimate-logo"src={images["../assets/logos/Skyline Builders Regular Black Background.svg"].default}/>
                <section className="name-section">
                <h1 className="name-h1">Name:</h1>
                    <div className="first-name-div">
                        <label className="first-name">First Name:</label>
                        <input type="text" className="first-name-input"
                            placeholder="Enter First Name"
                            value={formData.first}
                            name="first"
                            onChange={handleInputChange}/>
                    {errors.first && <div className="error-message">{errors.first}</div>}
                    </div>
                    <div className="last-name-div">
                        <label className="last-name">Last Name:</label>
                        <input type="text" 
    className="last-name-input"
    placeholder="Enter Last Name"
    name="last"
    value={formData.last} 
    onChange={handleInputChange}/>
                    {errors.last && <div className="error-message">{errors.last}</div>}
                    </div>
                </section>
                <section className="company-section">
                <h1 className="company-h1">Company Information:</h1>
                <div className="company-name-div">
                        <label className="company-name">Company:</label>
                        <input type="text" className="company-name-input"
                            placeholder="Enter Company Name"
                            value={formData.company}
                            onChange={(e) => {
                                setFormData({ ...formData, company: e.target.value });
                                if (e.target.value) {
                                  setErrors((prevErrors) => ({ ...prevErrors, company: '' })); // Clear the error
                                }
                              }}/>
                    {errors.company && <div className="error-message">{errors.company}</div>}
                    </div>                    
                    <div className="email-name-div">
                        <label className="email-name">Email:</label>
                        <input type="text" className="email-name-input"
                            placeholder="Enter Email Address"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (e.target.value) {
                                  setErrors((prevErrors) => ({ ...prevErrors, email: '' })); // Clear the error
                                }
                              }}/>
                    {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>                    
                    <div className="phone-name-div">
                        <label className="phone-name">Phone Number:</label>
                        <input type="text" className="phone-sign-box" text="phone--input"
                            placeholder="Enter Phone Number" value={phone} onChange={handlePhoneChange}/>
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                    </div>
                </section>
                <section className="address-section">
                    <div className="message-name-div">
                        <label className="message-name">Message:</label>
                        <textarea type="text" placeholder="Enter Message" className="message-textarea"
                        value={formData.message} onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                                if (e.target.value) {
                                setErrors((prevErrors) => ({ ...prevErrors, message: '' }));}}}/>
                {errors.message && <span className="error-message">{errors.message}</span>}
                {submissionMessage && (<div className="submission-message">{submissionMessage}</div>)}
                {submissionErrorMessage && (<div className="submission-error-message">{submissionErrorMessage}</div>)}
                    </div>
                </section>
                <button type="submit" onClick={handleSubmit} className="submit-estimate">Submit Message</button>
                {submissionErrorMessage && <div className="submission-error-message">{submissionErrorMessage}</div>}
                {errorMessage &&  <div className="submission-error-message">{errorMessage}</div>}
            </form>
            </div>
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
                        <a href="/estimate"className="footer-nav-link">Estimates</a>
                        </li>
                        <li>
                        <a href=""className="footer-nav-link-view">Contact Us</a>
                        </li>
                    </ul>
                    
                </div>
                <div className="connect-services">
                        <h2 className="footer-location-h2">Connect</h2>
                        <div className="footer-connect">
                        <a href="tel:+17068445753" className="footer-p"><b className="footer-b">Phone:</b> (706) 844-5753</a>
                    <a href="mailto: patelterry75@gmail.com" className="footer-address"><b  className="footer-b">Email:</b> patelterry75@gmail.com</a>
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
export default Contact;
