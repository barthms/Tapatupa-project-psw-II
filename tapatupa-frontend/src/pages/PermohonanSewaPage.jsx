// components/permohonanSewa/PermohonanSewaPage.jsx
import React, { useState } from 'react';
import PermohonanSewaList from '../components/permohonanSewa/PermohonanSewaList';
import PermohonanSewaForm from '../components/permohonanSewa/PermohonanSewaForm';
import AdminLayout from '../components/layouts/AdminLayout';


const PermohonanSewaPage = () => {
    const [reloadTrigger, setReloadTrigger] = useState(0);
    const [editingData, setEditingData] = useState(null);

    const handleSuccess = () => {
        setReloadTrigger(prev => prev + 1);
        setEditingData(null);
    };

    return (
        <AdminLayout>
            <div className="container mt-4">
                <h2 className="mb-4">Form Permohonan Sewa</h2>
                <PermohonanSewaForm editingData={editingData} onSuccess={handleSuccess} />
                <hr />
                <PermohonanSewaList onEdit={setEditingData} reloadTrigger={reloadTrigger} />
            </div>
        </AdminLayout>
    );
};

export default PermohonanSewaPage;
