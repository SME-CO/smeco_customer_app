import { React, useState, useEffect } from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import watch1 from '../../assets/watch1.jpg';
import ApiIndex from "../../api/index";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};


const CustomerReviews = () => {

  const [currentValue, setCurrentValue] = useState(0);

  const stars = Array(5).fill(0)

  // const handleClick = value => {
  //   setCurrentValue(value)
  // }





  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const [reviewList, setReviewList] = useState([]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  let { productId } = useParams();


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getReviewsById = async (productId) => {
    try {
      const response = await ApiIndex.ReviewApi.getReviewsById(productId);
      setReviewList(response.data);
      console.log()
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getReviewsById(productId);
  }, [])
  return (
    <div>
      <Navbarr />
      <div className='pt-24 md:ml-60' >

      {/* <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 pt-12 gap-8'>
        <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> */}
          {/* <img className='w-20 mx-auto mt-[-3rem]' src={watch1} alt="" /> */}
          {/* <h2 className='text-2xl font-bold text-center py-8'>Rolex Watch</h2> */}
          {/* <AiTwotoneShop className='mx-auto fill-[#03045E]' size='3rem' /> */}
          {/* <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Rated Shops</p>
            <p className='py-2 border-b mx-8'>Qualified Merchants</p>
          </div>
          <button className='border-none my-6 mx-auto px-3 py-2'>More for you</button> */}
        {/* </div>
        </div> */}

        
       <div className='max-w-[1800px] mx-auto grid md:grid pt-12 gap-8'>
        <div>
          {/* <p className='text-3xl text-center font-bold'>Rolex watch</p> */}
        </div>

        <div className='max-w-[1240px] mx-auto grid md:grid-rows-2 pb-20  pl-24'>



          <img className='h-80 w-80 shadow-2xl mx-auto' src={watch1} alt="/" />
          <div className=' flex-col justify-center'>
           <div>
           <p className='text-2xl pt-12 pl-44  justify-center'><b>Rating & Reviews</b><br /></p>
           </div>
            
            <TableBody>
              {reviewList && reviewList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((review, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{review.description}</TableCell>
                    <TableCell align="center">the rating is:{review.rating}
                      <div >

                        <FaStar
                          index={5}

                          size={30}




                          color={index = colors.orange}
                          style={{
                            marginRight: 10,
                            cursor: "pointer"
                          }}
                        />

                      </div></TableCell>
                    <TableCell align="center"></TableCell>


                  </TableRow>
                ))}
            </TableBody>
            <div className=' mx-auto grid md:grid-cols-2'>
              <div className=' pl-30 pt-12 pl-12'>
                <form action='../CustomerAddReviews'>
                  <button className='border-none w-[150px] px-2 py-2 rounded-full'>Review</button>
                </form>
              </div>
              <div className=' pl-8 pt-12 pl-12'>
                <form action='../CustomerPurchases'>
                  <button className='border-none w-[150px] px-2 py-2 rounded-full'>Back</button>
                </form>
              </div>
            </div>
            </div>

          </div>
        </div>
        <div>

        </div>







        <SideNavr />
      </div>
    </div>

  )
}

export default CustomerReviews