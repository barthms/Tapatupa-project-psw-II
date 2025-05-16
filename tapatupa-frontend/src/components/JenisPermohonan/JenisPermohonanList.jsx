import React, { useEffect, useState } from 'react';
import { fetchJenisPermohonan, deleteJenisPermohonan } from '../../api/JenisPermohonanAPI';

const JenisPermohonanList = ({ onEdit, onSuccess }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const result = await fetchJenisPermohonan();
                setData(result.data);
            } catch (err) {
                console.error(err);
            }
        };
        load();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus data ini?')) return;
        try {
            await deleteJenisPermohonan(id);
            alert('Data berhasil dihapus');
            if (onSuccess) onSuccess();
        } catch (err) {
            console.error(err);
            alert('Gagal menghapus data');
        }
    };

    return (
        <div>
            <h3>Daftar Jenis Permohonan</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Permohonan</th>
                        <th>Parent ID</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((jenis) => (
                        <tr key={jenis.id}>
                            <td>{jenis.id}</td>
                            <td>{jenis.jenisPermohonan}</td>
                            <td>{jenis.parentId ?? '-'}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(jenis)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(jenis.id)}>
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

export default JenisPermohonanList;
