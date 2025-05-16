import React, { useEffect, useState } from 'react';
import {
    createPermohonanSewa,
    updatePermohonanSewa
} from '../../api/PermohonanSewaAPI';

import { fetchJenisPermohonan } from '../../api/JenisPermohonanAPI';
import { fetchWajibRetribusi } from '../../api/WajibRetribusiAPI';
import { fetchObjekRetribusi } from '../../api/ObjekRetribusiAPI';
import { fetchJenisJangkaWaktu } from '../../api/JenisJangkaWaktuAPI';
import { fetchPeruntukanSewa } from '../../api/PeruntukanSewaAPI';
import { fetchStatus } from '../../api/StatusAPI';

const initialState = {
    idJenisPermohonan: '',
    nomorSuratPermohonan: '',
    tanggalPengajuan: '',
    idWajibRetribusi: '',
    idObjekRetribusi: '',
    idJenisJangkaWaktu: '',
    lamaSewa: '',
    idPeruntukanSewa: '',
    idStatus: '',
    createBy: 1,
};

const PermohonanSewaForm = ({ editingData, onSuccess }) => {
    const [form, setForm] = useState(initialState);
    const [dropdowns, setDropdowns] = useState({
        jenis: [],
        wajib: [],
        objek: [],
        jangka: [],
        peruntukan: [],
        status: []
    });
    const [loading, setLoading] = useState(false);
    const [dropdownReady, setDropdownReady] = useState(false);
    const [flattenedJenisOptions, setFlattenedJenisOptions] = useState([]);

    useEffect(() => {
        if (editingData) {
            setForm({
                ...editingData,
                lamaSewa: editingData.lamaSewa ? String(editingData.lamaSewa) : ''
            });
        } else {
            setForm(initialState);
        }
    }, [editingData]);

    // Function to flatten hierarchical data for the dropdown
    const flattenJenisPermohonan = (items, depth = 0, result = []) => {
        if (!items || !Array.isArray(items)) return result;
        
        items.forEach(item => {
            // Add the current item with indentation based on depth
            result.push({
                ...item,
                displayName: `${'\u00A0'.repeat(depth * 4)}${depth > 0 ? '└─ ' : ''}${item.jenisPermohonan}`
            });
            
            // Process children if they exist
            if (item.children && Array.isArray(item.children)) {
                flattenJenisPermohonan(item.children, depth + 1, result);
            }
        });
        
        return result;
    };

    useEffect(() => {
        const loadDropdowns = async () => {
            try {
                // Fetch data with hierarchical structure for JenisPermohonan
                const jenisData = await fetchJenisPermohonan(true);
                
                const [wajib, objek, jangka, peruntukan, status] = await Promise.all([
                    fetchWajibRetribusi(),
                    fetchObjekRetribusi(),
                    fetchJenisJangkaWaktu(),
                    fetchPeruntukanSewa(),
                    fetchStatus()
                ]);
                
                // Get the data from the response
                const jenisItems = jenisData.data || jenisData;
                
                // Flatten the hierarchical data for the dropdown
                const flattenedJenis = flattenJenisPermohonan(jenisItems);
                setFlattenedJenisOptions(flattenedJenis);
                
                console.log('Dropdown data loaded:', { 
                    jenis: jenisItems, 
                    flattened: flattenedJenis,
                    wajib, 
                    objek, 
                    jangka, 
                    peruntukan, 
                    status 
                });
                
                setDropdowns({
                    jenis: Array.isArray(jenisItems) ? jenisItems : [],
                    wajib: Array.isArray(wajib) ? wajib : [],
                    objek: Array.isArray(objek) ? objek : [],
                    jangka: Array.isArray(jangka) ? jangka : [],
                    peruntukan: Array.isArray(peruntukan) ? peruntukan : [],
                    status: Array.isArray(status) ? status : [],
                });
                setDropdownReady(true);
            } catch (error) {
                console.error('Gagal memuat data dropdown:', error);
            }
        };
        loadDropdowns();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: name === 'lamaSewa' ? parseInt(value || 0) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (form.idPermohonanSewa) {
                await updatePermohonanSewa(form.idPermohonanSewa, form);
            } else {
                await createPermohonanSewa(form);
            }
            onSuccess();
            setForm(initialState);
        } catch (err) {
            console.error(err);
            alert('Gagal menyimpan data.');
        } finally {
            setLoading(false);
        }
    };

    if (!dropdownReady) {
        return <div>Memuat data formulir...</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>{form.idPermohonanSewa ? 'Edit' : 'Tambah'} Permohonan Sewa</h4>

            {/* Jenis Permohonan */}
            <div className="mb-2">
                <label>Jenis Permohonan</label>
                <select className="form-control" name="idJenisPermohonan" value={form.idJenisPermohonan} onChange={handleChange} required>
                    <option value="">-- Pilih --</option>
                    {flattenedJenisOptions.map(j => (
                        <option key={j.idJenisPermohonan} value={j.idJenisPermohonan}>
                            {j.displayName}
                        </option>
                    ))}
                </select>
            </div>

            {/* Nomor Surat */}
            <div className="mb-2">
                <label>Nomor Surat</label>
                <input className="form-control" name="nomorSuratPermohonan" value={form.nomorSuratPermohonan} onChange={handleChange} required />
            </div>

            {/* Tanggal Pengajuan */}
            <div className="mb-2">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan" value={form.tanggalPengajuan} onChange={handleChange} required />
            </div>

            {/* Wajib Retribusi */}
            <div className="mb-2">
                <label>Wajib Retribusi</label>
                <select className="form-control" name="idWajibRetribusi" value={form.idWajibRetribusi} onChange={handleChange} required>
                    <option value="">-- Pilih --</option>
                    {dropdowns.wajib.map(w => (
                        <option key={w.idWajibRetribusi} value={w.idWajibRetribusi}>
                            {w.namaWajibRetribusi}
                        </option>
                    ))}
                </select>
            </div>

            {/* Objek Retribusi */}
            <div className="mb-2">
                <label>Objek Retribusi</label>
                <select className="form-control" name="idObjekRetribusi" value={form.idObjekRetribusi} onChange={handleChange} required>
                    <option value="">-- Pilih --</option>
                    {dropdowns.objek.map(o => (
                        <option key={o.idObjekRetribusi} value={o.idObjekRetribusi}>
                            {o.objekRetribusi}
                        </option>
                    ))}
                </select>
            </div>

            {/* Jenis Jangka Waktu */}
            <div className="mb-2">
                <label>Jenis Jangka Waktu</label>
                <select className="form-control" name="idJenisJangkaWaktu" value={form.idJenisJangkaWaktu} onChange={handleChange} required>
                    <option value="">-- Pilih --</option>
                    {dropdowns.jangka.map(j => (
                        <option key={j.idJenisJangkaWaktu} value={j.idJenisJangkaWaktu}>
                            {j.jenisJangkaWaktu}
                        </option>
                    ))}
                </select>
            </div>

            {/* Lama Sewa */}
            <div className="mb-2">
                <label>Lama Sewa (dalam angka)</label>
                <input type="number" className="form-control" name="lamaSewa" value={form.lamaSewa} onChange={handleChange} required min="1" />
            </div>

            {/* Peruntukan Sewa */}
            <div className="mb-2">
                <label>Peruntukan Sewa</label>
                <select className="form-control" name="idPeruntukanSewa" value={form.idPeruntukanSewa} onChange={handleChange} required>
                    <option value="">-- Pilih --</option>
                    {dropdowns.peruntukan.map(p => (
                        <option key={p.idPeruntukanSewa} value={p.idPeruntukanSewa}>
                            {p.peruntukanSewa}
                        </option>
                    ))}
                </select>
            </div>

            {/* Status */}
            <div className="mb-2">
                <label>Status</label>
                <select className="form-control" name="idStatus" value={form.idStatus} onChange={handleChange} required>
                    <option value="">-- Pilih --</option>
                    {dropdowns.status.map(s => (
                        <option key={s.idStatus} value={s.idStatus}>
                            {s.namaStatus}
                        </option>
                    ))}
                </select>
            </div>

            {/* Tombol Submit */}
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Menyimpan...' : form.idPermohonanSewa ? 'Update' : 'Simpan'}
            </button>
        </form>
    );
};

export default PermohonanSewaForm;