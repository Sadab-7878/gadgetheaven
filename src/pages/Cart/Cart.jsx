import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
  return (
    <>
      {/* 1  */}

      <Navbar />

      {/* 2 */}

      <div className="border h-[300px] bg-[#9538E2] text-center flex flex-col  gap-8 pt-10 mt-5">
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


      
    </>
  );
};

export default Cart;
