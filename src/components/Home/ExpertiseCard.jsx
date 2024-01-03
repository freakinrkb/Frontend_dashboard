import React from "react";
const ExpertiseCard = ({ accent, title, iconPath }) => {
  console.table(accent, iconPath, title);
  return (
    <div
      style={{ color: accent }}
      className={`relative flex h-36 rounded-md bg-[#F9FBFD] p-6 px-10`}
    >
      <div
        style={{ backgroundColor: accent }}
        className={`colored absolute left-0 top-0 h-36 w-2.5 rounded-md`}
      ></div>
      <div className="flex flex-col justify-between">
        <img className="w-10" alt="" src={`${iconPath}`} />
        <div className={`rounded-8xs bg-[${accent}] `} />
        <div className="text-lg">{`${title}`}</div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
