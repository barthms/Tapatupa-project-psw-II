import axios from 'axios';

const API_URL = 'http://localhost:8000/api/peruntukanSewa';

export const fetchPeruntukanSewa = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createPeruntukanSewa = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updatePeruntukanSewa = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
};

// SOFT DELETE
export const deletePeruntukanSewa = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
};
