import React from "react";

const ExpertiseCard = ({ accent, title, iconPath, size }) => {
  // console.table(accent, iconPath, title);

  const imageSize = size === "custom-size" ? "w-12 h-12" : "w-10";

  return (
    <div
      style={{ color: accent }}
      className={`relative flex h-36 rounded-md bg-[hsl(210,50%,96%)] p-6 px-10`}
    >
      <div
        style={{ backgroundColor: accent }}
        className={`colored absolute left-0 top-0 h-36 w-2.5 rounded-md`}
      ></div>
      <div className="flex flex-col justify-between">
        <img
          className={`rounded-full ${imageSize}`}
          alt=""
          src={`${iconPath}`}
        />
        <div className={`rounded-8xs bg-[${accent}] `} />
        <div className="text-lg">{`${title}`}</div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
