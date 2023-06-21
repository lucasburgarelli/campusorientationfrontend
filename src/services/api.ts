import axios from "axios";


export const Api = axios.create({
    baseURL: "http://10.0.1.102:8082/campusorientation/api"
})