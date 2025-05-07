import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TarifObjekRetribusiForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        idObjekRetribusi: '',
        idJenisJangkaWaktu: '',
        tanggalDinilai: '',
        namaPenilai: '',
        tarif: '',
        nominalTarif: '',
        fileHasilPenilaian: '',
        keterangan: '',
        isDefault: false
    });

    const [objekOptions, setObjekOptions] = useState([]);
    const [jangkaWaktuOptions, setJangkaWaktuOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const [objek, jangka] = await Promise.all([
                axios.get('/api/objekRetribusi'),
                axios.get('/api/jenisJangkaWaktu')
            ]);
            setObjekOptions(objek.data);
            setJangkaWaktuOptions(jangka.data);
        };
        fetchOptions();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/tarifObjekRetribusi', form);
            alert('Data berhasil disimpan!');
            setForm({
                idObjekRetribusi: '',
                idJenisJangkaWaktu: '',
                tanggalDinilai: '',
                namaPenilai: '',
                tarif: '',
                nominalTarif: '',
                fileHasilPenilaian: '',
                keterangan: '',
                isDefault: false
            });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error(error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Tarif Objek Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <select name="idObjekRetribusi" value={form.idObjekRetribusi} onChange={handleChange} className="form-control mb-2" required>
                    <option value="">-- Pilih Objek --</option>
                    {objekOptions.map(item => (
                        <option key={item.idObjekRetribusi} value={item.idObjekRetribusi}>{item.namaObjek}</option>
                    ))}
                </select>

                <select name="idJenisJangkaWaktu" value={form.idJenisJangkaWaktu} onChange={handleChange} className="form-control mb-2" required>
                    <option value="">-- Pilih Jangka Waktu --</option>
                    {jangkaWaktuOptions.map(item => (
                        <option key={item.idJenisJangkaWaktu} value={item.idJenisJangkaWaktu}>{item.namaJenisJangkaWaktu}</option>
                    ))}
                </select>

                <input type="date" name="tanggalDinilai" value={form.tanggalDinilai} onChange={handleChange} className="form-control mb-2" required />
                <input type="text" name="namaPenilai" placeholder="Nama Penilai" value={form.namaPenilai} onChange={handleChange} className="form-control mb-2" required />
                <input type="number" name="tarif" placeholder="Tarif" value={form.tarif} onChange={handleChange} className="form-control mb-2" required />
                <input type="number" name="nominalTarif" placeholder="Nominal Tarif" value={form.nominalTarif} onChange={handleChange} className="form-control mb-2" required />
                <input type="text" name="fileHasilPenilaian" placeholder="File Penilaian" value={form.fileHasilPenilaian} onChange={handleChange} className="form-control mb-2" />
                <textarea name="keterangan" placeholder="Keterangan" value={form.keterangan} onChange={handleChange} className="form-control mb-2" />
                <div className="form-check mb-2">
                    <input type="checkbox" name="isDefault" checked={form.isDefault} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">Default</label>
                </div>
                <button className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default TarifObjekRetribusiForm;
