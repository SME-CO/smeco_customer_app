import React from "react";
import BundleCard from "./BundleCard";
import "../top/style.css";

const BundleOffers = () => {





  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
              <h2>Bundle Offers</h2>
            </div>
            <div className="heading-right row ">
              {/* <i className="fa-solid fa-caret-right"></i> */}
            </div>
          </div>
          <BundleCard />
        </div>
      </section>
    </>
  );
};

export default BundleOffers;
