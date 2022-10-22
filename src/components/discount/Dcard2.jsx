import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "./style.css";
import Modal from "../../pages/public_customer/modal";
import "../new arrivals/style.css";
import "../top/style.css";
const Dcard = () => {
  return (
    <>
      <div className="content grid product">
        {Ddata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <div className="nametop d_flex">
                    <span className="tleft">{value.offer}</span>
                  </div>
                  <img src={value.cover} alt="" width="100%" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
                <h4>{value.Shop}</h4>
                <Modal />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Dcard;
