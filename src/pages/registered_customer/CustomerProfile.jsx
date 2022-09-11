import {React, useState,useEffect} from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import img from '../../assets/dula.jpg';
import img2 from '../../assets/dulanja.jpg';
import { Link } from 'react-router-dom';
import ApiIndex from '../../api/index'



const CustomerProfile = () => {

  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const [customersList, setCustomerList] = useState([]);
  
    const handleChangePage = (_, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    const getCustomers = async (id) => {
      try {
          const response = await ApiIndex.CustomerApi.getCustomers(id=1);
          setCustomerList(response.data);
      }
      catch (error) {
        console.error(error);
      }
    } 
  
    useEffect((id) => {
        getCustomers(id=1);
    },[getCustomers]);

        
    return (
        <div>
        <Navbarr />
        
            <div>
            {customersList && customersList
                .slice(page * rowsPerPage, page * rowsPerPage-2)
                .map((customer,index) => (
                  <div class="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-lg rounded-lg shadow-2xl mx-auto">
  <div class="relative h-40">
  <img className="object-cover w-full h-full" src={img2} alt="" />
    {/* <img class="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"> */}
  </div>
  <div class="relative shadow-1xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
    {/* <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"> */}
    <img className="object-cover w-full h-full" src={img} alt="" />
  </div>
  {/* {customersList && customersList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((customerUser, index=1) => ( */}
  <div class="mt-16">
    
    <h1 class="text-lg text-center font-semibold">
      Hi! I am <b> {customer.firstName}</b>
    </h1>
    <h2 className="text-sm text-left"><b>Mobile Number:</b>{customer.mobile} 
    </h2>
    <h2 className="text-sm text-left"><b>NIC NO:</b>{customer.nic}</h2>
    
  </div>
  <div class="mt-6 pt-4 flex flex-wrap mx-6 border-t  grid md:grid-cols-2">
                        
        <button className='border-none w-[150px] px-2 py-2 rounded-full'><Link to="/CustomerUpdateProfile">Change Profile</Link></button>
        {/* <button className='border-white px-6 py-2'><Link to="/CustomerProfile">Profile</Link></button> */}
                        
                    
        <div className='pl-10' >
            <form action='../Dashboard'>
                <button className='border-none w-[150px] px-2 py-2 rounded-full'>Back</button>
            </form>
        </div>
    
    
    
  </div>
</div>
                  

                  
            
              
              
                  
                    
                   
                ))}  
           


              

  


            </div>
            
            

            

            

            
            <SideNavr />
        </div>
    
        
    )
}

export default CustomerProfile