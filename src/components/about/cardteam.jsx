import React from "react";

const CardTeam = ({ img, nameMember, role, className }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="relative">
        <img
          src={img}
          alt="img-team"
          draggable="false"
          className="w-[200px] h-[300px] rounded-bl-[50px] rounded-br-[10px] rounded-t-[10px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-ijoMuda bg-opacity-70 text-cream2 w-full h-[74px] rounded-bl-[50px] rounded-br-[10px] flex flex-col items-center justify-center">
          <h3 className="text-base font-bold">{nameMember}</h3>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};
export default CardTeam;
