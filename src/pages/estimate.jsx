import React, { useState }  from 'react';
import Header from '../components/headers/headerEstimate'
import images from '../utils/skyImages';
import '../css/estimate.css'
import '../css/footer.css'
import '../css/header.css'
import axios from 'axios';
const states = [
    { abbreviation: 'AL', name: 'Alabama' },
    { abbreviation: 'AK', name: 'Alaska' },
    { abbreviation: 'AZ', name: 'Arizona' },
    { abbreviation: 'AR', name: 'Arkansas' },
    { abbreviation: 'CA', name: 'California' },
    { abbreviation: 'CO', name: 'Colorado' },
    { abbreviation: 'CT', name: 'Connecticut' },
    { abbreviation: 'DE', name: 'Delaware' },
    { abbreviation: 'FL', name: 'Florida' },
    { abbreviation: 'GA', name: 'Georgia' },
    { abbreviation: 'HI', name: 'Hawaii' },
    { abbreviation: 'ID', name: 'Idaho' },
    { abbreviation: 'IL', name: 'Illinois' },
    { abbreviation: 'IN', name: 'Indiana' },
    { abbreviation: 'IA', name: 'Iowa' },
    { abbreviation: 'KS', name: 'Kansas' },
    { abbreviation: 'KY', name: 'Kentucky' },
    { abbreviation: 'LA', name: 'Louisiana' },
    { abbreviation: 'ME', name: 'Maine' },
    { abbreviation: 'MD', name: 'Maryland' },
    { abbreviation: 'MA', name: 'Massachusetts' },
    { abbreviation: 'MI', name: 'Michigan' },
    { abbreviation: 'MN', name: 'Minnesota' },
    { abbreviation: 'MS', name: 'Mississippi' },
    { abbreviation: 'MO', name: 'Missouri' },
    { abbreviation: 'MT', name: 'Montana' },
    { abbreviation: 'NE', name: 'Nebraska' },
    { abbreviation: 'NV', name: 'Nevada' },
    { abbreviation: 'NH', name: 'New Hampshire' },
    { abbreviation: 'NJ', name: 'New Jersey' },
    { abbreviation: 'NM', name: 'New Mexico' },
    { abbreviation: 'NY', name: 'New York' },
    { abbreviation: 'NC', name: 'North Carolina' },
    { abbreviation: 'ND', name: 'North Dakota' },
    { abbreviation: 'OH', name: 'Ohio' },
    { abbreviation: 'OK', name: 'Oklahoma' },
    { abbreviation: 'OR', name: 'Oregon' },
    { abbreviation: 'PA', name: 'Pennsylvania' },
    { abbreviation: 'RI', name: 'Rhode Island' },
    { abbreviation: 'SC', name: 'South Carolina' },
    { abbreviation: 'SD', name: 'South Dakota' },
    { abbreviation: 'TN', name: 'Tennessee' },
    { abbreviation: 'TX', name: 'Texas' },
    { abbreviation: 'UT', name: 'Utah' },
    { abbreviation: 'VT', name: 'Vermont' },
    { abbreviation: 'VA', name: 'Virginia' },
    { abbreviation: 'WA', name: 'Washington' },
    { abbreviation: 'WV', name: 'West Virginia' },
    { abbreviation: 'WI', name: 'Wisconsin' },
    { abbreviation: 'WY', name: 'Wyoming' }
  ];
const jobType = [
    {name: 'Excavation'},
    {name: 'Pipe Lining'},
    {name: 'Foundations'},
    {name: 'Framing'},
    {name: 'Roofing'}
]
const Estimate = () => {
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
        address: '',
        city: '',
        state: '',
        zip: '',
        job: '',
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
    
      const handleZipChange = (event) => {
        const input = event.target.value;
        const rawInput = input.replace(/\D/g, ''); // Remove non-digit characters
      
        setFormData({ ...formData, zip: rawInput });
      
        // Check if the input has 5 digits and clear the error if it does
        if (rawInput.length === 5) {
          setErrors((prevErrors) => ({ ...prevErrors, zip: '' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, zip: 'Please enter a valid 5-digit zip code.' }));
        }
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        setErrorMessage('');
        setSubmissionErrorMessage('');
        setSubmissionMessage('');
    
        const requiredFields = ['first', 'last', 'company', 'email', 'phone', 'address', 'city', 
            'state', 'zip', 'job', 'message'];
        const newErrors = {};
    
        requiredFields.forEach(field => {
            if (!formData[field]) {
                let fieldLabel = field.charAt(0).toUpperCase() + field.slice(1);
                if (field === 'first') fieldLabel = 'First Name';
                if (field === 'last') fieldLabel = 'Last Name';
                if (field === 'company') fieldLabel = 'Company Name';
                if (field === 'phone') fieldLabel = 'Phone Number';
                if (field === 'address') fieldLabel = 'Address';
                if (field === 'city') fieldLabel = 'City';
                if (field === 'state') fieldLabel = 'State';
                if (field === 'zip') fieldLabel = 'Zip Code';
                if (field === 'job') fieldLabel = 'Job Type';
                newErrors[field] = `${fieldLabel} is required!`;
            }
        });
    
        if (Object.keys(newErrors).length > 0) {
            setErrorMessage('Required fields are missing.');
            setErrors(newErrors);
            return;
        }
    
        try {
            const response = await axios.post('/estimate', formData, {
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
                address: '',
                city: '',
                state: '',
                zip: '',
                job: '',
                message: ''
            });
    
            setErrors({});
            setPhone('');
            setSubmissionMessage('Your estimate has been received! We will be with you within 48 hours!');
        } catch (error) {
            console.error('Error submitting estimate:', error);
        }
    };
    return (
        <div>
            <Header/>
            <main className="estimate-main">
            <div className="estimate-div">
                <h1 className="estimate-top-h1">
                    Get an Estimate
                </h1>
            </div>
            <form className="estimate-form" onSubmit={handleSubmit}>
                <h1 className="estimate-form-h1">Please fill out form to submit estimate</h1>
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
                <h1 className="job-h1">Job Site Address:</h1>
                <div className="address-name-div">
                        <label className="address-name">Address:</label>
                        <input type="text" className="address-name-input"
                            placeholder="Enter Address"
                            value={formData.address}
                            onChange={(e) => {
                                setFormData({ ...formData, address: e.target.value });
                                if (e.target.value) {
                                  setErrors((prevErrors) => ({ ...prevErrors, address: '' })); // Clear the error
                                }
                              }}/>
                    {errors.address && <div className="error-message">{errors.address}</div>}
                    </div> 
                    <div className="city-name-div">
                        <label className="city-name">City:</label>
                        <input type="text" className="city-name-input"
                            placeholder="Enter City"
                            value={formData.city}
                            onChange={(e) => {
                                setFormData({ ...formData, city: e.target.value });
                                if (e.target.value) {
                                  setErrors((prevErrors) => ({ ...prevErrors, city: '' })); // Clear the error
                                }
                              }}/>
                    {errors.city && <div className="error-message">{errors.city}</div>}
                    </div> 
                    <div className="state-name-div">
                        <label className="state-name">State:</label>
                        <select className="state-name-input" value={formData.state} onChange={(e) => { setFormData({ ...formData, state: e.target.value });
        if (e.target.value) {
          setErrors((prevErrors) => ({ ...prevErrors, state: '' })); }}}>
            <option value="">Select State</option>
                {states.map(state => (
                 <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
      ))}
    </select>
                    {errors.state && <div className="error-message">{errors.state}</div>}
                    </div> 
                    <div className="zip-name-div">
<label className="zip-name">Zip Code:</label>
<input
        type="text"
        className="zip-name-input"
        value={formData.zip}
        onChange={(e) => handleZipChange(e)}
        placeholder="Zip Code"
        maxLength={5}
        pattern="\d{5}"
        title="Zip code must be 5 digits"
      />
      {errors.zip && <span className="error-message">{errors.zip}</span>}
</div>
                </section>
                <section className="job-section">
                <h1 className="job-section-h1">Job Information:</h1>
                <div className="jobs">
  <div className="job-grid">
    <div className="job-card">
      <h2>Excavation</h2>
      <img src={images["../assets/Skyline Photos/excavator.jpg"].default} alt="Excavation Work" />
    </div>
    <div className="job-card">
      <h2>Pipe Lining</h2>
      <img src={images["../assets/Skyline Photos/pipe lining.jpg"].default} alt="Pipe Lining" />
    </div>
    <div className="job-card">
      <h2>Foundations</h2>
      <img src={images["../assets/Skyline Photos/foundations.jpg"].default} alt="Foundations" />
    </div>
    <div className="job-card">
      <h2>Framing</h2>
      <img src={images["../assets/Skyline Photos/framing.jpg"].default} alt="Framing" />
    </div>
    <div className="job-card">
      <h2>Roofing</h2>
      <img src={images["../assets/Skyline Photos/roofing.jpg"].default} alt="Roofing" />
    </div>
  </div>
</div>
                <div className="job-name-div">
                        <label className="job-name">Job Type:</label>
                        <select className="job-name-input" value={formData.job} onChange={(e) => { setFormData({ ...formData, job: e.target.value });
        if (e.target.value) {
          setErrors((prevErrors) => ({ ...prevErrors, job: '' })); }}}>
            <option value="">Select Job</option>
                {jobType.map(job => (
                 <option key={job.name} value={job.name}>{job.name}</option>
      ))}
    </select>
                    {errors.job && <div className="error-message">{errors.job}</div>}
                    </div> 
                    <div className="message-name-div">
                        <label className="message-name">Job Description:</label>
                        <h3 className="message-description">
                            Please tell us how you need your job done!
                        </h3>
                        <textarea type="text" placeholder="Enter Description" className="message-textarea"
                        value={formData.message} onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                                if (e.target.value) {
                                setErrors((prevErrors) => ({ ...prevErrors, message: '' }));}}}/>
                {errors.message && <span className="error-message">{errors.message}</span>}
                {submissionMessage && (<div className="submission-message">{submissionMessage}</div>)}
                {submissionErrorMessage && (<div className="submission-error-message">{submissionErrorMessage}</div>)}
                    </div>
                </section>
                <button type="submit" onClick={handleSubmit} className="submit-estimate">Submit Estimate</button>
                {submissionErrorMessage && <div className="submission-error-message">{submissionErrorMessage}</div>}
                {errorMessage &&  <div className="submission-error-message">{errorMessage}</div>}
            </form>
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
                        306 HILLSIDE DR SW
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
                        <a href=""className="footer-nav-link-view">Estimates</a>
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
export default Estimate;
