import React, { useEffect } from "react";
import CardTeam from "../../components/about/cardteam";
import { dataAboutTeam } from "../../dummydata/about/dataabout";

const AboutPage = () => {
  useEffect(() => {
    document.title = "IoTandur | Tentang Kami";
  }, []);

  return (
    <>
      <div className="bg-cream2 pt-[140px] rounded-b-[100px] mb-[100px] pb-[100px]">
        <div className="mx-[50px] md:mx-[150px] flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-semibold text-ijoTua">
              Tentang IoTandur
            </h1>
            <h4 className="text-xl font-normal mt-[5px] text-textTertiary">
              IoTandur memanfaatkan teknologi IoT untuk membantu petani
              mengelola lahan dengan lebih efisien, meningkatkan produktivitas,
              dan keberlanjutan pertanian di Indonesia
            </h4>
          </div>
        </div>
      </div>

      <div className="mx-[50px] md:mx-[150px] text-textLabel text-base flex flex-col gap-20 mb-[110px]">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <h4 className="text-coklatTua font-semibold text-xl">Visi Kami</h4>
            <div className="flex flex-col gap-[14px]">
              <h1 className="text-ijoTua font-semibold text-4xl">
                Pelopor Pertanian Digital di Indonesia
              </h1>
              <p>
                Memimpin transformasi digital pertanian untuk masa depan yang
                lebih produktif, berkelanjutan, dan menguntungkan
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-coklatTua font-semibold text-xl">Misi Kami</h4>
            <div className="flex flex-col gap-[14px]">
              <h1 className="text-ijoTua font-semibold text-4xl">
                Solusi Teknologi untuk Semua Petani
              </h1>
              <p>
                Menyediakan teknologi yang mudah diakses untuk mendukung petani
                dalam membuat keputusan cerdas dan meningkatkan hasil panen
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-ijoTua font-semibold text-4xl mb-[81px]">
              Temui Tim Kami
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-[35px]">
              {dataAboutTeam.map((about, index) => (
                <CardTeam
                  key={index}
                  {...about}
                  className={`${
                    about.nameMember === "Bahrul Ulum Fadhlur R" ||
                    about.nameMember === "Muhammad Arsyaq F. J"
                      ? "lg:mt-[150px]"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
