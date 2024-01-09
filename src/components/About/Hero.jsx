import groupDis from "@assets/Group discussion.svg";

const Hero = () => {
  return (
    <section className=" bg-[url('/src/assets/wave-blue-2.svg')] bg-cover bg-bottom bg-no-repeat py-16">
      <div className="two-col container gap-8">
        <div className="odd flex items-center ">
          {/* <div className="text-[#212c4f]">Best Agency</div> */}
          <div className="main-header text-4xl font-bold md:text-5xl">
            <p className="red mt-8">
              Hey,&nbsp;
              <span className="text-black">
                We're&nbsp;<span className="blue">AI mantra</span>
              </span>
            </p>
            <p className="mt-8 text-black">Solution</p>
          </div>
        </div>
        <div className="even relative justify-end">
          <img className="md:h-[30rem]" src={groupDis} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
