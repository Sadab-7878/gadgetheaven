import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const textColorClass = isHomePage ? "text-white" : "text-black";

  const activeTextColorClass = isHomePage ? "text-white" : "text-black";

  const isborderclass = isHomePage
    ? "hover:border-2 hover:border-white"
    : "border-2 border-black";

  return (
    <>
      <div className="flex justify-evenly items-center mt-10 ">
        {/* Logo  */}
        <div>
          <Link to={"/"}>
            <p className={`sora-text text-[20px] font-[700] ${textColorClass}`}>
              Gadget Heaven
            </p>
          </Link>
        </div>

        {/* Nav Items  */}
        <div className="flex gap-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? `underline sora-text text-[16px] font-[500] ${activeTextColorClass}`
                : `sora-text text-[16px] font-[500] ${textColorClass}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/statistics"}
            className={({ isActive }) =>
              isActive
                ? `sora-text text-[16px] font-[500]  ${activeTextColorClass}`
                : `sora-text text-[16px] font-[500] ${textColorClass}`
            }
          >
            Statistics
          </NavLink>

          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? `sora-text text-[16px] font-[500]  ${activeTextColorClass}`
                : `sora-text text-[16px] font-[500] ${textColorClass}`
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* Cart */}
        <div className="flex gap-5">
          <Link
            to={"/cart"}
            className={`w-[60px] h-[60px] flex flex-col items-center justify-center rounded-full bg-white hover:bg-transparent cursor-pointer  ${isborderclass}`}
          >
            <MdOutlineShoppingCart className="text-[30px]" />
          </Link>
          <div
            className={`w-[60px] h-[60px] flex flex-col items-center justify-center rounded-full bg-white hover:bg-transparent cursor-pointer  ${isborderclass}`}
          >
            <IoIosHeartEmpty className="text-[30px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
