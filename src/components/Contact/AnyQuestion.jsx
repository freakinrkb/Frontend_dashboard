import call from "@assets/call.png";
import email from "@assets/mail.png";
import location from "@assets/location.png";
import tri from "@assets/tri.svg";
const AnyQuestion = () => {
  return (
    <section className="mb-28 mt-14 p-6">
      <div className="  font-arvo container pb-6 text-center">
        <div className="font-dm-sans pb-4 text-xl font-medium leading-[40px] text-[#4750EB]">
          Contact
        </div>
        <b className=" text-3xl leading-[10px] tracking-[-0.5px]">
          Any Question
        </b>
      </div>
      <div className="two-col container">
        <div className="relative hidden p-8 md:block">
          <img className="absolute -top-5 left-0 -z-10" src={tri} alt="" />
          <b className="text-5xl">Lets talk with our awesome team</b>
          <img className="" alt="" src="/rectangle-7@2x.png" />
          <div className="text-darkslategray-100 inline-block pb-8 pt-6 text-base leading-[33px]  opacity-[0.8]">
            We offer high quality IT Services for your project, contact us or
            visit us today for more information
          </div>
          <div className="flex py-5">
            <img className="h-10 w-10" alt="" src={call} />
            <div className="pl-5">
              <div className=" text-left text-3xl font-medium leading-[32px]">
                Call
              </div>
              <div className="text-1xl opacity-[0.5]">+91 9882641949</div>
            </div>
          </div>
          <div className="flex py-6">
            <img className="h-10 w-10" alt="" src={email} />
            <div className="pl-5">
              <div className=" text-left text-3xl font-medium leading-[32px]">
                Email
              </div>
              <div className=" opacity-[0.5]">abhishek@aimantra.com</div>
            </div>
          </div>
          <div className=" flex text-xl">
            <img className="h-9 w-9" alt="" src={location} />
            <div className="pl-5">
              <div className=" text-3xl font-medium leading-[32px]">
                Location
              </div>
              <div className="pt-4 text-lg font-medium opacity-[0.5]">
                <p className="">Dwarka Expressway,</p>
                <p> DLF Corporate greens,</p>
                <p className=""> 3rd Floor Tower 3, Sec 74A, </p>
                <p className="">Gurugram, Haryana 122004,</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className=" text-default-white max-w-[30rem] flex-grow rounded-lg p-6 text-lg shadow-[0px_2px_12px_rgba(0,_0,_0,_0.3)]">
            <div className="input-container p-4">
              <input
                type="text"
                className="w-full rounded-lg border border-none border-gray-300 bg-[rgba(37,117,187,0.05)] p-3 text-lg font-medium text-black placeholder-opacity-50 focus:border-blue-500 focus:outline-none"
                placeholder="Full Name"
              />
            </div>

            <div className="input-container p-4">
              <input
                type="email"
                className="w-full rounded-lg border border-none border-gray-300 bg-[rgba(37,117,187,0.05)] p-3 text-lg font-medium placeholder-opacity-50 focus:border-blue-500 focus:outline-none"
                placeholder="Email Address"
              />
            </div>

            <div className="input-container p-4">
              <input
                type="tel"
                className="w-full rounded-lg border border-none border-gray-300 bg-[rgba(37,117,187,0.05)] p-3 text-lg font-medium placeholder-opacity-50 focus:border-blue-500 focus:outline-none"
                placeholder="Mobile Number"
              />
            </div>

            <div className="input-container p-4">
              <input
                type="text"
                className="w-full rounded-lg border border-none border-gray-300 bg-[rgba(37,117,187,0.05)] p-3 text-lg font-medium placeholder-opacity-50 focus:border-blue-500 focus:outline-none"
                placeholder="Subject"
              />
            </div>

            <div className="input-container p-4">
              <textarea
                className="h-48 w-full rounded-lg border border-none border-gray-300 bg-[rgba(37,117,187,0.05)] p-3 text-lg font-medium placeholder-opacity-50 focus:border-blue-500 focus:outline-none"
                placeholder="Message"
              />
            </div>

            <div className="text-center">
              <button className="rounded-3xl bg-[#8D3236] px-4 py-2 text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnyQuestion;
