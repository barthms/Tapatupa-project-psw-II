import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import "../components/layouts/css/LandingPage.css";

const LandingPage = () => {
    const [summaryData, setSummaryData] = useState({
        totalPermohonan: 246,
        permohonanPending: 58,
        permohonanApproved: 175,
        permohonanRejected: 13,
        objekRetribusi: 430,
        wajibRetribusi: 195
    });
    
    const [recentPermohonan, setRecentPermohonan] = useState([
        { id: "P-2025-0456", pemohon: "PT Maju Bersama", tanggal: "2025-05-06", objek: "Kios Pasar A-12", status: "Menunggu" },
        { id: "P-2025-0455", pemohon: "CV Sejahtera", tanggal: "2025-05-05", objek: "Lapak Pasar B-08", status: "Disetujui" },
        { id: "P-2025-0454", pemohon: "Toko Makmur", tanggal: "2025-05-05", objek: "Ruko C-15", status: "Disetujui" },
        { id: "P-2025-0453", pemohon: "Warung Berkah", tanggal: "2025-05-04", objek: "Kios Pasar D-22", status: "Ditolak" },
        { id: "P-2025-0452", pemohon: "PT Sukses Abadi", tanggal: "2025-05-03", objek: "Lapak Pasar A-05", status: "Disetujui" }
    ]);

    const getStatusClass = (status) => {
        switch(status) {
            case "Menunggu": return "status-pending";
            case "Disetujui": return "status-approved";
            case "Ditolak": return "status-rejected";
            default: return "";
        }
    };

    return (
        <AdminLayout>
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <p className="dashboard-date">{new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</p>
                </div>

                <div className="summary-cards">
                    <div className="summary-card">
                        <div className="card-icon">
                            <i className="fas fa-file-signature"></i>
                        </div>
                        <div className="card-content">
                            <h3>Total Permohonan</h3>
                            <p className="card-value">{summaryData.totalPermohonan}</p>
                        </div>
                    </div>
                    
                    <div className="summary-card">
                        <div className="card-icon pending">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="card-content">
                            <h3>Menunggu Persetujuan</h3>
                            <p className="card-value">{summaryData.permohonanPending}</p>
                        </div>
                    </div>
                    
                    <div className="summary-card">
                        <div className="card-icon approved">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="card-content">
                            <h3>Permohonan Disetujui</h3>
                            <p className="card-value">{summaryData.permohonanApproved}</p>
                        </div>
                    </div>
                    
                    <div className="summary-card">
                        <div className="card-icon rejected">
                            <i className="fas fa-times-circle"></i>
                        </div>
                        <div className="card-content">
                            <h3>Permohonan Ditolak</h3>
                            <p className="card-value">{summaryData.permohonanRejected}</p>
                        </div>
                    </div>
                </div>

                <div className="dashboard-main">
                    <div className="dashboard-section">
                        <div className="section-header">
                            <h2>Permohonan Terbaru</h2>
                            <Link to="/permohonanSewa" className="view-all-btn">
                                Lihat Semua <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Pemohon</th>
                                        <th>Tanggal</th>
                                        <th>Objek</th>
                                        <th>Status</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentPermohonan.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.pemohon}</td>
                                            <td>{new Date(item.tanggal).toLocaleDateString('id-ID')}</td>
                                            <td>{item.objek}</td>
                                            <td>
                                                <span className={`status-badge ${getStatusClass(item.status)}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button className="action-btn">
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="quick-access">
                        <h2>Akses Cepat</h2>
                        <div className="quick-access-grid">
                            <Link to="/permohonanSewa" className="quick-access-card">
                                <div className="quick-icon">
                                    <i className="fas fa-file-signature"></i>
                                </div>
                                <h3>Permohonan Sewa</h3>
                                <p>Kelola data permohonan sewa objek retribusi</p>
                            </Link>
                            
                            <Link to="/objekRetribusi" className="quick-access-card">
                                <div className="quick-icon">
                                    <i className="fas fa-cube"></i>
                                </div>
                                <h3>Objek Retribusi</h3>
                                <p>Kelola data objek retribusi</p>
                            </Link>
                            
                            <Link to="/wajibRetibusi" className="quick-access-card">
                                <div className="quick-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3>Wajib Retribusi</h3>
                                <p>Kelola data wajib retribusi</p>
                            </Link>
                            
                            <Link to="/tarifObjekRetribusi" className="quick-access-card">
                                <div className="quick-icon">
                                    <i className="fas fa-money-bill-wave"></i>
                                </div>
                                <h3>Tarif Retribusi</h3>
                                <p>Kelola data tarif objek retribusi</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="dashboard-footer">
                    <div className="footer-stats">
                        <div className="stat-item">
                            <i className="fas fa-cube"></i>
                            <div>
                                <h4>Total Objek Retribusi</h4>
                                <p>{summaryData.objekRetribusi}</p>
                            </div>
                        </div>
                        <div className="stat-item">
                            <i className="fas fa-users"></i>
                            <div>
                                <h4>Total Wajib Retribusi</h4>
                                <p>{summaryData.wajibRetribusi}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default LandingPage;