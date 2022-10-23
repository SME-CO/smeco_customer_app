import React from "react";
import "./style.css";
import TopCart from "./TopCart";

const TopCate = () => {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <i className="fa-solid fa-border-all"></i>
              {/* <img
                src="https://img.icons8.com/fluency-systems-regular/344/medal--v1.png"
                height="50px"
                width="50px"
              ></img> */}
              <h2>Top Rewards</h2>
            </div>
            <div className="heading-right row ">
              <a href="/rewards">
                <span>View all</span>
              </a>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCate;
