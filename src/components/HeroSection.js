import React from 'react';
import img1 from '../Assets/img/img1.jpg';


function HeroSection() {
  return (
    <div className='hero'>
      {/* introduction */}

      <div class='text'>
        <div className='hello'>Hello,</div>
        <h1 class='title'>
          I'm <span className='noman'>World</span>
        </h1>
        <h1> Website Designer</h1>
        <p class='description'>
          I am Skilled and passionate web developer with experience in creating
          visually appleaing and user-friendly interfaces.I can transform ideas
          into seamless designs with user experience
        </p>
      </div>

      {/* image  */}
      <img src={img1}  alt=' Hello' class='image'></img>
    </div>
  );
};

export default HeroSection;
