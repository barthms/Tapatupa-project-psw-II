import React, { useEffect, useState } from 'react';
import { fetchJenisStatus } from '../../api/JenisStatusAPI';
import { createStatus, updateStatus } from '../../api/StatusAPI';

const StatusForm = ({ onSuccess, selectedData, setSelectedData }) => {
    const [form, setForm] = useState({
        idJenisStatus: '',
        namaStatus: '',
        keterangan: ''
    });
    const [jenisOptions, setJenisOptions] = useState([]);

    useEffect(() => {
        const loadJenis = async () => {
            const result = await fetchJenisStatus();
            setJenisOptions(result);
        };
        loadJenis();
    }, []);

    useEffect(() => {
        if (selectedData) {
            setForm({
                idJenisStatus: selectedData.idJenisStatus,
                namaStatus: selectedData.namaStatus,
                keterangan: selectedData.keterangan || ''
            });
        } else {
            setForm({ idJenisStatus: '', namaStatus: '', keterangan: '' });
        }
    }, [selectedData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedData) {
                await updateStatus(selectedData.idStatus, form);
            } else {
                await createStatus(form);
            }
            alert('Data berhasil disimpan!');
            onSuccess();
            setForm({ idJenisStatus: '', namaStatus: '', keterangan: '' });
            setSelectedData(null);
        } catch (err) {
            console.error('Gagal menyimpan data:', err);
            alert('Terjadi kesalahan saat menyimpan data.');
        }
    };

    return (
        <div className="card p-4">
            <h4>{selectedData ? 'Edit Status' : 'Tambah Status'}</h4>
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
                                {opt.jenisStatus}
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

                <div>
                    <button type="submit" className="btn btn-primary me-2">
                        {selectedData ? 'Update' : 'Simpan'}
                    </button>
                    {selectedData && (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setSelectedData(null)}
                        >
                            Batal
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default StatusForm;
