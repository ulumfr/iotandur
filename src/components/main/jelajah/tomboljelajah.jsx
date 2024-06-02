import React from "react";

const TombolJelajah = ({ iconbtn, title, desc }) => {
  return (
    <div className="flex justify-between relative">
      <div className="flex items-center">
        <div className="flex items-center rounded-2xl border-2 border-ijoTua px-5 py-[10px] gap-3">
          <div className="bg-ijoTua rounded-full p-5 text-textCerah">
            <div className="text-2xl">{iconbtn}</div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl text-ijoTua font-semibold">{title}</h1>
            <h3 className="text-l font-sm text-textLabel">{desc}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TombolJelajah;
