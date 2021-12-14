import axios from "axios";


const API = axios.create({
    baseURL:'https://fakestoreapi.com',
    headers:{
        // "Accept":"",
        // "Authorization":""
    }
})

export default API;