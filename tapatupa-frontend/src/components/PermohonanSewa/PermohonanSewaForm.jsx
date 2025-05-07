import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    fetchJenisPermohonan,
    fetchWajibRetribusi,
    fetchObjekRetribusi,
    fetchJenisJangkaWaktu,
    fetchPeruntukanSewa,
    fetchStatus
} from '../../api/Api';

const PermohonanSewaForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        idJenisPermohonan: '',
        nomorSuratPermohonan: '',
        tanggalPengajuan: '',
        idWajibRetribusi: '',
        idObjekRetribusi: '',
        idJenisJangkaWaktu: '',
        lamaSewa: '',
        idPeruntukanSewa: '',
        idStatus: '',
        createBy: ''
    });

    const [options, setOptions] = useState({
        jenisPermohonan: [],
        wajibRetribusi: [],
        objekRetribusi: [],
        jenisJangkaWaktu: [],
        peruntukanSewa: [],
        status: []
    });

    useEffect(() => {
        const loadOptions = async () => {
            try {
                const [a, b, c, d, e, f] = await Promise.all([
                    fetchJenisPermohonan(),
                    fetchWajibRetribusi(),
                    fetchObjekRetribusi(),
                    fetchJenisJangkaWaktu(),
                    fetchPeruntukanSewa(),
                    fetchStatus()
                ]);
                setOptions({
                    jenisPermohonan: a,
                    wajibRetribusi: b,
                    objekRetribusi: c,
                    jenisJangkaWaktu: d,
                    peruntukanSewa: e,
                    status: f
                });
            } catch (err) {
                console.error(err);
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
            await axios.post('/api/permohonanSewa', form);
            alert('Data berhasil disimpan!');
            setForm({
                idJenisPermohonan: '',
                nomorSuratPermohonan: '',
                tanggalPengajuan: '',
                idWajibRetribusi: '',
                idObjekRetribusi: '',
                idJenisJangkaWaktu: '',
                lamaSewa: '',
                idPeruntukanSewa: '',
                idStatus: '',
                createBy: ''
            });
            onSuccess();
        } catch (err) {
            console.error(err);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>Form Permohonan Sewa</h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Jenis Permohonan</label>
                        <select name="idJenisPermohonan" className="form-control" value={form.idJenisPermohonan} onChange={handleChange}>
                            <option value="">Pilih</option>
                            {options.jenisPermohonan.map(j => (
                                <option key={j.idJenisPermohonan} value={j.idJenisPermohonan}>{j.jenisPermohonan}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Nomor Surat</label>
                        <input name="nomorSuratPermohonan" className="form-control" value={form.nomorSuratPermohonan} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Tanggal Pengajuan</label>
                        <input type="date" name="tanggalPengajuan" className="form-control" value={form.tanggalPengajuan} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Wajib Retribusi</label>
                        <select name="idWajibRetribusi" className="form-control" value={form.idWajibRetribusi} onChange={handleChange}>
                            <option value="">Pilih</option>
                            {options.wajibRetribusi.map(w => (
                                <option key={w.idWajibRetribusi} value={w.idWajibRetribusi}>{w.nama}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Objek Retribusi</label>
                        <select name="idObjekRetribusi" className="form-control" value={form.idObjekRetribusi} onChange={handleChange}>
                            <option value="">Pilih</option>
                            {options.objekRetribusi.map(o => (
                                <option key={o.idObjekRetribusi} value={o.idObjekRetribusi}>{o.namaObjek}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Jenis Jangka Waktu</label>
                        <select name="idJenisJangkaWaktu" className="form-control" value={form.idJenisJangkaWaktu} onChange={handleChange}>
                            <option value="">Pilih</option>
                            {options.jenisJangkaWaktu.map(jw => (
                                <option key={jw.idJenisJangkaWaktu} value={jw.idJenisJangkaWaktu}>{jw.nama}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Lama Sewa</label>
                        <input type="number" name="lamaSewa" className="form-control" value={form.lamaSewa} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Peruntukan</label>
                        <select name="idPeruntukanSewa" className="form-control" value={form.idPeruntukanSewa} onChange={handleChange}>
                            <option value="">Pilih</option>
                            {options.peruntukanSewa.map(p => (
                                <option key={p.idPeruntukanSewa} value={p.idPeruntukanSewa}>{p.namaPeruntukan}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Status</label>
                        <select name="idStatus" className="form-control" value={form.idStatus} onChange={handleChange}>
                            <option value="">Pilih</option>
                            {options.status.map(s => (
                                <option key={s.idStatus} value={s.idStatus}>{s.namaStatus}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Created By (user id)</label>
                        <input type="number" name="createBy" className="form-control" value={form.createBy} onChange={handleChange} />
                    </div>
                </div>
                <button className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
};

export default PermohonanSewaForm;
