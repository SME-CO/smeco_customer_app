import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState (false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg bg-[#ffff] md:drop-shadow-xl fixed drop-shadlow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <img className='object-contain h-20' src={logoImg} alt="logo" />
          <ul className='hidden md:flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shops">Shops</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>    
        </div>
    
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-5 hover:bg-transparent hover:text-[#FF8C32]'>Login</button>
          <button className='border-none px-4 py-1'>Sign Up</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <AiOutlineMenu className='w-5'/> : <AiOutlineClose className='w-5'/> }
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-[#ffff] w-full px-4'}>
            <li className='border-b-2 border-zinc-300 w-full py-4'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full py-4'>Shops</li>
            <li className='border-b-2 border-zinc-300 w-full py-4'>Products</li>
            <li className='border-b-2 border-zinc-300 w-full py-4'>About Us</li>
            <li className='border-b-2 border-zinc-300 w-full py-4'>FAQ</li>
            <div className='flex flex-col my-4'>
              <button className='bg-transparent hover:bg-transparent text-[#03045E] hover:text-[#FF8C32] px-8 py-3 mb-4'>Login</button>
              <button className='border-none px-8 py-3'>Sign Up</button>
            </div>
      </ul>


    </div>
  )
}

export default Navbar