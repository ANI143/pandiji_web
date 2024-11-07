import React from 'react';
import '../css/ImgVideo.css'; // Ensure to create this CSS file

const ImgVideo = () => {
  return (
    <div className="img-video-container">
      {/* Top Wave Image */}
      <div className="wave-image top-wave">
        <img src="img/wavetop.jpg" alt="Top Wave" />
      </div>

      {/* Title */}
      <h2 className="video-title">पूजा फोटो विडियो</h2>

      {/* Centered Images */}
      <div className="centered-images">
        <img src="img/image1.png" alt="Image 1" />
        <img src="img/image2.png" alt="Image 2" />
        <img src="img/image3.png" alt="Image 3" />
      </div>

      {/* Three Additional Images */}
      <div className="additional-images">
        <img src="img/image4.png" alt="Additional Image 1" />
        <img src="img/image5.png" alt="Additional Image 2" />
        <img src="img/image6.png" alt="Additional Image 3" />
      </div>

      {/* YouTube Video */}
      <div className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Bottom Wave Image */}
      <div className="wave-image bottom-wave">
        <img src="img/wavebot.png" alt="Bottom Wave" />
      </div>
    </div>
  );
};

export default ImgVideo;
