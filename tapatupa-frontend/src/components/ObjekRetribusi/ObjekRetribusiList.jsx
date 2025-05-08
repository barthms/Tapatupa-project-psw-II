import React, { useEffect, useState } from 'react';
import { fetchObjekRetribusi } from '../../api/Api';

const ObjekRetribusiList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const result = await fetchObjekRetribusi();
                setData(result);
            } catch (err) {
                console.error('Gagal memuat', err);
            }
        };
        load();
    }, []);

    return (
        <div>
            <h3>Daftar Objek Retribusi</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Kode</th>
                        <th>Nama Objek</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idObjekRetribusi}>
                            <td>{item.idObjekRetribusi}</td>
                            <td>{item.kodeObjekRetribusi}</td>
                            <td>{item.objekRetribusi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ObjekRetribusiList;
