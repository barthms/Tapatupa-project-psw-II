import React, { useState, useEffect } from 'react';
import { createJenisJangkaWaktu, updateJenisJangkaWaktu } from '../../api/JenisJangkaWaktuAPI';

const JenisJangkaWaktuForm = ({ onSuccess, selectedData, setSelectedData }) => {
    const [form, setForm] = useState({ jenisJangkaWaktu: '', keterangan: '' });

    useEffect(() => {
        if (selectedData) {
            setForm({
                jenisJangkaWaktu: selectedData.jenisJangkaWaktu,
                keterangan: selectedData.keterangan || '',
            });
        } else {
            setForm({ jenisJangkaWaktu: '', keterangan: '' });
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
                await updateJenisJangkaWaktu(selectedData.idJenisJangkaWaktu, form);
                alert('Data berhasil diperbarui!');
            } else {
                await createJenisJangkaWaktu(form);
                alert('Data berhasil disimpan!');
            }
            setForm({ jenisJangkaWaktu: '', keterangan: '' });
            setSelectedData(null);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>{selectedData ? 'Edit' : 'Tambah'} Jenis Jangka Waktu</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label className="form-label">Jenis Jangka Waktu</label>
                    <input
                        type="text"
                        name="jenisJangkaWaktu"
                        className="form-control"
                        value={form.jenisJangkaWaktu}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Keterangan</label>
                    <textarea
                        name="keterangan"
                        className="form-control"
                        value={form.keterangan}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{selectedData ? 'Update' : 'Simpan'}</button>
                {selectedData && (
                    <button type="button" className="btn btn-secondary ms-2" onClick={() => setSelectedData(null)}>
                        Batal
                    </button>
                )}
            </form>
        </div>
    );
};

export default JenisJangkaWaktuForm;
