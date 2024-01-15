import Servicecad from "./Servicecad";
import icon from "@assets/icon.png";
const OurServices = () => {
  const domainData = [
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
    {
      src: icon,
      title: "Web Design",
      description:
        "Our ability to always exceed the expectations of our clients and produce the most creative output ",
      linkto: "#",
    },
  ];
  return (
    <section className="pt-12">
      <div className="container">
        <div className="flex-col pb-8 text-center">
          <div className="pb-4 text-[#4750EB]">Ideal solutions for you</div>
          <b className="text-2xl">Our Services</b>
        </div>
        <div className="container flex justify-center">
          <div className="gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 ">
            {domainData.map((domain, index) => (
              <Servicecad
                key={index}
                src={domain.src}
                title={domain.title}
                description={domain.description}
                linkto={domain.linkto}
                additionalClass={""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
