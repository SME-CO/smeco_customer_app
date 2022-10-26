import React from "react";
import ApiIndex from "../../api/index";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"


const ShopCartPublic = () => {
  const [merchants, setMerchants] = useState([]);
  const navigate = useNavigate();

  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    rows: 2,
    slidesPerRow: 1
  };

  useEffect(() => {
     getMerchants();
  },[]);

  const getMerchants = async () => {
    try {
        const response = await ApiIndex.MerchantApi.getMerchants();
        setMerchants(response.data);
        console.log(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  const handleClick = (id) => {
    // navigate(`/customerProducts/${id}`)
    return false;
  }

  
  return (
    <>
     <div className="content grid product">
        {merchants.map((merchant, index) => {
          return (
            <>
              <a href="#" onClick={() => handleClick(merchant.id)}>
                <div className="box product" key={index}>
                  <div className="img">
                    <img src={`./shop/${merchant.shopImage}`} alt="" width="100%" />
                  </div>
                  <br />
                  <h4>{merchant.shopName}</h4>
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ShopCartPublic;
