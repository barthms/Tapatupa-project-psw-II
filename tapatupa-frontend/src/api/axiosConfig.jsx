// src/api/axiosConfig.js
import axios from 'axios';

// Buat instance axios dengan konfigurasi default
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true, // Penting untuk mengirim cookies
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Fungsi untuk mendapatkan CSRF token
const getCsrfToken = async () => {
    try {
        const response = await api.get('/csrf-token');
        return response.data.token;
    } catch (error) {
        console.error('Gagal mengambil CSRF token:', error);
        throw error;
    }
};

// Interceptor untuk menambahkan CSRF token pada setiap request non-GET
api.interceptors.request.use(async (config) => {
    // Tambahkan X-CSRF-TOKEN header untuk request yang memodifikasi data
    if (['post', 'put', 'delete', 'patch'].includes(config.method)) {
        try {
            const token = await getCsrfToken();
            config.headers['X-CSRF-TOKEN'] = token;
        } catch (error) {
            console.error('Error saat menambahkan CSRF token:', error);
        }
    }
    return config;
});

export default api;