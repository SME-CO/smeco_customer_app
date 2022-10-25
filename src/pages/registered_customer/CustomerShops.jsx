import { React, useState, useEffect } from 'react'
import Navbarr from "../../components/Navbarr";
import SideNavr from "../../components/SideNavr";
import img1 from "../../assets/furniture mart.png";
import img3 from "../../assets/shoe palace.png";
import img4 from "../../assets/your choice.png";
import img5 from "../../assets/Glitters.png";
import img6 from "../../assets/Unlimited.png";
import img7 from "../../assets/Stylish mart.png";
import ShopAll from "../../components/shops/ShopAll";
import ApiIndex from "../../api/index";

const CustomerShops = () =>{

  const [state, setState] = useState(0);
  const[ShopList,setShopList] = useState([]);
  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    try{
      let response =await ApiIndex.CustomerApi.getMerchantsByLocation(Location);
      setShopList(response.data);
      console.log(Location);
    }
    catch(error){
      console.error(error);
    }
  }




  return (
    <div>
      <Navbarr />
      <div className="pt-24 md:ml-60">
      <div className="flex items-center pl-64">
                    <div className="flex border border-purple-200 rounded">
                        <input onSubmit={handleSubmit}
                            type="text"
                            placeholder="Search..."
                            className="block w-full px-24 py-2 text-purple-700 bg-white border rounded-lg focus:border-[#03045E] focus:ring-[#03045E] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <button className="px-8 text-white bg-[#03045E] border-none rounded-lg"onSubmit={handleSubmit}>
                            Search
                        </button>
                    </div>
                </div>
        <ShopAll />
      </div>

      <SideNavr />
    </div>
  );
};

export default CustomerShops;
