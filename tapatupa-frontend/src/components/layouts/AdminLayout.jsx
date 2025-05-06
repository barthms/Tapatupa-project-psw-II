import React from 'react';
import Navbar from './/Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './css/AdminLayout.css'; // styling layout

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-container">
            <Navbar />
            <div className="admin-main">
                <Sidebar />
                <main className="admin-content">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default AdminLayout;
