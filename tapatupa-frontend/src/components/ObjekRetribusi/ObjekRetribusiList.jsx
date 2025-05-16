import React, { useEffect, useState } from 'react';
import { fetchObjekRetribusi, deleteObjekRetribusi } from '../../api/ObjekRetribusiAPI';

const ObjekRetribusiList = ({ onEdit, refreshTrigger }) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetchObjekRetribusi();
            setData(res);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadData();
    }, [refreshTrigger]);

    const handleDelete = async (id) => {
        if (window.confirm('Yakin ingin menghapus?')) {
            try {
                await deleteObjekRetribusi(id);
                loadData();
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div>
            <h4>Daftar Objek Retribusi</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Kode Objek</th>
                        <th>Nama Objek</th>
                        <th>No Bangunan</th>
                        <th>Jumlah Lantai</th>
                        <th>Panjang Tanah (m)</th>
                        <th>Lebar Tanah (m)</th>
                        <th>Luas Tanah (m²)</th>
                        <th>Panjang Bangunan (m)</th>
                        <th>Lebar Bangunan (m)</th>
                        <th>Luas Bangunan (m²)</th>
                        <th>Alamat</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Keterangan</th>
                        <th>Gambar Denah Tanah</th>
                        <th>Lokasi</th>
                        <th>Jenis</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.idObjekRetribusi}>
                            <td>{item.kodeObjekRetribusi}</td>
                            <td>{item.objekRetribusi}</td>
                            <td>{item.noBangunan}</td>
                            <td>{item.jumlahLantai}</td>
                            <td>{item.panjangTanah}</td>
                            <td>{item.lebarTanah}</td>
                            <td>{item.luasTanah}</td>
                            <td>{item.panjangBangunan}</td>
                            <td>{item.lebarBangunan}</td>
                            <td>{item.luasBangunan}</td>
                            <td>{item.alamat}</td>
                            <td>{item.latitude}</td>
                            <td>{item.longitude}</td>
                            <td>{item.keterangan}</td>
                            <td>
                                {item.gambarDenahTanah && (
                                    <a href={item.gambarDenahTanah} target="_blank" rel="noopener noreferrer">
                                        Lihat Gambar
                                    </a>
                                )}
                            </td>
                            <td>{item.lokasi_objek_retribusi?.lokasiObjekRetribusi}</td>
                            <td>{item.jenis_objek_retribusi?.jenisObjekRetribusi}</td>
                            <td>
                                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(item)}>
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(item.idObjekRetribusi)}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ObjekRetribusiList;
