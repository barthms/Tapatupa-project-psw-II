import axios from 'axios';

const API_URL = 'http://localhost:8000/api/wajibRetribusi';

export const fetchWajibRetribusi = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createWajibRetribusi = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateWajibRetribusi = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
};

// SOFT DELETE
export const deleteWajibRetribusi = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.WajibRetribusi === 200;
};
