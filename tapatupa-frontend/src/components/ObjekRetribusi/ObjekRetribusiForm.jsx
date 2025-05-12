import React, { useEffect, useState } from 'react';
import { fetchJenisObjekRetribusi } from '../../api/JenisObjekRetribusiAPI';
import { fetchLokasiObjekRetribusi } from '../../api/LokasiObjekRetribusiAPI';
import { createObjekRetribusi } from '../../api/ObjekRetribusiAPI';

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
                const lokasi = await fetchLokasiObjekRetribusi();
                const jenis = await fetchJenisObjekRetribusi();
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
            await createObjekRetribusi(form);
            alert('Data berhasil disimpan!');
            setForm({
                idLokasiObjekRetribusi: '',
                idJenisObjekRetribusi: '',
                kodeObjekRetribusi: '',
                objekRetribusi: ''
            });
            onSuccess?.();
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
                    <select name="idLokasiObjekRetribusi" className="form-control" value={form.idLokasiObjekRetribusi} onChange={handleChange} required>
                        <option value="">Pilih Lokasi</option>
                        {lokasiOptions.map(l => (
                            <option key={l.idLokasiObjekRetribusi} value={l.idLokasiObjekRetribusi}>{l.namaLokasi}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Jenis Objek</label>
                    <select name="idJenisObjekRetribusi" className="form-control" value={form.idJenisObjekRetribusi} onChange={handleChange} required>
                        <option value="">Pilih Jenis</option>
                        {jenisOptions.map(j => (
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
                <div className="mb-3">
                    <label>No Bangunan</label>
                    <input type="text" name="noBangunan" className="form-control" value={form.noBangunan} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Jumlah Lantai</label>
                    <input type="number" name="jumlahLantai" className="form-control" value={form.jumlahLantai} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Alamat</label>
                    <input type="text" name="alamat" className="form-control" value={form.alamat} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default ObjekRetribusiForm;
