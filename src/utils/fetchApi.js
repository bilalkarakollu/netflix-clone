import axios from "axios"

export const fetchApi = async (url) => {
    const request = await axios.get(url)
    return { data: request.data, message: request.statusText, status: request.status }
}