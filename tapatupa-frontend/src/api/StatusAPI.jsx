import axios from 'axios';

const API_URL = 'http://localhost:8000/api/status';

export const fetchStatus = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createStatus = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateStatus = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
};

// SOFT DELETE
export const deleteStatus = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
};
