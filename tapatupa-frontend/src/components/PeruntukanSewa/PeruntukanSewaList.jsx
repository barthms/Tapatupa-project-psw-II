import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchPeruntukanSewa } from '../../api/Api';

const PeruntukanSewaList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const result = await fetchPeruntukanSewa();
                setData(result);
            } catch (err) {
                console.error(err);
            }
        };
        load();
    }, []);

    return (
        <div>
            <h3>Daftar Peruntukan Sewa</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Peruntukan</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idPeruntukanSewa}>
                            <td>{item.idPeruntukanSewa}</td>
                            <td>{item.peruntukanSewa}</td>
                            <td>{item.keterangan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PeruntukanSewaList;
