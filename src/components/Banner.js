import React from 'react';
import '../css/Banner.css'; // Ensure CSS file is imported

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-text">
          <h1>उज्जैन मे कालसर्प दोष पूजा के लिए पंडित जी बुक करे</h1>
          <p>
            जीवन मे आ रही असामान्य परेशानियों का कारण आपकी कुंडली मे स्थित कालसर्प दोष हो सकता है। 
            अभी उज्जैन के 21 वर्षो से ज्यादा अनुभवी पंडित सुरेश शर्मा जी से संपर्क करे और बिना किसी बुकिंग 
            शुल्क के पूजा बुक करे और उज्जैन मे आकर या फिर ऑनलाइन अपनी कालसर्प दोष पूजा उज्जैन मे पूरी विधि विधान से सम्पन्न कराये।
          </p>
          <button className="booking-button">बुक करे</button>
        </div>
        <div className="banner-image">
          <img src="img/PanditJiPuja.png" alt="Kalsarp Dosh Puja" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
