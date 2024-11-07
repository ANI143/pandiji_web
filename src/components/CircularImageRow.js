import React from 'react';
import '../css/CircularImageRow.css'; // Ensure this path is correct

const CircularImageRow = () => {
  // Array of images and names for dynamic rendering
  const items = [
    { id: 1, name: 'गोपनीयता', imgSrc: 'img/Gopniyata.png' },
    { id: 2, name: 'मुफ्त परामर्श', imgSrc: 'img/Muftpramers.png' },
    { id: 3, name: '24×7 उपलब्धता', imgSrc: 'img/247uplabdh.png' },
    { id: 4, name: 'अनुभवी', imgSrc: 'img/anubhav.png' },
    { id: 5, name: 'श्रेष्ठ परिणाम', imgSrc: 'img/srestparinam.png' },
  ];

  return (
    <div className="circular-image-row">
      {items.map((item) => (
        <div key={item.id} className="circular-item">
          <div className="circular-image">
            <img src={item.imgSrc} alt={item.name} />
          </div>
          <p className="image-name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CircularImageRow;
