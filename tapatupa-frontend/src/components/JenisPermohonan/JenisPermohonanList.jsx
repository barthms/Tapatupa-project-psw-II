import { useEffect, useState } from 'react';
import api from '../../api';

export default function JenisPermohonanList({ onEdit }) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await api.get('/jenis-permohonan');
        setData(res.data);
    };

    const handleDelete = async (id) => {
        if (confirm('Yakin ingin menghapus?')) {
            await api.delete(`/jenis-permohonan/${id}`);
            fetchData();
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Daftar Jenis Permohonan</h2>
            <ul>
                {data.map(item => (
                    <li key={item.idJenisPermohonan}>
                        {item.jenisPermohonan}
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.idJenisPermohonan)}>Hapus</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
