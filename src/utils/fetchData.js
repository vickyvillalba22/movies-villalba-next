import axios from "axios";

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

export default async function fetchData (endpoint){

    try {

        const response = await axios.get(
            `${API_URL}${endpoint}?api_key=${API_KEY}`
        )


        return response.data
        
    } catch (error) {

        console.log("error en fetchData: ", error);

        throw error
        
    }
}