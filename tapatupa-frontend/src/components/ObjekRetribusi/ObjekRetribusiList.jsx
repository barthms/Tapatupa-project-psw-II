import React, { useEffect, useState } from 'react';
import { fetchObjekRetribusi, deleteObjekRetribusi } from '../../api/ObjekRetribusiAPI';

const ObjekRetribusiList = ({ reloadTrigger }) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const result = await fetchObjekRetribusi();
            setData(result);
        } catch (err) {
            console.error('Gagal memuat', err);
        }
    };

    useEffect(() => {
        loadData();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        if (window.confirm('Yakin ingin menghapus?')) {
            try {
                await deleteObjekRetribusi(id);
                loadData();
            } catch (err) {
                console.error('Gagal menghapus:', err);
                alert('Gagal menghapus data');
            }
        }
    };

    return (
        <div>
            <h4>Daftar Objek Retribusi</h4>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Kode</th>
                        <th>Nama Objek</th>
                        <th>Lokasi</th>
                        <th>Jenis</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idObjekRetribusi}>
                            <td>{item.idObjekRetribusi}</td>
                            <td>{item.kodeObjekRetribusi}</td>
                            <td>{item.objekRetribusi}</td>
                            <td>{item.lokasiObjekRetribusi?.namaLokasi || '-'}</td>
                            <td>{item.jenisObjekRetribusi?.jenisObjekRetribusi || '-'}</td>
                            <td>
                                {/* Tombol Edit nanti bisa ditambah */}
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.idObjekRetribusi)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ObjekRetribusiList;
