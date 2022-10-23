

import React from 'react'
import ApiIndex from "../../api/index";
import { useState, useEffect } from "react";
import PurchasedShopCard from "../../components/PurchasedShopCard";
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
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



const CustomerRecords = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [productsList, setProductList] = useState([]);

   

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
    }, [getProducts]);
    return (
        <div>
            <SideNavr />
            <Navbarr />
            <div className='pt-20 pl-32'>
                <p className='text-3xl  text-center font-bold '>Your Purchased shops</p>

                <PurchasedShopCard />


            </div>
        </div>





    )
}

export default CustomerRecords
