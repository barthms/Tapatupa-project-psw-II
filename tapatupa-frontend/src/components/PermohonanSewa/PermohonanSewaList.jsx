import React, { useEffect, useState } from 'react';
import { fetchPermohonanSewa } from '../../api/Api';

const PermohonanSewaList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetchPermohonanSewa();
                setData(res);
            } catch (err) {
                console.error(err);
            }
        };
        load();
    }, []);

    return (
        <div>
            <h3>Daftar Permohonan Sewa</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nomor Surat</th>
                        <th>Tanggal</th>
                        <th>Lama Sewa</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={item.idPermohonanSewa}>
                            <td>{i + 1}</td>
                            <td>{item.nomorSuratPermohonan}</td>
                            <td>{item.tanggalPengajuan}</td>
                            <td>{item.lamaSewa}</td>
                            <td>{item.idStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PermohonanSewaList;
