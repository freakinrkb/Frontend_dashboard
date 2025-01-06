import React from "react";
import ExpertiseCard from "@components/Home/ExpertiseCard.jsx";
import Wordpress from "@assets/wordpress 1.png";
import Flutter from "@assets/flutter 1.png";
import Ios from "@assets/Frame.png";
import Android from "@assets/android 1.png";
import Angular from "@assets/angular 1.png";
import Node from "@assets/node-js 1.png";
import react from "@assets/react.png";
import Uiux from "@assets/Vector.png";

const Expertise = () => {
  const cardArray = [
    {
      iconPath: Uiux,
      accent: "#56BBD0",
      title: "UI/UX Design",
    },
    {
      iconPath: Angular,
      accent: "#2C4763",
      title: "Angular",
    },
    {
      iconPath: react,
      accent: "#FAC873",
      title: "React",
    },
    {
      iconPath: Android,
      accent: "#91AFE3",
      title: "Android",
    },
    {
      iconPath: Ios,
      accent: "#90A7BB",
      title: "IOS",
      size: "h-10",
    },
    {
      iconPath: Node,
      accent: "#83CD29",
      title: "Node JS",
    },
    {
      iconPath: Wordpress,
      accent: "#bfa1f8",
      title: "Wordpress",
    },
    {
      iconPath: Flutter,
      accent: "#81DC9A",
      title: "Flutter",
    },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col items-center pb-8">
          <div className="text-1xl text-[#4750EB]">Expertise</div>
          <div className="font-arvo text-2xl text-[#0F2137]">
            <b className=" leading-[50px] tracking-[-0.5px]">
              Technology is an Art,We are Artist.
            </b>
          </div>
          <div className=" font-medium opacity-[0.5]">
            Every Business is unique. We pick the right tools for your business
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {cardArray.map((item, index) => (
            <ExpertiseCard
              key={index}
              accent={item.accent}
              title={item.title}
              iconPath={item.iconPath}
              size={item.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
