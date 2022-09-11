import axios from "../axios"



const registerCustomer = (data) => {
    return axios.post(`/customers`, data);
}
const  getCustomers = (id) => {
    return axios.get(`/customers`,id=1);
}
const  updateCustomer = (id) => {
    return axios.put(`/customers`,id);
}

const login = (data) => {
    return axios.post(`/customers/login`, data);
}

export default {
    registerCustomer: registerCustomer,
    login: login,
    getCustomers:getCustomers,
    updateCustomer:updateCustomer
};

