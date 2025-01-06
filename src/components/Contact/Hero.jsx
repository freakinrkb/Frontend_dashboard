import contactBanner from "@assets/contact-banner.svg";
const Hero = () => {
  return (
    <section className=" bg-[url('/src/assets/wave-blue.svg')] bg-cover bg-bottom bg-no-repeat py-16">
      <div className="two-col container gap-8">
        <div className="odd">
          {/* <div className="text-[#212c4f]">Best Agency</div> */}
          <div className="main-header text-4xl font-bold md:text-5xl">
            <p className="red mt-8">
              Got&nbsp;<span className="text-black">a</span>
            </p>
            <p className="blue mt-8">Question?</p>
          </div>
          <p className="mt-8 max-w-[60ch] text-sm leading-10 text-[#02073E]">
          Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every lineBuilding the future of the web, one line of code at a time. Designing seamless experiences with every click and every line
          </p>
        </div>
        <div className="even relative justify-end">
          <img className="md:h-[30rem]" src={contactBanner} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
