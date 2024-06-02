import React from "react";
import { dataJelajah } from "../../../dummydata/main/datajelajah";
import TombolJelajah from "../../../components/main/jelajah/tomboljelajah";

const JelajahSection = () => {
  return (
    <section
      className="mx-[50px] md:mx-[150px] space-y-10 mb-[80px] mt-[70px]"
      id="alur"
    >
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-textHitam">
          Jelajahi Solusi Pertanian dengan IoTandur
        </h1>
        <h1 className="text-base sm:text-lg text-textTertiary mt-4 text-center md:mx-80">
          Jelajahi berbagai produk inovatif IoTandur yang dirancang untuk
          meningkatkan efisiensi dan produktivitas pertanian anda
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {dataJelajah.map((jelajah, index) => (
          <div key={index} className="flex md:justify-center items-center ">
            <TombolJelajah {...jelajah} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default JelajahSection;
