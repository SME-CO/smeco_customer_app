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
const Shops = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Search />
      <br></br>

      <ShopAll />
      {/* <Shop />
      <Shop /> */}

      <Footer />
    </div>
  );
};

export default Shops;
