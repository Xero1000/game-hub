import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
    count: number
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5a00279a0cb347bcae546ecf4525c8a4"
    }
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient

export { CanceledError }