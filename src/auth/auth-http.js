import axios from "axios";

export const HTTP = axios.create({
    baseURL: `https://api.nasa.gov`,
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": '*',
        Authorization: 'Bearer 2AH7DKu3eBC04a3UFr1bnuB2ERwy6qAYVe1hnZQJ'
    }
})