import React, { useEffect, useState } from 'react';
import { fetchJenisPermohonan } from '../../api/JenisPermohonanAPI';

const JenisPermohonanList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const result = await fetchJenisPermohonan();
                setData(result.data);
            } catch (err) {
                console.error(err);
            }
        };
        load();
    }, []);

    return (
        <div>
            <h3>Daftar Jenis Permohonan</h3>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Permohonan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((jenis) => (
                        <tr key={jenis.parentId}>
                            <td>{jenis.parentId}</td>
                            <td>{jenis.jenisPermohonan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JenisPermohonanList;
