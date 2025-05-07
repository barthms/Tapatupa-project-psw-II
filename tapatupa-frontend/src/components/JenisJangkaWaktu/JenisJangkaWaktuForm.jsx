import React, { useState } from 'react';
import axios from 'axios';

const JenisJangkaWaktuForm = ({ onSuccess }) => {
    const [form, setForm] = useState({ namaJenisJangkaWaktu: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/jenisJangkaWaktu', form);
            alert('Data berhasil disimpan!');
            setForm({ namaJenisJangkaWaktu: '' });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Jenis Jangka Waktu</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nama Jenis Jangka Waktu</label>
                    <input
                        type="text"
                        name="namaJenisJangkaWaktu"
                        className="form-control"
                        value={form.namaJenisJangkaWaktu}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default JenisJangkaWaktuForm;
