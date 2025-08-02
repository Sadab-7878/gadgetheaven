import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import banner from "../../assets/banner.jpg";
import productsdata from "../products.json";

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
    <>
      <div className="border w-[1400px] mx-auto mt-10   h-[700px] bg-[#9538E2] rounded-2xl">
        <Navbar />

        <div className="text-center">
          <p className="sora-text text-[56px] font-[700] text-white  mt-10">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </p>

          <p className="sora-text text-[20px] font-[400] text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories, we
            have it all!
          </p>

          <button className="font-[700] sora-text text-[20px] bg-white text-[#9538E2] px-6 py-3 mt-10 rounded-md border border-black">
            Shop Now
          </button>
        </div>

        <div className=" w-[1200px] h-[700px] mx-auto mt-10 bg-gradient-to-b from-white to-[#F6F6F6] rounded-4xl flex justify-center items-center">
          <img
            src={banner}
            alt="banner"
            className="w-[1100px] h-[600px] rounded-3xl"
          />
        </div>

        {/* products  */}
        <div className="my-40 mx-10 flex gap-20 ">
          {/* 1 */}
          <div className="shadow-lg w-[350px] rounded-lg mb-10">
            <div className="flex flex-col gap-5 justify-center items-center p-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="cursor-pointer  w-64 h-14 rounded-lg bg-[#F6F6F6] sora-text font-[500] text-[18px]"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* 2 */}
          <div className="grid grid-cols-3 gap-20 mb-10">
            {filteredProducts.map((product) => (
              <div
                className="shadow-lg w-[300px] h-[400px] rounded-2xl flex flex-col p-5 gap-5"
                key={product.id}
              >
                <div className="w-full flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[300px] h-[130px] rounded-2xl"
                  />
                </div>

                <div className="font-[600] text-[24px] sora-text min-h-[64px]">
                  {product.name}
                </div>
                <div className="font-[500] text-[16px] sora-text text-[#6B6B6E]">
                  Price: {product.price}
                </div>

                <div className="mt-auto">

               

                <button className="border border-[#9538E2] w-[170px] h-[50px] rounded-lg text-[#9538E2] font-[600] text-[18px] sora-text hover:bg-[#F6F6F6] hover:border-none cursor-pointer">
                  View Details
                </button>

                 </div>
              </div>
            ))}
          </div>

          
        </div>


        
      </div>
    </>
  );
};

export default Home;
