import React from 'react';
import Navbar from "../../components/Navbar";
import aboutusImg from '../../assets/aboutus1.jpg'
import Footer from "../../components/Footer";
const AboutUs = () => {
   return (

      <div>
         <Navbar />
      <div className='w-full pt-8'>
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
         <Footer />
      </div>
      </div>
   )
}

export default AboutUs

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import watch2 from '../../assets/watch2.jpg';

// const style = {
//    position: 'absolute',
//    top: '50%',
//    left: '50%',
//    transform: 'translate(-50%, -50%)',
//    width: 400,
//    bgcolor: 'background.paper',
//    border: '2px solid #000',
//    boxShadow: 24,
//    p: 4,
// };

// export default function BasicModal() {
//    const [open, setOpen] = React.useState(false);
//    const handleOpen = () => setOpen(true);
//    const handleClose = () => setOpen(false);

//    return (
//       <div>
//          <Button onClick={handleOpen}>Open modal</Button>
//          <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//          >
//             <Box sx={style}>


//                <h1 className="ml-30  mt-4 text-2xl text-center "><b>Watch</b></h1>
//                <div className="bg-gray-400 w-40 h-40 ml-24 mt-5 ">
//                   <img className="w-40 h-40" src={watch2} alt="/" />
//                </div>

//                <div className="flex ml-10 mt-5 gap-4">
//                   <p className=""><b>Name:</b></p>
//                   <p className="text-gray-600">Rolex</p>
//                </div>
//                <div className="flex ml-10 mt-5 gap-4">
//                   <p className=""><b>Quantity Available:</b></p>
//                   <p className="text-gray-600">5</p>
//                </div>
//                <div className="flex ml-10 mt-5 gap-4">
//                   <p className=""><b>Discount Rate:</b></p>
//                   <p className="text-gray-600">10%</p>
//                </div>
//                <div className="flex ml-10 mt-5 gap-4">
//                   <p className=""><b>Discription:</b></p>
//                   <p className="text-gray-600">Silver coated belt</p>
//                </div>

//             </Box>
//          </Modal>
//       </div>
//    );
// }


