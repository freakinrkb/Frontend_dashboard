import SocialGroup from "@assets/social-group.svg";
const WhatWeDo = () => {
  return (
    <section className="bg-cover bg-bottom bg-no-repeat py-10">
      <div className="two-col container gap-8">
        <div className="odd">
          <div className="main-header text-4xl font-bold md:text-5xl">
            <h2 className="text-2xl">What we do?</h2>
            <p className="mt-8 max-w-[60ch] text-sm font-light leading-10 text-[#02073E] ">
            Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every line
            </p>
          </div>
        </div>
        <div className="even relative flex justify-end">
          <img className="" src={SocialGroup} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
