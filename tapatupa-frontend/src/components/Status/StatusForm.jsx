import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchJenisStatus } from '../../api/Api';

const StatusForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        idJenisStatus: '',
        namaStatus: '',
        keterangan: ''
    });

    const [jenisOptions, setJenisOptions] = useState([]);

    useEffect(() => {
        const loadOptions = async () => {
            try {
                const res = await fetchJenisStatus();
                setJenisOptions(res);
            } catch (error) {
                console.error('Gagal memuat jenis status:', error);
            }
        };

        loadOptions();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/status', form);
            alert('Data berhasil disimpan!');
            setForm({ idJenisStatus: '', namaStatus: '', keterangan: '' });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Status</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="idJenisStatus" className="form-label">Jenis Status</label>
                    <select
                        name="idJenisStatus"
                        className="form-control"
                        value={form.idJenisStatus}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Pilih Jenis Status --</option>
                        {jenisOptions.map(opt => (
                            <option key={opt.idJenisStatus} value={opt.idJenisStatus}>
                                {opt.namaJenisStatus}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="namaStatus" className="form-label">Nama Status</label>
                    <input
                        type="text"
                        className="form-control"
                        name="namaStatus"
                        value={form.namaStatus}
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

export default StatusForm;
