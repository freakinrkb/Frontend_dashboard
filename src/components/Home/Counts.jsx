import React from "react";

const Counts = () => {
  return (
    <section>
      <div className="bg-[#2576BC] container">
        <div className="flex flex-col items-center">
          {/* <div className="font-DM Sans"> */}
            <div className="text-4xl leading-[64px] text-[#FFFFFF] ">
            <b className="">
            Some count that matters
            </b>
          </div>
          <div className=" text-sm leading-[32px] text-[#FFFFFF]">
          Our achievement in the journey depicted in numbers
          </div>
        {/* </div> */}
        </div>
      <div className="   flex flex-row  gap-[15px]">
        <div className=" flex flex-col items-center ">
          <div className=" flex flex-col items-center ">
            <b className=" text-3xl leading-[64px] inline-block text-[#FFFFFF]">5</b>
            <div className="text-lg leading-[32px] inline-block text-[#FFFFFF]">
            Service Geographics
            </div>
          </div>
        </div>
        <div className="box-border w-px h-[97px] opacity-[0.4] border-r-[1px] border-solid border-default-white" />
        <div className=" flex flex-col items-center justify-start">
          <div className="overflow-hidden flex flex-col items-center justify-start">
          <b className=" text-3xl leading-[64px] inline-block text-[#FFFFFF]">5</b>
            <div className="text-lg leading-[32px] inline-block text-[#FFFFFF]">
            Service Geographics
            </div>
          </div>
        </div>
        <div className="box-border w-px h-[97px] opacity-[0.4] border-r-[1px] border-solid border-default-white" />
        <div className=" flex flex-col items-center justify-start">
          <div className="overflow-hidden flex flex-col items-center justify-start">
          <b className=" text-3xl leading-[64px] inline-block text-[#FFFFFF]">5</b>
            <div className="text-lg leading-[32px] inline-block text-[#FFFFFF]">
            Service Geographics
            </div>
          </div>
        </div>
        <div className="box-border w-px h-[97px] opacity-[0.4] border-r-[1px] border-solid border-default-white" />
        <div className=" flex flex-col items-center justify-start">
          <div className="overflow-hidden flex flex-col items-center justify-start">
          <b className=" text-3xl leading-[64px] inline-block text-[#FFFFFF]">5</b>
            <div className="text-lg leading-[32px] inline-block text-[#FFFFFF]">
            Service Geographics
            </div>
          </div>
        </div>
      </div>

  </div>
    </section>
  );
};

export default Counts;
