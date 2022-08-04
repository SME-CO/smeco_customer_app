import React from 'react'
import logoImg from '../assets/logo.png'
import{AiTwotoneShop,
  AiOutlinePercentage,
  AiFillGift,
  AiTwotoneGift} from 'react-icons/ai'

const 
p = () => {
  return (
    <div>
      <br /><br /><br /><br />
     <div className='max-w-[1200px] mx-auto grid md:grid-cols-4 gap-8'>

        <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200'>
          <h2 className='text-2xl font-bold text-center py-8'>Shops</h2>
          {/* <AiTwotoneShop className='mx-auto fill-[#03045E]' size='3rem'/> */}
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button>
        </div>

        {/* <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-100'>
        
          <h2 className='text-2xl font-bold text-center py-8'>Products</h2>
          <AiFillGift className='mx-auto  fill-[#03045E]' size='3rem'/>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Rated Products</p>
            <p className='py-2 border-b mx-8'>Quality Products</p>
          </div>
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button>
        </div> */}

        {/* <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      
          <h2 className='text-2xl font-bold text-center py-8'>Discounts & Offers</h2>
          <AiOutlinePercentage className='mx-auto  fill-[#03045E]' size='3rem'/>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Awesome offers</p>
            <p className='py-2 border-b mx-8'>At your door step</p>
          </div>
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button>
        </div> */}

        {/* <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-100'>
        
          <h2 className='text-2xl font-bold text-center py-8'>Discounts & Offers</h2>
          <AiTwotoneGift className='mx-auto  fill-[#03045E]' size='3rem'/>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Awesome offers</p>
            <p className='py-2 border-b mx-8'>At your door step</p>
          </div>
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button>
        </div> */}

      </div>
    {/* ---------------------------4boxes End-------------------------------------------- */}


      
    </div>
  )
}

export default 
p