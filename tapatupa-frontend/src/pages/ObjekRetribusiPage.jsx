import React, { useState } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import ObjekRetribusiForm from '../components/ObjekRetribusi/ObjekRetribusiForm';
import ObjekRetribusiList from '../components/ObjekRetribusi/ObjekRetribusiList';

const ObjekRetribusiPage = () => {
    const [reload, setReload] = useState(0);

    const triggerReload = () => {
        setReload(prev => prev + 1);
    };

    return (
        <AdminLayout>
            <ObjekRetribusiForm onSuccess={triggerReload} />
            <hr />
            <ObjekRetribusiList reloadTrigger={reload} />
        </AdminLayout>
    );
};

export default ObjekRetribusiPage;
