import { useState, useEffect } from 'react';
import api from '../../api/Api';

export default function JenisPermohonanForm({ selected, onSuccess }) {
    const [form, setForm] = useState({ jenisPermohonan: '' });

    useEffect(() => {
        if (selected) {
            setForm({ jenisPermohonan: selected.jenisPermohonan });
        } else {
            setForm({ jenisPermohonan: '' });
        }
    }, [selected]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selected) {
                await api.put(`/jenisPermohonan/${selected.idJenisPermohonan}`, form);
            } else {
                await api.post('/jenisPermohonan', form);
            }
            setForm({ jenisPermohonan: '' });
            onSuccess();
        } catch (err) {
            alert('Gagal menyimpan data');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="jenisPermohonan"
                value={form.jenisPermohonan}
                onChange={handleChange}
                placeholder="Nama Jenis Permohonan"
                required
            />
            <button type="submit">{selected ? 'Update' : 'Tambah'}</button>
        </form>
    );
}