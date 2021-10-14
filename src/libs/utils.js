import axios from 'axios';

export const fetchImages = async ()  => {
    const response = await axios.get("/data.json");
    return response.data;
}

