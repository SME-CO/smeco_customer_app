import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>New Arrival Products </h2>
            </div>
            <div className="heading-right row ">
              <i className="fa-solid fa-caret-right"></i>
            </div>

            <a href="/products">
              <span>View all</span>
            </a>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
