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
import Discount from "../../components/discount/Discount";
import ShopAll from "../../components/shops/ShopAll";
import Search from "../../components/Search";
import SearchIcon from "@mui/icons-material/Search";
const Shops = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="mt-6 ml-3 mr-1">
        <center>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <center>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon
                  className="!h-5 !w-5 fill-slate-300"
                  viewBox="0 0 20 20"
                />
              </span>
            </center>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full pl-40 pr-40 border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search Your shops..."
              type="text"
              name="search"
            />
          </label>
        </center>
      </div>

      <br></br>

      <ShopAll />
      {/* <Shop />
      <Shop /> */}

      <Footer />
    </div>
  );
};

export default Shops;
