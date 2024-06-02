import React from "react";

const InfoComponent = ({ title, desc, img, quotes }) => {
  return (
    <>
      <div className="text-white">
        <h1 className="text-6xl font-semibold mb-5">{title}</h1>
        <h2 className="text-[18px]">{desc}</h2>
      </div>
      <div className="w-2/3">
        <img src={img} alt="img-auth" draggable="false" className="my-2" />
      </div>
      <div className="text-white">
        <h3 className="mb-3">{quotes}</h3>
      </div>
    </>
  );
};

export default InfoComponent;
