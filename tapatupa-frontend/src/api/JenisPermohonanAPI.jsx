import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/jenisPermohonan';

export const fetchJenisPermohonan = async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
};

export const fetchJenisPermohonanById = async (id) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
};

export const createJenisPermohonan = async (data) => {
    const res = await axios.post(BASE_URL, data);
    return res.data;
};

export const updateJenisPermohonan = async (id, data) => {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
};

export const deleteJenisPermohonan = async (id) => {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
};
