import React, { useEffect, useState } from 'react';
import { fetchJenisObjekRetribusi, deleteJenisObjekRetribusi } from '../../api/JenisObjekRetribusiAPI';

const JenisObjekRetribusiList = ({ reloadTrigger, onEdit }) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const result = await fetchJenisObjekRetribusi();
            setData(result);
        } catch (error) {
            console.error('Gagal memuat data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        if (window.confirm('Yakin ingin menghapus?')) {
            try {
                const success = await deleteJenisObjekRetribusi(id);
                if (success) {
                    alert('Data berhasil dihapus!');
                    loadData();
                } else {
                    alert('Gagal menghapus data!');
                }
            } catch (error) {
                console.error(error);
                alert('Gagal menghapus data!');
            }
        }
    };

    return (
        <div className="card p-4">
            <h4>Daftar Jenis Objek Retribusi</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Keterangan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idJenisObjekRetribusi}>
                            <td>{item.jenisObjekRetribusi}</td>
                            <td>{item.keterangan}</td>
                            <td>
                                <button onClick={() => onEdit(item)} className="btn btn-sm btn-warning me-2">Edit</button>
                                <button onClick={() => handleDelete(item.idJenisObjekRetribusi)} className="btn btn-sm btn-danger">Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JenisObjekRetribusiList;
