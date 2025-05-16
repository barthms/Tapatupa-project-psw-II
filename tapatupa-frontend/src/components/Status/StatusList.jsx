import React, { useEffect, useState } from 'react';
import { fetchStatus, deleteStatus } from '../../api/StatusAPI';

const StatusList = ({ reloadTrigger, onEdit }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchStatus();
                setData(result);
            } catch (err) {
                console.error('Gagal memuat data status:', err);
            }
        };
        loadData();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        if (window.confirm('Yakin ingin menghapus data ini?')) {
            await deleteStatus(id);
            setData(prev => prev.filter(item => item.idStatus !== id));
        }
    };

    return (
        <div>
            <h4>Daftar Status</h4>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Status</th>
                        <th>Jenis Status</th>
                        <th>Keterangan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idStatus}>
                            <td>{item.idStatus}</td>
                            <td>{item.namaStatus}</td>
                            <td>{item.jenis_status?.jenisStatus || '-'}</td>
                            <td>{item.keterangan}</td>
                            <td>
                                <button
                                    onClick={() => onEdit(item)}
                                    className="btn btn-sm btn-warning me-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item.idStatus)}
                                    className="btn btn-sm btn-danger"
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

export default StatusList;
