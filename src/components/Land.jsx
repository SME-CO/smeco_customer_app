
import React from 'react'
import saleImg from '../assets/sale.png'
import heroImg from '../assets/hero.png'
import loyalImg2 from '../assets/loyalty2.png'
import loyalImg1 from '../assets/loyalty1.png'

const Land = () => {
  return (

    <div className='w-full'>
      <img className='w-full' src={saleImg} alt="sale" />
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 px-4'>
        <div className='flex flex-col justify-center'>
          <p className='text-5xl font-bold'>MAKE A CUSTOMER<br />NOT A SALE </p>
          <p><br />Do you worry about missing the offers and deals<br /></p>
          <p>that are provided by the SME’s?.<br /> </p>
          <p className='text-2xl font-bold text-[#FF8C32]'>Sign up with  SMECO today!.<br /></p>
          <p>You will get the  notifications of offers<br/></p>
          <p>our merchants.</p><br/>
          <button className='border-none w-[200px] px-3 py-3'>View More</button>
        </div>
        <div>
          <img className='w-[500px] mx-auto my-4' src={heroImg} alt="/" />
        </div>
      </div>


      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[350px] mx-auto my-4' src={loyalImg2} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-2xl font-bold'>TOP RATED SHOPS<br /></p>
          <p className='text-1xl font-bold text-[#FF8C32]'>Join with SMECO</p>
          <p>An online platform to reach out the Small and medium enterprises</p>
          <p>which provide attractive offers, deals and discounts.</p>
          <p className='text-2xl font-bold'>Don’t get yourself late!!!</p><br/>
          <button className='border-none w-[150px] px-1 py-2'>View More</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[350px] mx-auto my-4' src={loyalImg1} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-2xl font-bold'>TOP RATED SPRODUCTS<br /></p>
          <p className='text-1xl font-bold text-[#FF8C32]'>Join with SMECO</p>
          <p>An online platform to reach out the Small and medium enterprises</p>
          <p>which provide attractive offers, deals and discounts.</p>
          <p className='text-2xl font-bold'>Don’t get yourself late!!!</p><br/>
          <button className='border-none w-[150px] px-1 py-2'>View More</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[350px] mx-auto my-4' src={loyalImg1} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-2xl font-bold'>TOP RATED SPRODUCTS<br /></p>
          <p className='text-1xl font-bold text-[#FF8C32]'>Join with SMECO</p>
          <p>An online platform to reach out the Small and medium enterprises</p>
          <p>which provide attractive offers, deals and discounts.</p>
          <p className='text-2xl font-bold'>Don’t get yourself late!!!</p><br/>
          <button className='border-none w-[150px] px-1 py-2'>View More</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[350px] mx-auto my-4' src={loyalImg1} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-2xl font-bold'>TOP RATED SPRODUCTS<br /></p>
          <p className='text-1xl font-bold text-[#FF8C32]'>Join with SMECO</p>
          <p>An online platform to reach out the Small and medium enterprises</p>
          <p>which provide attractive offers, deals and discounts.</p>
          <p className='text-2xl font-bold'>Don’t get yourself late!!!</p><br/>
          <button className='border-none w-[150px] px-1 py-2'>View More</button>
        </div>
      </div>



    

      

      
    </div>

  )

}

export default Land