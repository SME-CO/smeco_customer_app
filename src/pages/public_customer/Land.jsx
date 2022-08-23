
import React from 'react'
import Navbar from "../../components/Navbar";
import saleImg from '../../assets/sale.png'
import heroImg from '../../assets/hero.png'
import loyalImg2 from '../../assets/loyalty2.png'
import dollarImg from '../../assets/dollar.jpg'
import starImg from '../../assets/5star2.jpg'
import strImg from '../../assets/5star3.jpg'
import logoImg from '../../assets/logo.png'
import {
  AiTwotoneShop,
  AiOutlinePercentage,
  AiFillGift,
  AiTwotoneGift
} from 'react-icons/ai'
import Footer from "../../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Land = () => {
  return (

    <div className='w-full'>
      <Navbar />
      <img className='w-full' src={saleImg} alt="sale" />
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 px-4'>
        <div className='flex flex-col justify-center'>
          <p className='text-5xl font-bold'>MAKE A CUSTOMER<br />NOT A SALE </p>
          <p className='text-2xl'><br />Do you worry about missing the offers and deals<br /></p>
          <p className='text-2xl'>that are provided by the SME’s?.<br /> </p>
          <p className='text-2xl font-bold text-[#FF8C32]'>Sign up with  SMECO today!.<br /></p>
          <p className='text-2xl'>You will get the  notifications of offers<br /></p>
          <p className='text-2xl'>our merchants.</p><br />
          <button className='border-none w-[200px] px-3 py-3'>View More</button>
        </div>
        <div>
          <img className='w-[500px] mx-auto my-4' src={heroImg} alt="/" />
        </div>
      </div>
      {/* -----------------------------------------The 04 boxes---------------------------------------------- */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem]' src={logoImg} alt="" />
          <h2 className='text-2xl font-bold text-center py-8'>Shops</h2>
          <AiTwotoneShop className='mx-auto fill-[#03045E]' size='3rem' />
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Rated Shops</p>
            <p className='py-2 border-b mx-8'>Qualified Merchants</p>
          </div>
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button>
        </div>

        <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-100'>
          <img className='w-20 mx-auto mt-[-3rem]' src={logoImg} alt="" />
          <h2 className='text-2xl font-bold text-center py-8'>Products</h2>
          <AiFillGift className='mx-auto  fill-[#03045E]' size='3rem' />
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Rated Products</p>
            <p className='py-2 border-b mx-8'>Quality Products</p>
          </div>
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button>
        </div>

        <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem]' src={logoImg} alt="" />
          <h2 className='text-2xl font-bold text-center py-8'>Discounts & Offers</h2>
          <AiOutlinePercentage className='mx-auto  fill-[#03045E]' size='3rem' />
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Awesome offers</p>
            <p className='py-2 border-b mx-8'>At your door step</p>
          </div>
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button>
        </div>

        <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-100'>
          <img className='w-20 mx-auto mt-[-3rem]' src={logoImg} alt="" />
          <h2 className='text-2xl font-bold text-center py-8'>Rewards</h2>
          <AiTwotoneGift className='mx-auto  fill-[#03045E]' size='3rem' />
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Attractive Rewards</p>
            <p className='py-2 border-b mx-8'>In one click</p>
          </div>
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button>
        </div>


      </div>
      {/* ---------------------------4boxes End-------------------------------------------- */}


      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

        <img className='w-[350px] mx-auto my-4' src={strImg} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-2xl font-bold'>TOP RATED SHOPS<br /></p>
          <p className='text-1xl font-bold text-[#FF8C32]'>Join with SMECO</p>
          <p>An online platform to reach out the Small and medium enterprises</p>
          <p>which provide attractive offers, deals and discounts.</p>
          <p className='text-2xl font-bold'>Don’t get yourself late!!!</p><br />
          <button className='border-none w-[150px] px-1 py-2'>View More</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[350px] mx-auto my-4' src={starImg} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-2xl font-bold'>TOP RATED PRODUCTS<br /></p>
          <p className='text-1xl font-bold text-[#FF8C32]'>Join with SMECO</p>
          <p>An online platform to reach out the Small and medium enterprises</p>
          <p>which provide attractive offers, deals and discounts.</p>
          <p className='text-2xl font-bold'>Don’t get yourself late!!!</p><br />
          <button className='border-none w-[150px] px-1 py-2'>View More</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[350px] mx-auto my-4' src={dollarImg} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-2xl font-bold'>Awesome OFFERS<br /></p>
          <p className='text-1xl font-bold text-[#FF8C32]'>Join with SMECO</p>
          <p>An online platform to reach out the Small and medium enterprises</p>
          <p>which provide attractive offers, deals and discounts.</p>
          <p className='text-2xl font-bold'>Don’t get yourself late!!!</p><br />
          <button className='border-none w-[150px] px-1 py-2'>View More</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[350px] mx-auto my-4' src={loyalImg2} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-2xl font-bold'>Awesome Discounts & Rewards<br /></p>
          <p className='text-1xl font-bold text-[#FF8C32]'>Join with SMECO</p>
          <p>An online platform to reach out the Small and medium enterprises</p>
          <p>which provide attractive offers, deals and discounts.</p>
          <p className='text-2xl font-bold'>Don’t get yourself late!!!</p><br />
          <button className='border-none w-[150px] px-1 py-2'>View More</button>
        </div>
      </div>















      <Footer />
    </div>

  )

}

export default Land