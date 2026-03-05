import axios from 'axios'

export const getArticoli  = async () => {
    const response = await axios.get("http://localhost:3000/api/articoli")
    return response.data;
}