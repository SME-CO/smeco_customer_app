import axios from "../axios"



const getProducts = (data) => {
    return axios.get(`/products`);
}

const getProductsByMerchant = (merchantId) => {
    return axios.get(`/products/merchant/${merchantId}`);
}

const  getProductsByCategory = (category) => {
    return axios.get(`/products/categories/${category}`);
} 



export default {
    getProducts: getProducts,
    getProductsByMerchant : getProductsByMerchant,
    getProductsByCategory : getProductsByCategory
};
