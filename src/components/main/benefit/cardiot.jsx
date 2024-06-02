import React from "react";

const CardIot = ({ imgPath, title, text }) => {
  return (
    <div className="md:h-[366px] md:w-[330px]">
      <div className="md:h-[232px]">
        <img
          src={imgPath}
          alt="image"
          draggable="false"
          className="object-cover rounded-t-2xl h-full w-full"
        />
      </div>
      <div className="bg-textCerah w-full px-6 py-5 rounded-b-2xl">
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-2xl font-semibold text-ijoTua">{title}</h2>
          <p className="text-textAbu text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardIot;
