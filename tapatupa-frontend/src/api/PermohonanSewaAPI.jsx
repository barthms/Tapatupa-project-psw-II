import axios from 'axios';

const API_URL = 'http://localhost:8000/api/permohonanSewa';

export const fetchPermohonanSewa = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createPermohonanSewa = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updatePermohonanSewa = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
};

// SOFT DELETE
export const deletePermohonanSewa = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
};
