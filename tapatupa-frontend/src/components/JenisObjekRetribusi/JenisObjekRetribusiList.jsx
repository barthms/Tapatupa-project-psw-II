import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchJenisObjekRetribusi } from '../../api/Api';

const JenisObjekRetribusiList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetchJenisObjekRetribusi();
                setData(res);
            } catch (err) {
                console.error(err);
            }
        };
        loadData();
    }, []);

    return (
        <div>
            <h3>Daftar Jenis Objek Retribusi</h3>
            <table className="table">
                <thead>
                    <tr><th>ID</th><th>Nama</th><th>Keterangan</th></tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.idJenisObjekRetribusi}>
                            <td>{item.idJenisObjekRetribusi}</td>
                            <td>{item.jenisObjekRetribusi}</td>
                            <td>{item.keterangan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JenisObjekRetribusiList;
