import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../pages/public_customer/modal";
import ApiIndex from "../../api/index";
import merchants from "../../api/merchants";
// import "../newarrivals/style.css";

const Dcard = () => {
  const [products, setProducts] = useState([]);
  let { merchantId } = useParams();

  useEffect(() => {
    getMerchantProducts();
 },[]);

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


  const settings = {
    // dots: false,
    centerMode: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: false,
  };
  return (
    <>
      <Slider {...settings}>
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
      </Slider>
    </>
  );
};

export default Dcard;
