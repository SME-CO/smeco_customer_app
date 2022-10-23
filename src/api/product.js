import axios from "../axios"



const getProducts = (data) => {
    return axios.get(`/products`);
}

const getProductsByMerchant = (merchantId) => {
    return axios.get(`/products/merchant/${merchantId}`);
}



export default {
    getProducts: getProducts,
    getProductsByMerchant : getProductsByMerchant
    
};
