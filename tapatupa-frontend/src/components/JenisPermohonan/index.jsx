import { useState, useEffect } from 'react';
import api from '../../api/Api';

export default function JenisPermohonanForm({ selected, onSuccess }) {
    const [form, setForm] = useState({ jenisPermohonan: '' });

    useEffect(() => {
        if (selected) setForm(selected);
    }, [selected]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selected) {
            await api.put(`/jenis-permohonan/${selected.idJenisPermohonan}`, form);
        } else {
            await api.post('/jenis-permohonan', form);
        }

        setForm({ jenisPermohonan: '' });
        onSuccess();
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
