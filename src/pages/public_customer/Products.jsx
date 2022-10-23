import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import Categories from "./Categories";
import NewArrivalAll from "../../components/new arrivals/NewArrivalAll";
import "./Product.css";
import SearchIcon from "@mui/icons-material/Search";
import SliderHome from "./Slider";
import Ndata from "../../components/new arrivals/Ndata";
import { useEffect, useState } from "react";
import ApiIndex from "../../api/index";

const Products = () => {

  const [productsList, setProductList] = useState([]);
  const [selectedCategory, setCategory] = useState('');

  useEffect( () => {
    syncProductsByCategory(selectedCategory);
  }, [selectedCategory]);



  
    const data = [
      {
        cateImg: "./category/cat1.png",
        cateName: "Beauty",
      },
      {
        cateImg: "./category/cat7.png",
        cateName: "Health & Beauty",
      },
      {
        cateImg: "./category/cat2.png",
        cateName: "Cell Phones & Accessories",
      },
      {
        cateImg: "./category/cat4.png",
        cateName: "Home & Garden",
      },
      {
        cateImg: "./category/cat3.png",
        cateName: "Appliances",
      },
  
      {
        cateImg: "./category/cat5.png",
        cateName: "Gifts",
      },
      {
        cateImg: "./category/cat6.png",
        cateName: "Music",
      },
  
      {
        cateImg: "./category/cat8.png",
        cateName: "Pets",
      },
      {
        cateImg: "./category/cat9.png",
        cateName: "Baby Toys",
      },
      {
        cateImg: "./category/cat10.png",
        cateName: "Groceries",
      },
      {
        cateImg: "./category/cat11.png",
        cateName: "Books",
      },
    ];

    const syncProductsByCategory = async (category) => {
      try {
          const response = await ApiIndex.ProductApi.getProductsByCategory(category);
          setProductList(response.data);
          console.log(productsList)
      }
      catch (error) {
          console.log(error);
      }
    };


    const handleCatClick = (category) => {
      try {
        setCategory(category);
       }
      catch (error) {
        console.error(error);
      }
    }

    



  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>

      <div className="mt-6 ml-3 mr-1">
        <center>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <center>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon
                  className="!h-5 !w-5 fill-slate-300"
                  viewBox="0 0 20 20"
                />
              </span>
            </center>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full pl-40 pr-40 border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search Your shops..."
              type="text"
              name="search"
            />
          </label>
        </center>
      </div>
      <div className="container d_flex">
        {/* <Categories /> */}

        <div className="category">
          {data.map((category, index) => {
            return (
              <div className="box f_flex" key={index} onClick={() => handleCatClick(category.cateName)}>
                <img src={category.cateImg} alt="" />
                <span>{category.cateName}</span>
              </div>
            );
          })}
        </div>

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

            <div className="content grid product">
              {productsList && productsList.map((val, index) => {
                return (
                  <div className="box" key={index}>
                    <div className="img">
                      <img src='./arrivals/arrivals1.png' alt="" />
                    </div>
                    <h4>{val.productName}</h4>
                    <span>Rs {val.price}</span>
                    <br></br>
                    <h6>{val.offer}</h6>
                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* <NewArrivalAll /> */}
      </div>

      <p className="text-xl text-center font-bold">
        Products you might Interested
      </p>
      <NewArrivalAll />

      {/* ----------------------------OTP------------------------------------------ */}
      {/* <div class="h-screen bg-blue-500 py-20 px-3">
                    <div class="container mx-auto">
                        <div class="max-w-sm mx-auto md:max-w-lg">
                            <div class="w-full">
                                <div class="bg-white h-64 py-3 rounded text-center">
                                    <h1 class="text-2xl font-bold">OTP Verification</h1>
                                    <div class="flex flex-col mt-4">
                                        <span>Enter the OTP you received at</span>
                                        <span class="font-bold">+91 ******876</span>
                                    </div>

                                    <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
                                        <input class="m-2 border h-10 w-25 text-center form-control rounded" type="text" id="first" maxlength="6" />

                                    </div>

                                    <div class="flex justify-center text-center mt-5">
                                        <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

      {/* --------------------------JS PART------------------------- */}
      {/* document.addEventListener("DOMContentLoaded", function(event) {

                function OTPInput() {
                    const inputs = document.querySelectorAll('#otp > *[id]');
                    for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
                } OTPInput(); }); */}

      {/* -------------------------END OTP----------------------------------------- */}

      <Footer />
    </div>
  );
};

export default Products;
