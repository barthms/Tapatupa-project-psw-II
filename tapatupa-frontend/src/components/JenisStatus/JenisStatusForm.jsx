import React, { useState } from 'react';
import axios from 'axios';

const JenisStatusForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        jenisStatus: '',
        keterangan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/jenis-status', form);
            alert('Data berhasil disimpan!');
            setForm({ jenisStatus: '', keterangan: '' });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Jenis Status</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="jenisStatus" className="form-label">Jenis Status</label>
                    <input
                        type="text"
                        className="form-control"
                        name="jenisStatus"
                        value={form.jenisStatus}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="keterangan" className="form-label">Keterangan</label>
                    <textarea
                        className="form-control"
                        name="keterangan"
                        value={form.keterangan}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default JenisStatusForm;
