import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5a00279a0cb347bcae546ecf4525c8a4"
    }
})