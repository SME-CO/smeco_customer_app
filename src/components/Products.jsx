import React from 'react';
import starImg from '../assets/5star2.jpg'



const Products = () => {
    return (

        <div>
            <br /><br /><br /><br />
            <p className='text-3xl text-center font-bold'>Our Registered Shops</p>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8'>

                <div>
                    <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
                    <p className='py-8 text-center'>Rolex watch <br />silver colour</p>
                </div>

                <div>
                    <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
                    <p className='py-8 text-center'>Rolex watch <br />silver colour</p>
                </div>

                <div>
                    <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
                    <p className='py-8 text-center'>Rolex watch <br />silver colour</p>
                </div>

                <div>
                    <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
                    <p className='py-8 text-center'>Rolex watch <br />silver colour</p>
                </div>

                <div>
                    <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
                    <p className='py-8 text-center'>Rolex watch <br />silver colour</p>
                </div>

                <div>
                    <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
                    <p className='py-8 text-center'>Rolex watch <br />silver colour</p>
                </div>




            </div>
        </div>



    );
}

export default Products;
