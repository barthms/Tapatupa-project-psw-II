import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/jenisPermohonan';

export const fetchJenisPermohonan = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Mengambil array dari response.data.data
    } catch (err) {
        console.error('Gagal fetch jenis permohonan:', err);
        throw err;
    }
};