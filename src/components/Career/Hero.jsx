import rightArrow from "@assets/Arrow - Right Circle.png";
import JobOpening from "@assets/Job offers-pana.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-[hsl(210,50%,96%)] py-16">
      <div className="two-col container">
        <div className="odd">
          {/* <div className="text-[#212c4f]">Build the digital future with us</div> */}
          <div className="main-header text-4xl font-bold md:text-5xl">
            <p className="mt-6">
              <span className="red">Be</span>
              <span className="blue">come&nbsp;</span>
              <span className="text-black">part of</span>
            </p>
            <p className="mt-8 text-black">Our Team</p>
          </div>
          <p className="mt-8 max-w-[60ch] text-sm  leading-10 text-[#02073E]">
          Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every lineBuilding the future of the web, one line of code at a time. Designing seamless experiences with every click and every linee now!
          </p>
          <div className="mt-6 flex gap-6">
            <Link to="/contact-us">
              <button className="start-button py-2 shadow-2xl">
                Get in Touch <img src={rightArrow} alt="Started" />
              </button>
            </Link>
          </div>
        </div>
        <div className="even relative flex justify-end">
          <img className="max-h-[35rem]" src={JobOpening} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
