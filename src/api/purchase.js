import axios from "../axios"



const getPurchases = (data) => {
    return axios.get(`/merchants`);
}



export default {
    getPurchases: getPurchases,
    
};
