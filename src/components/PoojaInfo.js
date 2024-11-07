import React from 'react';
import '../css/PoojaInfo.css'; // Import CSS for styling



const PoojaInfo = () => {
    const poojaData = [
      { imgSrc: 'poojaimg/Vish_dosh_puja.jpg', text: 'विष दोष पूजा उज्जैन: विष दोष की सम्पूर्ण जानकारी' },
      { imgSrc: 'poojaimg/angareshwar_dhosh_puja.jpg', text: 'अंगारक दोष पूजा उज्जैन बुकिंग' },
      { imgSrc: 'poojaimg/Mangal_Dosh_Nivaran_Puja.jpg', text: 'Mangal Dosh Nivaran Puja Cost in Ujjain' },
      { imgSrc:'poojaimg/kumbh_vivah_puja.jpg', text: 'कुम्भ विवाह पूजा उज्जैन' },
      { imgSrc: 'poojaimg/ark_vivah_puja.jpg', text: 'अर्क विवाह पूजा उज्जैन सम्पूर्ण जानकारी' },
      { imgSrc: 'poojaimg/panditji_puja.jpg', text: 'Best Pandit Ji For Puja Booking in Ujjain' },
     
    ];
  
    return (
      <div className="pooja-info-container">
        <h1 className='container-heading'>पूजाओं के बारे में अधिक जानकारी</h1>
        <div className="grid-container">
          {poojaData.map((item, index) => (
            <div key={index} className="grid-item">
              <img src={item.imgSrc} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PoojaInfo;