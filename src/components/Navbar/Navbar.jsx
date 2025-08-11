

import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const textColorClass = isHomePage ? "text-white" : "text-black";
  const activeTextColorClass = isHomePage ? "text-white" : "text-black";
  const isborderclass = isHomePage
    ? "hover:border-2 hover:border-white"
    : "border-2 border-black";

  const navLinks = (
    <>
      <NavLink
        to={"/"}
        onClick={() => setMenuOpen(false)}
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
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? `sora-text text-[16px] font-[500] ${activeTextColorClass}`
            : `sora-text text-[16px] font-[500] ${textColorClass}`
        }
      >
        Statistics
      </NavLink>
      <NavLink
        to={"/cart"}
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? `sora-text text-[16px] font-[500] ${activeTextColorClass}`
            : `sora-text text-[16px] font-[500] ${textColorClass}`
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  const cartIcons = (
    <>
      <Link
        to={"/cart"}
        onClick={() => setMenuOpen(false)}
        className={`w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white hover:bg-transparent cursor-pointer ${isborderclass}`}
      >
        <MdOutlineShoppingCart className="text-[26px]" />
      </Link>
      <div
        className={`w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white hover:bg-transparent cursor-pointer ${isborderclass}`}
      >
        <IoIosHeartEmpty className="text-[26px]" />
      </div>
    </>
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 mt-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <p className={`sora-text text-[20px] font-[700] ${textColorClass}`}>
            Gadget Heaven
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">{navLinks}</div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5">{cartIcons}</div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden ${textColorClass}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-6">
          <div className="flex flex-col gap-4">{navLinks}</div>
          <div className="flex gap-4">{cartIcons}</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
