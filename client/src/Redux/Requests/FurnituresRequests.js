import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001"
});

export async function getAllFurnitures () {
    try {
        const response = await axiosInstance.get('/api/furnitures');
        console.log('furnitures request', response);
        return response
    }catch(err) {
        console.error(err)
    }
}

export async function getAllFurnituresPictures (furniture_id) {
    try {
        const response = await axiosInstance.get(`/api/furniture/${furniture_id}`);
        console.log('furnitures pictures request', response);
        return response.data
    }catch(err) {
        console.error(err)
    }
}


