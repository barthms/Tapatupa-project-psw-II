import React, { useState, useEffect } from 'react';
import { createJenisStatus, updateJenisStatus } from '../../api/JenisStatusAPI';

const JenisStatusForm = ({ onSuccess, editData, setSelectedData }) => {
    const [form, setForm] = useState({ jenisStatus: '', keterangan: '' });

    useEffect(() => {
        if (editData) {
            setForm({
                jenisStatus: editData.jenisStatus,
                keterangan: editData.keterangan || '',
            });
        } else {
            setForm({ jenisStatus: '', keterangan: '' });
        }
    }, [editData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editData) {
                await updateJenisStatus(editData.idJenisStatus, form);
                alert('Data berhasil diperbarui!');
            } else {
                await createJenisStatus(form);
                alert('Data berhasil disimpan!');
            }
            setForm({ jenisStatus: '', keterangan: '' });
            setSelectedData(null);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>{editData ? 'Edit' : 'Tambah'} Jenis Status</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Jenis Status</label>
                    <input
                        type="text"
                        name="jenisStatus"
                        className="form-control"
                        value={form.jenisStatus}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Keterangan</label>
                    <textarea
                        name="keterangan"
                        className="form-control"
                        value={form.keterangan}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {editData ? 'Update' : 'Simpan'}
                </button>
                {editData && (
                    <button
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={() => {
                            setForm({ jenisStatus: '', keterangan: '' });
                            setSelectedData(null);
                        }}
                    >
                        Batal
                    </button>
                )}
            </form>
        </div>
    );
};

export default JenisStatusForm;
