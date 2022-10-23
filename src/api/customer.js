import axios from "../axios"



const registerCustomer = (data) => {
    return axios.post(`/customersUsers`, data);
}
const  getCustomers = (id) => {
    return axios.get(`/customers`,id=1);
}
const  updateCustomer = (id) => {
    return axios.put(`/customers`,id);
}

const login = (data) => {
    return axios.post(`/customersUsers/login`, data);
}

export default {
    registerCustomer: registerCustomer,
    login: login,
    getCustomers:getCustomers,
    updateCustomer:updateCustomer
};

