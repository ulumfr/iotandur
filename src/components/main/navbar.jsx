import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo/iotandur-ijo.png";
import { dataNav } from "../../dummydata/main/datanav";
import ImgAvatar from "../../assets/img/team/ulum.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const checkIsLoggedIn = () => {
    const isLoggedIn = localStorage.getItem("isLogin");
    return isLoggedIn === "true";
  };

  const [isLoggedIn, setIsLoggedIn] = useState(checkIsLoggedIn());

  const logout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLoggedIn(false);
    toast.success("Logout Success!");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-cream2 ${
        scrolled ? "shadow-md" : ""
      } z-50`}
    >
      <div className="mx-[50px] md:mx-[150px] py-2">
        <div className="grid grid-cols-2 items-center h-[74px]">
          <div className="flex items-center justify-between">
            <Link
              to="hero"
              className="flex-shrink-0 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
            >
              <img src={Logo} alt="logo" draggable="false" className="h-6" />
            </Link>
            <div className="hidden md:block pr-10">
              <ul className="flex space-x-3">
                {dataNav.map(({ name, linkMenu }) => (
                  <div key={name}>
                    <NavLink to={linkMenu}>
                      <h1 className="py-5 px-2 cursor-pointer font-semibold text-ijoMuda hover:text-ijoTua hover:font-bold">
                        {name}
                      </h1>
                    </NavLink>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:flex justify-end gap-4 p-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center">
                    <img
                      src={ImgAvatar}
                      alt="img-profile"
                      draggable="false"
                      className="rounded-full w-10 cursor-pointer"
                      onClick={toggleDropdown}
                    />
                  </div>
                  <div>
                    <h1 className="text-ijoTua text-[14px] font-semibold">
                      Hi, IoTandur
                    </h1>
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute w-[180px] top-24 right-28 bg-textCerah border border-gray-200 shadow-md rounded-lg ">
                      <div className="text-ijoMuda text-[14px] font-semibold py-2 px-4">
                        <button onClick={logout} className="hover:text-ijoTua">
                          Keluar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <button
                  className="items-center rounded-xl font-semibold text-lg px-4 py-2 text-ijoMuda"
                  onClick={() => navigate("/auth/login")}
                >
                  Masuk
                </button>

                <button
                  className="items-center rounded-xl font-semibold text-lg px-5 py-[9px] bg-ijoTua text-cream2"
                  onClick={() => navigate("/auth/register")}
                >
                  Daftar
                </button>
              </>
            )}
          </div>
          <div
            onClick={handleMenu}
            className="md:hidden cursor-pointer text-ijoTua top-10 z-50 justify-end flex"
          >
            {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
        {menu && (
          <div className="md:hidden">
            <ul className="py-5 text-lg space-y-3">
              {dataNav.map(({ name, linkMenu }) => (
                <div key={name}>
                  <NavLink to={linkMenu}>
                    <h1 className="py-5 px-2 cursor-pointer font-semibold text-ijoMuda hover:text-ijoTua hover:font-bold">
                      {name}
                    </h1>
                  </NavLink>
                </div>
              ))}
            </ul>
            <div className="py-5 flex gap-3">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center relative">
                      <img
                        src={ImgAvatar}
                        alt="img-profile"
                        draggable="false"
                        className="rounded-full w-8 cursor-pointer"
                        onClick={toggleDropdown}
                      />
                    </div>
                    <div>
                      <h1 className="text-ijoTua text-[14px] font-semibold">
                        Hi, IoTandur
                      </h1>
                    </div>
                    {isDropdownOpen && (
                      <div className="absolute w-[180px] top-[520px] md:top-24 md:right-10 bg-textCerah border border-gray-200 shadow-md rounded-lg ">
                        <div className="text-ijoMuda text-[14px] font-semibold py-2 px-4">
                          <button
                            onClick={logout}
                            className="hover:text-ijoTua"
                          >
                            Keluar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="items-center rounded-xl font-semibold text-lg px-4 py-2 text-ijoMuda"
                    onClick={() => navigate("/auth/login")}
                  >
                    Masuk
                  </button>

                  <button
                    className="items-center rounded-xl font-semibold text-lg px-5 py-[9px] bg-ijoTua text-cream2"
                    onClick={() => navigate("/auth/register")}
                  >
                    Daftar
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
