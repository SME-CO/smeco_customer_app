import React from 'react'
import starImg from '../assets/5star2.jpg'

const Shops = () => {
  return (
    <div className='pt-24'>
     
      <p className='text-3xl text-center font-bold'>Our Registered Shops</p>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 pt-4'>

        <div>
          <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
          <p className='text-2xl py-8 text-center font-bold'>
            Top Choice
          </p>
        </div>

        <div>
          <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
          <p className='text-2xl py-8 text-center font-bold'>
            Fashion Bug
          </p>
        </div>

        <div>
          <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
          <p className='text-2xl py-8 text-center font-bold'>
            Nolimit
          </p>
        </div>

        <div>
          <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
          <p className='text-2xl py-8 text-center font-bold'>
            Thilakawardhana
          </p>
        </div>

        <div>
          <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
          <p className='text-2xl py-8 text-center font-bold'>
            Top Choice
          </p>
        </div>

        <div>
          <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
          <p className='text-2xl py-8 text-center font-bold'>
            Top Choice
          </p>
        </div>

        



      </div>





    </div>
  )
}

export default Shops