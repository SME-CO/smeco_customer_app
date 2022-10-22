import React from "react";
import Cart2 from "./Cart2";
import "./style.css";

const NewArrivalAll = () => {
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
          </div>

          <Cart2 />
          <Cart2 />
          <Cart2 />
        </div>
      </section>
    </>
  );
};

export default NewArrivalAll;
