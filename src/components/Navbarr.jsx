import React, { useState } from "react";


import { MenuIcon, XIcon, SearchIcon, MenuButton, } from '@heroicons/react/outline'
import bgImg5 from '../assets/logo.png'
import bgImg6 from '../assets/Notification.png'

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
                        <input className=" hidden md:flex w-[400px] h-[35px] bg-zinc-200 rounded-l-full shadow-lg outline-none font-thin text-xl px-4 " placeholder="Search here " ></input>
                        {/* {<SearchIcon className="w-5"/>}  */}
                        <button className=" hidden md:flex h-[35px] w-[100px] bg-zinc-400 rounded-r-full outline-none text-xl font-semibold  text-white hover:bg-blue-500 hover:text-zinc-300" >Search</button>
                        {/* <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>

                    </ul> */}

                    </div>
                    {/* <div className=" hidden md:flex items-center absolute inset-2">
                            <input className="w-[350px] h-[35px] bg-zinc-400 rounded-l-full shadow-lg outline-none font-thin text-xl px-4 " placeholder="Search here"></input>
                            <button className="h-[35px] w-[100px] bg-zinc-800 rounded-r-full text-xl font-thin text-white hover:bg-zinc-500 hover:text-zinc-300" >Search</button>
                            
                        </div> */}

                    <div>
                        <img className="w-6 -rotate-6 h-6 " src={bgImg6} alt="/" />

                    </div>
                    <div className="md:flex pr-4">
                        <template>
                            <div>
                                <div className="flex justify-end py-3 px-6 bg-gray-50 border-b"></div>

                            </div>
                        </template>
                        <script>

                        </script>

                        {/* <button className="border-none bg-transparent mr-4">Sign In </button>
                        <button className="px-8 py-3">Sign Up</button> */}
                    <div className="text-white"><h1><MenuIcon/></h1></div>

                    </div>
                    {/* <div className="md:hidden" onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-5'></MenuIcon> : <XIcon className="w-5" />}


                    </div> */}

                </div>

                <ul className={!nav ? 'hidden' : "absolute bg-zinc-200 w-full px-8"}>
                    <input className=" hidden md:flex w-[350px] h-[35px] bg-zinc-200 rounded-l-full shadow-lg outline-none font-thin text-xl px-4 " placeholder="Search here.."></input>
                    <button className="hidden md:flex h-[35px] w-[100px] bg-zinc-800 rounded-r-full text-xl font-thin text-white hover:bg-zinc-500 hover:text-zinc-300" >Search</button>
                    {/* <li className="border-b-2 border-zinc-300 w-full">Home</li>
                <li className="border-b-2 border-zinc-300 w-full">About</li>
                <li className="border-b-2 border-zinc-300 w-full">Support</li>
                <li className="border-b-2 border-zinc-300 w-full">Platforms</li> */}

                    <div className="flex flex-col my-4">
                        
                        {/* <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
                        <button className="px-8 py-3 mb-4">Sign Up</button> */}

                    </div>

                </ul>








            </div>
        </div>
    )
}

export default Navbarr