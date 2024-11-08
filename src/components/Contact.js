import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope,  } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../css/Contact.css';// Ensure you create this CSS file

const Contact= () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-section">
      {/* Left Side */}
      <div className="contact-info">
        <h2 className="contact-heading">संपर्क सूत्र</h2>
        <p>
          किसी भी प्रकार के पूजन, दोष निवारण पूजा, अनुष्ठान एवं मांगलिक कार्य आपके गृह निवास पर,
          कार्यालय (ऑफिस), उज्जैन या अन्य स्थानों पर कराने के लिए पंडित जी से संपर्क करे।
          आप चाहे तो पंडित जी द्वारा उज्जैन मे ऑनलाइन पूजा भी सम्पन्न करा सकते है।
        </p>
        <div className="contact-details">
          <div className="location">
            <FaMapMarkerAlt /> संदीपनी नगर आगर रोड, उज्जैन (म.प्र.)
          </div>
          <div className="phone">
            <FaPhone /> +91 9876543210
          </div>
          <div className="email">
            <FaEnvelope /> panditji@example.com
          </div>
        </div>
        
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      
      
      </div>

      {/* Right Side - Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="send-button">Send</button>
        </form>
       
      </div>
    
      {/* Centered Contact Now Section at the Bottom */}
      <div className="contact-now-section">
        <strong>Contact Now: +91-9876543210</strong>
        
        <p>
         दांडी आश्रम, योगीपुरा, हरसिद्धि मंदिर के पास, उज्जैन
        </p>
      </div>
    </div>
  
  );
  
};

export default Contact;



