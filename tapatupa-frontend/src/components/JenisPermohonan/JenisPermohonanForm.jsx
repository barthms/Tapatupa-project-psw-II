import React, { useEffect, useState } from 'react';
import { fetchJenisPermohonan, createJenisPermohonan, updateJenisPermohonan } from '../../api/JenisPermohonanAPI';

const JenisPermohonanForm = ({ onSuccess, editing, clearEditing }) => {
    const [form, setForm] = useState({
        parentId: '',
        jenisPermohonan: ''
    });

    const [parentOptions, setParentOptions] = useState([]);

    useEffect(() => {
        if (editing) {
            setForm({
                parentId: editing.parentId ?? '',
                jenisPermohonan: editing.jenisPermohonan
            });
        }
    }, [editing]);

    // 👉 Tambahan ini
    useEffect(() => {
        if (!editing) {
            setForm({ parentId: '', jenisPermohonan: '' });
        }
    }, [editing]);

    useEffect(() => {
        const loadParentOptions = async () => {
            try {
                const res = await fetchJenisPermohonan({ onlyRoot: true });
                setParentOptions(res.data);
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
            parentId: form.parentId === '' ? null : parseInt(form.parentId)
        };

        try {
            if (editing) {
                await updateJenisPermohonan(editing.id, payload);
                alert('Data berhasil diperbarui!');
                clearEditing();
            } else {
                await createJenisPermohonan(payload);
                alert('Data berhasil disimpan!');
            }

            setForm({ parentId: '', jenisPermohonan: '' });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error.response?.data || error.message);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>{editing ? 'Edit Jenis Permohonan' : 'Form Tambah Jenis Permohonan'}</h4>
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
                            <option key={opt.id} value={opt.id}>
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

                <button type="submit" className="btn btn-primary">
                    {editing ? 'Update' : 'Simpan'}
                </button>

                {editing && (
                    <button type="button" className="btn btn-secondary ms-2" onClick={clearEditing}>
                        Batal
                    </button>
                )}
            </form>
        </div>
    );
};

export default JenisPermohonanForm;
