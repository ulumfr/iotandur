import React from "react";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ imgProduct, title, text, reverse, link }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex gap-8 ${reverse ? "flex-row-reverse" : ""}`}>
      <img
        src={imgProduct}
        alt="img"
        draggable="false"
        className="w-[400px] h-[300px] rounded-2xl"
      />
      <div
        className={`flex flex-col bg-cream2 px-[33px] py-6 rounded-[25px] justify-between ${
          reverse ? "items-end text-right" : ""
        }`}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-ijoTua font-semibold text-3xl">{title}</h1>
          <p className="text-ijoMuda font-semibold text-xl">{text}</p>
        </div>
        <button
          className={`underline text-ijoTua font-semibold text-xl ${
            reverse ? "self-start" : "self-end"
          }`}
          onClick={() => navigate(link)}
        >
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
