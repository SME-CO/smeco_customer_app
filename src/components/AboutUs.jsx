import React from 'react';
import aboutusImg from '../assets/aboutus1.jpg'
const AboutUs = () => {
   return (

      <div className='w-full'>
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 px-4'>
            <div className='flex flex-col justify-center'>
               <p className='text-5xl font-bold'>MAKE A CUSTOMER<br />NOT A SALE </p><br />
               <p>Do you worry about missing the offers and deals that are providedby the SME’s. <br />
                  Signup with SMECOtoday!. You will get the notificationsof offers provided by <br />
                  our merchants. Our goal is to incraese the sales revenue and loyal cutomer <br />
                  base for SME’s as well as we need our customers to get benefited with the <br />
                  awesome offers, deals and discounts that are provided by our SME merchants.<br />

                  <br />We are glad to provide and let you know all the offers, discounts and the Rewards<br />
                  that are still not missed out and bring it to your home through our app of SMECO.<br />
                  Still it's not late to get registered with us. Make sure to register yourself fast and 
                  enjoy the daily offers and dicounts. It's a great opportunity for you all to manage 
                  your daily expenses and accruals by claiming these offers.</p><br />
                  
               <p className='text-5xl text-[#FF8C32] font-bold'>Join Your hands with us<br />
                  & enjoy your day!!!<br /></p>
            </div>
            <div>
               <img className='w-[550px] mx-auto my-4' src={aboutusImg} alt="/" />
            </div>
         </div>
      </div>
   )
}

export default AboutUs