

import React from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import watch1 from '../../assets/watch1.jpg';
import bottle1 from '../../assets/bottle1.jpg';
import shoe1 from '../../assets/shoe1.jpg';
import phncvr1 from '../../assets/phonecvr1.jpg';
import mnypurse1 from '../../assets/moneypurse.jpg';
import hndbag1 from '../../assets/handbag1.jpg';
import pencilcase1 from '../../assets/pencilcase1.jpg';
import grinder1 from '../../assets/grinder1.jpg';
import clock1 from '../../assets/clock1.jpg';
import watch2 from '../../assets/watch2.jpg';


const CustomerProducts = () => {
    return (
        <div>
            <Navbarr />
            <div className='pt-24 md:ml-60'>

                <p className='text-3xl text-left pl-12 font-bold '>Discounted Products</p>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-8 gap-8 pt-4 pl-12 '>

                    <div>
                        <img className='h-15 w-15 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={watch2} alt="/" />
                        <div className='text-l py-8 text-center'>
                            <button className='border-none bg-transparent text-black hover:bg-transparent hover:text-[#FF8C32]'>Smart Watch</button>
                        </div>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={bottle1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Water Bottle
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={shoe1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Shoe
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={hndbag1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Hand Bag
                        </p>
                    </div>
                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={shoe1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Shoe
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={hndbag1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Hand Bag
                        </p>
                    </div>
                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={shoe1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Shoe
                        </p>
                    </div>
                    <div>
                        <img className='h-15 w-15 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={watch2} alt="/" />
                        <div className='text-l py-8 text-center'>
                            <button className='border-none bg-transparent text-black hover:bg-transparent hover:text-[#FF8C32]'>Smart Watch</button>
                        </div>
                    </div>
                </div>

                <p className='text-3xl text-left pl-12 font-bold'>Products with Rewards</p>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-8 gap-8 pt-4 pl-12 '>

                    <div>
                        <img className='h-15 w-15 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={mnypurse1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Money Purse
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={phncvr1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Phone Cover
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={pencilcase1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Pencil set
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={grinder1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Grinder
                        </p>
                    </div>


                    <div>
                        <img className='h-15 w-15 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={mnypurse1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Money Purse
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={phncvr1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Phone Cover
                        </p>
                    </div>

                    <div>
                        <img className='h-15 w-15 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={mnypurse1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Money Purse
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={grinder1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Grinder
                        </p>
                    </div>
                </div>

                <p className='text-3xl text-left pl-12 font-bold'>Products with Offers</p>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-8 gap-8 pt-4 pl-12 '>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={clock1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Wall Clock
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={hndbag1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Hand Bag
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={bottle1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Water Bottle
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={shoe1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Nike Shoe
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={bottle1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Water Bottle
                        </p>
                    </div>
                    <div>
                        <img className='h-15 w-15 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={watch2} alt="/" />
                        <div className='text-l py-8 text-center'>
                            <button className='border-none bg-transparent text-black hover:bg-transparent hover:text-[#FF8C32]'>Smart Watch</button>
                        </div>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={bottle1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Water Bottle
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={clock1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Wall Clock
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={hndbag1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Hand Bag
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={clock1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Wall Clock
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={hndbag1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Hand Bag
                        </p>
                    </div>

                    <div>
                        <img className='h-50 w-50 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={bottle1} alt="/" />
                        <p className='text-l py-8 text-center'>
                            Water Bottle
                        </p>
                    </div>

                </div>
            </div>
            <SideNavr />
        </div>
    )
}

export default CustomerProducts
