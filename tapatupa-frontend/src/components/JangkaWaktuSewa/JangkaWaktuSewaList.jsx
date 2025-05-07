import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JangkaWaktuSewaList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get('/api/jangkaWaktuSewa');
                setData(res.data.data);
            } catch (err) {
                console.error('Gagal ambil data:', err);
            }
        };
        fetch();
    }, []);

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
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idJangkaWaktuSewa}>
                            <td>{item.idJangkaWaktuSewa}</td>
                            <td>{item.jenisJangkaWaktu?.namaJenisJangkaWaktu || '-'}</td>
                            <td>{item.jangkaWaktu}</td>
                            <td>{item.keterangan}</td>
                            <td>{item.isDefault ? 'Ya' : 'Tidak'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JangkaWaktuSewaList;
