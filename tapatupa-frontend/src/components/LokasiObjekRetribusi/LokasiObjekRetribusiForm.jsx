import React, { useState } from 'react';
import axios from 'axios';

const LokasiObjekRetribusiForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        lokasiObjekRetribusi: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/lokasiObjekRetribusi', form);
            alert('Data berhasil disimpan!');
            setForm({ lokasiObjekRetribusi: '' });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Tambah Lokasi Objek Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="lokasiObjekRetribusi" className="form-label">Lokasi</label>
                    <input
                        type="text"
                        name="lokasiObjekRetribusi"
                        id="lokasiObjekRetribusi"
                        className="form-control"
                        value={form.lokasiObjekRetribusi}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default LokasiObjekRetribusiForm;
