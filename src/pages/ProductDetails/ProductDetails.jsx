import React from "react";
import { useParams } from "react-router";
import products from "../products.json";
import Navbar from "../../components/Navbar/Navbar";
import star from '../../assets/star.png';
import star_rating from '../../assets/star rating.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";


const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {/* 1 */}
      <div>
        <Navbar />
      </div>

      {/* 2 */}

      <div className="border h-[300px] bg-[#9538E2] text-center flex flex-col  gap-2 pt-10 mt-5">
        <p className="font-[700] text-[32px] sora-text text-white">
          Product Details
        </p>
        <p className="font-[400] text-[16px] sora-text text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br /> to the coolest accessories, we have
          it all!
        </p>
      </div>

      {/* 3 */}

      <div className=" mt-10 h-[600px] w-[1200px] rounded-2xl shadow-lg mx-auto flex items-center pl-10 gap-10">
        {/* 1 */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-[424.31px] h-[503px] rounded-2xl shadow-lg"
          />
        </div>

        {/* 2 */}

        <div className="flex flex-col gap-4">
          <p className="font-[600] text-[28px] sora-text">{product.name}</p>
          <p className="font-[600] text-[20px] sora-text">
            Price: {product.price}
          </p>

          <p
            className={`border-2 w-20 h-8 flex flex-col justify-center items-center rounded-3xl font-[500] text-[14px] sora-text ${
              product.stock === "In Stock"
                ? "border-[#17A34A] bg-[#DCFCE7] text-[#17A34A]"
                : "border-[#DC2626] bg-[#FEE2E2] w-28 text-[#DC2626]"
            }`}
          >
            {product.stock}
          </p>

          <p className="font-[400] text-[18px] sora-text text-[#6B6B6E]">
            {product.description}
          </p>

          <p className="sora-text font-[700] text-[18px]">Specification:</p>

          <ul className="list-none font-[400] text-[18px] sora-text text-[#6B6B6E]">
            {product.specifications.map((specs, index) => (
              <li key={index}>{specs}</li>
            ))}
          </ul>

          <div className="flex  items-center gap-2">
            <p className="font-[700] text-[18px] sora-text">Rating</p>
            <img src={star} alt="star" className="w-6"/>
          </div>

          <div className="flex items-center gap-5">
            <img src={star_rating} alt="star_rating" className="w-[200px]"/>

            <div className="font-[500] text-[14px] sora-text w-14 h-10 flex justify-center items-center rounded-3xl bg-[#F8F8F8]">
              <p>{product.rating}</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 cursor-pointer font-[700] text-[20px] border w-[200px] h-[50px] justify-center rounded-3xl bg-[#9538E2] text-white sora-text">Add to Cart<AiOutlineShoppingCart size={25}/></button>

            <button className="border-2 text-[#A6ADBB] w-[50px] h-[50px] rounded-3xl border-black flex flex-col justify-center items-center"><IoMdHeartEmpty size={30}/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
