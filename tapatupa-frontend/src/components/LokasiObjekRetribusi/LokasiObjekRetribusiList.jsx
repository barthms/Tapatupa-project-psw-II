import React, { useEffect, useState } from 'react';
import { fetchLokasiObjekRetribusi, deleteLokasiObjekRetribusi } from '../../api/LokasiObjekRetribusiAPI';

const LokasiObjekRetribusiList = ({ onEdit, reload }) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetchLokasiObjekRetribusi();
            setData(res);
        } catch (error) {
            console.error('Gagal memuat data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, [reload]);

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus data ini?')) return;
        try {
            await deleteLokasiObjekRetribusi(id);
            alert('Data berhasil dihapus!');
            loadData();
        } catch (error) {
            console.error(error);
            alert('Gagal menghapus data.');
        }
    };

    return (
        <div>
            <h3>Daftar Lokasi Objek Retribusi</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Lokasi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idLokasiObjekRetribusi}>
                            <td>{item.idLokasiObjekRetribusi}</td>
                            <td>{item.lokasiObjekRetribusi}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEdit(item)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(item.idLokasiObjekRetribusi)}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LokasiObjekRetribusiList;
