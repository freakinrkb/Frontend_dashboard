import React from "react";

const Counts = () => {
  return (
    <section className="py -6 bg-[#2576BC]">
      <div className="container ">
        <div className="flex flex-col items-center pb-10 pt-8">
          {/* <div className="font-DM Sans"> */}
          <div className="md:text-4xl leading-[64px] text-[#FFFFFF]  pb-3 sm:text-3xl">
            <b className="">Some count that matters</b>
          </div>
          <div className=" text-sm leading-[32px] text-[#FFFFFF] ">
            Our achievement in the journey depicted in numbers
          </div>
          {/* </div> */}
        </div>
        <div className="grid grid-cols-1 sm:flex sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center pb-10">
          {/* Column 1 */}
          <div className="flex flex-col items-center px-4">
            <b className="text-3xl leading-[64px] text-[#FFFFFF]">5</b>
            <div className="text-lg leading-[32px] text-[#FFFFFF]">
              Service Geographics
            </div>
          </div>
          <div className="hidden sm:flex border-default-white box-border h-[97px] w-px border-r-[1px] border-solid opacity-[0.4]" />

          {/* Column 2 */}
          <div className="flex flex-col items-center px-4">
            <b className="text-3xl leading-[64px] text-[#FFFFFF]">30</b>
            <div className="text-lg leading-[32px] text-[#FFFFFF]">
            Fortune 500 Clients
            </div>
          </div>
          <div className="hidden sm:flex border-default-white box-border h-[97px] w-px border-r-[1px] border-solid opacity-[0.4]" />

          {/* Column 3 */}
          <div className="flex flex-col items-center px-4">
            <b className="text-3xl leading-[64px] text-[#FFFFFF]">300</b>
            <div className="text-lg leading-[32px] text-[#FFFFFF]">
            Dedicated Members
            </div>
          </div>
          <div className="hidden sm:flex border-default-white box-border h-[97px] w-px border-r-[1px] border-solid opacity-[0.4]" />

          {/* Column 4 */}
          <div className="flex flex-col items-center px-4">
            <b className="inline-block text-3xl leading-[64px] text-[#FFFFFF]">
              2
            </b>
            <div className="inline-block text-lg leading-[32px] text-[#FFFFFF]">
            Years of Journey
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
