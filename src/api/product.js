import axios from "../axios"



const getProducts = (data) => {
    return axios.get(`/products`);
}



export default {
    getProducts: getProducts,
    
};
