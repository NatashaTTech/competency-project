// const axios = require('axios');
import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3030/api',
})

// create a new user 
// export const newUser = payload => api.post('/user', payload)
// login user
// export const loginUser = payload => api.post('/users/login', payload)  
// export const loginUser = (payload) => api.get('/user', payload);  

// get user's cart 
export const getCart = (id) => api.get(`/user/${id}`);
 
// get available animals
export const getAnimals = () => api.get('/animals');
// get individual animal 
export const buyAnimal = () => api.get('/animals/:id')
// put animal in shopping cart
export const addToCart = (id, payload) => api.put(`/cart/${id}`, payload)

const apis = {
    // newUser, 
    // loginUser,
    getCart,
    getAnimals,
    buyAnimal,
    addToCart
}

export default apis;