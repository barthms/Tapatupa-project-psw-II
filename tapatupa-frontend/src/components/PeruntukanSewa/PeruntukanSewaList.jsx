import React, { useEffect, useState } from 'react';
import { fetchPeruntukanSewa, deletePeruntukanSewa } from '../../api/PeruntukanSewaAPI';

const PeruntukanSewaList = ({ onEdit }) => {
    const [data, setData] = useState([]);

    const load = async () => {
        try {
            const result = await fetchPeruntukanSewa();
            setData(result);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus data ini?')) return;
        try {
            await deletePeruntukanSewa(id);
            alert('Data berhasil dihapus!');
            load();
        } catch (err) {
            console.error(err);
            alert('Gagal menghapus data!');
        }
    };

    return (
        <div>
            <h3>Daftar Peruntukan Sewa</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Peruntukan</th>
                        <th>Keterangan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idPeruntukanSewa}>
                            <td>{item.idPeruntukanSewa}</td>
                            <td>{item.peruntukanSewa}</td>
                            <td>{item.keterangan}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(item)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.idPeruntukanSewa)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PeruntukanSewaList;
