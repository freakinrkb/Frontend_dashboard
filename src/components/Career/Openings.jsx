import JobCard from "@components/Career/JobCard";

const Openings = () => {
  const jobs = [
    {
      title: "Front-End Developer",
      description: "Full Time/Part Time/Remote",
      icon: "/src/assets/location-dark.svg",
      mode: "On-Site",
      applyLink: "",
      detailsLink: "",
    },
    {
      title: "Front-End Developer",
      description: "Full Time/Part Time/Remote",
      icon: "/src/assets/location-dark.svg",
      mode: "On-Site",
      applyLink: "",
      detailsLink: "",
    },
    {
      title: "Front-End Developer",
      description: "Full Time/Part Time/Remote",
      icon: "/src/assets/location-dark.svg",
      mode: "On-Site",
      applyLink: "",
      detailsLink: "",
    },
    {
      title: "Front-End Developer",
      description: "Full Time/Part Time/Remote",
      icon: "/src/assets/location-dark.svg",
      mode: "On-Site",
      applyLink: "",
      detailsLink: "",
    },
    {
      title: "Front-End Developer",
      description: "Full Time/Part Time/Remote",
      icon: "/src/assets/location-dark.svg",
      mode: "On-Site",
      applyLink: "",
      detailsLink: "",
    },
    {
      title: "Front-End Developer",
      description: "Full Time/Part Time/Remote",
      icon: "/src/assets/location-dark.svg",
      mode: "On-Site",
      applyLink: "",
      detailsLink: "",
    },
    {
      title: "Front-End Developer",
      description: "Full Time/Part Time/Remote",
      icon: "/src/assets/location-dark.svg",
      mode: "On-Site",
      applyLink: "",
      detailsLink: "",
    },
    {
      title: "Front-End Developer",
      description: "Full Time/Part Time/Remote",
      icon: "/src/assets/location-dark.svg",
      mode: "On-Site",
      applyLink: "",
      detailsLink: "",
    },
  ];

  return (
    <section className="my-4 py-12">
      <div className="container">
        <div className="main-header mb-16">
          <h1 className=" my-4 mb-4 flex justify-center text-2xl font-bold">
            We're looking for great people!
          </h1>
          <p className="mx-auto max-w-[90ch] text-center">
            Experience and talent matter, but they're not everything. We want
            people embody our values, wear their passions, and who are hungry to
            grow. If you're one of those people, we want to hear from you.
          </p>
        </div>
        <div className="jobs">
          <div className="text-bold mx-auto text-center text-2xl text-sky-500">
            Featured Jobs
          </div>
          <div className="job-listings flex flex-col">
            {jobs.map((item, index) => (
              <JobCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                mode={item.mode}
                applyLink={item.applyLink}
                detailsLink={item.detailsLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Openings;
