import React, { useState } from "react";
import bgImg5 from '../assets/logo.png'
import { AiOutlineBell } from 'react-icons/ai'
import img from '../assets/mushipic1.jpeg'
import { NavLink, Link } from 'react-router-dom';
import BackIcon from "@mui/icons-material/ArrowBack";
import NotificationIcon from "@mui/icons-material/Notifications";


const Navbarr = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (

        <div className="w-screen h-[80px] z-10 bg-[#03045E] fixed drop-shadow-lg  ">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center text-white">
                    <ul className='hidden md:flex'>
                        <li className="pr-30"><BackIcon className="" /><Link to="/">Back to home</Link></li>
                        <li><NavLink to="/shops">Shops</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/aboutus">About Us</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-10'>
                    <NotificationIcon className="!w-12 !h-12 text-white pr-6" />
                    <Link to= "/CustomerProfile"><p className="pt-3 text-white pr-6" >Mushrifa</p></Link>
                    <div className="pr-5">
                        <img className='w-[50px] h-[50px]mx-auto rounded-full' src={img} alt="" />
                    </div>
                    {/* <button className='border-none px-4 py-1'><Link to="/SignUp">Sign Up</Link></button> */}
                </div>
            </div>
        </div>

    )
}

export default Navbarr