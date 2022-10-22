import React from "react";
import Navbar from "../../components/Navbar";
import watch1 from "../../assets/watch1.jpg";
import bottle1 from "../../assets/bottle1.jpg";
import shoe1 from "../../assets/shoe1.jpg";
import phncvr1 from "../../assets/phonecvr1.jpg";
import mnypurse1 from "../../assets/moneypurse.jpg";
import hndbag1 from "../../assets/handbag1.jpg";
import pencilcase1 from "../../assets/pencilcase1.jpg";
import grinder1 from "../../assets/grinder1.jpg";
import clock1 from "../../assets/clock1.jpg";
import watch2 from "../../assets/watch2.jpg";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Categories from "./Categories";
import NewArrivalAll from "../../components/new arrivals/NewArrivalAll";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";

const Products = () => {
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

      <Categories />
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
