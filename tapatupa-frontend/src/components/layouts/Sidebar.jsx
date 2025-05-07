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
                    <NavLink to="/objek-retribusi" activeClassName="active">
                        <i className="fas fa-layer-group"></i> Objek Retribusi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wajib-retribusi" activeClassName="active">
                        <i className="fas fa-users"></i> Wajib Retribusi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/permohonan-sewa" activeClassName="active">
                        <i className="fas fa-handshake"></i> Permohonan Sewa
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
