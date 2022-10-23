import axios from "../axios"

const  getReviews = () => {
    return axios.get(`/reviews`);
}

const  createReview = (data) => {
    return axios.post(`/reviews`, data);
}


export default {
    getReviews: getReviews,
    createReview: createReview,
    
};