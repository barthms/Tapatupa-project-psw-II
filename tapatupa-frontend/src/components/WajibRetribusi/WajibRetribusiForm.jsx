import React, { useEffect, useState } from 'react';
import { createWajibRetribusi, updateWajibRetribusi } from '../../api/WajibRetribusiAPI';
import { fetchJenisObjekRetribusi} from '../../api/JenisObjekRetribusiAPI';

const WajibRetribusiForm = ({ onSuccess, selectedData, setSelectedData }) => {
    const [form, setForm] = useState({
        idJenisRetribusi: '',
        NIK: '',
        namaWajibRetribusi: '',
        pekerjaan: '',
        alamat: '',
        nomorPonsel: '',
        nomorWhatsapp: '',
        email: '',
        fileFoto: '',
    });

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const loadOptions = async () => {
            const result = await fetchJenisObjekRetribusi();
            setOptions(result);
        };
        loadOptions();
    }, []);

    useEffect(() => {
        if (selectedData) setForm(selectedData);
    }, [selectedData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedData) {
                await updateWajibRetribusi(selectedData.idWajibRetribusi, form);
                alert('Data berhasil diperbarui.');
            } else {
                await createWajibRetribusi(form);
                alert('Data berhasil ditambahkan.');
            }
            setForm({
                idJenisRetribusi: '',
                NIK: '',
                namaWajibRetribusi: '',
                pekerjaan: '',
                alamat: '',
                nomorPonsel: '',
                nomorWhatsapp: '',
                email: '',
                fileFoto: '',
            });
            setSelectedData(null);
            onSuccess();
        } catch (err) {
            console.error(err);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>{selectedData ? 'Edit' : 'Tambah'} Wajib Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>NIK</label>
                        <input className="form-control" name="NIK" value={form.NIK} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Nama</label>
                        <input className="form-control" name="namaWajibRetribusi" value={form.namaWajibRetribusi} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Pekerjaan</label>
                        <input className="form-control" name="pekerjaan" value={form.pekerjaan} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Alamat</label>
                        <textarea className="form-control" name="alamat" value={form.alamat} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Nomor Ponsel</label>
                        <input className="form-control" name="nomorPonsel" value={form.nomorPonsel} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Nomor Whatsapp</label>
                        <input className="form-control" name="nomorWhatsapp" value={form.nomorWhatsapp} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input className="form-control" name="email" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Foto (URL)</label>
                        <input className="form-control" name="fileFoto" value={form.fileFoto} onChange={handleChange} />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label>Jenis Retribusi</label>
                        <select className="form-control" name="idJenisRetribusi" value={form.idJenisRetribusi} onChange={handleChange} required>
                            <option value="">-- Pilih Jenis Retribusi --</option>
                            {options.map(opt => (
                                <option key={opt.idJenisObjekRetribusi} value={opt.idJenisObjekRetribusi}>
                                    {opt.jenisObjekRetribusi}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Simpan</button>
                {selectedData && (
                    <button className="btn btn-secondary ms-2" onClick={() => setSelectedData(null)} type="button">Batal</button>
                )}
            </form>
        </div>
    );
};

export default WajibRetribusiForm;
