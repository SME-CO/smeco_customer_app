import React, { useState } from "react";
// import {AiFillDashboard} from "react-icon/ai";

import { MenuIcon, XIcon } from '@heroicons/react/outline'
import bgImg3 from '../assets/logo.png'
import bgImg2 from '../assets/logo.png'



const SideNavr = () => {

    const [open, setOpen] = useState(true);
    const Menus = [

        // { title: "Dashboard", src: AiFillDashboard},

        { title: "Dashboard", src: "Dashboard" },

        { title: "Shops", src: "Shops" },
        // { title: "Shops", src: "Shops", gap: true },
        { title: "Products", src: "Products" },
        { title: "Purchase", src: "Purchase" },
    ]


    return <div className="flex ">
        <div className={open ? 'w-60 h-screen duration-300 bg-blue-900 relative p-5 pt-4 ' : " w-20 h-screen bg-blue-900 relative p-5 pt-4"}>

            {/* <div className={`${open ? "w-72" : "w-20"}`h-screen bg-blue-900 relative`}> */}

            {/* <img className="w-6 h-6 top-9  bg-black border-2 boarder-blue-900 absolute cursor-pointer rounded-full -right-3"
            onClick={() => setOpen(!open)}
             src={bgImg3} alt="/" 
             /> */}

            <img

                className={`absolute cursor-pointer rounded-full bg-white mt-5
                -right-3 top-9 w-6 h-6 border-2 boarder-black-400
                ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
                src={bgImg3} alt="/"

            />
            {/* <div className="flex gap-x-4 items-center">
                <img src="../src/assets/logo.png"
                    className={`cursor-pointer duration-500 w-10 h-10 ${open && "rotate-[360-deg]"}`} />
                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>SMECO</h1>

            </div> */}
            <ul className="pt-6">
                {Menus.map((menu, index) => (
                    <li key={index}
                        className={menu.gap ? "mt-9 text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md" : "mt-2 text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md "}>

                        <img src={`../src/assets/${menu.src}.png`} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>


        <div className="p-7 text-2xl font-semibold  flex-1 h-screen">
            {/* <h1>Shops</h1> */}
            <div >
                <div className="flex flex-row justify-between mt-5">
                    <h2 className="text-2xl "> Discounted Products</h2>
                    <a href="#" className="text-xl flex flex-row">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>

                    </a>
                </div>
                <div className="grid grid-flow-row grid-cols-4 gap-10">
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img className="w-24 h-24" src="./assets/product1.jfif" ></img> */}
                        <img className="w-24 h-24" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>

                </div>

                <div className="flex flex-row justify-between mt-5">
                    <h2 className="text-2xl ">Products with rewards</h2>
                    <a href="#" className="text-xl flex flex-row">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>

                    </a>
                </div>

                <div className="grid grid-flow-row grid-cols-4 gap-10">
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img className="w-24 h-24" src="./assets/product1.jfif" ></img> */}
                        <img className="w-24 h-24" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>

                </div>



                <div className="flex flex-row justify-between mt-5">
                    <h2 className="text-2xl ">Products with offers</h2>
                    <a href="#" className="text-xl flex flex-row">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>

                    </a>
                </div>

                <div className="grid grid-flow-row grid-cols-4 gap-10">
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img className="w-24 h-24" src="./assets/product1.jfif" ></img> */}
                        <img className="w-24 h-24" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>
                    <div className="shadow-lg rounded-lg bg-red-300">
                        {/* <img src="./assets/product1.jfif" ></img> */}
                        <img className="w-10 h-10" src={bgImg2} alt="/" />
                    </div>

                </div>

            </div>
        </div>
    </div>


}

export default SideNavr