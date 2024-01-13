import { Link } from "react-router-dom";
const JobCard = ({
  title,
  description,
  icon,
  mode,
  applyLink,
  detailsLink,
}) => {
  return (
    <div className="my-8 flex flex-col flex-wrap justify-between gap-8 bg-[hsl(210,50%,96%)] p-8 md:flex-row">
      <div className="">
        <p className="text-xl font-bold text-black">{title}</p>
        <p>{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <img className="h-6 w-6" src={icon} alt="" />
        {mode}
      </div>
      <div className="flex gap-4 text-lg">
        <Link to={applyLink}>
          <buttons className="start-button h-full rounded-lg px-16">
            Apply
          </buttons>
        </Link>
        <Link to={detailsLink}>
          <buttons className="flex h-full items-center justify-center rounded-lg border-[1px] border-black px-16">
            Details
          </buttons>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
