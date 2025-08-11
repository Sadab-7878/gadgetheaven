import React, { useContext } from "react";
import { useParams } from "react-router";
import products from "../products.json";
import Navbar from "../../components/Navbar/Navbar";
import star from "../../assets/star.png";
import star_rating from "../../assets/star rating.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { CartContext } from "../CartContext";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addtocart, cartnaw } = useContext(CartContext);

  const notify = () => toast.success("Successfully added to Cart!");
  const notifyAlready = () => toast.info("Item is already in the cart!");

  if (!product) {
    return <p>Product not found</p>;
  }

  const exists = cartnaw.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (exists) {
      notifyAlready();
    } else {
      addtocart(product);
      notify();
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <div className="bg-[#9538E2] text-center flex flex-col gap-2 pt-10 mt-5 px-4 md:px-10 h-auto md:h-[300px]">
        <p className="font-[700] text-[24px] md:text-[32px] sora-text text-white">
          Product Details
        </p>
        <p className="font-[400] text-[14px] md:text-[16px] sora-text text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br className="hidden md:block" /> to the
          coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Card */}
      <div className="mt-10 max-w-[1200px] mx-auto rounded-2xl shadow-lg flex flex-col lg:flex-row items-center lg:items-start gap-10 p-4 md:p-8">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-lg w-full max-w-[350px] md:max-w-[424px] h-auto"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4 w-full">
          <p className="font-[600] text-[22px] md:text-[28px] sora-text">
            {product.name}
          </p>
          <p className="font-[600] text-[18px] md:text-[20px] sora-text">
            Price: {product.price}
          </p>

          {/* Stock Status */}
          <p
            className={`border-2 px-4 py-1 flex justify-center items-center rounded-3xl font-[500] text-[14px] sora-text w-fit ${
              product.stock === "In Stock"
                ? "border-[#17A34A] bg-[#DCFCE7] text-[#17A34A]"
                : "border-[#DC2626] bg-[#FEE2E2] text-[#DC2626]"
            }`}
          >
            {product.stock}
          </p>

          {/* Description */}
          <p className="font-[400] text-[16px] md:text-[18px] sora-text text-[#6B6B6E]">
            {product.description}
          </p>

          {/* Specs */}
          <p className="sora-text font-[700] text-[16px] md:text-[18px]">
            Specification:
          </p>
          <ul className="list-none font-[400] text-[16px] md:text-[18px] sora-text text-[#6B6B6E] space-y-1">
            {product.specifications.map((specs, index) => (
              <li key={index}>{specs}</li>
            ))}
          </ul>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <p className="font-[700] text-[16px] md:text-[18px] sora-text">
              Rating
            </p>
            <img src={star} alt="star" className="w-5 md:w-6" />
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <img
              src={star_rating}
              alt="star_rating"
              className="w-[150px] md:w-[200px]"
            />
            <div className="font-[500] text-[14px] sora-text w-12 md:w-14 h-10 flex justify-center items-center rounded-3xl bg-[#F8F8F8]">
              <p>{product.rating}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-2 cursor-pointer font-[700] text-[16px] md:text-[20px] h-[45px] md:h-[50px] justify-center rounded-3xl ${
                exists
                  ? "bg-[#bc89e5] text-white cursor-not-allowed w-[200px] md:w-[250px]"
                  : "bg-[#9538E2] text-white w-[180px] md:w-[200px]"
              }`}
            >
              {exists ? "Already Added" : "Add to Cart"}
              <AiOutlineShoppingCart size={22} className="md:size-6" />
            </button>

            <button className="border-2 text-[#A6ADBB] w-[45px] md:w-[50px] h-[45px] md:h-[50px] rounded-3xl border-black flex justify-center items-center">
              <IoMdHeartEmpty size={26} className="md:size-8" />
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default ProductDetails;
