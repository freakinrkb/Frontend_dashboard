import QualitiesCard from "./QualitiesCard";
import React from "react";
import q1 from "@assets/q1.png";
import q2 from "@assets/q2.png";
import q3 from "@assets/q3.png";
import q4 from "@assets/q4.png";
import q5 from "@assets/q5.png";
import q6 from "@assets/q6.png";
const Qualities = () => {
  return (
    <section className="p-10 bg-[#F9FBFD]">
      <div className="container pb-8">
        <div className=" font-arvo pb-12 text-center">
          <div className="font-dm-sans pb-4 text-l font-medium leading-[40px] text-[#4750EB]">
            WHY CHOOSE US
          </div>
          <b className=" text-2xl leading-[10px] tracking-[-0.5px]">
            Why The AI mantra Ranked Top Among The Leading Web & App Development Companies
          </b>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 text-lg  font-dm-sans">
          <QualitiesCard
            imagePath={q6}
            title="Attention to Details"
            description="We Frontlink Technology team are creative while keeping a close eye on the calendar and your budget. We monitor your small stuff, schedule of timelines and keen to manage project that make us stands out from the rest."
          />
          <QualitiesCard
            imagePath={q5}
            title="Highly Qualified Team"
            description="We Frontlink Technology team are creative while keeping a close eye on the calendar and your budget. We monitor your small stuff, schedule of timelines and keen to manage project that make us stands out from the rest."
          />
          <QualitiesCard
            imagePath={q4}
            title="The culture"
            description="We Frontlink Technology team are creative while keeping a close eye on the calendar and your budget. We monitor your small stuff, schedule of timelines and keen to manage project that make us stands out from the rest."
          />
          <QualitiesCard
            imagePath={q3}
            title="Trusted by 100+ Clients"
            description="We Frontlink Technology team are creative while keeping a close eye on the calendar and your budget. We monitor your small stuff, schedule of timelines and keen to manage project that make us stands out from the rest."
          />
          <QualitiesCard
            imagePath={q2}
            title="Long-term relations"
            description="We Frontlink Technology team are creative while keeping a close eye on the calendar and your budget. We monitor your small stuff, schedule of timelines and keen to manage project that make us stands out from the rest."
          />
          <QualitiesCard
            imagePath={q1}
            title="Excellent Quality & Delivery Time"
            description="We Frontlink Technology team are creative while keeping a close eye on the calendar and your budget. We monitor your small stuff, schedule of timelines and keen to manage project that make us stands out from the rest."
          />
        </div>
      </div>
    </section>
  );
};

export default Qualities;
