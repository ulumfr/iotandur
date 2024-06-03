import React, { useEffect } from "react";
import { dataProduct } from "../../../dummydata/product/dataproduct";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = dataProduct.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `IoTandur | Detail Product IoT #${id}`;
  }, []);

  if (!product) {
    return (
      <div className="flex justify-center h-screen items-center">
        Belum ada Data Product
      </div>
    );
  }

  return (
    <>
      <div className="my-[74px] min-h-screen mx-[50px] md:mx-[150px]">
        <div className="flex flex-col mt-[130px]">
          <div>
            <button
              className="flex items-center text-lg gap-3 text-ijoTua font-semibold mb-3"
              onClick={() => navigate(-1)}
            >
              <MdOutlineKeyboardArrowLeft className="text-2xl" />
              <h3>Kembali</h3>
            </button>
            <h1 className="text-4xl text-ijoTua font-bold">{product.title}</h1>
            <img
              src={product.imgProduct}
              alt="img"
              draggable="false"
              className="w-full h-[300px] rounded-2xl my-4 object-cover"
            />
          </div>
          <div className="flex justify-between mt-[45px]">
            <div className="flex flex-col gap-4 w-[75%] pr-20">
              <h1 className="text-ijoTua text-4xl font-bold">Deskripsi</h1>
              <div>
                <p className="text-ijoMuda font-semibold text-xl">
                  {product.text}
                </p>
              </div>
            </div>
            <div className="border-borderPrimary text-ijoTua border-2 rounded-2xl p-8 md:w-[25%] h-fit">
              <h1 className="font-semibold text-xl mb-3">Detail Komponen</h1>
              <hr className="text-borderPrimary border-[1.5px]" />
            </div>
          </div>

          {/* <p className="mt-4">{product.desc}</p>
          <p className="mt-2">{product.komponen}</p>
          <p className="mt-2">{product.harga}</p> */}
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
