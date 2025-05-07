import React, { useState } from 'react';
import axios from 'axios';

const JenisObjekRetribusiForm = ({ onSuccess }) => {
    const [form, setForm] = useState({ jenisObjekRetribusi: '', keterangan: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/jenisObjekRetribusi', form);
            alert('Data berhasil disimpan!');
            setForm({ jenisObjekRetribusi: '', keterangan: '' });
            if (onSuccess) onSuccess();
        } catch (error) {
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Jenis Objek Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <input name="jenisObjekRetribusi" value={form.jenisObjekRetribusi} onChange={handleChange} placeholder="Nama Jenis" required className="form-control mb-2" />
                <textarea name="keterangan" value={form.keterangan} onChange={handleChange} placeholder="Keterangan" className="form-control mb-2" />
                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default JenisObjekRetribusiForm;
