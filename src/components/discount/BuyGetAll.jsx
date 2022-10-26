import React from "react";
import Dcard2 from "./Dcard2";
import "../top/style.css";
import BuyGetCard from "./BuyGetCard";

const BuyGetAll = () => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
              <h2>Buy Get Offers</h2>
            </div>
            <div className="heading-right row ">
              {/* <i className="fa-solid fa-caret-right"></i> */}
            </div>
          </div>
          <BuyGetCard />
        </div>
      </section>
    </>
  );
};

export default BuyGetAll;
