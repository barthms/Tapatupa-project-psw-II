import React, { useEffect, useState } from 'react';
import { fetchJenisJangkaWaktu } from '../../api/Api';

const JenisJangkaWaktuList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetchJenisJangkaWaktu();
                setData(res);
            } catch (err) {
                console.error(err);
            }
        };
        load();
    }, []);

    return (
        <div>
            <h3>Daftar Jenis Jangka Waktu</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idJenisJangkaWaktu}>
                            <td>{item.idJenisJangkaWaktu}</td>
                            <td>{item.keterangan}</td>
                            <td>{item.jenisJangkaWaktu}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JenisJangkaWaktuList;
