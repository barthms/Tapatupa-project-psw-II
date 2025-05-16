import React, { useEffect, useState } from 'react';
import { fetchWajibRetribusi, deleteWajibRetribusi } from '../../api/WajibRetribusiAPI';

const WajibRetribusiList = ({ reloadTrigger, onEdit }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            const result = await fetchWajibRetribusi();
            setData(result);
        };
        load();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        if (window.confirm('Yakin ingin menghapus data ini?')) {
            await deleteWajibRetribusi(id);
            const updated = data.filter(item => item.idWajibRetribusi !== id);
            setData(updated);
        }
    };

    return (
        <div>
            <h4>Daftar Wajib Retribusi</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>NIK</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                        <th>Jenis Retribusi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idWajibRetribusi}>
                            <td>{item.NIK}</td>
                            <td>{item.namaWajibRetribusi}</td>
                            <td>{item.pekerjaan}</td>
                            <td>{item.jenis_retribusi?.jenisObjekRetribusi}</td>
                            <td>
                                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(item)}>Edit</button>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.idWajibRetribusi)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WajibRetribusiList;
