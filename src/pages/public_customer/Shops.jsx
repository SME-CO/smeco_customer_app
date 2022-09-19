import React from "react";
import Navbar from "../../components/Navbar";
// import starImg from "../../assets/5star2.jpg";
import Footer from "../../components/Footer";
import img1 from "../../assets/furniture mart.png";
import img3 from "../../assets/shoe palace.png";
import img4 from "../../assets/your choice.png";
import img5 from "../../assets/Glitters.png";
import img6 from "../../assets/Unlimited.png";
import img7 from "../../assets/Stylish mart.png";

const Shops = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <p className="text-3xl text-center font-bold">Our Registered Shops</p>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 pt-4">
          <div>
            <img
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]"
              src={img1}
              alt="/"
            />
            <p className="text-2xl py-8 text-center font-bold">
              Furniture Mart
            </p>
          </div>

          <div>
            <img
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]"
              src={img3}
              alt="/"
            />
            <p className="text-2xl py-8 text-center font-bold">Shoe Palace</p>
          </div>

          <div>
            <img
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]"
              src={img5}
              alt="/"
            />
            <p className="text-2xl py-8 text-center font-bold">Glitters</p>
          </div>

          <div>
            <img
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]"
              src={img6}
              alt="/"
            />
            <p className="text-2xl py-8 text-center font-bold">Fashion Wings</p>
          </div>

          <div>
            <img
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]"
              src={img7}
              alt="/"
            />
            <p className="text-2xl py-8 text-center font-bold">Stylish</p>
          </div>

          <div>
            <img
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]"
              src={img4}
              alt="/"
            />
            <p className="text-2xl py-8 text-center font-bold">Your Choice</p>
          </div>

          <div>
            <img
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]"
              src={img1}
              alt="/"
            />
            <p className="text-2xl py-8 text-center font-bold">
              Choice of Furniture
            </p>
          </div>

          <div>
            <img
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]"
              src={img5}
              alt="/"
            />
            <p className="text-2xl py-8 text-center font-bold">Glitter world</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shops;
