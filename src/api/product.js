import axios from "../axios"



const getProducts = (data) => {
    return axios.get(`/products`);
}

const getPurchasedProducts = () => {
    const customerId = parseInt(window.localStorage.getItem('customerId'));
    return axios.get(`/products/purchased/${customerId}`);
}

const getProductsByMerchant = (merchantId) => {
    return axios.get(`/products/merchant/${merchantId}`);
}

const  getProductsByCategory = (category) => {
    return axios.get(`/products/categories/${category}`);
} 

const  getBuyGetOffers = (merchantId) => {
    return axios.get(`/offers/buyGet/${merchantId}`);
} 

const  getBundleOffers = (merchantId) => {
    return axios.get(`/offers/bundle/${merchantId}`);
} 

export default {
    getProducts: getProducts,
    getProductsByMerchant : getProductsByMerchant,
    getProductsByCategory : getProductsByCategory,
    getPurchasedProducts : getPurchasedProducts,
    getBuyGetOffers : getBuyGetOffers,
    getBundleOffers : getBundleOffers
};
