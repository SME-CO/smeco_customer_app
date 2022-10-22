import React from "react";
import Navbarr from "../../components/Navbarr";
import SideNavr from "../../components/SideNavr";
import img1 from "../../assets/furniture mart.png";
import img3 from "../../assets/shoe palace.png";
import img4 from "../../assets/your choice.png";
import img5 from "../../assets/Glitters.png";
import img6 from "../../assets/Unlimited.png";
import img7 from "../../assets/Stylish mart.png";
import ShopAll from "../../components/shops/ShopAll";

const CustomerShops = () => {
  return (
    <div>
      <Navbarr />
      <div className="pt-24 md:ml-60">
        <ShopAll />
      </div>

      <SideNavr />
    </div>
  );
};

export default CustomerShops;
