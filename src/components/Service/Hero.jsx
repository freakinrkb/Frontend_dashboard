import React from 'react';
import heroi from "@assets/servicehero.png";
import rightArrow from "@assets/Arrow - Right Circle.png";
import { useEffect, useState } from 'react';

const Hero = ({ hero }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='py-10 bg-[#F9FBFD]'>
      <div className='container'>

        <div className='flex justify-center items-center'>
          <div className='w-3/5 px-10'>
            <div className='text-3xl sm:text-4xl md:text-4xl lg:text-6xl '>
              <b> <span className='text-[#912E31]'>Maximize</span> Business Benefits out of <span className='text-[#2576BC]'>IT</span> Resources.</b>
            </div>
            {isSmallScreen ? (
              <div className='w-full sm:w-2/5 justify-center'>
                <img src={heroi} alt='Service Hero' />
              </div>
            ) : null}
            <div className='text-s sm:text-base leading-10 pt-12 pb-12'>
              <p>AI mantra  team provides web development,Mobile Apps
                development services designed to help you grow your
                business, increase your ROI, and one-up the competition.</p>
            </div>
            <button className="start-button shadow-2xl py-3 px-6">
              Know More <img src={rightArrow} alt="Started" />
            </button>
          </div>
          {!isSmallScreen ? (
            <div className='w-full sm:w-2/5 justify-center'>
              <img src={heroi} alt='Service Hero' />
            </div>
          ) : null}
        </div>

      </div>
    </section>
  );
};

export default Hero;
