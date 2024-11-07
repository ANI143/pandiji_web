import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faPhone, faEnvelopesBulk, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul className="Contact_Us">
    <li>
    <p><FontAwesomeIcon icon={faPhone} className="icon" />9131822037</p>
    </li>
    <li>
    <p><a href="mailto:kaalsarpdoshpujapanditji@gmail.com"><FontAwesomeIcon icon={faEnvelopesBulk} className="icon" />kaalsarpdoshpujapanditji@gmail.com</a></p>
        
    </li>
    <li>
    <p><FontAwesomeIcon icon={faLocationDot} className="icon" />ढांचा भवन कॉलोनी, संदीपनी नगर आगर रोड,<br />उज्जैन (456001) मध्यप्रदेश</p>
      
    </li>
   
  </ul>
{/* 
        <p><FontAwesomeIcon icon={faPhone} className="icon" />9131822037</p>
        <p><a href="mailto:kaalsarpdoshpujapanditji@gmail.com"><FontAwesomeIcon icon={faEnvelopesBulk} className="icon" />kaalsarpdoshpujapanditji@gmail.com</a></p>
        <p><FontAwesomeIcon icon={faLocationDot} className="icon" />ढांचा भवन कॉलोनी, संदीपनी नगर आगर रोड,<br />उज्जैन (456001) मध्यप्रदेश</p>
       */}
      </div>

   <div className="footer-column">
  <h3>Connect with us on</h3>
  <ul className="social-icons">
    <li>
      <a href="https://www.youtube.com/channel/UCqdpbwPz41gh5HhvA8nTH_Q">
        <FontAwesomeIcon icon={faYoutube} className="icon" /> YouTube
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/pandit-suresh-sharma/">
        <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/people/%E0%A4%AA%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%A4-%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A5%87%E0%A4%B7-%E0%A4%B6%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%BE-%E0%A4%9C%E0%A5%80/100085698796311/">
        <FontAwesomeIcon icon={faFacebook} className="icon" /> Facebook
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/panditsureshsharma4/">
        <FontAwesomeIcon icon={faInstagram} className="icon" /> Instagram
      </a>
    </li>
  </ul>
</div>


      <div className="footer-column">
        <h3>Important Links</h3>
        <ul>
          <li><a href="https://kaalsarpdoshpujapanditji.com/kaal-sarp-dosh-puja-in-ujjain/">
          <FontAwesomeIcon icon={faArrowRight} className="icon" />कालसर्प दोष शांति पूजा</a></li>
          <li><a href="https://kaalsarpdoshpujapanditji.com/mangal-dosh-puja-ujjain/">
          <FontAwesomeIcon icon={faArrowRight} className="icon" />मंगल दोष निवारण पूजा</a></li>
          <li><a href="https://kaalsarpdoshpujapanditji.com/angarak-dosh-puja-ujjain-booking/">
          <FontAwesomeIcon icon={faArrowRight} className="icon" />अंगारक दोष पूजा उज्जैन</a></li>
          <li><a href="https://kaalsarpdoshpujapanditji.com/mahamrityunjay-jaap-pooja/">
          <FontAwesomeIcon icon={faArrowRight} className="icon" />महामृत्युंजय मंत्र जाप पूजा</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>About Us</h3>
        <p>पंडित जी द्वारा उज्जैन मे हजारो लोग कालसर्प दोष, मंगल दोष पूजा, नवग्रह शांति, महा मृत्युंजय जाप, रुद्रभिषेक पूजा और वास्तु दोष पूजा वर्षो से करा रहे है और परेशानियों से मुक्ति पा रहे है।</p>
      </div>
    </footer>
  );
};

export default Footer;
