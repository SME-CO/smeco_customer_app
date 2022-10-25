import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShopIcon from "@mui/icons-material/StoreMallDirectory";
import ProductIcon from "@mui/icons-material/LocalMall";
import PurchaseIcon from "@mui/icons-material/LocalOffer";
import RecordIcon from "@mui/icons-material/History";
import AccountIcon from "@mui/icons-material/AccountCircle";
import SignoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import QueriesIcon from "@mui/icons-material/MarkUnreadChatAlt";
import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";

function SideNavr() {
  return (
    <div className="hidden md:block fixed min-h-screen left-0 top-14 flex-col">
      <aside class="w-35" aria-label="Sidebar">
        <div class="overflow-y-auto py-1 px-1 bg-[#03045E] rounded dark:bg-gray-800 hover:scale-100">
          <ul class="space-y-2 pt-7">
            <li>
              <img
                className="w-20 mx-auto mt-[-3rem] pt-3"
                src={logoImg}
                alt=""
              />
              <p class="flex items-center p-4 pb-5 text-base font-normal text-[#FF8C32] rounded-lg h-12 dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <DashboardIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link
                  className="ml-0.5 font-bold pl-3 text-[#FF8C32]"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </p>
              <p class="flex items-center p-4 pb-5  text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <ShopIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link
                  className="ml-0.5 font-bold pl-3 text-[#FF8C32]"
                  to="/customerShops"
                >
                  Shops
                </Link>
              </p>
              <p class="flex items-center p-4  pb-5 text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <ProductIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link
                  className="ml-0.5 font-bold pl-3 text-[#FF8C32]"
                  to="/customerProducts"
                >
                  Products
                </Link>
              </p>
              <p class="flex items-center p-4  pb-5 text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <PurchaseIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link
                  className="ml-0.5 font-bold pl-3 text-[#FF8C32]"
                  to="/customerPurchases"
                >
                  Purchase
                </Link>
              </p>
              <p class="flex items-center p-4  pb-5 text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <RecordIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link
                  className="ml-0.5 font-bold pl-3 text-[#FF8C32]"
                  to="/customerRecords"
                >
                  Records
                </Link>
              </p>
              <p class="ml-0.5 font-bold pt-9 pb-3 pl-1 text-[#FF8C32]">
                Settings
              </p>
              <p class="flex items-center p-4 pb-5  text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <AccountIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link
                  className="ml-0.5 font-bold pl-3 text-[#FF8C32]"
                  to="/customerProfile"
                >
                  My Account
                </Link>
              </p>
              <p class="flex items-center p-4 pb-5  text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <QueriesIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link
                  className="ml-0.5 font-bold pl-3 text-[#FF8C32]"
                  to="/customerChat"
                >
                  Queries
                </Link>
              </p>
              <p class="flex items-center p-4 pb-5  text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <SignoutIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link className="ml-0.5 font-bold pl-3 text-[#FF8C32]" to="/">
                  Sign out
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
export default SideNavr;
