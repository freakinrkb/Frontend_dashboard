import { useState, useEffect } from "react";
import DomainCard from "@components/Home/DomainCard";
import icon from "@assets/icon.png";
import icon2 from "@assets/icon (1).png";
import icon3 from "@assets/icon (2).png";
import icon4 from "@assets/icon (3).png";
import icon5 from "@assets/icon (4).png";
import icon6 from "@assets/icon (5).png";

const Domains = () => {
  const [isMounted, setIsMounted] = useState(true);
  const [current, setCurrent] = useState(0);
  const domainData = [
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: icon2,
      title: "Web Development",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: icon3,
      title: "Digital Marketing",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: icon4,
      title: "Android Development",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: icon5,
      title: "UI/UX Designer",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: icon6,
      title: "iOS Development",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const cardCount = domainData.length;
  console.log(current, cardCount);
  return (
    <section className="bg-[hsl(210,50%,96%)] py-6">
      <div className="container flex justify-center">
        <div className="card-wrapper hidden md:grid md:grid-cols-2 lg:grid-cols-3">
          {domainData.map((domain, index) => (
            <DomainCard
              key={index}
              src={domain.src}
              title={domain.title}
              description={domain.description}
              linkto={domain.linkto}
              additionalClass={""}
            />
          ))}
        </div>
        <div className="carousal min-h-[25rem] md:hidden">
          <DomainCard
            key={current}
            src={domainData[current].src}
            title={domainData[current].title}
            description={domainData[current].description}
            linkto={domainData[current].linkto}
            additionalClass={`bg-white fade-in-out${
              isMounted ? " fade-in" : " fade-out"
            }`}
          />
        </div>
      </div>
      <div className="action-buttons container flex justify-end gap-4 p-3 px-8 md:hidden">
        <div
          onClick={() => {
            setCurrent((current - 1 + cardCount) % cardCount);
          }}
          className="cursor-pointer rounded-full border-[1px] bg-white p-3 px-5"
        >
          &lt;
        </div>
        <div
          onClick={() => {
            setCurrent((current + 1) % cardCount);
          }}
          className="cursor-pointer rounded-full border-[1px] bg-[#990000] p-3 px-5 text-white"
        >
          &gt;
        </div>
      </div>
    </section>
  );
};

export default Domains;
