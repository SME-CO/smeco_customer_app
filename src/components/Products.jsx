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

                <div>
                    <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
                    <p className='py-8 text-center'>Rolex watch <br />silver colour</p>
                </div>

                <div>
                    <img className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-200 hover:bg-[#FF8C32]' src={starImg} alt="/" />
                    <p className='py-8 text-center'>Rolex watch <br />silver colour</p>
                </div>




            </div>
            {/* ----------------------------OTP------------------------------------------ */}
            {/* document.addEventListener("DOMContentLoaded", function(event) {

                function OTPInput() {
                    const inputs = document.querySelectorAll('#otp > *[id]');
                    for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
                } OTPInput(); }); */}

            {/* -------------------------END OTP----------------------------------------- */}
        </div>



    );
}

export default Products;
