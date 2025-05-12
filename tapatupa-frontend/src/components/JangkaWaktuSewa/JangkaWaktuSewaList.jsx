import React, { useEffect, useState } from 'react';
import { fetchJangkaWaktuSewa, deleteJangkaWaktuSewa } from '../../api/JangkaWaktuSewaAPI';

const JangkaWaktuSewaList = ({ onEdit }) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetchJangkaWaktuSewa();
            setData(res);
        } catch (err) {
            console.error('Gagal ambil data:', err);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Hapus data ini?')) return;
        try {
            await deleteJangkaWaktuSewa(id);
            alert('Berhasil dihapus!');
            loadData();
        } catch (err) {
            console.error('Gagal hapus:', err);
        }
    };

    return (
        <div>
            <h4>Daftar Jangka Waktu Sewa</h4>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Jenis</th>
                        <th>Jangka Waktu</th>
                        <th>Keterangan</th>
                        <th>Default</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idJangkaWaktuSewa}>
                            <td>{item.idJangkaWaktuSewa}</td>
                            <td>{item.jenis_jangka_waktu?.jenisJangkaWaktu || '-'}</td>
                            <td>{item.jangkaWaktu}</td>
                            <td>{item.keterangan}</td>
                            <td>{item.isDefault ? 'Ya' : 'Tidak'}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(item)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.idJangkaWaktuSewa)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JangkaWaktuSewaList;
