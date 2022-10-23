import axios from "../axios"



const getMerchants = (data) => {
    return axios.get(`/merchants`);
}




export default {
    getMerchants: getMerchants,
    
};
