import React from "react";
import ShopCartPublic from "./ShopCartPublic";

const ShopAllPublic = () => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/ios-filled/452/shop.png" />
              <h2>Our Shops</h2>
            </div>

            <div className="heading-right row ">
              {/* <i className="fa-solid fa-caret-right"></i> */}
            </div>
          </div>
          <a href="/products">
            <ShopCartPublic />
          </a>
        </div>
      </section>
    </>
  );
};

export default ShopAllPublic;
