import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import InfoComponent from "../../components/auth/info";
import ImgAtm from "../../assets/img/illustration/atm.png";
import { useNavigate, useParams } from "react-router-dom";
import { dataProduct } from "../../dummydata/product/dataproduct";

const TransactionPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = dataProduct.find((item) => item.id.toString() === id);
  const [showPopup, setShowPopup] = useState(false);
  const [paymentID, setPaymentID] = useState(
    Math.floor(Math.random() * 10000000000)
  );
  const [virtualNumber, setVirtualNumber] = useState(
    Math.floor(Math.random() * 10000000000000000)
  );

  useEffect(() => {
    document.title = `Transaksi | Product IoT #${id}`;
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center h-screen items-center">
        Produk tidak ditemukan
      </div>
    );
  }

  const serviceFee = 25000;
  const originalPrice = parseInt(product.harga.replace(/\D/g, ""));
  const totalPrice = originalPrice + serviceFee;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleConfirmPayment = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/product");
  };

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
              {product.title}
            </h1>
            <div className="flex flex-col gap-2 text-textTertiary">
              <h3 className="text-textLabel font-medium text-base">
                Detail Pembayaran
              </h3>
              <div className="flex justify-between">
                Harga IoT
                <span>{product.harga}</span>
              </div>
              <div className="flex justify-between">
                Biaya Layanan
                <span className="text-[#079455]">+ Rp. 25.000</span>
              </div>
              <div className="flex justify-between">
                Total Pembayaran
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                ID Pembayaran
                <span>{paymentID}</span>
              </div>
              <div className="flex justify-between">
                No Virtual Pembayaran
                <span>{virtualNumber}</span>
              </div>
            </div>
            <div className="flex justify-start gap-4 flex-col sm:flex-row">
              <button
                className="bg-ijoTua w-full sm:w-[185px] h-[44px] text-textCerah rounded-lg px-6 py-2 items-center font-semibold justify-center mt-[6px]"
                onClick={handleConfirmPayment}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <p className="text-lg font-semibold mb-4">Konfirmasi Pembayaran</p>
            <p className="text-textTertiary">
              Apakah Anda sudah menyelesaikan pembayaran?
            </p>
            <div className="flex justify-end mt-6">
              <button
                className="bg-ijoTua text-white px-4 py-2 rounded-lg mr-4"
                onClick={handleClosePopup}
              >
                Ya
              </button>
              <button
                className="bg-gray-300 text-ijoTua px-4 py-2 rounded-lg"
                onClick={() => setShowPopup(false)}
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
