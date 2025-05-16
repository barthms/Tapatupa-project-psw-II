import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/jenisPermohonan';

// GET: Ambil semua jenis permohonan
export const fetchJenisPermohonan = async (withHierarchy = true) => {
    try {
        // If we want hierarchical data, add the query parameters
        const url = withHierarchy 
            ? `${BASE_URL}?withChildren=true&onlyRoot=true` 
            : BASE_URL;
            
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.error('Gagal fetch jenis permohonan:', err);
        throw err;
    }
};

// POST: Tambah jenis permohonan baru
export const createJenisPermohonan = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data);
        return response.data;
    } catch (err) {
        console.error('Gagal tambah jenis permohonan:', err);
        throw err;
    }
};

// PUT: Update jenis permohonan berdasarkan ID
export const updateJenisPermohonan = async (id, data) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, data);
        return response.data;
    } catch (err) {
        console.error('Gagal update jenis permohonan:', err);
        throw err;
    }
};

// DELETE: Hapus jenis permohonan berdasarkan ID
export const deleteJenisPermohonan = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (err) {
        console.error('Gagal hapus jenis permohonan:', err);
        throw err;
    }
};