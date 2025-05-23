import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tarifObjekRetribusi';

export const fetchTarifObjekRetribusi = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTarifObjekRetribusi = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateTarifObjekRetribusi = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
};

// SOFT DELETE
export const deleteTarifObjekRetribusi = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.TarifObjekRetribusi === 200;
};
