import React from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import watch1 from '../../assets/watch1.jpg';
import handbag from '../../assets/handbag1.jpg';
import shoe from '../../assets/shoe1.jpg';
import bottle from '../../assets/bottle1.jpg';


const CustomerProducts = () => {
    return (
        <div>
            <Navbarr />
            <div className='pt-8'>
                <p className='text-3xl text-left pl-32 font-bold '>Your Purchased Products</p>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 pb-10 pt-12 pl-24'>

                    <img className='h-30 w-30 shadow-2xl flex flex-col' src={watch1} alt="/" />
                    <div className='flex flex-col justify-center pl-12'>
                        <p className='text-xl'><b>Name :</b> Rolex watch<br /></p>
                        <p className='text-xl  pt-3'><b>Quantity :</b> : 5<br /></p>
                        <p className='text-xl  pt-3'><b>Type :</b> Discount<br /></p>
                        <p className='text-xl  pt-3'><b>Discription :</b> Silver coated belt<br /></p>
                    </div>
                    <div className='pt-44 pl-32'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Review</button>
                    </div>
                    <div className='pt-44 pl-8'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Delete</button>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 pb-10 pt-12 pl-12 pl-24'>

                    <img className='h-30 w-30 shadow-2xl flex flex-col' src={handbag} alt="/" />
                    <div className='flex flex-col justify-center pl-12'>
                        <p className='text-xl '><b>Name :</b> Hand bag<br /></p>
                        <p className='text-xl  pt-3'><b>Quantity :</b> 10<br /></p>
                        <p className='text-xl  pt-3'><b>Type :</b> Offer<br /></p>
                        <p className='text-xl  pt-3'><b>Discription :</b> Different colours available<br /></p>
                    </div>
                    <div className='pt-44 pl-32'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Review</button>
                    </div>
                    <div className='pt-44 pl-8'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Delete</button>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 pb-10 pt-12 pl-12 pl-24'>

                    <img className='h-30 w-30 shadow-2xl flex flex-col' src={shoe} alt="/" />
                    <div className='flex flex-col justify-center pl-12'>
                        <p className='text-xl '><b>Name :</b> Nike Shoe<br /></p>
                        <p className='text-xl  pt-3'><b>Quantity :</b> 2<br /></p>
                        <p className='text-xl  pt-3'><b>Type :</b> Reward<br /></p>
                        <p className='text-xl  pt-3'><b>Discription :</b> Branded last 2 pieces available (Black)<br /></p>
                    </div>
                    <div className='pt-44 pl-32'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Review</button>
                    </div>
                    <div className='pt-44 pl-8'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Delete</button>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 pb-10 pt-12 pl-12 pl-24'>

                    <img className='h-30 w-30 shadow-2xl flex flex-col' src={bottle} alt="/" />
                    <div className='flex flex-col justify-center pl-12'>
                        <p className='text-xl'><b>Name :</b> Nike Shoe<br /></p>
                        <p className='text-xl pt-3'><b>Quantity :</b> 2<br /></p>
                        <p className='text-xl pt-3'><b>Type :</b> Reward<br /></p>
                        <p className='text-xl pt-3'><b>Discription :</b> Branded last 2 pieces available (Black)<br /></p>
                    </div>
                    <div className='pt-44 pl-32'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Review</button>
                    </div>
                    <div className='pt-44 pl-8'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Delete</button>
                    </div>
                </div>
                <SideNavr />
            </div>
        </div>
    )
}

export default CustomerProducts