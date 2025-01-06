import group from "@/assets/Group.svg";
const Service = () => {
  return (
    <section className="py-16">
      <div className="two-col container">
        <div className="odd">
          <p className="my-2 text-sky-500">Our Service</p>
          <h3 className="my-4 text-2xl font-semibold">
            Our Featured Service that We Provide
          </h3>
          <p className="max-w-[40ch] leading-6">
            Seamlessly see the tasks that need your attention, check when your
            next meeting is coming up, and keep up with your progress.
          </p>
          <ul className="mx-8 my-6 list-disc">
            <li className="my-4 max-w-[30ch]">
              List of the tasks that require your attention.
            </li>
            <li className="my-4 max-w-[30ch]">
              Google Calendar integration to see when interruptions will happen.
            </li>
            <li className="my-4 max-w-[30ch]">
              Google Calendar integration to see when interruptions will happen.
            </li>
          </ul>
        </div>
        <div className="even flex items-center justify-center">
          <img className="max-h-[25rem]" src={group} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Service;
