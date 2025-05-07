import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ObjekRetribusiForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        idLokasiObjekRetribusi: '',
        idJenisObjekRetribusi: '',
        kodeObjekRetribusi: '',
        noBangunan: '',
        jumlahLantai: '',
        objekRetribusi: '',
        panjangTanah: '',
        lebarTanah: '',
        luasTanah: '',
        panjangBangunan: '',
        lebarBangunan: '',
        luasBangunan: '',
        alamat: '',
        latitude: '',
        longitude: '',
        keterangan: '',
        gambarDenahTanah: ''
    });

    const [lokasiOptions, setLokasiOptions] = useState([]);
    const [jenisOptions, setJenisOptions] = useState([]);

    useEffect(() => {
        const loadOptions = async () => {
            try {
                const lokasi = await axios.get('/api/lokasiObjekRetribusi');
                const jenis = await axios.get('/api/jenisObjekRetribusi');
                setLokasiOptions(lokasi.data);
                setJenisOptions(jenis.data);
            } catch (error) {
                console.error('Gagal memuat data:', error);
            }
        };
        loadOptions();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/objekRetribusi', form);
            alert('Data berhasil disimpan!');
            setForm({
                idLokasiObjekRetribusi: '',
                idJenisObjekRetribusi: '',
                kodeObjekRetribusi: '',
                noBangunan: '',
                jumlahLantai: '',
                objekRetribusi: '',
                panjangTanah: '',
                lebarTanah: '',
                luasTanah: '',
                panjangBangunan: '',
                lebarBangunan: '',
                luasBangunan: '',
                alamat: '',
                latitude: '',
                longitude: '',
                keterangan: '',
                gambarDenahTanah: ''
            });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Tambah Objek Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Lokasi</label>
                    <select name="idLokasiObjekRetribusi" className="form-control" value={form.idLokasiObjekRetribusi} onChange={handleChange}>
                        <option value="">Pilih Lokasi</option>
                        {lokasiOptions.map((l) => (
                            <option key={l.idLokasiObjekRetribusi} value={l.idLokasiObjekRetribusi}>{l.namaLokasi}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Jenis Objek</label>
                    <select name="idJenisObjekRetribusi" className="form-control" value={form.idJenisObjekRetribusi} onChange={handleChange}>
                        <option value="">Pilih Jenis</option>
                        {jenisOptions.map((j) => (
                            <option key={j.idJenisObjekRetribusi} value={j.idJenisObjekRetribusi}>{j.jenisObjekRetribusi}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Kode</label>
                    <input type="text" name="kodeObjekRetribusi" className="form-control" value={form.kodeObjekRetribusi} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Nama Objek</label>
                    <input type="text" name="objekRetribusi" className="form-control" value={form.objekRetribusi} onChange={handleChange} required />
                </div>
                {/* Tambah field lainnya jika perlu */}
                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default ObjekRetribusiForm;
