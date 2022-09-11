// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShopIcon from "@mui/icons-material/StoreMallDirectory";
// import ProductIcon from "@mui/icons-material/LocalMall";
// import PurchaseIcon from "@mui/icons-material/LocalOffer";


// function SideNavr() {
//   const [profileLabel, setprofileLabel] = useState(false);
//   const [bookingLabel, setBookingLabel] = useState(false);
//   const [appointmentLabel, setAppointmentLabel] = useState(false);
//   const [chatLabel, setChatLabel] = useState(false);

//   const handleLabel = (id) => {
//     switch (id) {
//       case 2:
//         setprofileLabel(!profileLabel);
//         break;
//       case 3:
//         setBookingLabel(!bookingLabel);
//         break;
//       case 4:
//         setAppointmentLabel(!appointmentLabel);
//         break;
//       case 5:
//         setChatLabel(!chatLabel);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="relative z-10">
//       <div className="hidden md:block fixed bg-transparent min-h-screen left-0 top-14 flex-col w-20">
//         <div className=" md:mt-0 flex flex-col items-center border-2 w-full h-screen py-12 border-none bg-[#03045E]">
//           <div className="relative inline-flex items-center mb-5 ">
//             <NavLink
//               to="/dashboard"
//               className="cursor-pointer"
//               onMouseEnter={() => handleLabel(2)}
//               onMouseLeave={() => handleLabel(2)}
//             >
//               <DashboardIcon className="!w-12 !h-12 text-[#03045E]  bg-white hover:scale-110 !rounded-full p-3" />
//             </NavLink>

//             <span
//               className={
//                 profileLabel
//                   ? "absolute ml-[55px] w-28 text-center rounded-md bg-[#03045E] text-white"
//                   : "hidden"
//               }
//             >
//               Dashboard
//             </span>
//           </div>

//           <div className="relative inline-flex items-center mb-4">
//             <NavLink
//               to="/customerShops"
//               className="cursor-pointer"
//               onMouseEnter={() => handleLabel(3)}
//               onMouseLeave={() => handleLabel(3)}
//             >
//               <ShopIcon className="!w-12 !h-12 text-[#03045E]  bg-white hover:scale-110 !rounded-full p-3" />
//             </NavLink>

//             <span
//               className={
//                 bookingLabel
//                   ? "absolute ml-[55px] w-28 text-center rounded-md bg-[#03045E] text-white"
//                   : "hidden"
//               }
//             >
//               Shops
//             </span>
//           </div>
//           <div className="relative inline-flex items-center mb-4 pl-1">
//             <NavLink
//               to="/customerProducts"
//               // className="cursor-pointer"
//               // onMouseEnter={() => handleLabel(4)}
//               // onMouseLeave={() => handleLabel(4)}
//             >
//               <ProductIcon className=" !w-12 !h-12 text-[#03045E]  bg-white hover:scale-110  !rounded-full p-3" />
//             </NavLink>

//             <span
//               className="absolute ml-[55px] w-28 text-center rounded-md bg-[#03045E] text-white"
//             >
//               Products
//             </span>
//           </div>
//           <div className="relative inline-flex items-center mb-4">
//             <NavLink
//               to="/customerPurchase"
//               className="cursor-pointer"
//               onMouseEnter={() => handleLabel(5)}
//               onMouseLeave={() => handleLabel(5)}
//             >
//               <PurchaseIcon className="!w-12 !h-12 text-[#03045E]  bg-white hover:scale-110 !rounded-full p-3" />
//             </NavLink>

//             <span
//               className={
//                 chatLabel
//                   ? "absolute ml-[55px] w-28 text-center rounded-md bg-[#03045E] text-white"
//                   : "hidden"
//               }
//             >
//               Purchase
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideNavr;

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
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';


function SideNavr() {
  return (

    <div className="hidden md:block fixed min-h-screen left-0 top-14 flex-col">
      <aside class="w-35" aria-label="Sidebar">
        <div class="overflow-y-auto py-1 px-1 bg-[#03045E] rounded dark:bg-gray-800 hover:scale-100">
          <ul class="space-y-2 pt-7">
            <li>
            <img className='w-20 mx-auto mt-[-3rem] pt-3' src={logoImg} alt="" />
              <p class="flex items-center p-4 pb-5 text-base font-normal text-[#FF8C32] rounded-lg h-12 dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <DashboardIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link className="ml-0.5 font-bold pl-3 text-[#FF8C32]" to="/dashboard">Dashboard</Link>
              </p>
              <p class="flex items-center p-4 pb-5  text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <ShopIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link className="ml-0.5 font-bold pl-3 text-[#FF8C32]" to="/customerShops">Shops</Link>
              </p>
              <p class="flex items-center p-4  pb-5 text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <ProductIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link className="ml-0.5 font-bold pl-3 text-[#FF8C32]" to="/customerProducts">Products</Link>
              </p>
              <p class="flex items-center p-4  pb-5 text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <PurchaseIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link className="ml-0.5 font-bold pl-3 text-[#FF8C32]" to="/customerPurchase">Purchase</Link>
              </p>
              <p class="flex items-center p-4  pb-5 text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <RecordIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link className="ml-0.5 font-bold pl-3 text-[#FF8C32]" to="/customerRecords">Records</Link>
              </p>
              <p class="ml-0.5 font-bold pt-9 pb-3 pl-1 text-[#FF8C32]">Settings</p>
              <a href="#" class="flex items-center p-4 pb-5  text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <AccountIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <p class="ml-0.5 font-bold pl-3 text-[#FF8C32]">My Account</p>
              </a>
              <a href="#" class="flex items-center p-4 pb-5  text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <QueriesIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <p class="ml-0.5 font-bold pl-3 text-[#FF8C32]">Queries</p>
              </a>
              <p class="flex items-center p-4 pb-5  text-base font-normal text-[#FF8C32] rounded-lg h-12  dark:text-white hover:bg-gray-100 hover:opacity-75 ">
                <SignoutIcon className="!w-12 !h-12 text-[#FF8C32] p-3" />
                <Link className="ml-0.5 font-bold pl-3 text-[#FF8C32]" to="/">Sign out</Link>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>

  );

}
export default SideNavr;
