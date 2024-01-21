import heroi from "@assets/servicehero.svg";

const Hero = () => {
  return (
    <section className="bg-[hsl(210,50%,96%)] py-10">
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
            <button className="start-button shadow-2xl">Know More</button>
          </div>
        </div>
        <div className="even relative hidden justify-end md:flex">
          <img className="max-h-[35rem]" src={heroi} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
