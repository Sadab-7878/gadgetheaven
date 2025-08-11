import React, { useState, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";

import cross from "../../assets/x-button.png";
import { CartContext } from "../CartContext";

import { GrSort } from "react-icons/gr";

import { ToastContainer, toast } from "react-toastify";
import success from "../../assets/success.png";
import { useNavigate } from "react-router";
import jsPDF from "jspdf";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  const { cartnaw, removecart, clearcart } = useContext(CartContext);
  const [sortedCart, setSortedCart] = useState(cartnaw);

  const navigate = useNavigate();

  const notify = () => toast.success("Delete Successfully");

  const totalcost = cartnaw.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + (isNaN(priceNumber) ? 0 : priceNumber);
  }, 0);

  const sortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      return priceA - priceB;
    });

    setSortedCart(sorted);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Purchase Receipt", 10, 10);
    doc.setFontSize(12);

    let y = 30;
    sortedCart.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} - ${item.price}`, 10, y);
      y += 10;
    });

    doc.text(`------------------------`, 10, y);
    y += 10;
    doc.text(`Total: $${totalcost.toFixed(2)}`, 10, y);
    doc.save("receipt.pdf");
  };

  const handlePurchase = () => {
    generatePDF();
    clearcart();

    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="h-[300px] bg-[#9538E2] text-center flex flex-col gap-8 pt-10 mt-5 px-4 md:px-10">
        <div>
          <p className="font-[700] text-[32px] sora-text text-white">
            Product Details
          </p>
        </div>

        <div>
          <p className="font-[400] text-[16px] sora-text text-white max-w-3xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories, we
            have it all!
          </p>
        </div>

        <div className="flex justify-center gap-5 flex-wrap">
          <button className="w-[200px] h-[50px] bg-white rounded-3xl sora-text hover:font-[700] text-[14px] text-violet-500 font-[500] cursor-pointer">
            Cart
          </button>
          <button className="border border-white hover:border-none w-[200px] h-[50px] rounded-3xl sora-text hover:font-[700] text-[14px] text-white font-[500] cursor-pointer hover:bg-black hover:text-violet-700">
            Wishlist
          </button>
        </div>
      </div>

      {/* Cart Header and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center m-6 md:m-12 gap-6 md:gap-0">
        <div>
          <p className="sora-text font-[700] text-[24px]">Cart</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <div>
            <p className="sora-text font-[700] text-[24px] text-center md:text-left">
              Total Cost: $
              {cartnaw.length === 0 ? "0.00" : totalcost.toFixed(2)}
            </p>
          </div>
          <div>
            <button
              onClick={sortByPrice}
              className="border border-[#9538E2] hover:border-none w-[180px] h-[50px] rounded-3xl sora-text text-[18px] text-[#9538E2] font-[600] cursor-pointer hover:bg-[#9538E2] hover:text-white flex justify-center items-center gap-2"
            >
              Sort By Price
              <GrSort />
            </button>
          </div>
          <div>
            {cartnaw.length === 0 ? (
              <button
                className="btn text-[18px] font-[600] sora-text w-[120px] h-[50px] rounded-3xl cursor-pointer bg-[#9538E2] text-white hover:bg-black"
                disabled
              >
                Purchase
              </button>
            ) : (
              <button
                className="btn text-[18px] font-[600] sora-text w-[120px] h-[50px] rounded-3xl cursor-pointer bg-[#9538E2] text-white hover:bg-black"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Purchase
              </button>
            )}

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box flex flex-col justify-center items-center">
                <img src={success} alt="success" className="w-[100px] py-4" />
                <h3 className="font-bold text-[24px] sora-text py-2">
                  Payment Successful
                </h3>
                <p className="py-2 sora-text">Thanks for purchasing</p>

                <p className="py-2 sora-text">
                  Total Cost: $
                  {cartnaw.length === 0 ? "0.00" : totalcost.toFixed(2)}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      onClick={handlePurchase}
                      className="btn w-full md:w-[450px] rounded-4xl h-[50px]"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      {/* Cart Items List */}
      <div className="px-4 md:px-0">
        {sortedCart.length === 0 ? (
          <p className="sora-text text-gray-400 text-5xl md:text-8xl text-center mt-20">
            Your cart is empty
          </p>
        ) : (
          sortedCart.map((item) => (
            <div
              key={item.id}
              className="
                relative 
                flex flex-col md:flex-row 
                justify-center md:justify-between 
                items-center md:items-start 
                w-full max-w-full md:max-w-[900px] lg:max-w-[1300px] 
                mx-auto mt-10 
                h-[300px] md:h-[220px] 
                rounded-2xl 
                px-4 md:px-10 
                shadow-lg 
                gap-4 md:gap-0
              "
            >
              {/* Remove Button: top-right with extra right spacing */}
              <img
                onClick={() => {
                  removecart(item.id);
                  notify();
                  setSortedCart(sortedCart.filter((p) => p.id !== item.id));
                }}
                src={cross}
                alt="cross"
                className="absolute top-2 right-5 w-7 h-7 md:w-[25px] md:h-[25px] cursor-pointer"
              />

              {/* Image and Info */}
              <div className="flex gap-5 items-center w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[150px] h-[150px] object-cover rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <p className="sora-text font-[600] text-[20px] md:text-[24px]">
                    {item.name}
                  </p>
                  <p className="sora-text font-[400] text-[14px] md:text-[18px] text-[#6B6B6E] max-w-xs md:max-w-md">
                    {item.description}
                  </p>
                  <p className="text-[18px] md:text-[20px] font-[600] sora-text">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ToastContainer />

      <Footer />
    </>
  );
};

export default Cart;
