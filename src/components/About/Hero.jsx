import groupDis from "@assets/Group discussion.svg";

const Hero = () => {
  return (
    <section className=" bg-[url('/src/assets/wave-blue-2.svg')] bg-cover bg-bottom bg-no-repeat py-16">
      <div className="two-col container gap-8">
        <div className="odd flex items-center ">
          <div className="main-header text-4xl md:text-5xl">
            <p className="red mt-8 font-bold">
              Hey,&nbsp;
              <span className="font-bold text-black">
                We're&nbsp;<span className="blue">DASH</span>
              </span>
            </p>
            <p className="mt-8 font-bold text-black">Solution</p>
            <p className="text-font mt-8 max-w-[60ch] text-sm leading-10 text-[#02073E]">
            Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every line
            </p>
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
