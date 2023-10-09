import axios from "axios";

let apiBaseURL = process.env.VUE_SYSTEMCONFIG_URL
console.log("apiBaseURL", apiBaseURL);
const api = axios.create({
    baseURL: apiBaseURL || "http://localhost:3040",
});

export default api;