import pana from "/src/assets/mobile-inbox-pana.svg";
import designTools from "/src/assets/design tools.svg";
import smartphone from "/src/assets/smartphone.svg";
import dataAnalytics from "/src/assets/data analytics.svg";
import manageTime from "/src/assets/manage time.svg";
const WeWork = () => {
  return (
    <section className="py-12">
      <div className="two-col container gap-4">
        <div className="odd flex justify-center">
          <img className="max-h-[35rem]" src={pana} alt="pana-image" />
        </div>
        <div className="even grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          <div className="flex flex-col justify-around px-4">
            <img className="w-12" src={dataAnalytics} alt="" />
            <h3>We Access</h3>
            <p className="max-w-[40ch]">
              We do end-to-end analysis of a project's scope, scale,
              deliverables, objectives, and impacts. It also involves assessing
              the project's stakeholders, risks, timeline, and impacted groups
              and processes.
            </p>
          </div>
          <div className="flex flex-col justify-around px-4">
            <img className="w-12" src={designTools} alt="" />
            <h3>We Design</h3>
            <p className="max-w-[40ch]">
              We design next-generation UI/UX as per the assessment and by
              considering targeted audiance
            </p>
          </div>
          <div className="flex flex-col justify-around px-4">
            <img className="w-12" src={smartphone} alt="" />
            <h3>We Develop</h3>
            <p className="max-w-[40ch]">
              We manage the end-to-end deployment of the project and monitor
              continuously for zero downtime
            </p>
          </div>
          <div className="flex flex-col justify-around px-4">
            <img className="w-12" src={manageTime} alt="" />
            <h3>We Manage</h3>
            <p className="max-w-[40ch]">
              After deploying the project successfully, we manage it completely
              to provide end-to-end support as per needed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeWork;
