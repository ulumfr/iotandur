import React, { useEffect } from "react";
import CardProduct from "../../components/product/cardproduct";
import { dataProduct } from "../../dummydata/product/dataproduct";

const ProductPage = () => {
  useEffect(() => {
    document.title = "IoTandur | Product IoT";
  }, []);

  return (
    <>
      <div className="my-[74px] min-h-screen mx-[50px] md:mx-[150px] ">
        <div className="flex flex-col">
          <h1 className="my-[90px] text-4xl text-ijoTua font-bold text-center">
            Category Produk Kami
          </h1>
          <div className="flex flex-col gap-20">
            {dataProduct.map((item) => (
              <div key={item.id}>
                <CardProduct
                  {...item}
                  reverse={item.id === 2 || item.id === 4}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
