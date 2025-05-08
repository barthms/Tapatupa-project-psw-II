import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/AdminLayout.css';

const Sidebar = () => {
    return (
        <aside className="admin-sidebar">
            <h2 className="sidebar-title">Menu</h2>
            <ul className="sidebar-menu">
                <li>
                    <NavLink to="/" activeClassName="active">
                        <i className="fas fa-file-alt"></i> Jenis Permohonan
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lokasiObjek" activeClassName="active">
                        <i className="fas fa-layer-group"></i> Lokasi Objek
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/jenisObjekRetribusi" activeClassName="active">
                        <i className="fas fa-layer-group"></i> Jenis Objek Retribusi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/objekRetribusi" activeClassName="active">
                        <i className="fas fa-layer-group"></i> Objek Retribusi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/jenisJangkaWaktu" activeClassName="active">
                        <i className="fas fa-layer-group"></i> Jenis Jangka Waktu
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tarifObjekRetribusi" activeClassName="active">
                        <i className="fas fa-users"></i> Tarif Objek Retribusi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/jangkaWaktuSewa" activeClassName="active">
                        <i className="fas fa-handshake"></i> Jangka Waktu Sewa
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/permohonanSewa" activeClassName="active">
                        <i className="fas fa-handshake"></i> Permohonan Sewa
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wajibRetibusi" activeClassName="active">
                        <i className="fas fa-handshake"></i> Wajib Retribusi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/status" activeClassName="active">
                        <i className="fas fa-handshake"></i> Status
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/jenisStatus" activeClassName="active">
                        <i className="fas fa-handshake"></i> Jenis Status
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/peruntukanSewa" activeClassName="active">
                        <i className="fas fa-handshake"></i> Peruntukan Sewa
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
