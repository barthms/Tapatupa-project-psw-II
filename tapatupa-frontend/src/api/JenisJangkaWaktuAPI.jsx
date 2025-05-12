import axios from 'axios';

const API_URL = 'http://localhost:8000/api/jenisJangkaWaktu';

export const fetchJenisJangkaWaktu = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createJenisJangkaWaktu = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateJenisJangkaWaktu = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
};

// SOFT DELETE
export const deleteJenisJangkaWaktu = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
};
