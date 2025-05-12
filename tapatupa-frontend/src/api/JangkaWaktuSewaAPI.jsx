import axios from 'axios';

const API_URL = 'http://localhost:8000/api/jangkaWaktuSewa';

export const fetchJangkaWaktuSewa = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createJangkaWaktuSewa = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateJangkaWaktuSewa = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
};

// SOFT DELETE
export const deleteJangkaWaktuSewa = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
};
