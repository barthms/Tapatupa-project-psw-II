import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const fetchJenisPermohonan = async () => {
    try {
        const response = await axios.get(`${API_URL}/jenisPermohonan`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch jenis permohonan:', err);
        throw err;
    }
};