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
import { Link } from 'react-router-dom';
import purchase from '../api/purchase';


const PurchasedShopCard = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [purchasesList, setPurchaseList] = useState([]);

    // const handleChangePage = (_, newPage) => {
    //   setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(+event.target.value);
    //   setPage(0);
    // };

    const getPurchases = async () => {
        try {
            const response = await ApiIndex.PurchaseApi.getPurchases();
            setPurchaseList(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPurchases();
    }, [getPurchases]);
    return (
        <div>
            <div className='pt-20 pl-32'>
                {/* <p className='text-3xl text-left pl-32 font-bold '>Your Purchases</p> */}

                {/* <img className='h-30 w-30 shadow-2xl flex flex-col' src={watch1} alt="/" />  */}

                 {/* <div  className='flex flex-col justify-center pl-12'> */}
                
                 {purchasesList && purchasesList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((purchase, index) => ( 
                        <>
                        {
                    // {purchasesList && purchasesList
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    // .map((purchase, index) => (  
                            <div className='max-w-[1000px] mx-auto grid md:grid-cols-1 gap-8 pb-12'>
                                <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                                    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3  pb-4 pt-4'>
                                        <div>
                                        <img className='h-30 w-30 shadow-2xl flex flex-col' src={purchase.shopImage} alt="/" />
                                        </div>
                                   
                                        <div>
                                            <h2 className='text-2xl font-bold text-center pt-20 py-8'>{purchase.shopName}</h2>
                                        </div>
                                        <div className='pl-22 pt-11'>
                                            <button className='border-none my-6 mx-auto   px-6 py-3'><Link to="/purchaseHistory">View More</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        </>
                        
                     ))}   



                {/* </div> */}


                {/* </div> */}

            </div>
        </div>





    )
}

export default PurchasedShopCard