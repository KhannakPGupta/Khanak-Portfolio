import React, { useState } from 'react';
import { Mail, Send, Phone } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    // FormSubmit handles the default action, so we don't prevent it
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-content glass-panel">
        <h2 className="section-title"><span className="section-number">06.</span> Let's Connect</h2>
        <p className="contact-desc">
          Whether you have a question, a project proposal, or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="contact-grid">
          {/* Left Column: The Form */}
          <div className="contact-form-wrapper">
            <form 
              className="contact-form" 
              action="https://formsubmit.co/khanakgupta124@gmail.com" 
              method="POST"
            >
              {/* Honeypot for spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* Disable Captcha for better UX */}
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  rows="5" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info */}
          <div className="contact-info-wrapper">
            <h3>Direct Contact</h3>
            <p className="info-subtext">Feel free to reach out via email, phone, or connect with me directly on LinkedIn.</p>
            
            <div className="contact-methods">
              <a href="mailto:khanakgupta124@gmail.com" className="contact-method-card">
                <div className="contact-icon-box">
                  <Mail size={24} className="contact-icon" />
                </div>
                <div className="contact-method-text">
                  <h4>Email</h4>
                  <span>khanakgupta124@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:9667749615" className="contact-method-card">
                <div className="contact-icon-box">
                  <Phone size={24} className="contact-icon" />
                </div>
                <div className="contact-method-text">
                  <h4>Phone</h4>
                  <span>+91 96677 49615</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/khannakpgupta" target="_blank" rel="noreferrer" className="contact-method-card">
                <div className="contact-icon-box">
                  <FaLinkedin size={24} className="contact-icon" />
                </div>
                <div className="contact-method-text">
                  <h4>LinkedIn</h4>
                  <span>khannakpgupta</span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
