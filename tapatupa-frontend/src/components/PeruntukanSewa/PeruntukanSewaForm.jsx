import React, { useState } from 'react';
import axios from 'axios';

const PeruntukanSewaForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        peruntukanSewa: '',
        keterangan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/peruntukan-sewa', form);
            alert('Data berhasil disimpan!');
            setForm({ peruntukanSewa: '', keterangan: '' });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Peruntukan Sewa</h4>
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
                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default PeruntukanSewaForm;
