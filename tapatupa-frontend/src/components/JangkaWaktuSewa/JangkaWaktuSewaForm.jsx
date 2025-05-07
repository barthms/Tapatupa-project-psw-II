import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchJenisJangkaWaktu } from '../../api/Api';

const JangkaWaktuSewaForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        idJenisJangkaWaktu: '',
        jangkaWaktu: '',
        keterangan: '',
        isDefault: false
    });

    const [jenisOptions, setJenisOptions] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetchJenisJangkaWaktu();
                setJenisOptions(res);
            } catch (err) {
                console.error('Gagal ambil jenis jangka waktu:', err);
            }
        };
        load();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/jangkaWaktuSewa', form);
            alert('Data berhasil disimpan!');
            setForm({ idJenisJangkaWaktu: '', jangkaWaktu: '', keterangan: '', isDefault: false });
            if (onSuccess) onSuccess();
        } catch (err) {
            console.error('Gagal simpan:', err);
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Jangka Waktu Sewa</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Jenis Jangka Waktu</label>
                    <select className="form-control" name="idJenisJangkaWaktu" value={form.idJenisJangkaWaktu} onChange={handleChange} required>
                        <option value="">Pilih Jenis</option>
                        {jenisOptions.map(opt => (
                            <option key={opt.idJenisJangkaWaktu} value={opt.idJenisJangkaWaktu}>
                                {opt.namaJenisJangkaWaktu}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Jangka Waktu</label>
                    <input type="number" name="jangkaWaktu" className="form-control" value={form.jangkaWaktu} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Keterangan</label>
                    <textarea name="keterangan" className="form-control" value={form.keterangan} onChange={handleChange} />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="isDefault" name="isDefault" checked={form.isDefault} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="isDefault">Default</label>
                </div>
                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default JangkaWaktuSewaForm;
