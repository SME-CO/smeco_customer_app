import axios from "../axios"



const getMerchants = (data) => {
    return axios.get(`/merchants`);
}
const getMerchantsByLocation =(Location) =>{
    return axios.getMerchantsByLocation(`/merchants/shopAddress/${Location}`);
}




export default {
    getMerchants: getMerchants,
    getMerchantsByLocation:getMerchantsByLocation,
    
};
