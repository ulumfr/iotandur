import React from "react";
import { dataBenefit } from "../../../dummydata/main/databenefit";
import CardIot from "../../../components/main/benefit/cardiot";
import { useNavigate } from "react-router-dom";

const BenefitSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-ijoMuda">
      <div className="mx-[50px] md:mx-[150px] pt-[113px] pb-[175px] flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-[25px] md:w-[30%] my-auto md:mb-0 mb-10">
          <div className="text-cream2 flex flex-col gap-3">
            <h1 className="text-3xl font-semibold">Keunggulan IoTandur</h1>
            <h4 className="text-xl">
              IoTandur dapat membantu anda mengoptimalkan pertanian dengan
              teknologi canggih kami
            </h4>
          </div>
          <button
            className="py-[10px] px-5 text-ijoTua bg-textCerah flex items-center justify-center rounded-lg font-semibold w-fit"
            onClick={() => navigate("/product")}
          >
            Pesan Sekarang
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {dataBenefit.map((item, index) => (
            <CardIot key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
