import { Link } from "react-router-dom";
import Details from "./Details";
import { useState } from "react";
const JobCard = ({
  title,
  description,
  icon,
  mode,
  applyLink,
  detailsLink,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleDetailsClick = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    <div className="">
      <div className="my-8 flex flex-col flex-wrap justify-between gap-8 bg-[hsl(210,50%,96%)] p-8 md:flex-row">
        <div className="">
          <p className="text-xl font-bold text-black">{title}</p>
          <p>{description}</p>
        </div>
        <div className="flex items-center gap-3">
          <img className="h-6 w-6" src={icon} alt="" />
          {mode}
        </div>
        <div className="flex flex-wrap gap-4 text-lg">
          <Link to={applyLink}>
            <buttons className="flex h-full min-w-40 items-center justify-center rounded-lg bg-[#990000] p-2 text-white">
              Apply
            </buttons>
          </Link>

          <button onClick={handleDetailsClick}
            className="flex h-full min-w-40 items-center justify-center rounded-lg border-[1px] border-black  p-2">
            Details
          </button>
        </div>
      </div>
        {isPopupOpen && (
          <div className="popup-menu  p-2">
            <Details />
          </div>
        )}
    </div>
  );
};

export default JobCard;
