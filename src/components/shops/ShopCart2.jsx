import React from "react";

import Sdata from "./Sdata";

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
                <span>{value.city}</span> <br></br>
                Offer:
                <span>{value.offer}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ShopCart2;
