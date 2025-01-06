import React from "react";
import icon1 from "@assets/mission.png";
import icon3 from "@assets/vision.png";
import icon2 from "@assets/val.png";
const MissionVision = () => {
  return (
    <section className="py-10 bg-[#F9FBFD]">
      <div className="container ">
        <div class="flex flex-wrap justify-evenly gap-16 px-16 py-10"> 
        <div class="shadow-[0px_3px_5px_rgba(0,_0,_0,_0.01)] min-w-80 max-w-90 flex-1 bg-white p-10 text-center flex flex-col items-center justify-center">
            <img className="pb-7" alt="" src={icon3} />
            <b className="pb-4">OUR Vision</b>
            Our Vision AI mantra vision is to be recognized as a leading provider of innovative, reliable, and high-quality IT solutions across the globe. We strive to empower businesses of all sizes and industries with cutting-edge technology that enhances their operations, improves their customer experience, and drives their growt
          </div>
          <div class="shadow-[0px_3px_5px_rgba(0,_0,_0,_0.01)] min-w-80 max-w-90 flex-1 bg-white p-10 text-center flex flex-col items-center justify-center">
            <img className="pb-7" alt="" src={icon1} />
            <b className="pb-4">OUR Mission</b>
            Our Vision AI mantra vision is to be recognized as a leading provider of innovative, reliable, and high-quality IT solutions across the globe. We strive to empower businesses of all sizes and industries with cutting-edge technology that enhances their operations, improves their customer experience, and drives their growt
          </div>
          <div class="shadow-[0px_3px_5px_rgba(0,_0,_0,_0.01)] min-w-80 max-w-90 flex-1 bg-white p-10 text-center flex flex-col items-center justify-center">
            <img className="pb-7" alt="" src={icon2} />
            <b className="pb-4">OUR Value</b>
            Our Vision AI mantra vision is to be recognized as a leading provider of innovative, reliable, and high-quality IT solutions across the globe. We strive to empower businesses of all sizes and industries with cutting-edge technology that enhances their operations, improves their customer experience, and drives their growt
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
