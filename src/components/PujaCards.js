import React from 'react';
import '../css/PujaCards.css'; // Assuming you create a separate CSS file

const PujaCards = () => {
  const pujas = [
    {
      id: 1,
      title: 'कालसर्प दोष पूजा',
      description: 'पूर्वजन्म के किसी श्राप या अपराध के दंड फलस्वरूप व्यक्ति की जन्म कुंडली मे काल सर्प योग दोष बनता है। इस कारण जातक का कोई भी काम सफल नहीं होता है।  ',
      image: 'img/KalsarpDosh.jpg',
      buttonText: 'पूजा बुक करे'
    },
    {
      id: 2,
      title: 'मंगल दोष पूजा',
      description: 'जिस व्यक्ति की जन्मकुंडली मे मंगल दोष होता है, तो उस व्यक्ति के विवाह मे बहुत ज्यादा समस्या आती है।मांगलिक व्यक्ति को मंगलवार के दिन पुजा करना चाहिए। ',
      image: 'img/MangaldoshPuja.jpg',
      buttonText: 'पूजा बुक करे'
    },
    {
      id: 3,
      title: 'महामृत्युंजय मंत्र जाप',
      description: 'अकाल मृत्यु के भय से बचने के लिए महामृत्युंजय मंत्र का जाप बहुत ही लाभदायक माना जाता है। यह मंत्र भगवान शिव द्वारा ही निर्मित है ।',
      image: 'img/MahamatunjayJap.jpg',
      buttonText: 'पूजा बुक करे'
    },
    
      {
        id: 4,
        title: 'चांडाल पूजा',
        description: 'जब ब्रहस्पति और राहू मे कोई संबंध होता है तब चांडाल दोष बनता है। इस योग मे जातक अपने ही गुरु से ईर्ष्या करने लगता है।',
        image: 'img/Goruchandaldosh.jpg',
        buttonText: 'पूजा बुक करे'
      },
      {
        id: 5,
        title: 'अर्क/ कुम्भ विवाह पूजा',
        description: 'कुम्भ विवाह पुजा मे वर या वधू की शादी पहले किसी घड़े से की जाती है, शादी के पश्चात उस घड़े को तोड़ दिया जाता है। ऐसा करने से मंगल दोष प्रभावहीन हो जाता है।',
        image: 'img/ArkKumbhVivah.jpg',
        buttonText: 'पूजा बुक करे'
      },
      {
        id: 6,
        title: 'वास्तु शांति पूजा',
        description: 'आपके घर मे अगर रोज लड़ाई -झगड़े गृह क्लेश होते है तो हो सकता है, आपके घर मे वास्तु दोष हो। इसे दूर करने के लिए आपको वास्तु दोष पुजा करवानी चाहिए।',
        image: 'img/VastudoshPuja.jpg',
        buttonText: 'पूजा बुक करे'
      },
      {
        id: 7,
        title: 'रुद्राभिषेक पूजा',
        description: 'अगर आप भगवान शिव को प्रसन्न कर मनचाहा वरदान प्राप्त करना चाहते है तो आपको भगवान शिव के रुद्र अवतार की पूजा करनी चाहिए।',
        image: 'img/RudraabhishekPuja.jpg',
        buttonText: 'पूजा बुक करे'
      },
      {
        id: 8,
        title: 'बगला मुखी माता पूजा',
        description: 'शत्रुओ पर विजय पाने के लिए माँ बगला मुखी की पुजा उपासना करना बहुत ही फलदायक माना जाता है। माँ बगलामुखी को सत्ता की देवी भी कहा जाता है।',
        image: 'img/BaglamukhiPuja.jpg',
        buttonText: 'पूजा बुक करे'
      },
      {
        id: 9,
        title: 'नवग्रह शांति पूजा',
        description: 'जन्म के समय नवग्रहों की जो स्थिति होती है उसका प्रभाव हमारे भाग्य और नियति पर भी पड़ता है। इन नवग्रहों के दुष्प्रभाव को कम करने के लिए नवग्रह पुजा करवाना चाहिए।',
        image: 'img/NavgrahSantiPuja.jpg',
        buttonText: 'पूजा बुक करे'
      }
    
  ];

  return (
    <div className="puja-cards-section">
      <h2>पंडित जी द्वारा करायी जाने वाली पूजाए</h2>
      
      <div className="puja-cards-container">
        {pujas.map((puja) => (
          <div key={puja.id} className="puja-card">
            <div className="puja-image">
              <img src={puja.image} alt={puja.title} />
            </div>
            <h3>{puja.title}</h3>
            <p>{puja.description}</p>
            <button className="book-button">{puja.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PujaCards;
