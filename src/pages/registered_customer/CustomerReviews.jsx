import {React, useState,useEffect} from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import watch1 from '../../assets/watch1.jpg';
import ApiIndex from "../../api/index";
import { FaStar } from "react-icons/fa";
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
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };
      
        const getReviews = async (e) => {
          try {
              const response = await ApiIndex.ReviewApi.getReviews();
              setReviewList(response.data);
          }
          catch (error) {
            console.error(error);
          }
        } 
      
        useEffect(() => {
            getReviews();
        },[getReviews]);
    return (
       <div>
         <Navbarr />
            <div >
            <div className='pt-20'>
                  
                  <p className='text-3xl text-center'><b> <br></br>Rolex watch</b><br /></p>
                  </div>
                
                <div className='max-w-[1240px] mx-auto grid md:grid-rows-2 pb-20  pl-24'>
                  
                

                    <img className='h-22 w-22 shadow-2xl justify-center ' src={watch1} alt="/" />
                    <div className=' flex-col justify-center'>
                        
                        <p className='text-2xl  pt-3'><b>Rating & Reviews</b><br /></p>
                        <TableBody>
                {reviewList && reviewList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((review, index)=>(
                   <TableRow key={index}>
                      <TableCell align="left">{review.description}</TableCell>
                      <TableCell align="center">the rating is:{review.rating}
                      <div >
        
            <FaStar
            index={5}
              
              size={30}
              
              
              
            
              color={ index = colors.orange }
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
                        <div className=' mx-auto grid md:grid-cols-3'>
                    <div className=' pl-32'>
                        <form action='../CustomerAddReviews'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Review</button>
                        </form>
                    </div>
                    <div className=' pl-8'>
                      <form action='../CustomerProducts'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Back</button>
                        </form>
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