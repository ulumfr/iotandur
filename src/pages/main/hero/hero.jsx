import React from "react";
import Hero from "../../../assets/img/gambar/hero.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative w-full h-screen">
      <img
        src={Hero}
        alt="img"
        draggable="false"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 md:right-[40%] -translate-y-1/2 mx-[50px] md:mx-[150px]">
        <div className="flex flex-col gap-[18px] text-left">
          <div className="text-textCerah flex flex-col gap-[10px]">
            <h1 className="font-semibold text-4xl md:text-5xl">
              Solusi Pertanian Cerdas dengan IoTandur
            </h1>
            <h3 className="text-xl font-medium">
              Gabungkan kekuatan teknologi IoT dengan praktik pertanian Anda.
              IoTandur memberikan data dan kontrol yang Anda butuhkan untuk
              hasil terbaik.
            </h3>
          </div>
          <button
            className="flex text-textCerah bg-ijoTua rounded-lg py-2 px-6 w-fit"
            onClick={() => navigate("/auth/login")}
          >
            Mulai Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
