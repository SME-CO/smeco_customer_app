import React from 'react';
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
// import watch1 from '../../assets/watch1.jpg';
import bottle1 from '../../assets/bottle1.jpg';
import shoe1 from '../../assets/shoe1.jpg';
import phncvr1 from '../../assets/phonecvr1.jpg';
import mnypurse1 from '../../assets/moneypurse.jpg';
import hndbag1 from '../../assets/handbag1.jpg';
import pencilcase1 from '../../assets/pencilcase1.jpg';
import grinder1 from '../../assets/grinder1.jpg';
import clock1 from '../../assets/clock1.jpg';
import watch2 from '../../assets/watch2.jpg';



import img1 from '../../assets/furniture mart.png'
import img3 from '../../assets/shoe palace.png'
import img4 from '../../assets/your choice.png'
import img5 from '../../assets/Glitters.png'
import img6 from '../../assets/Fashion Wings.png'
import img7 from '../../assets/Stylish mart.png'


const CustomerShops = () => {
   return (
      <div>
         <Navbarr />
         <div className='pt-24 md:ml-60'>

            <p className='text-4xl text-left pl-12 font-bold'>Your Shops</p>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 pt-4 pl-12'>

               <div>
                  <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={img4} alt="/" />
                  <p className='text-2xl py-8 text-center font-bold'>
                     Top Choice
                  </p>
               </div>

               <div>
                  <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={img1} alt="/" />
                  <p className='text-2xl py-8 text-center font-bold'>
                     Furniture Mart
                  </p>
               </div>

               <div>
                  <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={img5} alt="/" />
                  <p className='text-2xl py-8 text-center font-bold'>
                    Glitters
                  </p>
               </div>

               <div>
                  <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={img6} alt="/" />
                  <p className='text-2xl py-8 text-center font-bold'>
                    Fashion Wings
                  </p>
               </div>

               <div>
                  <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={img3} alt="/" />
                  <p className='text-2xl py-8 text-center font-bold'>
                     Shoe palace
                  </p>
               </div>

               <div>
                  <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={img7} alt="/" />
                  <p className='text-2xl py-8 text-center font-bold'>
                     Stylish Mart
                  </p>
               </div>

               <div>
                  <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={img4} alt="/" />
                  <p className='text-2xl py-8 text-center font-bold'>
                     Top Choice
                  </p>
               </div>

               <div>
                  <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={img1} alt="/" />
                  <p className='text-2xl py-8 text-center font-bold'>
                     Furniture Mart
                  </p>
               </div>
            </div>
         </div>
         <SideNavr />
      </div>
   )
}

export default CustomerShops


