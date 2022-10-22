import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../pages/public_customer/modal";
import "../new arrivals/style.css";
import "../top/style.css";
import ApiIndex from "../../api/index";
import merchants from "../../api/merchants";

const Dcard = () => {
  const [products, setProducts] = useState([]);
  let { merchantId } = useParams();

  useEffect(() => {
    getMerchantProducts();
  }, []);

  const getMerchantProducts = async () => {
    try {
      const response = await ApiIndex.ProductApi.getProductsByMerchant(merchantId);
      setProducts(response.data);
      console.log(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="content grid product">
        {products.map((product, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <div className="nametop d_flex">
                    <span className="tleft">{product.discountPercentage}%</span>
                  </div>
                  <img src='/discount/discount-2.png' alt="" width="100%" />
                </div>
                <h4>{product.productName}</h4>
                <span>Rs. {product.price}</span>
                <h4>{product.Shop}</h4>
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
