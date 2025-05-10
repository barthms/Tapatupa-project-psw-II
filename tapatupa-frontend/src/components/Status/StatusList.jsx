import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchStatus } from '../../api/Api';

const StatusList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const result = await fetchStatus();
                setData(result);
            } catch (err) {
                console.error(err);
            }
        };
        load();
    }, []);

    return (
        <div>
            <h3>Daftar Status</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Status</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idStatus}>
                            <td>{item.idStatus}</td>
                            <td>{item.namaStatus}</td>
                            <td>{item.keterangan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StatusList;
