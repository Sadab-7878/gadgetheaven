import React from "react";
import Line from "../../assets/Line 1.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content rounded p-10 mt-32">
      {/* Top section */}
      <div className="flex flex-col items-center text-center gap-4">
        <p className="sora-text font-[700] text-[32px]">Gadget Heaven</p>
        <p className="sora-text font-[500] text-[16px] text-[#6B6B6E] max-w-xl">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      {/* Divider Image */}
      <div className="flex justify-center my-8">
        <img
          src={Line}
          alt="Line"
          className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px]"
        />
      </div>

      {/* Links section */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-10 md:gap-60 text-center md:text-left">
        {/* 1 */}
        <div className="flex flex-col gap-2 text-center">
          <span className="sora-text font-[700] text-[16px] text-[#C9CED7]">
            Services
          </span>
          {[
            "Product Support",
            "Order Tracking",
            "Shipping & Delivery",
            "Returns",
          ].map((item, idx) => (
            <span
              key={idx}
              className="sora-text font-[400] text-[16px] text-[#A6ADBB] hover:underline cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 2 */}
        <div className="flex flex-col gap-2 text-center">
          <span className="sora-text font-[700] text-[16px] text-[#C9CED7]">
            Company
          </span>
          {["About Us", "Careers", "Contact"].map((item, idx) => (
            <span
              key={idx}
              className="sora-text font-[400] text-[16px] text-[#A6ADBB] hover:underline cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-2 text-center">
          <span className="sora-text font-[700] text-[16px] text-[#C9CED7]">
            Legal
          </span>
          {["Terms of use", "Privacy policy", "Cookie policy"].map(
            (item, idx) => (
              <span
                key={idx}
                className="sora-text font-[400] text-[16px] text-[#A6ADBB] hover:underline cursor-pointer"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
