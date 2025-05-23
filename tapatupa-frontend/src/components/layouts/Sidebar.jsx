import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/AdminLayout.css';

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const menuItems = {
        objek: [
            { path: "/jenisObjekRetribusi", icon: "fas fa-layer-group", label: "Jenis Objek Retribusi" },
            { path: "/objekRetribusi", icon: "fas fa-cube", label: "Objek Retribusi" },
            { path: "/tarifObjekRetribusi", icon: "fas fa-money-bill-wave", label: "Tarif Objek Retribusi" },
            { path: "/lokasiObjek", icon: "fas fa-map", label: "Lokasi Objek" },
        ],
        penyewaan: [
            { path: "/jenisPermohonan", icon: "fas fa-layer-group", label: "Jenis Permohonan" },
            { path: "/peruntukanSewa", icon: "fas fa-file-signature", label: "Peruntukan Sewa" },
            { path: "/jenisJangkaWaktu", icon: "fas fa-layer-group", label: "Jenis Jangka Waktu" },
            { path: "/jangkaWaktuSewa", icon: "fas fa-clock", label: "Jangka Waktu Sewa" },
            { path: "/permohonanSewa", icon: "fas fa-handshake", label: "Permohonan Sewa" },
        ],
        status: [
            { path: "/jenisStatus", icon: "fas fa-layer-group", label: "Jenis Status" },
            { path: "/status", icon: "fas fa-tasks", label: "Status" },
        ],
        wajibRetribusi: [
            { path: "/wajibRetibusi", icon: "fas fa-users", label: "Wajib Retribusi" },
        ]
    };

    const renderDropdownItems = (items) => {
        return items.map((item, index) => (
            <li key={index}>
                <NavLink to={item.path} activeClassName="active">
                    <i className={item.icon}></i> {item.label}
                </NavLink>
            </li>
        ));
    };

    return (
        <aside className="admin-sidebar">
            <img src="/logoTapatupa.png" alt="Tapatupa" style={{ width: '160px', height: 'auto' }} />
            <ul className="sidebar-menu">
                <li>
                    <NavLink to="/" activeClassName="active">
                        <i className="fas fa-home"></i> Dashboard
                    </NavLink>
                </li>
                <li className="dropdown">
                    <div 
                        className="dropdown-header" 
                        onClick={() => toggleDropdown('objek')}
                    >
                        <span>
                            <i className="fas fa-cube"></i> Objek Retribusi
                        </span>
                        <i className={`fas ${openDropdown === 'objek' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                    {openDropdown === 'objek' && (
                        <ul className="dropdown-content">
                            {renderDropdownItems(menuItems.objek)}
                        </ul>
                    )}
                </li>

                <li className="dropdown">
                    <div 
                        className="dropdown-header" 
                        onClick={() => toggleDropdown('penyewaan')}
                    >
                        <span>
                            <i className="fas fa-file-signature"></i> Sewa Retibusi
                        </span>
                        <i className={`fas ${openDropdown === 'penyewaan' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                    {openDropdown === 'penyewaan' && (
                        <ul className="dropdown-content">
                            {renderDropdownItems(menuItems.penyewaan)}
                        </ul>
                    )}
                </li>

                <li className="dropdown">
                    <div 
                        className="dropdown-header" 
                        onClick={() => toggleDropdown('status')}
                    >
                        <span>
                            <i className="fas fa-tasks"></i> Status Retribusi
                        </span>
                        <i className={`fas ${openDropdown === 'status' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                    {openDropdown === 'status' && (
                        <ul className="dropdown-content">
                            {renderDropdownItems(menuItems.status)}
                        </ul>
                    )}
                </li>

                <li className="dropdown">
                    <div 
                        className="dropdown-header" 
                        onClick={() => toggleDropdown('wajibRetribusi')}
                    >
                        <span>
                            <i className="fas fa-users"></i> Wajib Retribusi
                        </span>
                        <i className={`fas ${openDropdown === 'wajibRetribusi' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                    {openDropdown === 'wajibRetribusi' && (
                        <ul className="dropdown-content">
                            {renderDropdownItems(menuItems.wajibRetribusi)}
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;