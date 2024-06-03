import React from "react";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ imgProduct, title, text, reverse, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col md:flex-row gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <img
        src={imgProduct}
        alt="img"
        draggable="false"
        className="md:w-[400px] md:h-[300px] rounded-2xl"
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
