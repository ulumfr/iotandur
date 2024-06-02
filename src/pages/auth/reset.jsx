import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImgForgot from "../../assets/img/illustration/reset.png";
import InfoComponent from "../../components/auth/info";
import ButtonComponent from "../../components/auth/button";
import TitleComponent from "../../components/auth/title";
import TextInputComponent from "../../components/auth/textinput";

const ResetPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "IoTandur | Reset Password";
  }, []);

  const handleSubmit = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden bg-ijoTua md:flex justify-center items-center w-1/2 relative overflow-hidden">
          <div className="w-2/3">
            <InfoComponent
              title="Atur Kata Sandi Yang Baru"
              desc="Atur ulang kata sandi yang baru untuk   melindungi akunmu!"
              img={ImgForgot}
            />
          </div>
        </div>
        <div className="w-full p-8 sm:p-24 md:w-3/5 my-auto">
          <TitleComponent
            backTo="/auth/forgot"
            back="Kembali"
            title="Kata Sandi Baru"
            desc="Kata sandi harus berbeda dengan yang sebelumnya!"
          />
          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <div></div>
              <TextInputComponent
                htmlFor="token"
                label="Nomor Token"
                type="text"
                placeholder="Masukan Nomor Token"
                name="token"
                id="token"
              />
              <TextInputComponent
                htmlFor="newPass"
                label="Kata Sandi Baru"
                type="password"
                placeholder="Masukan Kata Sandi Baru"
                name="newPass"
                id="newPass"
                passwordInput={true}
              />
              <TextInputComponent
                htmlFor="newPassConfirm"
                label="Konfirmasi Kata Sandi Baru"
                type="password"
                placeholder="Masukan Konfirmasi Kata Sandi Baru"
                name="newPassConfirm"
                id="newPassConfirm"
                passwordInput={true}
              />
            </div>
            <ButtonComponent nameButton="Kirim" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPage;
