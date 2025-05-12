import React, { useEffect, useState } from 'react';
import { fetchJenisJangkaWaktu, deleteJenisJangkaWaktu } from '../../api/JenisJangkaWaktuAPI';

const JenisJangkaWaktuList = ({ onEdit, reloadTrigger }) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetchJenisJangkaWaktu();
            setData(res);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadData();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        if (window.confirm('Yakin ingin menghapus data ini?')) {
            try {
                await deleteJenisJangkaWaktu(id);
                alert('Data berhasil dihapus');
                loadData();
            } catch (err) {
                console.error(err);
                alert('Gagal menghapus data');
            }
        }
    };

    return (
        <div>
            <h3>Daftar Jenis Jangka Waktu</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>Jenis Jangka Waktu</th>
                        <th>Keterangan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idJenisJangkaWaktu}>
                            <td>{item.jenisJangkaWaktu}</td>
                            <td>{item.keterangan}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => onEdit(item)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(item.idJenisJangkaWaktu)}
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

export default JenisJangkaWaktuList;
