import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShopIcon from "@mui/icons-material/StoreMallDirectory";
import ProductIcon from "@mui/icons-material/LocalMall";
import PurchaseIcon from "@mui/icons-material/LocalOffer";


function SideNavr() {
  const [profileLabel, setprofileLabel] = useState(false);
  const [bookingLabel, setBookingLabel] = useState(false);
  const [appointmentLabel, setAppointmentLabel] = useState(false);
  const [chatLabel, setChatLabel] = useState(false);

  const handleLabel = (id) => {
    switch (id) {
      case 2:
        setprofileLabel(!profileLabel);
        break;
      case 3:
        setBookingLabel(!bookingLabel);
        break;
      case 4:
        setAppointmentLabel(!appointmentLabel);
        break;
      case 5:
        setChatLabel(!chatLabel);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative z-10">
      <div className="hidden md:block fixed bg-transparent min-h-screen left-0 top-14 flex-col w-20">
        <div className=" md:mt-0 flex flex-col items-center border-2 w-full h-screen py-12 border-none bg-[#03045E]">
          <div className="relative inline-flex items-center mb-5 ">
            <NavLink
              to="/dashboard"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(2)}
              onMouseLeave={() => handleLabel(2)}
            >
              <DashboardIcon className="!w-12 !h-12 text-[#03045E]  bg-white hover:scale-110 !rounded-full p-3" /> 
            </NavLink>

            <span
              className={
                profileLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-[#03045E] text-white"
                  : "hidden"
              }
            >
              Dashboard
            </span>
          </div>

          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/customerShops"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(3)}
              onMouseLeave={() => handleLabel(3)}
            >
              <ShopIcon className="!w-12 !h-12 text-[#03045E]  bg-white hover:scale-110 !rounded-full p-3" />
            </NavLink>

            <span
              className={
                bookingLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-[#03045E] text-white"
                  : "hidden"
              }
            >
              Shops
            </span>
          </div>
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/customerProducts"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(4)}
              onMouseLeave={() => handleLabel(4)}
            >
              <ProductIcon className="!w-12 !h-12 text-[#03045E]  bg-white hover:scale-110  !rounded-full p-3" />
            </NavLink>

            <span
              className={
                appointmentLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-[#03045E] text-white"
                  : "hidden"
              }
            >
              Products
            </span>
          </div>
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/customerPurchase"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(5)}
              onMouseLeave={() => handleLabel(5)}
            >
              <PurchaseIcon className="!w-12 !h-12 text-[#03045E]  bg-white hover:scale-110 !rounded-full p-3" />
            </NavLink>

            <span
              className={
                chatLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-[#03045E] text-white"
                  : "hidden"
              }
            >
              Purchase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavr;