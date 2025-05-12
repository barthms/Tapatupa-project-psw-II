import React, { useState, useEffect } from 'react';
import { createJenisObjekRetribusi, updateJenisObjekRetribusi } from '../../api/JenisObjekRetribusiAPI';

const JenisObjekRetribusiForm = ({ onSuccess, selectedData, setSelectedData }) => {
    const [form, setForm] = useState({ jenisObjekRetribusi: '', keterangan: '' });

    useEffect(() => {
        if (selectedData) {
            setForm({
                jenisObjekRetribusi: selectedData.jenisObjekRetribusi,
                keterangan: selectedData.keterangan || '',
            });
        } else {
            setForm({ jenisObjekRetribusi: '', keterangan: '' });
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
                await updateJenisObjekRetribusi(selectedData.idJenisObjekRetribusi, form);
                alert('Data berhasil diperbarui!');
            } else {
                await createJenisObjekRetribusi(form);
                alert('Data berhasil disimpan!');
            }

            setForm({ jenisObjekRetribusi: '', keterangan: '' });
            setSelectedData(null);
            if (onSuccess) onSuccess();

        } catch (error) {
            console.error(error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>{selectedData ? 'Edit' : 'Tambah'} Jenis Objek Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <input
                    name="jenisObjekRetribusi"
                    value={form.jenisObjekRetribusi}
                    onChange={handleChange}
                    placeholder="Nama Jenis"
                    required
                    className="form-control mb-2"
                />
                <textarea
                    name="keterangan"
                    value={form.keterangan}
                    onChange={handleChange}
                    placeholder="Keterangan"
                    className="form-control mb-2"
                />
                <button type="submit" className="btn btn-primary">
                    {selectedData ? 'Update' : 'Simpan'}
                </button>
                {selectedData && (
                    <button type="button" onClick={() => setSelectedData(null)} className="btn btn-secondary ms-2">
                        Batal
                    </button>
                )}
            </form>
        </div>
    );
};

export default JenisObjekRetribusiForm;
