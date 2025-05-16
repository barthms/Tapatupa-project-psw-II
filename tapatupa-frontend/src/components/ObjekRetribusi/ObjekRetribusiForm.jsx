import React, { useEffect, useState } from 'react';
import { createObjekRetribusi, updateObjekRetribusi } from '../../api/ObjekRetribusiAPI';
import { fetchJenisObjekRetribusi } from '../../api/JenisObjekRetribusiAPI';
import { fetchLokasiObjekRetribusi } from '../../api/LokasiObjekRetribusiAPI';

const initialState = {
    idObjekRetribusi: '',
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
};

const ObjekRetribusiForm = ({ editData, onSuccess, resetEditMode }) => {
    const [form, setForm] = useState(initialState);
    const [lokasiOptions, setLokasiOptions] = useState([]);
    const [jenisOptions, setJenisOptions] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editData) {
            const sanitizedData = Object.keys(initialState).reduce((acc, key) => {
                acc[key] = editData[key] ?? '';
                return acc;
            }, {});
            setForm(sanitizedData);
            setIsEditMode(true);
        } else {
            setForm(initialState);
            setIsEditMode(false);
        }
    }, [editData]);

    useEffect(() => {
        const fetchOptions = async () => {
            setLoading(true);
            try {
                const [lokasi, jenis] = await Promise.all([
                    fetchLokasiObjekRetribusi(),
                    fetchJenisObjekRetribusi()
                ]);
                setLokasiOptions(lokasi);
                setJenisOptions(jenis);
            } catch (err) {
                console.error("Error fetching options:", err);
                alert('Gagal memuat data referensi');
            } finally {
                setLoading(false);
            }
        };
        fetchOptions();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleCancel = () => {
        setForm(initialState);
        setIsEditMode(false);
        setErrors({});
        if (resetEditMode) resetEditMode();
    };

    const validateForm = () => {
        const newErrors = {};
        Object.entries(form).forEach(([field, value]) => {
            if ((field !== 'idObjekRetribusi' || isEditMode) && !value) {
                newErrors[field] = `${formatFieldName(field)} harus diisi`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const formatFieldName = (field) => {
        const name = field.startsWith('id') && field !== 'idObjekRetribusi'
            ? field.substring(2)
            : field;
        return name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            alert('Silakan isi semua field yang diperlukan');
            return;
        }
        setLoading(true);
        try {
            if (isEditMode) {
                await updateObjekRetribusi(form.idObjekRetribusi, form);
            } else {
                await createObjekRetribusi(form);
            }
            alert('Data berhasil disimpan');
            onSuccess();
            setForm(initialState);
            setIsEditMode(false);
            setErrors({});
            if (resetEditMode) resetEditMode();
        } catch (err) {
            console.error("Error saving data:", err);
            alert('Gagal menyimpan data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card p-4 mb-4">
            <h4>{isEditMode ? 'Edit' : 'Tambah'} Objek Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Lokasi <span className="text-danger">*</span></label>
                        <select
                            name="idLokasiObjekRetribusi"
                            value={form.idLokasiObjekRetribusi}
                            onChange={handleChange}
                            className={`form-select ${errors.idLokasiObjekRetribusi ? 'is-invalid' : ''}`}
                            required
                        >
                            <option value="">-- Pilih Lokasi --</option>
                            {lokasiOptions.map(opt => (
                                <option key={opt.idLokasiObjekRetribusi} value={opt.idLokasiObjekRetribusi}>
                                    {opt.lokasiObjekRetribusi}
                                </option>
                            ))}
                        </select>
                        {errors.idLokasiObjekRetribusi && (
                            <div className="invalid-feedback">{errors.idLokasiObjekRetribusi}</div>
                        )}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Jenis Objek <span className="text-danger">*</span></label>
                        <select
                            name="idJenisObjekRetribusi"
                            value={form.idJenisObjekRetribusi}
                            onChange={handleChange}
                            className={`form-select ${errors.idJenisObjekRetribusi ? 'is-invalid' : ''}`}
                            required
                        >
                            <option value="">-- Pilih Jenis --</option>
                            {jenisOptions.map(opt => (
                                <option key={opt.idJenisObjekRetribusi} value={opt.idJenisObjekRetribusi}>
                                    {opt.jenisObjekRetribusi}
                                </option>
                            ))}
                        </select>
                        {errors.idJenisObjekRetribusi && (
                            <div className="invalid-feedback">{errors.idJenisObjekRetribusi}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Kode Objek <span className="text-danger">*</span></label>
                        <input
                            name="kodeObjekRetribusi"
                            value={form.kodeObjekRetribusi}
                            onChange={handleChange}
                            placeholder="Kode Objek Retribusi"
                            className={`form-control ${errors.kodeObjekRetribusi ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.kodeObjekRetribusi && (
                            <div className="invalid-feedback">{errors.kodeObjekRetribusi}</div>
                        )}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Nama Objek <span className="text-danger">*</span></label>
                        <input
                            name="objekRetribusi"
                            value={form.objekRetribusi}
                            onChange={handleChange}
                            placeholder="Nama Objek Retribusi"
                            className={`form-control ${errors.objekRetribusi ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.objekRetribusi && (
                            <div className="invalid-feedback">{errors.objekRetribusi}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">No Bangunan <span className="text-danger">*</span></label>
                        <input
                            name="noBangunan"
                            value={form.noBangunan}
                            onChange={handleChange}
                            placeholder="Nomor Bangunan"
                            className={`form-control ${errors.noBangunan ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.noBangunan && (
                            <div className="invalid-feedback">{errors.noBangunan}</div>
                        )}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Jumlah Lantai <span className="text-danger">*</span></label>
                        <input
                            name="jumlahLantai"
                            value={form.jumlahLantai}
                            onChange={handleChange}
                            placeholder="Jumlah Lantai"
                            type="number"
                            min="1"
                            className={`form-control ${errors.jumlahLantai ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.jumlahLantai && (
                            <div className="invalid-feedback">{errors.jumlahLantai}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Panjang Tanah (m) <span className="text-danger">*</span></label>
                        <input
                            name="panjangTanah"
                            value={form.panjangTanah}
                            onChange={handleChange}
                            placeholder="Panjang Tanah"
                            type="number"
                            step="0.01"
                            min="0"
                            className={`form-control ${errors.panjangTanah ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.panjangTanah && (
                            <div className="invalid-feedback">{errors.panjangTanah}</div>
                        )}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Lebar Tanah (m) <span className="text-danger">*</span></label>
                        <input
                            name="lebarTanah"
                            value={form.lebarTanah}
                            onChange={handleChange}
                            placeholder="Lebar Tanah"
                            type="number"
                            step="0.01"
                            min="0"
                            className={`form-control ${errors.lebarTanah ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.lebarTanah && (
                            <div className="invalid-feedback">{errors.lebarTanah}</div>
                        )}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Luas Tanah (m²) <span className="text-danger">*</span></label>
                        <input
                            name="luasTanah"
                            value={form.luasTanah}
                            onChange={handleChange}
                            placeholder="Luas Tanah"
                            type="number"
                            step="0.01"
                            min="0"
                            className={`form-control ${errors.luasTanah ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.luasTanah && (
                            <div className="invalid-feedback">{errors.luasTanah}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Panjang Bangunan (m) <span className="text-danger">*</span></label>
                        <input
                            name="panjangBangunan"
                            value={form.panjangBangunan}
                            onChange={handleChange}
                            placeholder="Panjang Bangunan"
                            type="number"
                            step="0.01"
                            min="0"
                            className={`form-control ${errors.panjangBangunan ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.panjangBangunan && (
                            <div className="invalid-feedback">{errors.panjangBangunan}</div>
                        )}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Lebar Bangunan (m) <span className="text-danger">*</span></label>
                        <input
                            name="lebarBangunan"
                            value={form.lebarBangunan}
                            onChange={handleChange}
                            placeholder="Lebar Bangunan"
                            type="number"
                            step="0.01"
                            min="0"
                            className={`form-control ${errors.lebarBangunan ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.lebarBangunan && (
                            <div className="invalid-feedback">{errors.lebarBangunan}</div>
                        )}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Luas Bangunan (m²) <span className="text-danger">*</span></label>
                        <input
                            name="luasBangunan"
                            value={form.luasBangunan}
                            onChange={handleChange}
                            placeholder="Luas Bangunan"
                            type="number"
                            step="0.01"
                            min="0"
                            className={`form-control ${errors.luasBangunan ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.luasBangunan && (
                            <div className="invalid-feedback">{errors.luasBangunan}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-3">
                        <label className="form-label">Alamat <span className="text-danger">*</span></label>
                        <textarea
                            name="alamat"
                            value={form.alamat}
                            onChange={handleChange}
                            placeholder="Alamat lengkap"
                            className={`form-control ${errors.alamat ? 'is-invalid' : ''}`}
                            rows="2"
                            required
                        />
                        {errors.alamat && (
                            <div className="invalid-feedback">{errors.alamat}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Latitude <span className="text-danger">*</span></label>
                        <input
                            name="latitude"
                            value={form.latitude}
                            onChange={handleChange}
                            placeholder="Contoh: -7.123456"
                            type="text"
                            className={`form-control ${errors.latitude ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.latitude && (
                            <div className="invalid-feedback">{errors.latitude}</div>
                        )}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Longitude <span className="text-danger">*</span></label>
                        <input
                            name="longitude"
                            value={form.longitude}
                            onChange={handleChange}
                            placeholder="Contoh: 110.123456"
                            type="text"
                            className={`form-control ${errors.longitude ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.longitude && (
                            <div className="invalid-feedback">{errors.longitude}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Keterangan <span className="text-danger">*</span></label>
                        <textarea
                            name="keterangan"
                            value={form.keterangan}
                            onChange={handleChange}
                            placeholder="Keterangan tambahan"
                            className={`form-control ${errors.keterangan ? 'is-invalid' : ''}`}
                            rows="2"
                            required
                        />
                        {errors.keterangan && (
                            <div className="invalid-feedback">{errors.keterangan}</div>
                        )}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">URL Gambar Denah Tanah <span className="text-danger">*</span></label>
                        <input
                            name="gambarDenahTanah"
                            value={form.gambarDenahTanah}
                            onChange={handleChange}
                            placeholder="Masukkan URL gambar"
                            type="text"
                            className={`form-control ${errors.gambarDenahTanah ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.gambarDenahTanah && (
                            <div className="invalid-feedback">{errors.gambarDenahTanah}</div>
                        )}
                    </div>
                </div>

                <div className="d-flex gap-2 mt-3">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Menyimpan...' : (isEditMode ? 'Update' : 'Simpan')}
                    </button>

                    {isEditMode && (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCancel}
                            disabled={loading}
                        >
                            Batal
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ObjekRetribusiForm;