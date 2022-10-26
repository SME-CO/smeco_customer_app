import axios from "../axios"

const  getReviewsById = (productId) => {
    return axios.get(`reviews/product/${productId}`);
}

const  createReview = (data) => {
    return axios.post(`/reviews`, data);
}


export default {
    getReviewsById: getReviewsById,
    createReview: createReview,
    
};