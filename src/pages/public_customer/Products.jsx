import React from 'react';
import Navbar from "../../components/Navbar";
import starImg from '../../assets/5star2.jpg'
import Footer from "../../components/Footer";



const Products = () => {
    return (
        <div>
              <Navbar />
        <div className='pt-24'>
          
            <p className='text-3xl text-center font-bold'>Products you might interested</p>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8 pt-4'>

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
            <div class="h-screen bg-blue-500 py-20 px-3">
                <div class="container mx-auto">
                    <div class="max-w-sm mx-auto md:max-w-lg">
                        <div class="w-full">
                            <div class="bg-white h-64 py-3 rounded text-center">
                                <h1 class="text-2xl font-bold">OTP Verification</h1>
                                <div class="flex flex-col mt-4">
                                    <span>Enter the OTP you received at</span>
                                    <span class="font-bold">+91 ******876</span>
                                </div>

                                <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
                                    <input class="m-2 border h-10 w-25 text-center form-control rounded" type="text" id="first" maxlength="6" />
                       
                                </div>

                                <div class="flex justify-center text-center mt-5">
                                    <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


             {/* --------------------------JS PART------------------------- */}
            {/* document.addEventListener("DOMContentLoaded", function(event) {

                function OTPInput() {
                    const inputs = document.querySelectorAll('#otp > *[id]');
                    for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
                } OTPInput(); }); */}

            {/* -------------------------END OTP----------------------------------------- */}
        </div>
        <Footer />
        </div>

    );
}

export default Products;
