import React, { useEffect, useState } from 'react';
import { fetchJenisPermohonan, createJenisPermohonan } from '../../api/JenisPermohonanAPI';
import axios from 'axios';

const JenisPermohonanForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        parentId: '',
        jenisPermohonan: ''
    });

    const [parentOptions, setParentOptions] = useState([]);

    useEffect(() => {
        const loadParentOptions = async () => {
            try {
                const res = await fetchJenisPermohonan(); // endpoint ambil semua jenis
                setParentOptions(res.data.data);
            } catch (error) {
                console.error('Gagal memuat data parent:', error);
            }
        };

        loadParentOptions();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...form,
            parentId: form.parentId === '' ? null : form.parentId
        };

        try {
            await createJenisPermohonan(payload); // LANGSUNG PANGGIL fungsinya
            alert('Data berhasil disimpan!');
            setForm({ parentId: '', jenisPermohonan: '' });
            if (onSuccess) onSuccess(); // trigger reload list
        } catch (error) {
            console.error('Gagal menyimpan data:', error.response?.data || error.message);
            alert('Gagal menyimpan data!');
        }
    };



    return (
        <div className="card p-4">
            <h4>Form Tambah Jenis Permohonan</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="parentId" className="form-label">Parent Permohonan (Opsional)</label>
                    <select
                        name="parentId"
                        id="parentId"
                        className="form-control"
                        value={form.parentId}
                        onChange={handleChange}
                    >
                        <option value="">-- Tidak ada Parent --</option>
                        {parentOptions.map((opt) => (
                            <option key={opt.idJenisPermohonan} value={opt.idJenisPermohonan}>
                                {opt.jenisPermohonan}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="jenisPermohonan" className="form-label">Nama Jenis Permohonan</label>
                    <input
                        type="text"
                        name="jenisPermohonan"
                        id="jenisPermohonan"
                        className="form-control"
                        value={form.jenisPermohonan}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};
export default JenisPermohonanForm;