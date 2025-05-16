// TarifObjekRetribusiList.jsx
import React from 'react';

const TarifObjekRetribusiList = ({ data, onEdit, onDelete }) => {
    return (
        <div>
            <h4>Daftar Tarif Objek Retribusi</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Objek</th>
                        <th>Jangka Waktu</th>
                        <th>Tarif</th>
                        <th>Nominal</th>
                        <th>Penilai</th>
                        <th>Default</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={item.idTarifObjekRetribusi}>
                            <td>{i + 1}</td>
                            <td>{item.objek_retribusi?.objekRetribusi || '-'}</td>
                            <td>{item.jenis_jangka_waktu?.jenisJangkaWaktu || '-'}</td>
                            <td>{item.tarif}</td>
                            <td>{item.nominalTarif}</td>
                            <td>{item.namaPenilai}</td>
                            <td>{item.isDefault ? 'Ya' : 'Tidak'}</td>
                            <td>
                                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(item)}>Edit</button>
                                <button className="btn btn-sm btn-danger" onClick={() => onDelete(item.idTarifObjekRetribusi)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TarifObjekRetribusiList;