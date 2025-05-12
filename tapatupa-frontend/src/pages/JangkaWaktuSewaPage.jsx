import React, { useState } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JangkaWaktuSewaForm from '../components/JangkaWaktuSewa/JangkaWaktuSewaForm';
import JangkaWaktuSewaList from '../components/JangkaWaktuSewa/JangkaWaktuSewaList';

const JangkaWaktuSewaPage = () => {
    const [editData, setEditData] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleSuccess = () => {
        setEditData(null);
        setRefreshKey(prev => prev + 1);
    };

    return (
        <AdminLayout>
            <JangkaWaktuSewaForm
                onSuccess={handleSuccess}
                editData={editData}
                onCancel={() => setEditData(null)}
            />
            <hr />
            <JangkaWaktuSewaList key={refreshKey} onEdit={setEditData} />
        </AdminLayout>
    );
};

export default JangkaWaktuSewaPage;
