import React, { useState } from 'react';
import axios from 'axios';

const WajibRetribusiForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        namaWajibRetribusi: '',
        alamat: '',
        nomorTelepon: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/wajibRetribusi', form);
            alert('Data berhasil disimpan!');
            setForm({ namaWajibRetribusi: '', alamat: '', nomorTelepon: '', email: '' });
            onSuccess();
        } catch (err) {
            console.error(err);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Wajib Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nama</label>
                    <input name="namaWajibRetribusi" className="form-control" value={form.namaWajibRetribusi} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Alamat</label>
                    <input name="alamat" className="form-control" value={form.alamat} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Nomor Telepon</label>
                    <input name="nomorTelepon" className="form-control" value={form.nomorTelepon} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input name="email" className="form-control" value={form.email} onChange={handleChange} />
                </div>
                <button className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default WajibRetribusiForm;
