

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import banner from "../../assets/banner.jpg";
import productsdata from "../products.json";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router";

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(productsdata);

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredProducts(productsdata);
    } else {
      setFilteredProducts(productsdata.filter((p) => p.category === activeTab));
    }
  }, [activeTab]);

  const tabs = ["all", "smartphone", "drone", "laptop", "audio", "wearable"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#9538E2]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-10">
          <Navbar />
          <div className="text-center mt-10">
            <h1 className="sora-text text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight">
              Upgrade Your Tech Accessorize with{" "}
              <br className="hidden md:block" /> Gadget Heaven Accessories
            </h1>
            <p className="sora-text text-sm sm:text-base md:text-lg lg:text-[20px] text-white mt-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Link to={"/cart"}>
              <button className="font-bold sora-text text-base md:text-lg bg-white text-[#9538E2] px-6 py-3 mt-8 rounded-md cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Banner */}
          <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-b from-white to-[#F6F6F6] rounded-3xl p-4">
            <img
              src={banner}
              alt="banner"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          Explore Cutting-Edge Gadgets
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Tabs */}
          <div className="shadow-md w-full lg:w-[250px] rounded-lg bg-white p-6">
            <div className="flex flex-wrap lg:flex-col gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer w-full h-12 rounded-lg sora-text font-medium text-lg capitalize ${
                    activeTab === tab
                      ? "bg-[#9538E2] text-white"
                      : "bg-[#F6F6F6] text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            {filteredProducts.map((product) => (
              <div
                className="shadow-md rounded-2xl flex flex-col p-5 gap-5 bg-white"
                key={product.id}
              >
                <div className="w-full flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[130px] rounded-2xl object-contain"
                  />
                </div>

                <div className="font-semibold text-lg md:text-xl sora-text min-h-[64px]">
                  {product.name}
                </div>
                <div className="font-medium text-sm md:text-base sora-text text-[#6B6B6E]">
                  Price: {product.price}
                </div>

                <Link to={`/product/${product.id}`} className="mt-auto">
                  <button className="border border-[#9538E2] w-full h-[45px] rounded-lg text-[#9538E2] font-semibold text-base sora-text hover:bg-[#F6F6F6]">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
