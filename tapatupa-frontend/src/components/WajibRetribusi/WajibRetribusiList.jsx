import React, { useEffect, useState } from 'react';
import { fetchWajibRetribusi } from '../../api/Api';

const WajibRetribusiList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchWajibRetribusi().then(setData).catch(console.error);
    }, []);

    return (
        <div>
            <h3>Daftar Wajib Retribusi</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telepon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={item.idWajibRetribusi}>
                            <td>{i + 1}</td>
                            <td>{item.namaWajibRetribusi}</td>
                            <td>{item.alamat}</td>
                            <td>{item.nomorTelepon}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WajibRetribusiList;
