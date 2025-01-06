import mac from "@/assets/mpro16.svg";
import videoIcon from "@assets/video-icon-white.svg";

const Hero = () => {
  return (
    <section className="blue-gradient py-16">
      <div className="container flex flex-col items-center justify-center">
        <p className="text-center text-4xl font-bold leading-8">
          <p className="blue mb-6 tracking-wide">
            Best&nbsp;&nbsp;Dashboard&nbsp;&nbsp;HRMS
          </p>
          AI&nbsp;&nbsp;MANTRA&nbsp;&nbsp;<p className="red inline">Showcase</p>
        </p>
        <p className="my-10 max-w-[80ch] text-center text-sm">
        Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every lineBuilding the future of the web, one line of code at a time. Designing seamless experiences with every click and every line
        </p>
        <button className="start-button mt-16 flex items-center justify-center gap-4 py-3 shadow-xl">
          Watch Video
          <img className="h-full" src={videoIcon} alt="" />
        </button>
        <img src={mac} alt="" />
      </div>
    </section>
  );
};

export default Hero;
