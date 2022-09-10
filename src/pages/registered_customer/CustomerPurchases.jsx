import React from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";

import PurchasedShopCard from "../../components/PurchasedShopCard";


const CustomerPurchases = () => {
    return (
        <div>
            <Navbarr />
            <div>
                hello
                <PurchasedShopCard/>
            </div>
            
                <SideNavr />
            </div>
        
    )
}

export default CustomerPurchases
// import React from 'react'
// import Navbarr from '../../components/Navbarr';
// import SideNavr from "../../components/SideNavr";
// import { Link } from 'react-router-dom';

// const CustomerPurchases = () => {
//   return (
//     <div className='w-full'>
//       <Navbarr />
//       <div>
//         <div className='max-w-[700px] mx-auto grid md:grid-cols-1 gap-8 pb-12'>
//           <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//             <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pb-10 pt-12'>
//               <div>
//                 <h2 className='text-2xl font-bold text-center py-8'>Top Choice</h2>
//               </div>
//               <div className='pl-32'>
//                 <button className='border-none my-6 mx-auto px-3 py-2'><Link to="/purchaseHistory">View More</Link></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className='max-w-[700px] mx-auto grid md:grid-cols-1 gap-8 pb-12'>
//           <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//             <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pb-10 pt-12'>
//               <div>
//                 <h2 className='text-2xl font-bold text-center py-8'>Furniture Mart</h2>
//               </div>
//               <div className='pl-32'>
//                 <button className='border-none my-6 mx-auto px-3 py-2'>View More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className='max-w-[700px] mx-auto grid md:grid-cols-1 gap-8 pb-12'>
//           <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//             <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pb-10 pt-12'>
//               <div>
//                 <h2 className='text-2xl font-bold text-center py-8'>Glitters</h2>
//               </div>
//               <div className='pl-32'>
//                 <button className='border-none my-6 mx-auto px-3 py-2'>View More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className='max-w-[700px] mx-auto grid md:grid-cols-1 gap-8 pb-12'>
//           <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//             <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pb-10 pt-12'>
//               <div>
//                 <h2 className='text-2xl font-bold text-center py-8'>Fashion Wings</h2>
//               </div>
//               <div className='pl-32'>
//                 <button className='border-none my-6 mx-auto px-3 py-2'>View More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className='max-w-[700px] mx-auto grid md:grid-cols-1 gap-8 pb-12'>
//           <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//             <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pb-10 pt-12'>
//               <div>
//                 <h2 className='text-2xl font-bold text-center py-8'>Shoe Palace</h2>
//               </div>
//               <div className='pl-32'>
//                 <button className='border-none my-6 mx-auto px-3 py-2'>View More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className='max-w-[700px] mx-auto grid md:grid-cols-1 gap-8 pb-12'>
//           <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//             <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pb-10 pt-12'>
//               <div>
//                 <h2 className='text-2xl font-bold text-center py-8'>Stylish Mart</h2>
//               </div>
//               <div className='pl-32'>
//                 <button className='border-none my-6 mx-auto px-3 py-2'>View More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <SideNavr />
//     </div>
//   )
// }

// export default CustomerPurchases