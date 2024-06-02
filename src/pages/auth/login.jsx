import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/auth/button";
import InfoComponent from "../../components/auth/info";
import TitleComponent from "../../components/auth/title";
import TextInputComponent from "../../components/auth/textinput";
import ImgLogin from "../../assets/img/illustration/auth.png";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "IoTandur | Login";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkIsLoggedIn = () => {
    const isLoggedIn = localStorage.getItem("isLogin");
    return isLoggedIn === "true";
  };

  const [isLoggedIn, setIsLoggedIn] = useState(checkIsLoggedIn());

  const login = () => {
    localStorage.setItem("isLogin", "true");
    setIsLoggedIn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const dummyUser = { email: "iotandur@gmail.com", password: "12345678" };
    if (email === dummyUser.email && password === dummyUser.password) {
      toast.success("Login Success!");
      login();
      navigate("/");
    } else {
      toast.error("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden bg-ijoTua md:flex justify-center items-center w-1/2">
          <div className="w-2/3">
            <InfoComponent
              title="Selamat datang di IoTandur!"
              desc="Bergabunglah bersama kami, wujudkan pertanian cerdas dengan jaringan petani IoTandur."
              img={ImgLogin}
              quotes="“Dengan IoTandur, setiap petani menjadi lebih cerdas dan produktif”"
            />
          </div>
        </div>

        <div className="w-full p-8 sm:p-20 md:w-3/5 my-auto">
          <TitleComponent
            backTo="/"
            back="Kembali"
            title="Masuk ke Akun mu"
            desc="Yuk, wujudkan pertanian cerdas bersama IoTandur"
          />

          <form onSubmit={handleSubmit}>
            <div className="mb-6 mt-10">
              <TextInputComponent
                htmlFor="email"
                label="Email"
                type="email"
                placeholder="iotandur@gmail.com"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <TextInputComponent
              htmlFor="password"
              label="Password"
              type="password"
              placeholder="********************"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              passwordInput={true}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ingat"
                  className="appearance-none w-5 h-5 border cursor-pointer rounded-md"
                />
                <label
                  htmlFor="ingat"
                  className="ml-2 text-[12px] text-textLabel"
                >
                  Ingat Saya
                </label>
              </div>
              <a href="/auth/forgot" className="text-ijoTua text-xs">
                Lupa Password?
              </a>
            </div>
            <ButtonComponent
              nameButton="Masuk"
              confirm="Belum punya akun?"
              direct="Daftar disini"
              onclick={() => navigate("/auth/register")}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
