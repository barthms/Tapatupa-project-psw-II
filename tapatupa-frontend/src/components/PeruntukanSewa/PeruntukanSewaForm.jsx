import React, { useEffect, useState } from 'react';
import { createPeruntukanSewa, updatePeruntukanSewa } from '../../api/PeruntukanSewaAPI';

const PeruntukanSewaForm = ({ onSuccess, editData, onCancel }) => {
    const [form, setForm] = useState({
        peruntukanSewa: '',
        keterangan: ''
    });

    useEffect(() => {
        if (editData) {
            setForm({
                peruntukanSewa: editData.peruntukanSewa,
                keterangan: editData.keterangan || ''
            });
        } else {
            setForm({ peruntukanSewa: '', keterangan: '' });
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
                await updatePeruntukanSewa(editData.idPeruntukanSewa, form);
                alert('Data berhasil diperbarui!');
            } else {
                await createPeruntukanSewa(form);
                alert('Data berhasil disimpan!');
            }
            setForm({ peruntukanSewa: '', keterangan: '' });
            if (onSuccess) onSuccess();
        } catch (err) {
            console.error(err);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>{editData ? 'Edit' : 'Tambah'} Peruntukan Sewa</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Peruntukan Sewa</label>
                    <input
                        type="text"
                        className="form-control"
                        name="peruntukanSewa"
                        value={form.peruntukanSewa}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Keterangan</label>
                    <textarea
                        className="form-control"
                        name="keterangan"
                        value={form.keterangan}
                        onChange={handleChange}
                    />
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

export default PeruntukanSewaForm;
