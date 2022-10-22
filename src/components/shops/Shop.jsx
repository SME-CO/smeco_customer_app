import React from "react";
import ShopCart from "./ShopCart";

const Shop = () => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/ios-filled/452/shop.png" />
              <h2>Top Shops</h2>
            </div>
            <div className="heading-right row ">
              <a href="/shops">
                <span>View all</span>
              </a>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <ShopCart />
        </div>
      </section>
    </>
  );
};

export default Shop;
