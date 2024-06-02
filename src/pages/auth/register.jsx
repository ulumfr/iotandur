import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImgRegister from "../../assets/img/illustration/auth.png";
import ButtonComponent from "../../components/auth/button";
import InfoComponent from "../../components/auth/info";
import TextInputComponent from "../../components/auth/textinput";
import TitleComponent from "../../components/auth/title";

const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "IoTandur | Register";
  }, []);

  const handleSubmit = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <div className="flex w-full min-h-screen">
        <div className="hidden bg-ijoTua md:flex items-center justify-center w-1/2">
          <div className="w-2/3">
            <InfoComponent
              title="Bergabung bersama kami!"
              desc="Daftar dan wujudkan pertanian cerdas dengan jaringan petani IoTandur."
              img={ImgRegister}
              quotes="“Dengan IoTandur, setiap petani menjadi lebih cerdas dan produktif”"
            />
          </div>
        </div>
        <div className="w-full p-8 sm:p-20 md:w-3/5">
          <TitleComponent
            backTo="/auth/login"
            back="Kembali"
            title="Pendaftaran Akun"
            desc="Yuk, buat akun mu terlebih dahulu"
          />
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <TextInputComponent
                htmlfor="namaLengkap"
                label="Nama Lengkap"
                type="text"
                placeholder="IoTandur Uhuyy"
                id="namaLengkap"
                name="namaLengkap"
              />
            </div>
            <div className="mb-3">
              <TextInputComponent
                htmlfor="email"
                label="Emal"
                type="email"
                placeholder="iotandur@gmail.com"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <TextInputComponent
                htmlfor="noTelp"
                label="No Telp"
                type="number"
                placeholder="+62 123-4567-8910"
                id="noTelp"
                name="noTelp"
              />
            </div>
            <div className="mb-[11px]">
              <TextInputComponent
                htmlFor="password"
                label="Password"
                type="password"
                placeholder="************"
                name="password"
                id="password"
                passwordInput={true}
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="ingat"
                className="ml-2 text-[12px] text-textLabel"
              >
                *kata sandi min 8 karakter
              </label>
            </div>
            <ButtonComponent
              nameButton="Daftar Akun"
              confirm="Sudah punya akun?"
              direct="Masuk disini"
              onclick={() => navigate("/auth/login")}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
