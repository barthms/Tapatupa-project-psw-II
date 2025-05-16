// components/permohonanSewa/PermohonanSewaList.jsx
import React, { useEffect, useState } from 'react';
import { fetchPermohonanSewa, deletePermohonanSewa } from '../../api/PermohonanSewaAPI';

const PermohonanSewaList = ({ onEdit, reloadTrigger }) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetchPermohonanSewa();
            setData(res);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadData();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus permohonan ini?')) return;
        await deletePermohonanSewa(id);
        loadData();
    };

    return (
        <div>
            <h4>Daftar Permohonan Sewa</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No. Surat</th>
                        <th>Jenis</th>
                        <th>Wajib Retribusi</th>
                        <th>Objek</th>
                        <th>Tgl Pengajuan</th>
                        <th>Lama Sewa</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idPermohonanSewa}>
                            <td>{item.nomorSuratPermohonan}</td>
                            <td>{item.jenis_permohonan?.jenisPermohonan}</td>
                            <td>{item.wajib_retribusi?.namaWajibRetribusi}</td>
                            <td>{item.objek_retribusi?.objekRetribusi}</td>
                            <td>{item.tanggalPengajuan}</td>
                            <td>{item.lamaSewa}</td>
                            <td>{item.status?.namaStatus}</td>
                            <td>
                                <button onClick={() => onEdit(item)} className="btn btn-sm btn-warning me-2">Edit</button>
                                <button onClick={() => handleDelete(item.idPermohonanSewa)} className="btn btn-sm btn-danger">Hapus</button>
                            </td>
                        </tr>
                    ))}
                    {data.length === 0 && (
                        <tr>
                            <td colSpan="8" className="text-center">Tidak ada data.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PermohonanSewaList;
