import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchTarifObjekRetribusi } from '../../api/Api';

const TarifObjekRetribusiList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const res = fetchTarifObjekRetribusi();
                setData(res);
            } catch (err) {
                console.error(err);
            }
        };
        load();
    }, []);

    return (
        <div>
            <h4>Daftar Tarif Objek Retribusi</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Objek</th>
                        <th>Jangka Waktu</th>
                        <th>Tarif</th>
                        <th>Nominal</th>
                        <th>Penilai</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idTarifObjekRetribusi}>
                            <td>{item.idTarifObjekRetribusi}</td>
                            <td>{item.idObjekRetribusi}</td>
                            <td>{item.idJenisJangkaWaktu}</td>
                            <td>{item.tarif}</td>
                            <td>{item.nominalTarif}</td>
                            <td>{item.namaPenilai}</td>
                            <td>{item.isDefault ? 'Ya' : 'Tidak'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TarifObjekRetribusiList;
