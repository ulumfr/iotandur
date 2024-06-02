import React from "react";
import ImgFooter from "../../assets/img/logo/iotandur-ijo.png";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import FooterMenu from "./footer/footermenu";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer className="bg-cream2">
        <div className="mx-[50px] md:mx-[150px]">
          <div className="pt-14 pb-[45px] md:flex md:justify-between">
            <div className="flex flex-col sm:justify-between sm:flex-row md:justify-start md:flex-col gap-4">
              <img
                src={ImgFooter}
                alt="img-footer"
                draggable="false"
                className="w-[120px] h-7"
              />
              <div>
                <h3 className="text-textHitam text-xl">
                  Bertani Lebih Mudah, <br />
                  Hasil Lebih Melimpah
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-10 space-x-0 sm:gap-0 sm:flex-row sm:space-x-[75px] mt-10 md:mt-0">
              <FooterMenu
                title="IoTandur"
                links={[
                  { name: "Tentang Kami", path: "/about" },
                  { name: "Faq", path: "/" },
                ]}
              />
              <FooterMenu
                title="Layanan"
                links={[
                  { name: "Penawaran", path: "/penawaran" },
                  { name: "Produk", path: "/product" },
                ]}
              />
            </div>
          </div>
          <div className="pb-5">
            <div className="border-[1.5px] border-ijoTua" />
            <div className="pt-10 pb-4 flex flex-col sm:flex-row justify-between items-center text-ijoTua">
              <div>
                <p className="text-lg font-semibold">
                  &copy; IoTandur {year}, PT IoTandur
                </p>
              </div>
              <div className="flex space-x-5 text-3xl justify-center items-center mt-5 sm:mt-0">
                <a href="https://www.instagram.com/iotandur/">
                  <AiFillInstagram />
                </a>
                <a href="https://www.tiktok.com/iotandur/">
                  <FaTiktok />
                </a>
                <a href="https://www.facebook.com/iotandur/">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
