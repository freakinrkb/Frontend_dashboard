import Dotted from "@assets/dotted-sq.svg";
import Subhero from "@assets/subhero.png";

const SubHero = () => {
  return (
    <section>
      <div className="two-col container py-10">
        <div className="odd relative hidden items-center pl-16 md:flex">
          <img
            className="absolute left-0 top-0 -z-10"
            src={Dotted}
            alt="dots"
          />
          <img
            className="mt-8 aspect-[3/4] max-h-[30rem] rounded-lg object-cover"
            src={Subhero}
            alt="fist-bump"
          />
        </div>
        <div className="even">
          <p className="blue">About our work</p>
          <h1 className="main-header my-4 text-2xl">Who we are</h1>
          <p className="max-w-[50ch] leading-8 justify-center">
      Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every lineBuilding the future of the web, one line of code at a time. Designing seamless experiences with every click and every line
          </p>
          <p className="max-w-[50ch] leading-8">
  Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every lineBuilding the future of the web, one line of code at a time. Designing seamless experiences with every click and every line
          </p>
          <p className="max-w-[50ch] leading-8">
Building the future of the web, one line of code at a time. Designing seamless experiences with every click and every lineBuilding the future of the web, one line of code at a time. Designing seamless experiences with every click and every line
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
