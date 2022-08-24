import React, { useState } from "react";
import bgImg5 from '../assets/logo.png'
import { AiOutlineBell } from 'react-icons/ai'
import img from '../assets/mushipic1.jpeg'
import { NavLink } from 'react-router-dom';


const Navbarr = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="h-screen">
            <div className="w-screen h-[80px] z-10 bg-[#03045E] fixed drop-shadow-lg  ">
                <div className="px-2 flex justify-between items-center w-full h-full">
                    <div className="flex items-center">
                        <div>
                            <img className="w-20 h-20" src={bgImg5} alt="/" />
                        </div>
                        <h1 className=" ml-3 text-3xl font-bold w-[300px] mr-4 sm:text-4xl text-white">SMECO</h1>
                        <input className=" hidden md:flex w-[400px] h-[35px] bg-zinc-200 rounded-l-full shadow-lg outline-none font-thin  px-4 py-1" placeholder="Search here..." ></input>
                        <button className=" hidden md:flex w-[100px] h-[37px] bg-zinc-400  rounded-r-full outline-none  text-white hover:bg-[#FF8C32] hover:text-white px-4 py-1" >Search</button>
                    </div>


                    <div>
                        <AiOutlineBell className='mx-auto fill-white' size='2rem' />
                    </div>

                    <div className='flex flex-col my-4'>
                        <button className='border-white px-6 py-2'><NavLink to='/'>Log out</NavLink></button>
                    </div>

                    <div>
                        <img className='w-[50px] h-[50px]mx-auto rounded-full' src={img} alt="" />
                    </div>


                    <div className="md:flex pr-4">
                        <template>
                            <div>
                                <div className="flex justify-end py-3 px-6 bg-gray-50 border-b"></div>
                            </div>
                        </template>


                        {/* 
                        <div className="text-white"><h1><MenuIcon /></h1></div> */}

                    </div>


                </div>

                <ul className={!nav ? 'hidden' : "absolute bg-zinc-200 w-full px-8"}>
                    <input className=" hidden md:flex w-[350px] h-[35px] bg-zinc-200 rounded-l-full shadow-lg outline-none font-thin text-xl px-4 " placeholder="Search here.."></input>
                    <button className="hidden md:flex h-[35px] w-[100px] bg-zinc-800 rounded-r-full text-xl font-thin text-white hover:bg-zinc-500 hover:text-zinc-300" >Search</button>


                    <div className="flex flex-col my-4">



                    </div>

                </ul>
            </div>
        </div>
    )
}

export default Navbarr