import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/jenisPermohonan',  // Ganti dengan URL API Laravel
});

export default api;
