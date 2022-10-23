import React from 'react'
import ApiIndex from "../api/index";
import { useState, useEffect } from "react";
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


import watch1 from '../assets/watch1.jpg';
import { Link } from 'react-router-dom';


const ProductCard = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [productsList, setProductList] = useState([]);
  
    // const handleChangePage = (_, newPage) => {
    //   setPage(newPage);
    // };
  
    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(+event.target.value);
    //   setPage(0);
    // };

    const getProducts = async () => {
      try {
          const response = await ApiIndex.ProductApi.getProducts();
          setProductList(response.data);
      }
      catch (error) {
        console.error(error);
      }
    } 

    useEffect(() => {
        getProducts();
    },[getProducts]);
    return (
        <div>
           <div>

            <p className='text-3xl text-center font-bold '>Your Purchased Products</p>
                
                {/* <img className='h-30 w-30 shadow-2xl flex flex-col' src={watch1} alt="/" /> */}
               
                    {/* <div  className='flex flex-col justify-center pl-12'> */}
                    
                {productsList && productsList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product, index) => (
                    <>
                    <div className='max-w-[1240px] mx-auto gap-4 grid md:grid-cols-5 pl-8 pt-12 pl-44 p-4 '>
                    <img className='h-50 w-50 shadow-2xl flex flex-col pl-10' src={product.image} alt="/" />
                    <div className='flex flex-col justify-center col-span-2 pl-12'>
                        <p className='text-xl'><b>Name :</b> {product.productName}<br /></p>
                        <p className='text-xl  pt-3'><b>Shop :</b>{product.shopName} <br /></p>
                        <p className='text-xl  pt-3'><b>Price :</b>{product.price} <br /></p>
                        <p className='text-xl  pt-3'><b>Type :</b> {product.catagory}<br /></p>
                        <p className='text-xl  pt-3'><b>Description :</b> {product.description}<br /></p>
                    </div>
                    <div className='pt-44 pl-12 col-span-1'>
                       <Link to={`/CustomerReviews`}><button className='border-none w-[150px] px-2 py-2 rounded-full'>Review</button></Link> 
                    </div>
                    <div className='pt-44 pl-8 col-span-1'>
                        <button onclick= "" className='border-none w-[150px] px-2 py-2 rounded-full'>Delete</button>
                    </div>
                    </div>
                    </>
                    // <TableRow key={index}>
                    //   <TableCell align="left">{product.productName}</TableCell>
                    //   <TableCell align="center">{product.price}</TableCell>
                    //   <TableCell align="center">{product.catagory}</TableCell>
                    //   <TableCell align="center">{product.offers}</TableCell>
                    //   </TableRow>
                      ))}
                      
                

                    {/* </div> */}
                

                {/* </div> */}

            </div>
        </div>
        
            
               
              
        
    )
}

export default ProductCard