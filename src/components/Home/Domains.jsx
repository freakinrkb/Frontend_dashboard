import { useState, useEffect } from "react";
import DomainCard from "@components/Home/DomainCard";

const Domains = () => {
  const [isMounted, setIsMounted] = useState(true);
  const [current, setCurrent] = useState(0);
  const domainData = [
    {
      src: "/images/icon-detailed-records.svg",
      title: "Detailed Records",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: "/images/icon-detailed-records.svg",
      title: "Detailed Records",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: "/images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: "/images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: "/images/icon-detailed-records.svg",
      title: "Detailed Records",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output",
      linkto: "#",
    },
    {
      src: "/images/icon-fully-customizable.svg",
      title: "Fully Customizable",
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
