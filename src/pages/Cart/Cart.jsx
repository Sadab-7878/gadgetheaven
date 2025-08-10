import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import pic1 from "../../assets/all-screen-colorful-smartphone-isolated-3d-render_118047-1527.jpg.jpeg";

import cross from "../../assets/x-button.png";
import { useContext } from "react";
import { CartContext } from "../CartContext";

import { ToastContainer, toast } from "react-toastify";
const Cart = () => {
  const { cartnaw, removecart } = useContext(CartContext);

  const notify = () => toast.success("Delete Successfully");

  return (
    <>
      {/* 1  */}

      <Navbar />

      {/* 2 */}

      <div className=" h-[300px] bg-[#9538E2] text-center flex flex-col  gap-8 pt-10 mt-5">
        <div>
          <p className="font-[700] text-[32px] sora-text text-white">
            Product Details
          </p>
        </div>

        <div>
          <p className="font-[400] text-[16px] sora-text text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories, we
            have it all!
          </p>
        </div>

        <div className="flex justify-center gap-5">
          <button className="border  w-[200px] h-[50px] bg-white rounded-3xl sora-text hover:font-[700] text-[14px] text-violet-500 font-[500] cursor-pointer">
            Cart
          </button>
          <button className="border border-black w-[200px] h-[50px]  rounded-3xl sora-text hover:font-[700] text-[14px] text-white font-[500] cursor-pointer hover:bg-black hover:text-violet-700">
            Wishlist
          </button>
        </div>
      </div>

      {/* 3 */}

      {/* 4 */}

      <div>
        {cartnaw.length === 0 ? (
          <p className="sora-text text-gray-400 text-8xl text-center mt-20">
            Your cart is empty
          </p>
        ) : (
          cartnaw.map((item) => (
            <div
              key={item.id}
              className="flex justify-between  w-[1300px] mx-auto mt-10   h-[220px]  rounded-2xl px-10 shadow-lg"
            >
              {/* 1 */}
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[150px] h-[150px]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="sora-text font-[600] text-[24px]">
                    {item.name}
                  </p>
                  <p className="sora-text font-[400] text-[18px] text-[#6B6B6E]">
                    {item.description}
                  </p>
                  <p className="text-[20px] font-[600] sora-text">
                    {item.price}
                  </p>
                </div>
              </div>

              {/* 2 */}

              <div className="mt-5">
                <img
                  onClick={() => {
                    removecart(item.id);
                    notify();
                  }}
                  src={cross}
                  alt="cross"
                  className="w-[25px] h-[25px] cursor-pointer"
                />
              </div>
            </div>
          ))
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Cart;
