import React, { useEffect, useState } from 'react';
import { fetchJenisStatus, deleteJenisStatus } from '../../api/JenisStatusAPI';

const JenisStatusList = ({ reload, onEdit }) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const result = await fetchJenisStatus();
            setData(result);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadData();
    }, [reload]);

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus data ini?')) return;
        try {
            await deleteJenisStatus(id);
            alert('Data berhasil dihapus!');
            loadData();
        } catch (error) {
            console.error(error);
            alert('Gagal menghapus data.');
        }
    };

    return (
        <div className="card p-4">
            <h4>Daftar Jenis Status</h4>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Jenis Status</th>
                        <th>Keterangan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idJenisStatus}>
                            <td>{item.idJenisStatus}</td>
                            <td>{item.jenisStatus}</td>
                            <td>{item.keterangan}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(item)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.idJenisStatus)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JenisStatusList;
