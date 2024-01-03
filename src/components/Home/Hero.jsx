import "@styles/Home/Hero.css";
import rightArrow from "@assets/Arrow - Right Circle.png";
import videoIcon from "@assets/video-icon.png";
import heroTexting from "@assets/hero-texting.png";
import bulb from "@assets/bulb.svg";
import chat1 from "@assets/Chat1.png";
import chat2 from "@assets/Chat2.png";

const Hero = () => {
  return (
    <section className="bg-[hsl(210,50%,96%)] py-16">
      <div className="two-col container">
        <div className="odd">
          {/* <div className="text-[#212c4f]">Best Agency</div> */}
          <div className="main-header text-4xl font-bold md:text-5xl">
            <p className="mt-6">
              <span className="red">AI</span>mantra Work&nbsp;
              <span className="blue">Hard</span>
            </p>
            <p className="blue mt-8">to Exceed</p>
            <p className="blue mt-8">Your Goals.</p>
          </div>
          <p className="mt-8 max-w-[60ch] text-sm font-light leading-10 text-[#02073E]">
            We Provides Constantly Our Best Services & Solution For Our Clients.
            the victory of the managments that supplies best design system
            guidelines ever.
          </p>
          <div className="mt-6 flex gap-6">
            <button className="start-button shadow-2xl">
              Get Started <img src={rightArrow} alt="Started" />
            </button>
            <div className="video-button hidden md:flex">
              Watch Video
              <img className="" src={videoIcon} alt="video" />
            </div>
          </div>
        </div>
        <div className="even relative hidden justify-end md:flex">
          <img className="max-h-[35rem]" src={heroTexting} alt="hero-image" />
          <img
            className="left-0 top-[10rem] hidden xl:absolute xl:block"
            src={bulb}
            alt="idea"
          />
          <img
            className="left-[10%] top-10 hidden rounded-xl shadow-xl xl:absolute xl:block"
            src={chat1}
            alt="chat"
          />
          <img
            className="bottom-10 left-0 hidden rounded-xl shadow-xl xl:absolute xl:block"
            src={chat2}
            alt="chat"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
