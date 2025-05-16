import React, { useState } from 'react';
import ObjekRetribusiList from '../components/ObjekRetribusi/ObjekRetribusiList';
import ObjekRetribusiForm from '../components/ObjekRetribusi/ObjekRetribusiForm';
import AdminLayout from '../components/layouts/AdminLayout';

const ObjekRetribusiPage = () => {
    const [editData, setEditData] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleSuccess = () => {
        setEditData(null);
        setRefreshKey(prev => prev + 1);
    };

    return (
        <div className="">
            <AdminLayout>
                <ObjekRetribusiForm editData={editData} onSuccess={handleSuccess} />
                <ObjekRetribusiList onEdit={setEditData} refreshTrigger={refreshKey} />
            </AdminLayout>
        </div>
    );
};

export default ObjekRetribusiPage;
