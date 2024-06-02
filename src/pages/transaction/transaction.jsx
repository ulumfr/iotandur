import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import InfoComponent from "../../components/auth/info";
import ImgAtm from "../../assets/img/illustration/atm.png";
import { useNavigate } from "react-router-dom";

const TransactionPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Transaksi | Product IoT";
  });

  return (
    <div className="flex w-full h-screen">
      <div className="hidden bg-ijoTua md:flex justify-center items-center w-1/2">
        <div className="w-2/3">
          <InfoComponent
            title="Yuk, selesaikan transaksimu!"
            desc="Selesaikan dulu transaksimu sebelum terlambat!"
            img={ImgAtm}
          />
        </div>
      </div>

      <div className="w-full md:w-3/5 md:pl-[73px] md:pr-[67px] p-8 sm:p-20 my-auto">
        <div>
          <button
            className="flex items-center text-lg gap-3 text-ijoTua font-semibold mb-7"
            onClick={() => navigate(-1)}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <h3>Kembali</h3>
          </button>
          <div className="border-borderPrimary border-2 rounded-[28px] px-10 py-5 flex flex-col gap-6">
            <h1 className="text-textHitam font-semibold text-2xl">
              IoT Sayur
            </h1>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 text-textTertiary">
                <h3 className="text-textLabel font-medium text-base">
                  Detail Pembayaran
                </h3>
                <div className="flex justify-between">
                  Harga IoT
                  <span>Rp. 1.275.000</span>
                </div>
                <div className="flex justify-between">
                  Biaya Layanan
                  <span className="text-[#079455]">+ Rp. 5.000</span>
                </div>
                <div className="flex justify-between">
                  Total Pembayaran
                  <span>Rp. 1.280.000</span>
                </div>
                <div className="flex justify-between">
                  ID Pembayaran
                  <span>12425436622</span>
                </div>
                <div className="flex justify-between">
                  No Virtual Pembayaran
                  <span>1212121212121212121</span>
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-4 flex-col sm:flex-row">
              <button
                className="bg-ijoTua w-full sm:w-[185px] h-[44px] text-textCerah rounded-lg px-6 py-2 items-center font-semibold justify-center mt-[6px]"
                // onClick={handleConfirmPayment}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
