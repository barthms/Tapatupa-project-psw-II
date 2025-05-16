// TarifObjekRetribusiForm.jsx
import React, { useEffect, useState } from 'react';
import { createTarifObjekRetribusi, updateTarifObjekRetribusi } from '../../api/TarifObjekRetribusiAPI';
import { fetchObjekRetribusi } from '../../api/ObjekRetribusiAPI';
import { fetchJenisJangkaWaktu } from '../../api/JenisJangkaWaktuAPI';

const TarifObjekRetribusiForm = ({ onSuccess, editData, resetEditMode }) => {
    const initialForm = {
        idObjekRetribusi: '',
        idJenisJangkaWaktu: '',
        tanggalDinilai: '',
        namaPenilai: '',
        tarif: '',
        nominalTarif: '',
        fileHasilPenilaian: '',
        keterangan: '',
        isDefault: false
    };

    const [form, setForm] = useState(initialForm);
    const [objekOptions, setObjekOptions] = useState([]);
    const [jangkaWaktuOptions, setJangkaWaktuOptions] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const [objek, jangka] = await Promise.all([fetchObjekRetribusi(), fetchJenisJangkaWaktu()]);
                setObjekOptions(objek);
                setJangkaWaktuOptions(jangka);
            } catch (error) {
                console.error('Gagal mengambil data dropdown:', error);
            }
        };
        fetchOptions();
    }, []);

    useEffect(() => {
        if (editData) {
            setForm({
                idTarifObjekRetribusi: editData.idTarifObjekRetribusi,
                idObjekRetribusi: editData.idObjekRetribusi,
                idJenisJangkaWaktu: editData.idJenisJangkaWaktu,
                tanggalDinilai: editData.tanggalDinilai,
                namaPenilai: editData.namaPenilai,
                tarif: editData.tarif,
                nominalTarif: editData.nominalTarif,
                fileHasilPenilaian: editData.fileHasilPenilaian || '',
                keterangan: editData.keterangan || '',
                isDefault: editData.isDefault || false
            });
            setIsEditMode(true);
        } else {
            setForm(initialForm);
            setIsEditMode(false);
        }
    }, [editData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleCancel = () => {
        setForm(initialForm);
        setIsEditMode(false);
        resetEditMode();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await updateTarifObjekRetribusi(form.idTarifObjekRetribusi, form);
                alert('Data berhasil diperbarui!');
            } else {
                await createTarifObjekRetribusi(form);
                alert('Data berhasil disimpan!');
            }
            
            setForm(initialForm);
            setIsEditMode(false);
            if (resetEditMode) resetEditMode();
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
            alert('Gagal menyimpan data!');
        }
    };

    return (
        <div className="card p-4">
            <h4>{isEditMode ? 'Edit' : 'Form'} Tarif Objek Retribusi</h4>
            <form onSubmit={handleSubmit}>
                <select name="idObjekRetribusi" value={form.idObjekRetribusi} onChange={handleChange} className="form-control mb-2" required>
                    <option value="">-- Pilih Objek --</option>
                    {objekOptions.map(item => (
                        <option key={item.idObjekRetribusi} value={item.idObjekRetribusi}>
                            {item.objekRetribusi}
                        </option>
                    ))}
                </select>

                <select name="idJenisJangkaWaktu" value={form.idJenisJangkaWaktu} onChange={handleChange} className="form-control mb-2" required>
                    <option value="">-- Pilih Jangka Waktu --</option>
                    {jangkaWaktuOptions.map(item => (
                        <option key={item.idJenisJangkaWaktu} value={item.idJenisJangkaWaktu}>
                            {item.jenisJangkaWaktu}
                        </option>
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

                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                        {isEditMode ? 'Update' : 'Simpan'}
                    </button>
                    {isEditMode && (
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                            Batal
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TarifObjekRetribusiForm;