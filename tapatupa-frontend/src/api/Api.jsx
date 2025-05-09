import axios from 'axios';


const BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchJenisPermohonan = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/jenisPermohonan`);

        return response.data;
    } catch (err) {
        console.error('Gagal fetch jenis permohonan:', err);
        throw err;
    }
};

export const fetchJenisJangkaWaktu = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/jenisJangkaWaktu`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch jenis jangka waktu:', err);
        throw err;
    }
};

export const fetchJenisObjekRetribusi = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/jenisObjekRetribusi`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch jenis objek retribusi:', err);
        throw err;
    }
};

export const fetchLokasiObjekRetribusi = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/lokasiObjekRetribusi`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch lokasi objek retribusi:', err);
        throw err;
    }
};

export const fetchJenisStatus = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/jenisStatus`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch jenis status:', err);
        throw err;
    }
};

export const fetchStatus = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/status`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch status:', err);
        throw err;
    }
};

export const fetchWajibRetribusi = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/wajibRetribusi`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch wajib retribusi:', err);
        throw err;
    }
};

export const fetchPeruntukanSewa = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/peruntukanSewa`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch peruntukan sewa:', err);
        throw err;
    }
};

export const fetchObjekRetribusi = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/objekRetribusi`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch objek retribusi:', err);
        throw err;
    }
};

export const fetchTarifObjekRetribusi = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/tarifObjekRetribusi`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch tarif objek retribusi:', err);
        throw err;
    }
};

export const fetchJangkaWaktuSewa = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/jangkaWaktuSewa`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch jangka waktu sewa:', err);
        throw err;
    }
};

export const fetchPermohonanSewa = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/permohonanSewa`);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch permohonan sewa:', err);
        throw err;
    }
};
