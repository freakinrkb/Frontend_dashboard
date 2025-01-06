import "@styles/Home/Hero.css";
import rightArrow from "@assets/Arrow - Right Circle.png";
import videoIcon from "@assets/video-icon.png";
import heroTexting from "@assets/hero-texting.png";
import bulb from "@assets/bulb.svg";
import backChat from "@assets/backChat.svg";
import curlyArrow from "@assets/curlyArrow.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[hsl(210,50%,96%)] py-16">
      <div className="two-col container">
        <div className="odd">
          <div className="text-2xl font-semibold	text-[#212c4f]">
            Best Agency
          </div>
          <div className="main-header text-4xl font-bold md:text-5xl">
            <p className="mt-6">
              <span className="red">DASH</span> Work&nbsp;
              <span className="blue">Hard</span>
            </p>
            <p className="blue mt-8">to Exceed</p>
            <p className="blue mt-8">Your Goals.</p>
          </div>
          <p className="mt-8 max-w-[60ch] text-sm leading-10 text-[#02073E]">
          Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every lineBuilding the future of the web, one line of code at a time. Designing seamless experiences with every click and every line
          </p>
          <div className="mt-6 flex gap-6">
            <Link to="/career">
              <button className="p-2 start-button shadow-2xl">
                Get Started <img src={rightArrow} alt="Started" />
              </button>
            </Link>
            <div className="video-button hidden md:flex">
              Watch Video
              <img className="" src={videoIcon} alt="video" />
            </div>
          </div>
        </div>
        <div className="even relative hidden justify-end md:flex">
          <img className="max-h-[35rem]" src={heroTexting} alt="hero-image" />
          <img
            className="left-16 top-[10rem] hidden xl:absolute xl:block"
            src={bulb}
            alt="idea"
          />
          <img
            className=" left-0 top-10 hidden h-full xl:absolute xl:block"
            src={backChat}
            alt=""
          />
          <img
            className="right-0 top-10 hidden h-48 xl:absolute xl:block"
            src={curlyArrow}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
