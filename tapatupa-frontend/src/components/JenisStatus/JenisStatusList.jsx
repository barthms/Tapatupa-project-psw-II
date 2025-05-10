import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchJenisStatus } from '../../api/Api';

const JenisStatusList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const result = await fetchJenisStatus();
                setData(result);
            } catch (err) {
                console.error(err);
            }
        };
        load();
    }, []);

    return (
        <div>
            <h3>Daftar Jenis Status</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Jenis Status</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idJenisStatus}>
                            <td>{item.idJenisStatus}</td>
                            <td>{item.jenisStatus}</td>
                            <td>{item.keterangan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JenisStatusList;
