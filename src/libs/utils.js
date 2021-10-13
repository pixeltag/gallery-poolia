import axios from 'axios';

export function getImagesServices() {
    return axios.get("/data.json");
}