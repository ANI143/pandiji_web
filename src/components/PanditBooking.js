import React from 'react';
import '../css/PanditBooking.css'; // Make sure this CSS file is in your project

const PanditBooking = () => {
  return (
    <div className="booking-box">
      <h2 className="booking-heading">Pandit Ji Booking for Kaal Sarp Dosh Puja in Ujjain</h2>
      <p className="booking-description">
        पंडित सुरेश शर्मा जी द्वारा उज्जैन मे कालसर्प दोष निवारण पूजा हेतु वर्ष भर लोग आते है और अपनी परेशानियों से मुक्ति पाते है, आप भी अगर किसी दोष से परेशान है और अपने बिगड़े काम बनाने हेतु उज्जैन मे पूजा करना चाहते है तो अभी पंडित जी से बात करे और निशुल्क परामर्श ले।
      </p>
      <button className="booking-button">पंडित जी को कॉल करे</button>
    </div>
  );
};

export default PanditBooking;
