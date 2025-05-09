import React, { useEffect, useState } from 'react';
import { fetchLokasiObjekRetribusi } from '../../api/Api';

const LokasiObjekRetribusiList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetchLokasiObjekRetribusi();
                setData(res);
            } catch (error) {
                console.error('Gagal memuat data:', error);
            }
        };

        loadData();
    }, []);

    return (
        <div>
            <h3>Daftar Lokasi Objek Retribusi</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Lokasi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idLokasiObjekRetribusi}>
                            <td>{item.idLokasiObjekRetribusi}</td>
                            <td>{item.lokasiObjekRetribusi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LokasiObjekRetribusiList;
