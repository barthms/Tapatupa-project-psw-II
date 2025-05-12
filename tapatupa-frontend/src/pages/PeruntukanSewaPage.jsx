import React, { useState } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import PeruntukanSewaForm from '../components/PeruntukanSewa/PeruntukanSewaForm';
import PeruntukanSewaList from '../components/PeruntukanSewa/PeruntukanSewaList';

const PeruntukanSewaPage = () => {
    const [editData, setEditData] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleSuccess = () => {
        setEditData(null);
        setRefreshKey(prev => prev + 1);
    };

    return (
        <AdminLayout>
            <PeruntukanSewaForm
                editData={editData}
                onSuccess={handleSuccess}
                onCancel={() => setEditData(null)}
            />
            <hr />
            <PeruntukanSewaList key={refreshKey} onEdit={setEditData} />
        </AdminLayout>
    );
};

export default PeruntukanSewaPage;
