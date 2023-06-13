import axios from "axios";


export const Api = axios.create({
    baseURL: "https://localhost:7021/api"
})