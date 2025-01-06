import Dotted from "@assets/dotted-sq.svg";
import Subhero from "@assets/subhero.png";
import rightArrow from "@assets/Arrow - Right Circle.png";

import "@styles/Home/SubHero.css";
const SubHero = () => {
  return (
    <section className="">
      <div className="two-col container py-10">
        <div className="odd relative flex items-center justify-center pr-16">
          <img
            className="absolute left-0 top-0 -z-10"
            src={Dotted}
            alt="dots"
          />
          <img
            className="aspect-[3/4] max-h-[30rem] rounded-bl-[8rem] rounded-br-lg rounded-tl-lg rounded-tr-[8rem] object-cover"
            src={Subhero}
            alt="fist-bump"
          />
          <div className="absolute bottom-16 right-16 max-w-[20ch] rounded-3xl rounded-br-sm bg-sky-500 px-2 py-4 text-white">
            Hello, let me know what can we do for you&nbsp;👌
          </div>
        </div>
        <div className="even">
          <p className="blue">About our work</p>
          <h1 className="main-header my-4 text-2xl">
            Creativity&nbsp;&&nbsp;Innovation
          </h1>
          <p className="max-w-[50ch] leading-8">
            dash Solution is a result-oriented IT company in India and USA.
            With a team of top talanted people who are driven to give you the
            custom software developnent solution and make your life easier.
            <br />
            We are dedicated to develop result driven websites, applications and
            software that strictly meet business requirements and catering a
            wide spectrum of projects.
          </p>
          <ul className="list-disc pl-12 pt-2" type="">
            <li className="mb-4 mt-2">Gain access to world-class talent</li>
            <li className="mb-4">Various industry leading solution</li>
            <li className="mb-4">Pocket friendly services</li>
            <li className="mb-4">350+ projects successfully delivered</li>
          </ul>
          <div className="pt-6">
            <button className="start-button py-2 shadow-2xl">
              More Details <img src={rightArrow} alt="Started" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
