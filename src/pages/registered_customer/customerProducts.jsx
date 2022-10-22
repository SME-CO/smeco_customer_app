import React from "react";
import Navbarr from "../../components/Navbarr";
import SideNavr from "../../components/SideNavr";
import watch1 from "../../assets/watch1.jpg";
import bottle1 from "../../assets/bottle1.jpg";
import shoe1 from "../../assets/shoe1.jpg";
import phncvr1 from "../../assets/phonecvr1.jpg";
import mnypurse1 from "../../assets/moneypurse.jpg";
import hndbag1 from "../../assets/handbag1.jpg";
import pencilcase1 from "../../assets/pencilcase1.jpg";
import grinder1 from "../../assets/grinder1.jpg";
import clock1 from "../../assets/clock1.jpg";
import watch2 from "../../assets/watch2.jpg";
import DiscountAll from "../../components/discount/DiscountAll";

const CustomerProducts = () => {
  return (
    <div>
      <Navbarr />
      <div className="pt-24 md:ml-60">
        <DiscountAll />
        <DiscountAll />
      </div>
      <SideNavr />
    </div>
  );
};

export default CustomerProducts;
