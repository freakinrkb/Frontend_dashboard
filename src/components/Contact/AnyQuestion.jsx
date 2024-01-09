import React from "react";
import call from "@assets/call.png";
import email from "@assets/mail.png";
import location from "@assets/location.png";
const AnyQuestion = () => {
  return (
    <section className="p-6">
      <div className="container">
        <div className="  font-arvo pb-6 text-center">
          <div className="font-dm-sans pb-4 text-xl font-medium leading-[40px] text-[#4750EB]">
            contact
          </div>
          <b className=" text-3xl leading-[10px] tracking-[-0.5px]">
            Any Question
          </b>
        </div>
        <div className="p-4 flex">
          <div className="p-8 w-full h-full hidden lg:block md:flex-row">
            <b className="text-5xl">Lets talk with our awesome team</b>
            <img className="" alt="" src="/rectangle-7@2x.png" />
            <div className="pt-6 pb-8 text-darkslategray-100 inline-block text-base leading-[33px]  opacity-[0.8]">
              We offer high quality IT Services for your project, contact us or
              visit us today for more information
            </div>
            <div className="py-6 flex">
              <img className="w-10 h-10" alt="" src={call} />
              <div className="pl-5">
                <div className=" text-left text-3xl font-medium leading-[32px]">
                  Call
                </div>
                <div className="opacity-[0.5] text-1xl">+91 9986512166</div>
              </div>
            </div>
            <div className="py-6 flex">
              <img className="w-10 h-10" alt="" src={email} />
              <div className="pl-5">
                <div className=" text-left text-3xl font-medium leading-[32px]">
                  Email
                </div>
                <div className=" opacity-[0.5]">info@ipixxel.com</div>
              </div>
            </div>
            <div className=" text-xl flex">
              <img className="w-10 h-10" alt="" src={location} />
              <div className="pl-5">
                <div className=" text-3xl font-medium leading-[32px]">Location</div>
                <div className="pt-4 text-lg font-medium opacity-[0.5]">
                  <p className="m-0">Office One, 2nd Floor,</p>
                  <p className="m-0">Unit: S-1111,</p>
                  <p className="m-0">XYS main ROAD,</p>
                  <p className="m-0">Bengaluru, Karnataka 560048.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full text-xl p-12 mx-auto max-w-screen-xl bg-[#ffffff]">

            <div className=" text-default-white text-lg p-12 shadow-[0px_2px_12px_rgba(0,_0,_0,_0.3)]">
              <div className="input-container p-4">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg font-medium text-black placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  placeholder="Full Name"
                />
              </div>

              <div className="input-container p-4">
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg font-medium placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  placeholder="Email Address"
                />
              </div>

              <div className="input-container p-4">
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg font-medium placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  placeholder="Mobile Number"
                />
              </div>

              <div className="input-container p-4">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg font-medium placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  placeholder="Subject"
                />
              </div>

              <div className="input-container p-4">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg font-medium placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  placeholder="Message"
                />
              </div>

              <div className="text-center">
                <button className="bg-[#8D3236] text-white rounded-xl py-2 px-4">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnyQuestion;
