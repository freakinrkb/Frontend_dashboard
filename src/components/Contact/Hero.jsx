import contactBanner from "@assets/contact-banner.svg";
const Hero = () => {
  return (
    <section className=" bg-[url('/src/assets/wave-blue.svg')] bg-cover bg-bottom bg-no-repeat py-16">
      <div className="two-col container gap-8">
        <div className="odd">
          {/* <div className="text-[#212c4f]">Best Agency</div> */}
          <div className="main-header text-4xl font-bold md:text-5xl">
            <p className="blue mt-8">Got a</p>
            <p className="blue mt-8">Question?</p>
          </div>
          <p className="mt-8 max-w-[60ch] text-sm font-light leading-10 text-[#02073E]">
            Let us take your ideas and give them flight. Our team is ready with
            their skills and dedication to bring yourideas to light. Drop us a
            note hereand we will get back to you within 24 hours.
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
