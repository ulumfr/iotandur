import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImgForgot from "../../assets/img/illustration/reset.png";
import InfoComponent from "../../components/auth/info";
import ButtonComponent from "../../components/auth/button";
import TitleComponent from "../../components/auth/title";
import TextInputComponent from "../../components/auth/textinput";

const ForgotPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "IoTandur | Forgot Password";
  }, []);

  const handleSubmit = () => {
    navigate("/auth/reset");
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden bg-ijoTua md:flex justify-center items-center w-1/2 relative overflow-hidden">
          <div className="w-2/3">
            <InfoComponent
              title="Lupa Kata Sandi"
              desc="Atur ulang kata sandimu sekarang melalui email terdaftar"
              img={ImgForgot}
            />
          </div>
        </div>
        <div className="w-full p-8 sm:p-24 md:w-3/5 my-auto">
          <TitleComponent
            backTo="/auth/login"
            back="Kembali"
            title="Lupa Kata Sandi"
            desc="Pastikan email mu terdaftar ke akun Google!"
          />

          <form onSubmit={handleSubmit}>
            <div className="mb-6 mt-10">
              <TextInputComponent
                htmlFor="email"
                label="Email"
                type="email"
                placeholder="Masukan Email yang terdaftar"
                name="email"
                id="email"
              />
            </div>
            <ButtonComponent nameButton="Kirim Link Reset Ulang" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPage;
