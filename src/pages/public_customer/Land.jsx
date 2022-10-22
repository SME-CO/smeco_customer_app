import React from "react";
import Navbar from "../../components/Navbar";
import saleImg from "../../assets/sale.png";
import heroImg from "../../assets/hero.png";
import loyalImg2 from "../../assets/loyalty2.png";
import dollarImg from "../../assets/dollar.jpg";
import starImg from "../../assets/5star2.jpg";
import strImg from "../../assets/5star3.jpg";
import logoImg from "../../assets/logo.png";
import SliderHome from "./Slider";
import "./Home.css";
import FlashDeals from "../../components/flashdeals/FlashDeals";
import Wrapper from "../../components/wrapper/Wrapper";
import Discount from "../../components/discount/Discount";
import NewArrivals from "../../components/new arrivals/NewArrivals";
import Shop from "../../components/shops/Shop";
import TopCate from "../../components/top/TopCate";
import {
  AiTwotoneShop,
  AiOutlinePercentage,
  AiFillGift,
  AiTwotoneGift,
} from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import Footer from "../../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./modal";

<link
  rel="stylesheet"
  href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
/>;

const Land = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <div className="w-full">
      <Navbar />
      <br></br>

      {/* <Carousel>
        <div>
          <img src={saleImg} />
        </div>
        <div>
          <img src={cover4} />
        </div>
        <div>
          <img src={cover1} />
        </div>
      </Carousel> */}
      <section className="home">
        <div className="container d_flex">
          <SliderHome />
        </div>
      </section>
      <div>
        <div className="max-w-[1240px] mx-auto flex md:flex-cols-2 py-16 px-4">
          <div className="flex flex-col justify-center">
            <p className="text-5xl font-bold">
              MAKE A CUSTOMER
              <br />
              NOT A SALE{" "}
            </p>
            <p className="text-2xl">
              <br />
              Do you worry about missing the offers and deals
              <br />
            </p>
            <p className="text-2xl">
              that are provided by the SME’s?.
              <br />
            </p>
            <p className="text-2xl font-bold text-[#FF8C32]">
              Sign up with SMECO today!.
              <br />
            </p>
            <p className="text-2xl">
              You will get the notifications of offers
              <br />
            </p>
            <p className="text-2xl">our merchants.</p>
            <br />
            <a href="/signup">
              <button className="border-none w-[200px] px-3 py-3">
                View More
              </button>
            </a>
          </div>
          <div>
            <img className="w-[500px] mx-auto my-4" src={heroImg} alt="/" />
          </div>
        </div>

        <Wrapper />

        {/* -----------------------------------------The 04 boxes---------------------------------------------- */}
        <div className="max-w-[1240px] mx-auto flex md:flex-cols-4 gap-8 pt-8">
          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem]" src={logoImg} alt="" />
            <h2 className="text-2xl font-bold text-center py-8">Shops</h2>
            <AiTwotoneShop className="mx-auto fill-[#03045E]" size="3rem" />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Rated Shops</p>
              <p className="py-2 border-b mx-8">Qualified Merchants</p>
            </div>
            <center>
              <a href="/shops">
                <button className="border-none my-6 mx-auto px-5 py-2">
                  More for you
                </button>
              </a>
            </center>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-100">
            <img className="w-20 mx-auto mt-[-3rem]" src={logoImg} alt="" />
            <h2 className="text-2xl font-bold text-center py-8">Products</h2>
            {/* <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/344/external-products-user-interface-vol-3-prettycons-lineal-prettycons.png"></img> */}
            <MdProductionQuantityLimits
              className="mx-auto  fill-[#03045E]"
              size="3rem"
            />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Rated Products</p>
              <p className="py-2 border-b mx-8">Quality Products</p>
            </div>
            <center>
              <a href="/products">
                <button className="border-none my-6 mx-auto px-5 py-2">
                  More for you
                </button>
              </a>
            </center>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem]" src={logoImg} alt="" />
            <h2 className="text-2xl font-bold text-center py-8">
              Discounts & Offers
            </h2>
            <AiOutlinePercentage
              className="mx-auto  fill-[#03045E]"
              size="3rem"
            />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Awesome offers</p>
              <p className="py-2 border-b mx-8">At your door step</p>
            </div>
            <center>
              <a href="/discounts">
                <button className="border-none my-6 mx-auto px-5 py-2">
                  More for you
                </button>
              </a>
            </center>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-100">
            <img className="w-20 mx-auto mt-[-3rem]" src={logoImg} alt="" />
            <h2 className="text-2xl font-bold text-center py-8">Rewards</h2>
            <AiTwotoneGift className="mx-auto  fill-[#03045E]" size="3rem" />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Attractive Rewards</p>
              <p className="py-2 border-b mx-8">In one click</p>
            </div>
            <center>
              <a href="/rewards">
                <button className="border-none my-6 mx-auto px-5 py-2">
                  More for you
                </button>
              </a>
            </center>
          </div>
        </div>
        {/* ---------------------------4boxes End-------------------------------------------- */}
        {/* <div className="max-w-[1240px] mx-auto flex md:flex-cols-2 pt-8">
          <img className="w-[350px] mx-auto my-4" src={strImg} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold">
              TOP RATED SHOPS
              <br />
            </p>
            <p className="text-1xl font-bold text-[#FF8C32]">Join with SMECO</p>
            <p>
              An online platform to reach out the Small and medium enterprises
            </p>
            <p>which provide attractive offers, deals and discounts.</p>
            <p className="text-2xl font-bold">Don’t get yourself late!!!</p>
            <br />
            <button className="border-none w-[150px] px-1 py-2">
              View More
            </button>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto flex md:flex-cols-2">
          <img className="w-[350px] mx-auto my-4" src={starImg} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold">
              TOP RATED PRODUCTS
              <br />
            </p>
            <p className="text-1xl font-bold text-[#FF8C32]">Join with SMECO</p>
            <p>
              An online platform to reach out the Small and medium enterprises
            </p>
            <p>which provide attractive offers, deals and discounts.</p>
            <p className="text-2xl font-bold">Don’t get yourself late!!!</p>
            <br />
            <button className="border-none w-[150px] px-1 py-2">
              View More
            </button>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto flex md:flex-cols-2">
          <img className="w-[350px] mx-auto my-4" src={dollarImg} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold">
              Awesome OFFERS
              <br />
            </p>
            <p className="text-1xl font-bold text-[#FF8C32]">Join with SMECO</p>
            <p>
              An online platform to reach out the Small and medium enterprises
            </p>
            <p>which provide attractive offers, deals and discounts.</p>
            <p className="text-2xl font-bold">Don’t get yourself late!!!</p>
            <br />
            <button className="border-none w-[150px] px-1 py-2">
              View More
            </button>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto flex md:flex-cols-2">
          <img className="w-[350px] mx-auto my-4" src={loyalImg2} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold">
              Awesome Discounts & Rewards
              <br />
            </p>
            <p className="text-1xl font-bold text-[#FF8C32]">Join with SMECO</p>
            <p>
              An online platform to reach out the Small and medium enterprises
            </p>
            <p>which provide attractive offers, deals and discounts.</p>
            <p className="text-2xl font-bold">Don’t get yourself late!!!</p>
            <br />
            <button className="border-none w-[150px] px-1 py-2">
              View More
            </button>
          </div>
        </div> */}
      </div>

      <Discount />
      <TopCate />
      <NewArrivals />
      <Shop />

      <Footer />
    </div>
  );
};

export default Land;
