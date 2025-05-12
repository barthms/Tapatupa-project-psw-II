import React, { useState } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import LokasiObjekRetribusiForm from '../components/LokasiObjekRetribusi/LokasiObjekRetribusiForm';
import LokasiObjekRetribusiList from '../components/LokasiObjekRetribusi/LokasiObjekRetribusiList';

const LokasiObjekRetribusiPage = () => {
    const [reload, setReload] = useState(false);
    const [editData, setEditData] = useState(null);

    const triggerReload = () => {
        setReload(prev => !prev);
        setEditData(null);
    };

    return (
        <AdminLayout>
            <LokasiObjekRetribusiForm
                onSuccess={triggerReload}
                editData={editData}
                onCancel={() => setEditData(null)}
            />
            <hr />
            <LokasiObjekRetribusiList
                onEdit={(item) => setEditData(item)}
                reload={reload}
            />
        </AdminLayout>
    );
};

export default LokasiObjekRetribusiPage;
