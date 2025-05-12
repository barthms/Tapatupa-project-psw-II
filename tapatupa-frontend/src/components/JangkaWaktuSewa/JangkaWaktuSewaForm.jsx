import React, { useState, useEffect } from 'react';
import { createJangkaWaktuSewa, updateJangkaWaktuSewa } from '../../api/JangkaWaktuSewaAPI';
import { fetchJenisJangkaWaktu } from '../../api/Api';

const JangkaWaktuSewaForm = ({ onSuccess, editData, onCancel }) => {
    const [form, setForm] = useState({
        idJenisJangkaWaktu: '',
        jangkaWaktu: '',
        keterangan: '',
        isDefault: false
    });

    const [jenisOptions, setJenisOptions] = useState([]);

    useEffect(() => {
        fetchJenisJangkaWaktu().then(setJenisOptions).catch(console.error);
    }, []);

    useEffect(() => {
        if (editData) {
            setForm({
                idJenisJangkaWaktu: editData.idJenisJangkaWaktu,
                jangkaWaktu: editData.jangkaWaktu,
                keterangan: editData.keterangan || '',
                isDefault: editData.isDefault
            });
        } else {
            setForm({ idJenisJangkaWaktu: '', jangkaWaktu: '', keterangan: '', isDefault: false });
        }
    }, [editData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editData) {
                await updateJangkaWaktuSewa(editData.idJangkaWaktuSewa, form);
                alert('Data berhasil diperbarui!');
            } else {
                await createJangkaWaktuSewa(form);
                alert('Data berhasil disimpan!');
            }
            setForm({ idJenisJangkaWaktu: '', jangkaWaktu: '', keterangan: '', isDefault: false });
            onSuccess();
        } catch (err) {
            console.error(err);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>{editData ? 'Edit' : 'Tambah'} Jangka Waktu Sewa</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Jenis Jangka Waktu</label>
                    <select
                        className="form-control"
                        name="idJenisJangkaWaktu"
                        value={form.idJenisJangkaWaktu}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Pilih Jenis</option>
                        {jenisOptions.map(opt => (
                            <option key={opt.idJenisJangkaWaktu} value={opt.idJenisJangkaWaktu}>
                                {opt.jenisJangkaWaktu}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Jangka Waktu</label>
                    <input
                        type="number"
                        name="jangkaWaktu"
                        className="form-control"
                        value={form.jangkaWaktu}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Keterangan</label>
                    <textarea
                        name="keterangan"
                        className="form-control"
                        value={form.keterangan}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="isDefault"
                        name="isDefault"
                        checked={form.isDefault}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="isDefault">Default</label>
                </div>
                <button type="submit" className="btn btn-primary me-2">
                    {editData ? 'Update' : 'Simpan'}
                </button>
                {editData && (
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>
                        Batal
                    </button>
                )}
            </form>
        </div>
    );
};

export default JangkaWaktuSewaForm;
