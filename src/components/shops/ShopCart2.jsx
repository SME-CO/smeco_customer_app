import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Sdata from "./Sdata";
// import "../newarrivals/style.css"

const ShopCart2 = () => {
  return (
    <>
      <div className="content grid product">
        {Sdata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={value.cover} alt="" width="100%" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ShopCart2;
