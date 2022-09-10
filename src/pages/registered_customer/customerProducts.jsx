import React from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import watch1 from '../../assets/watch1.jpg';
import handbag from '../../assets/handbag1.jpg';
import shoe from '../../assets/shoe1.jpg';
import bottle from '../../assets/bottle1.jpg';
import ProductCard from "../../components/ProductCard";


const CustomerProducts = () => {
    return (
        <div>
            <Navbarr />
            <div>
                <ProductCard/>
            </div>
            
                <SideNavr />
            </div>
        
    )
}

export default CustomerProducts