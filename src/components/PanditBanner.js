import React from 'react';
import '../css/PanditBanner.css'; // Assuming you put the CSS here

const PanditBanner = () => {
  return (
    <div className="pandit-banner">
      {/* Top Title Section */}
      <div className="banner-title">
        <h1>पंडित सुरेश शर्मा जी के बारे मे</h1>
      </div>

      {/* Bottom Section */}
      <div className="banner-content">
        {/* Left side Image */}
        <div className="banner-image">
          <img 
            src="img/UjjainPanditJi.png" 
            alt="Pandit Suresh Sharma" 
          />
        </div>

        {/* Right side Text */}
        <div className="banner-text">
          <p>
            आदरणीय पंडित सुरेश शर्मा जी उज्जैन के निवासी है जिनके द्वारा पिछले 25+ वर्षो से बाहर से आए लोगो की दोष मुक्ति हेतु पूजाए सम्पन्न कराई जा रही है। पंडित जी ने कालसर्प दोष, मंगल दोष, गुरु चांडाल दोष, पित्र दोष, नवग्रह दोष जेसी पूजाओ मे ख्याति अर्जित की है।
          </p>
          <p>
            हजारो लोगो ने पंडित जी द्वारा पूजा करा के अच्छे परिणाम प्राप्त किए है। पंडित जी द्वारा कई बड़ी हस्तियो और विदेशी लोगो की पूजाए ऑनलाइन व ऑफलाइन भी सम्पन्न कराई जाती है। अभी Kaal Sarp Dosh Puja Ujjain मे बुक करने हेतु नीचे दी गयी बटन से कॉल करे।
          </p>

          {/* Call Button */}
          
          <button className="call-button">कॉल पंडित जी</button>
        
          
        </div>
      </div>
    </div>
  );
}

export default PanditBanner;
