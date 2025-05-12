import React, { useState, useEffect } from 'react';
import { createLokasiObjekRetribusi, updateLokasiObjekRetribusi } from '../../api/LokasiObjekRetribusiAPI';

const LokasiObjekRetribusiForm = ({ onSuccess, editData, onCancel }) => {
    const [form, setForm] = useState({ lokasiObjekRetribusi: '' });

    useEffect(() => {
        if (editData) {
            setForm({ lokasiObjekRetribusi: editData.lokasiObjekRetribusi });
        } else {
            setForm({ lokasiObjekRetribusi: '' });
        }
    }, [editData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editData) {
                await updateLokasiObjekRetribusi(editData.idLokasiObjekRetribusi, form);
                alert('Data berhasil diperbarui!');
            } else {
                await createLokasiObjekRetribusi(form);
                alert('Data berhasil disimpan!');
            }
            setForm({ lokasiObjekRetribusi: '' });
            onSuccess();
        } catch (err) {
            console.error(err);
            alert('Gagal menyimpan data.');
        }
    };

    return (
        <div className="card p-4">
            <h4>{editData ? 'Edit' : 'Tambah'} Lokasi Objek Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Lokasi</label>
                    <input
                        type="text"
                        name="lokasiObjekRetribusi"
                        className="form-control"
                        value={form.lokasiObjekRetribusi}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">{editData ? 'Update' : 'Simpan'}</button>
                {editData && (
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>Batal</button>
                )}
            </form>
        </div>
    );
};

export default LokasiObjekRetribusiForm;
