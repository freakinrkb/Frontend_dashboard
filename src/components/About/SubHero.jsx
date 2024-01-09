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
          <p className="max-w-[50ch] leading-8">
            We’re team of creative minds that work hard to achive our client’s
            goal. We have been offering our innovative technical solutions to
            businesses of all sizes since 2019 that help our clients streamline
            their operations and increase their profitability.
          </p>
          <p className="max-w-[50ch] leading-8">
            We’re team of creative minds that work hard to achive our client’s
            goal. We have been offering our innovative technical solutions to
            businesses of all sizes since 2019 that help our clients streamline
            their operations and increase their profitability.
          </p>
          <p className="max-w-[50ch] leading-8">
            We’re team of creative minds that work hard to achive our client’s
            goal. We have been offering our innovative technical solutions to
            businesses of all sizes since 2019 that help our clients streamline
            their operations and increase their profitability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
